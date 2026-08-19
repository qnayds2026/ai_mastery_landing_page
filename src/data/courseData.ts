export interface ModuleLesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'template' | 'guide' | 'prompt_pack';
  previewAvailable?: boolean;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  lessonsCount: number;
  totalHours: string;
  outcomes: string[];
  lessons: ModuleLesson[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  earnings: string;
  timeframe: string;
  businessType: string;
  quote: string;
  highlight: string;
  verified: boolean;
  videoThumbnail?: string;
}

export interface Bonus {
  id: string;
  title: string;
  value: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number | string;
  originalPrice: number | string;
  currencySymbol?: string;
  popular?: boolean;
  badge?: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'earnings' | 'guarantee' | 'technical';
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 1,
    title: "Module 1: AI Prompt Engineering & Core Mastery",
    subtitle: "Master ChatGPT-5, Gemini 2.0, Claude 3.5 & DeepSeek Like the Top 1%",
    description: "Discover secret prompt structures, chain-of-thought frameworks, and role-playing architectures that force AI models to produce high-value commercial output every time.",
    iconName: "Cpu",
    lessonsCount: 8,
    totalHours: "3.5 hrs",
    outcomes: [
      "Master the '5-Step Mega-Prompt Architecture' used by $100/hr AI consultants",
      "Unlock custom instructions and system prompts for high-converting sales copy",
      "Learn AI model switching tactics: when to use Claude vs ChatGPT vs Gemini vs DeepSeek",
      "Automate repetitive thinking tasks and research in seconds"
    ],
    lessons: [
      { id: "1-1", title: "The 2026 AI Monetization Landscape Overview", duration: "18 mins", type: "video", previewAvailable: true },
      { id: "1-2", title: "Mastering Mega-Prompts & Context Injection", duration: "24 mins", type: "video", previewAvailable: true },
      { id: "1-3", title: "Prompt Engineering Cheat Sheet & Variable Injection", duration: "12 mins", type: "guide" },
      { id: "1-4", title: "Automated Research & Market Triangulation Prompts", duration: "22 mins", type: "video" },
      { id: "1-5", title: "DeepSeek & Open-Source AI Local Workflows", duration: "28 mins", type: "video" },
      { id: "1-6", title: "Master Prompt Repository (1,000+ Copy-Paste Prompts)", duration: "Download", type: "prompt_pack" }
    ]
  },
  {
    id: 2,
    title: "Module 2: High-Ticket AI Copywriting & Freelancing",
    subtitle: "Land $2,500/Month Retainers with AI Copy & Sales Funnels",
    description: "Learn how to craft high-converting landing page copy, email sequences, VSLs, and ad creatives for clients in under 30 minutes using custom AI workflows.",
    iconName: "PenTool",
    lessonsCount: 9,
    totalHours: "4.2 hrs",
    outcomes: [
      "Generate complete $3,000 email funnel copy in under 20 minutes",
      "Structure cold outreach emails that get a 40%+ open and response rate",
      "Land high-paying clients on Upwork, LinkedIn & Twitter without cold calling",
      "Set up recurring retainer pricing models ($2k-$5k/month per client)"
    ],
    lessons: [
      { id: "2-1", title: "The 30-Minute High-Ticket Copywriting System", duration: "26 mins", type: "video", previewAvailable: true },
      { id: "2-2", title: "AI-Powered VSL & High-Converting Landing Page Frameworks", duration: "32 mins", type: "video" },
      { id: "2-3", title: "Email Campaign Generator Setup & Auto-Sequences", duration: "20 mins", type: "video" },
      { id: "2-4", title: "Cold Email Outreach Scripts That Convert at 40%", duration: "Download", type: "template" },
      { id: "2-5", title: "Closing $2,500/mo Freelance Retainers via Loom Video Pitches", duration: "35 mins", type: "video" }
    ]
  },
  {
    id: 3,
    title: "Module 3: Faceless Social Media Empire (YouTube & TikTok)",
    subtitle: "Build Automated $10k/Mo Cash Cow Channels on Autopilot",
    description: "Step-by-step system for creating viral, faceless videos using AI scriptwriting, voice synthesis (ElevenLabs), and AI video generators (Runway, Sora, Kling).",
    iconName: "Video",
    lessonsCount: 10,
    totalHours: "5.1 hrs",
    outcomes: [
      "Find viral high-RPM niches that pay $20-$40 per 1,000 views",
      "Generate 30 days of short-form content in less than 2 hours",
      "Automate ElevenLabs voiceovers, Midjourney visuals, and CapCut editing",
      "Monetize via AdSense, high-ticket affiliate offers, and brand sponsorships"
    ],
    lessons: [
      { id: "3-1", title: "High-RPM Niche Selection Matrix (Finance, AI, Mystery, Tech)", duration: "22 mins", type: "video", previewAvailable: true },
      { id: "3-2", title: "AI Scriptwriting Engine for 85%+ Viewer Retention", duration: "28 mins", type: "video" },
      { id: "3-3", title: "Hyper-Realistic Voice Generation & Audio Mastering", duration: "18 mins", type: "video" },
      { id: "3-4", title: "AI Video Generation: Midjourney + Runway Gen-3 + Luma", duration: "38 mins", type: "video" },
      { id: "3-5", title: "Batch Scheduling & Automated Monetization Funnels", duration: "25 mins", type: "video" }
    ]
  },
  {
    id: 4,
    title: "Module 4: Building & Monetizing Micro-SaaS & AI Web Apps",
    subtitle: "Launch Profitable Subscription Tools with Zero Coding Experience",
    description: "Use AI coding agents and no-code builders to create functional micro-SaaS tools, custom GPTs, and AI web applications that charge $19-$99/month.",
    iconName: "Code2",
    lessonsCount: 7,
    totalHours: "4.8 hrs",
    outcomes: [
      "Build functional web tools (AI Resume Builders, Content Generators) using prompt-to-code",
      "Integrate Stripe payments and subscription billing with 0 code",
      "Deploy custom GPTs and monetize via OpenAI GPT Store & private memberships",
      "Get your first 100 paying SaaS users on ProductHunt, Reddit & Twitter"
    ],
    lessons: [
      { id: "4-1", title: "The Zero-Code Micro-SaaS Business Model Explained", duration: "20 mins", type: "video", previewAvailable: true },
      { id: "4-2", title: "Prompt-to-App Mastery: Building Full-Stack Web Tools", duration: "45 mins", type: "video" },
      { id: "4-3", title: "Stripe Payment Setup & Monthly Recurring Revenue (MRR) Architecture", duration: "25 mins", type: "video" },
      { id: "4-4", title: "Micro-SaaS Starter Code Templates (React + Tailwind + Express)", duration: "Download", type: "template" },
      { id: "4-5", title: "ProductHunt Launch Playbook ($0 to $5k MRR in 30 Days)", duration: "30 mins", type: "video" }
    ]
  },
  {
    id: 5,
    title: "Module 5: AI Automation Agency (AAA) & B2B Solutions",
    subtitle: "Sell $5,000 Workflow Automations to Local & E-commerce Businesses",
    description: "Build custom AI chatbots, automated lead-nurturing pipelines, and Make.com/Zapier AI automations that businesses happily pay $3,000-$10,000 to implement.",
    iconName: "Zap",
    lessonsCount: 6,
    totalHours: "3.8 hrs",
    outcomes: [
      "Build custom AI customer support & sales agents using Voiceflow & Botpress",
      "Create automated lead-parsing automations for real estate, dentists, and lawyers",
      "Structure $5,000 setup fees + $500/month maintenance retainers",
      "White-label AI automations to resell under your own agency brand"
    ],
    lessons: [
      { id: "5-1", title: "Why Businesses Are Desperate for AI Automation Right Now", duration: "16 mins", type: "video" },
      { id: "5-2", title: "Building Custom AI Chatbots with Knowledge Base Training", duration: "35 mins", type: "video" },
      { id: "5-3", title: "Make.com & Zapier AI Workflows Blueprint", duration: "40 mins", type: "video" },
      { id: "5-4", title: "Agency Proposal Template & Commercial Service Agreements", duration: "Download", type: "template" }
    ]
  },
  {
    id: 6,
    title: "Module 6: Digital Products, Prompts & Asset Flipping",
    subtitle: "Generate Passive Daily Sales on Etsy, Gumroad & Notion",
    description: "Create in-demand digital assets like Notion AI planners, Midjourney prompt packs, Canva templates, and e-books using 100% AI generation.",
    iconName: "ShoppingBag",
    lessonsCount: 5,
    totalHours: "2.9 hrs",
    outcomes: [
      "Design high-selling Notion templates and AI planners in 1 hour",
      "Package premium Midjourney art prompts and sell them on PromptBase & Etsy",
      "Set up evergreen Gumroad & Shopify sales funnels with automated order fulfillment",
      "Rank #1 on Etsy and Google Search using AI SEO strategies"
    ],
    lessons: [
      { id: "6-1", title: "The High-Profit Digital Product Catalog for 2026", duration: "18 mins", type: "video" },
      { id: "6-2", title: "Creating & Monetizing Notion AI Templates", duration: "32 mins", type: "video" },
      { id: "6-3", title: "Etsy SEO & Listing Optimizer Automation", duration: "24 mins", type: "video" },
      { id: "6-4", title: "Gumroad Funnel Kit & Email Automated Upsells", duration: "Download", type: "template" }
    ]
  }
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "അമൽ കെ.",
    role: "Student",
    location: "Malappuram, Kerala",
    avatar: "/images/testimonials/student-1.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI Tools",
    quote:
      "AI tools ഉപയോഗിക്കാൻ ഇത്ര എളുപ്പമാണെന്ന് ഈ ക്ലാസിൽ വന്നപ്പോഴാണ് മനസ്സിലായത്. ഓരോ കാര്യവും step by step ആയി പറഞ്ഞു തരുന്നത് വളരെ helpful ആയിരുന്നു. പ്രത്യേകിച്ച് practical sessions വളരെ ഇഷ്ടപ്പെട്ടു.",
    highlight: "Easy to understand & practical",
    verified: true,
  },

  {
    id: "test-2",
    name: "ഫാത്തിമ നസ്റിൻ",
    role: "Content Creator",
    location: "Kozhikode, Kerala",
    avatar: "/images/testimonials/student-2.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI Content Creation",
    quote:
      "Content creation ചെയ്യുമ്പോൾ ഒരുപാട് സമയം എടുക്കുമായിരുന്നു. AI ഉപയോഗിച്ച് content ideas, captions, images തുടങ്ങിയവ എങ്ങനെ എളുപ്പത്തിൽ create ചെയ്യാം എന്ന് പഠിക്കാൻ കഴിഞ്ഞു. ഇപ്പോൾ work ചെയ്യുന്നത് കുറച്ച് കൂടി easy ആയി.",
    highlight: "Faster content creation",
    verified: true,
  },

  {
    id: "test-3",
    name: "അഭിജിത്ത് പി.",
    role: "Freelancer",
    location: "Kochi, Kerala",
    avatar: "/images/testimonials/student-3.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI & Freelancing",
    quote:
      "AIയെ കുറിച്ച് basic knowledge മാത്രമേ ഉണ്ടായിരുന്നുള്ളൂ. Freelancing-ൽ AI എങ്ങനെ ഉപയോഗിക്കാം എന്നതിനെക്കുറിച്ച് നല്ലൊരു direction കിട്ടി. ക്ലാസുകൾ വളരെ practical ആയിട്ടാണ് തോന്നിയത്.",
    highlight: "Better direction for freelancing",
    verified: true,
  },

  {
    id: "test-4",
    name: "ശിൽപ എം.",
    role: "Working Professional",
    location: "Thrissur, Kerala",
    avatar: "/images/testimonials/student-4.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI Productivity",
    quote:
      "എനിക്ക് AI tools കുറിച്ച് പലതും കേട്ടിട്ടുണ്ടായിരുന്നു, പക്ഷേ എവിടെ നിന്ന് തുടങ്ങണം എന്ന് അറിയില്ലായിരുന്നു. ഈ course ഒരു proper roadmap പോലെ തോന്നി. Beginners-ന് follow ചെയ്യാൻ പറ്റുന്ന രീതിയിലാണ് ക്ലാസുകൾ.",
    highlight: "Clear learning roadmap",
    verified: true,
  },

  {
    id: "test-5",
    name: "മുഹമ്മദ് റാഷിദ്",
    role: "Business Owner",
    location: "Manjeri, Kerala",
    avatar: "/images/testimonials/student-5.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI for Business",
    quote:
      "Business-ൽ AI എങ്ങനെ practical ആയി ഉപയോഗിക്കാം എന്നതാണ് എനിക്ക് ഏറ്റവും useful ആയി തോന്നിയത്. Tools മാത്രം പരിചയപ്പെടുത്താതെ അവ ഉപയോഗിക്കുന്ന രീതിയും examples സഹിതം explain ചെയ്തു.",
    highlight: "Useful for business applications",
    verified: true,
  },

  {
    id: "test-6",
    name: "നിഹാരിക എസ്.",
    role: "College Student",
    location: "Ernakulam, Kerala",
    avatar: "/images/testimonials/student-6.jpg",
    rating: 5,
    earnings: "—",
    timeframe: "Course Experience",
    businessType: "AI Skills",
    quote:
      "Complete beginner ആയിട്ടാണ് ഞാൻ course തുടങ്ങിയത്. ആദ്യം കുറച്ച് confusing ആയിരുന്നെങ്കിലും sessions follow ചെയ്തപ്പോൾ കാര്യങ്ങൾ മനസ്സിലായി. AI skills പഠിക്കാൻ തുടങ്ങുന്നവർക്ക് നല്ലൊരു starting point ആണ്.",
    highlight: "Beginner-friendly learning",
    verified: true,
  },
];

export const BONUSES: Bonus[] = [
  {
    id: "b1",
    title: "Bonus #1: The 1,000+ Commercial Master Prompts Vault",
    value: "$297 Value",
    description: "Copy-paste, battle-tested prompt templates for ChatGPT, Gemini, Claude & Midjourney engineered specifically for copywriting, coding, visual art, and marketing.",
    icon: "Database",
    features: ["100+ Copywriting Prompts", "250+ Midjourney Art Styles", "300+ Marketing & Email Sequences", "Direct Notion Database Access"]
  },
  {
    id: "b2",
    title: "Bonus #2: AI Agency Legal Contracts & Cold Outreach Vault",
    value: "$497 Value",
    description: "Done-for-you lawyer-approved client service agreements, proposal slide decks, and high-converting cold email outreach scripts that close deals fast.",
    icon: "FileCheck",
    features: ["Commercial Retainer Agreement PDF/Doc", "Loom Video Pitching Script", "High-Ticket Proposal Slide Deck", "Objection Handling Script"]
  },
  {
    id: "b3",
    title: "Bonus #3: Micro-SaaS Starter Codebase & Deployment Kit",
    value: "$397 Value",
    description: "Pre-built, customizable React + Tailwind + Node template with Stripe checkout pre-integrated. Build and launch your AI app in hours instead of months.",
    icon: "Code",
    features: ["Full React + Express Starter Repository", "Stripe Subscription Webhook Handler", "AI API Wrapper Code", "Deploy-to-Vercel 1-Click Guide"]
  },
  {
    id: "b4",
    title: "Bonus #4: Private VIP Discord Mastermind & Live Weekly Q&A",
    value: "$306 Value",
    description: "Connect with over 14,000 active students, share winning prompts, get portfolio reviews from instructors, and participate in weekly live strategy calls.",
    icon: "Users",
    features: ["Exclusive VIP Discord Role", "Weekly Live Q&A Strategy Sessions", "Prompt Sharing Channels", "Direct Instructor Support"]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "recorded",
    name: "Free AI Masterclass Webinar",
    tagline: "Live webinar with practical AI strategies and joining updates",
    price: "0",
    originalPrice: "5,000",
    currencySymbol: "₹",
    popular: true,
    badge: "🔥 FREE WEBINAR",
    features: [
      "Live AI Masterclass Webinar",
      "Practical AI Strategies",
      "Webinar Joining Updates",
      "WhatsApp Community Access",
      "Free Registration",
      "Live Q&A Opportunity"
    ],
    ctaText: "Join Free Webinar — ₹0"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "ഈ കോഴ്സ് ആർക്കൊക്കെയാണ് അനുയോജ്യം?",
    answer: "AI ഉപയോഗിച്ച് പുതിയ സ്കിൽസ് പഠിക്കാനും, വരുമാനം വർധിപ്പിക്കാനും ആഗ്രഹിക്കുന്ന വിദ്യാർത്ഥികൾ, ജോബ് സീക്കേഴ്സ്, ഫ്രീലാൻസർമാർ, ബിസിനസ് ഉടമകൾ, കണ്ടന്റ് ക്രിയേറ്റർമാർ തുടങ്ങി എല്ലാവർക്കും ഈ കോഴ്സ് അനുയോജ്യമാണ്.",
    category: "general"
  },
  {
    question: "ഈ കോഴ്സിന്റെ പഠനരീതി എങ്ങനെയായിരിക്കും?",
    answer: "പേയ്മെന്റ് പൂർത്തിയാക്കിയ ശേഷം നിങ്ങളെ WhatsApp പഠന ഗ്രൂപ്പിലേക്ക് ചേർക്കും. തുടർന്ന് ക്ലാസുകൾ, പഠന മെറ്റീരിയലുകൾ, അപ്ഡേറ്റുകൾ എന്നിവ എല്ലാം WhatsApp വഴിയായിരിക്കും ലഭിക്കുക.",
    category: "general"
  },
  {
    question: "AI-യിൽ മുൻപരിചയം വേണമോ?",
    answer: "ഇല്ല. തുടക്കക്കാർക്കും എളുപ്പത്തിൽ മനസ്സിലാകുന്ന രീതിയിലാണ് കോഴ്സ് തയ്യാറാക്കിയിരിക്കുന്നത്.",
    category: "technical"
  },
  {
    question: "ഈ കോഴ്സ് പൂർത്തിയാക്കിയാൽ എന്താണ് ലഭിക്കുക?",
    answer: "AI ടൂളുകൾ ഫലപ്രദമായി ഉപയോഗിക്കാനും, കണ്ടന്റ് സൃഷ്ടിക്കാനും, ഫ്രീലാൻസിംഗിലും ബിസിനസ്സിലും AI പ്രയോജനപ്പെടുത്തി വരുമാന അവസരങ്ങൾ കണ്ടെത്താനും നിങ്ങൾക്ക് കഴിയും.",
    category: "earnings"
  },
  {
    question: "കോഴ്സിന് ശേഷം സപ്പോർട്ട് ലഭിക്കുമോ?",
    answer: "അതെ. പഠനത്തിനിടയിലും അതിന് ശേഷവും ആവശ്യമായ മാർഗനിർദേശവും സപ്പോർട്ടും ലഭ്യമാക്കുന്നതാണ്.",
    category: "general"
  },
  {
    question: "ഈ കോഴ്സ് കഴിഞ്ഞാൽ ഉടൻ വരുമാനം ലഭിക്കുമോ?",
    answer: "കോഴ്സ് നിങ്ങൾക്ക് ആവശ്യമായ AI സ്കിൽസും പ്രായോഗിക മാർഗങ്ങളും പഠിപ്പിക്കും. നിങ്ങളുടെ പരിശ്രമം, സ്ഥിരത, പഠിച്ച കാര്യങ്ങൾ പ്രാവർത്തികമാക്കൽ എന്നിവയെ ആശ്രയിച്ചാണ് വരുമാന ഫലങ്ങൾ ലഭിക്കുക.",
    category: "earnings"
  },
  {
    question: "കോഴ്സിന് Refund policy ഉണ്ടോ?",
    answer: "ഈ കോഴ്സ് ഒരു ഡിജിറ്റൽ റെക്കോർഡഡ് കോഴ്സായതിനാൽ, കോഴ്സിലേക്കുള്ള ആക്സസ് ലഭിച്ച ശേഷം റീഫണ്ട് നൽകാൻ സാധിക്കില്ല. രജിസ്റ്റർ ചെയ്യുന്നതിന് മുമ്പ് എന്തെങ്കിലും സംശയങ്ങൾ ഉണ്ടെങ്കിൽ WhatsApp വഴി ഞങ്ങളെ ബന്ധപ്പെടുക.",
    category: "guarantee"
  }
];
