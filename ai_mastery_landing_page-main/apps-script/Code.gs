const ORDER_AMOUNT = 9900;
const ORDER_CURRENCY = 'INR';
const SHEET_NAME = 'Registrations';
const REQUIRED_FIELDS = ['fullName', 'email', 'whatsapp', 'job', 'place'];
const HEADERS = [
  'Timestamp', 'Full Name', 'Email', 'WhatsApp', 'Job', 'Place',
  'Razorpay Order ID', 'Razorpay Payment ID', 'Amount', 'Payment Status'
];

function doGet() {
  return jsonResponse({ success: true, service: 'razorpay-webinar' });
}

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    if (payload.action === 'create_order') return createOrder(payload);
    if (payload.action === 'verify_payment') return verifyPayment(payload);
    return jsonResponse({ success: false, message: 'Unsupported action.' });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, message: 'Request could not be processed.' });
  }
}

function createOrder(payload) {
  validateRegistration(payload);
  const secret = getRequiredProperty('RAZORPAY_KEY_SECRET');
  const keyId = getRequiredProperty('RAZORPAY_KEY_ID');
  const receipt = 'webinar_' + new Date().getTime() + '_' + Math.floor(Math.random() * 100000);
  const response = UrlFetchApp.fetch('https://api.razorpay.com/v1/orders', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Basic ' + Utilities.base64Encode(keyId + ':' + secret) },
    payload: JSON.stringify({ amount: ORDER_AMOUNT, currency: ORDER_CURRENCY, receipt: receipt, notes: { email: payload.email } }),
    muteHttpExceptions: true
  });
  const result = JSON.parse(response.getContentText() || '{}');
  if (response.getResponseCode() < 200 || response.getResponseCode() >= 300 || !result.id) {
    throw new Error('Razorpay order creation failed.');
  }
  return jsonResponse({ success: true, orderId: result.id, amount: ORDER_AMOUNT, currency: ORDER_CURRENCY });
}

function verifyPayment(payload) {
  validateRegistration(payload);
  const paymentId = String(payload.razorpay_payment_id || '');
  const orderId = String(payload.razorpay_order_id || '');
  const signature = String(payload.razorpay_signature || '');
  if (!paymentId || !orderId || !signature) return jsonResponse({ success: false, message: 'Payment verification failed' });

  const sheet = getRegistrationSheet();
  const values = sheet.getDataRange().getValues();
  const paymentColumn = HEADERS.indexOf('Razorpay Payment ID');
  for (var row = 1; row < values.length; row++) {
    if (String(values[row][paymentColumn]) === paymentId) return jsonResponse({ success: true, duplicate: true });
  }

  const secret = getRequiredProperty('RAZORPAY_KEY_SECRET');
  const expected = toHex(Utilities.computeHmacSha256Signature(orderId + '|' + paymentId, secret));
  if (!constantTimeEqual(expected, signature)) return jsonResponse({ success: false, message: 'Payment verification failed' });

  const paymentResponse = UrlFetchApp.fetch('https://api.razorpay.com/v1/payments/' + encodeURIComponent(paymentId), {
    method: 'get',
    headers: { Authorization: 'Basic ' + Utilities.base64Encode(getRequiredProperty('RAZORPAY_KEY_ID') + ':' + secret) },
    muteHttpExceptions: true
  });
  const payment = JSON.parse(paymentResponse.getContentText() || '{}');
  if (paymentResponse.getResponseCode() < 200 || paymentResponse.getResponseCode() >= 300 || payment.order_id !== orderId || payment.amount !== ORDER_AMOUNT || payment.currency !== ORDER_CURRENCY || payment.status !== 'captured') {
    return jsonResponse({ success: false, message: 'Payment verification failed' });
  }

  sheet.appendRow([new Date(), payload.fullName, payload.email, payload.whatsapp, payload.job, payload.place, orderId, paymentId, ORDER_AMOUNT / 100, 'PAID']);
  return jsonResponse({ success: true });
}

function validateRegistration(payload) {
  REQUIRED_FIELDS.forEach(function(field) {
    if (!String(payload[field] || '').trim()) throw new Error('Required field missing.');
  });
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(payload.email))) throw new Error('Invalid email.');
  const whatsapp = String(payload.whatsapp).replace(/[\s()+-]/g, '');
  if (!/^\d{7,15}$/.test(whatsapp)) throw new Error('Invalid WhatsApp number.');
}

function getRegistrationSheet() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  const spreadsheet = spreadsheetId ? SpreadsheetApp.openById(spreadsheetId) : SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) throw new Error('Spreadsheet is not configured.');
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function getRequiredProperty(name) {
  const value = PropertiesService.getScriptProperties().getProperty(name);
  if (!value) throw new Error(name + ' is not configured.');
  return value;
}

function constantTimeEqual(first, second) {
  if (first.length !== second.length) return false;
  var difference = 0;
  for (var index = 0; index < first.length; index++) difference |= first.charCodeAt(index) ^ second.charCodeAt(index);
  return difference === 0;
}

function toHex(bytes) {
  return bytes.map(function(byte) { return (byte < 0 ? byte + 256 : byte).toString(16).padStart(2, '0'); }).join('');
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
