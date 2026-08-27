import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
}

export async function generateAiBusinessRoadmap(interest: string, hours: string, budget: string): Promise<string> {
  const client = getAiClient();
  if (!client) {
    // Return structured default roadmap if API key is not configured in client environment
    return `### 🚀 Customized AI Business Roadmap
    
**Recommended Model:** AI Copywriting & High-Ticket Lead Generation
**Estimated Time to First Sale:** 10 - 14 Days

#### Step 1: Set Up Your AI Stack (Day 1-3)
Use Claude 3.5 Sonnet & ChatGPT-5 to build high-converting landing page frameworks and 5-part email nurture sequences for local business niches like real estate agents and dental clinics.

#### Step 2: Automated Cold Outreach (Day 4-7)
Leverage our Bonus #2 Cold Email Templates to reach out to 20 potential local business clients daily with personalized Loom video pitches showing how AI can double their booking rate.

#### Step 3: Close & Retain ($2,500/mo) (Day 8-14)
Offer a 14-day risk-free trial where you optimize their sales copy. Transition them to a $2,500/month recurring retainer for ongoing AI marketing automation!`;
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert AI Business Strategist for the 'AI Money Making Mastery' course. 
The user wants a personalized AI monetization plan based on:
- Primary Interest/Skill: ${interest}
- Weekly Hours Available: ${hours} hours/week
- Starting Budget: ${budget}

Provide a concise, highly inspiring, 3-step action plan for how they can monetize AI in 2026. Use formatting with clear headers, estimated monthly income potential, and actionable steps. Keep it under 250 words.`,
    });

    return response.text || "Failed to generate roadmap. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `### 🚀 Customized AI Business Plan
    
**Model:** AI Content Creation & Micro-SaaS
**Income Goal:** $3,000 - $8,000 / month

1. **Leverage No-Code AI Tools:** Use ChatGPT and Midjourney to create digital assets and automated content workflows.
2. **Package & Market:** Sell prompt templates or faceless content bundles on Gumroad & YouTube.
3. **Scale with Automation:** Reinvest earnings into automated social media posting and email marketing.`;
  }
}

export async function generateSamplePrompt(taskType: string, niche: string): Promise<string> {
  const client = getAiClient();
  if (!client) {
    return `[SYSTEM PROMPT: SENIOR AI COPYWRITER]
Act as a world-class conversion copywriter specializing in ${niche}.
Your objective is to craft a high-converting offer script for: ${taskType}.

[CONTEXT & CONSTRAINTS]
- Tone: Direct, high-urgency, empathetic, and highly persuasive.
- Target Audience: Busy founders and buyers in the ${niche} sector.
- Structure: Hook -> Agitate Problem -> Introduce AI Solution -> Social Proof -> Irresistible Call to Action.

[OUTPUT REQUIREMENTS]
Generate 3 distinct variations with headline options, body copy, and a 1-sentence P.S. that drives immediate action.`;
  }

  try {
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a hyper-effective, commercial master prompt template for a user looking to perform "${taskType}" in the "${niche}" niche. Make it professional, complete with system context, parameters, and variable inputs [LIKE_THIS].`,
    });

    return response.text || "Prompt generation completed.";
  } catch (error) {
    console.error("Prompt generation error:", error);
    return `[PROMPT TEMPLATE] Act as an expert in ${niche} and execute ${taskType} with maximum commercial quality.`;
  }
}
