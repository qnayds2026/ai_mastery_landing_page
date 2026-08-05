import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Play,
  Lock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Cpu,
  Target,
  Image,
  Video,
  Globe,
  TrendingUp,
  ShoppingBag,
  Zap,
  Users,
  DollarSign,
} from 'lucide-react';

interface CurriculumProps {
  onOpenCheckout?: (planId?: string) => void;
  onSelectPreviewLesson?: (lessonTitle: string, moduleTitle: string) => void;
}

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
  deliverable: string;
  keyTopics?: string[];
  lessons: { title: string; duration: string; isPreview?: boolean }[];
}

export const Curriculum: React.FC<CurriculumProps> = ({
  onOpenCheckout,
  onSelectPreviewLesson,
}) => {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleStep = (id: number) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  const steps: StepItem[] = [
    {
      id: 1,
      stepNumber: '01',
      title: 'Digital Business Foundation',
      subtitle: 'Establish a strong, professional digital presence as the bedrock of your online empire.',
      description:
        'Establish a strong, professional digital presence as the bedrock of your online empire. Learn how to properly configure your professional Facebook account, Instagram Business, Meta Business Suite, Business Manager, and Ads Manager.',
      icon: <Globe className="w-5 h-5 text-[#3563FF]" />,
      duration: '3.5 Hours',
      deliverable: 'Digital Presence & Meta Business Manager Setup Checklist',
      keyTopics: [
        'Professional Facebook Account',
        'Instagram Business',
        'Meta Business',
        'Business Manager',
        'Ads Manager',
        'Digital Presence',
      ],
      lessons: [
        { title: '1.1 Professional Facebook Account & Page Setup', duration: '20:00', isPreview: true },
        { title: '1.2 Instagram Business Account & Profile Integration', duration: '18:15' },
        { title: '1.3 Meta Business Suite, Business Manager & Ads Manager Setup', duration: '25:30' },
        { title: '1.4 Establishing Your Core Digital Presence', duration: '22:10' },
      ],
    },
    {
      id: 2,
      stepNumber: '02',
      title: 'Meta Ads Mastery',
      subtitle: 'Learn to drive highly targeted traffic and sales using advanced Meta advertising strategies.',
      description:
        'Learn to drive highly targeted traffic and sales using advanced Meta advertising strategies.',
      icon: <TrendingUp className="w-5 h-5 text-[#3563FF]" />,
      duration: '4 Hours',
      deliverable: 'Meta Ads Strategy & Scaling Framework',
      keyTopics: [
        'Facebook Ads',
        'Instagram Ads',
        'Audience Targeting',
        'Campaign Objectives',
        'Budget Planning',
        'Optimization',
        'Scaling',
        'Analytics',
      ],
      lessons: [
        { title: '2.1 Facebook & Instagram Ad Setup', duration: '22:00' },
        { title: '2.2 Audience Targeting & Campaign Objectives', duration: '28:45', isPreview: true },
        { title: '2.3 Budget Planning, Optimization & Scaling', duration: '25:30' },
      ],
    },
    {
      id: 3,
      stepNumber: '03',
      title: 'AI Poster Designing',
      subtitle: 'Create stunning, high-converting visuals and marketing collateral in seconds using AI.',
      description:
        'Create stunning, high-converting visuals and marketing collateral in seconds using AI.',
      icon: <Image className="w-5 h-5 text-[#3563FF]" />,
      duration: '4.5 Hours',
      deliverable: 'AI Poster & Creative Assets Master Template Pack',
      keyTopics: [
        'Marketing Posters',
        'Social Media Creatives',
        'Brand Designs',
        'Product Posters',
        'Advertisement Creatives',
        'Festival Posters',
        'Thumbnails',
      ],
      lessons: [
        { title: '3.1 Marketing & Product Poster Creation', duration: '28:10' },
        { title: '3.2 Social Media & Advertisement Creatives', duration: '24:40' },
        { title: '3.3 Brand Designs, Festival Posters & High-CTR Thumbnails', duration: '22:15' },
      ],
    },
    {
      id: 4,
      stepNumber: '04',
      title: 'AI Video Creation',
      subtitle: 'Produce engaging, professional video content and avatars without ever being on camera.',
      description:
        'Produce engaging, professional video content and avatars without ever being on camera.',
      icon: <Video className="w-5 h-5 text-[#3563FF]" />,
      duration: '5 Hours',
      deliverable: 'Faceless Video Automation Pipeline',
      keyTopics: [
        'AI Videos',
        'Voiceovers',
        'AI Avatars',
        'Video Editing',
        'Instagram Reels',
        'Facebook Videos',
        'YouTube Shorts',
        'Marketing Videos',
      ],
      lessons: [
        { title: '4.1 AI Video Generation & Studio Voiceovers', duration: '20:15' },
        { title: '4.2 Creating AI Avatars & Faceless Clips', duration: '29:50' },
        { title: '4.3 Reels, Shorts & Facebook Marketing Videos', duration: '23:30' },
      ],
    },
    {
      id: 5,
      stepNumber: '05',
      title: 'No-Code Website Development',
      subtitle: 'Build high-converting landing pages and business websites without writing a single line of code.',
      description:
        'Build high-converting landing pages and business websites without writing a single line of code.',
      icon: <Globe className="w-5 h-5 text-[#3563FF]" />,
      duration: '5.5 Hours',
      deliverable: 'Ready-To-Launch Website Templates',
      keyTopics: [
        'Landing Pages',
        'Business Websites',
        'Portfolio Websites',
        'Publishing',
        'Lead Generation',
        'Website Management',
      ],
      lessons: [
        { title: '5.1 Fast-Track Landing Page Architecture', duration: '27:10' },
        { title: '5.2 Business & Portfolio Website Setup', duration: '19:40' },
        { title: '5.3 Publishing, Lead Generation & Management', duration: '22:15' },
      ],
    },
    {
      id: 6,
      stepNumber: '06',
      title: 'Product Research',
      subtitle: 'Identify high-demand, low-competition products using advanced research frameworks.',
      description:
        'Identify high-demand, low-competition products using advanced research frameworks.',
      icon: <Target className="w-5 h-5 text-[#3563FF]" />,
      duration: '4 Hours',
      deliverable: 'Product Research Framework & Validation Matrix',
      keyTopics: [
        'Winning Products',
        'Market Research',
        'Trend Analysis',
        'Competitor Analysis',
        'Validation',
        'Demand Analysis',
      ],
      lessons: [
        { title: '6.1 Winning Products & Market Research', duration: '24:30' },
        { title: '6.2 Trend Analysis & Competitor Audits', duration: '28:10' },
        { title: '6.3 Product Validation & Demand Analysis', duration: '21:00' },
      ],
    },
    {
      id: 7,
      stepNumber: '07',
      title: 'Dropshipping',
      subtitle: 'Launch a global e-commerce business without holding any physical inventory.',
      description:
        'Launch a global e-commerce business without holding any physical inventory.',
      icon: <ShoppingBag className="w-5 h-5 text-[#3563FF]" />,
      duration: '4.5 Hours',
      deliverable: 'Automated Dropshipping Checklist',
      keyTopics: [
        'Store Setup',
        'Product Sourcing',
        'Order Fulfillment',
        'Marketing',
        'Scaling',
        'Automation',
      ],
      lessons: [
        { title: '7.1 Store Setup & Product Sourcing', duration: '25:15' },
        { title: '7.2 Order Fulfillment & Automated Logistics', duration: '32:00' },
        { title: '7.3 E-Commerce Marketing, Scaling & Automation', duration: '18:45' },
      ],
    },
    {
      id: 8,
      stepNumber: '08',
      title: 'Affiliate Marketing',
      subtitle: 'Generate passive income by promoting other people\'s proven products and services.',
      description:
        'Generate passive income by promoting other people\'s proven products and services.',
      icon: <Zap className="w-5 h-5 text-[#3563FF]" />,
      duration: '3.5 Hours',
      deliverable: 'High-Ticket Affiliate Blueprint',
      keyTopics: [
        'Affiliate Programs',
        'Passive Income',
        'Content Strategy',
        'Scaling',
        'Commission Systems',
      ],
      lessons: [
        { title: '8.1 Affiliate Programs & Commission Systems', duration: '21:30' },
        { title: '8.2 Passive Income Content Strategy', duration: '26:00' },
        { title: '8.3 Scaling Affiliate Income Streams', duration: '20:10' },
      ],
    },
    {
      id: 9,
      stepNumber: '09',
      title: 'Reselling Business',
      subtitle: 'Build a recurring revenue stream by reselling highly profitable digital products and services.',
      description:
        'Build a recurring revenue stream by reselling highly profitable digital products and services.',
      icon: <Users className="w-5 h-5 text-[#3563FF]" />,
      duration: '4 Hours',
      deliverable: 'Digital Reselling Blueprint & Supplier List',
      keyTopics: [
        'Digital Products',
        'Service Reselling',
        'Suppliers',
        'Pricing',
        'Recurring Revenue',
      ],
      lessons: [
        { title: '9.1 Digital Products & Service Reselling Models', duration: '23:45' },
        { title: '9.2 Sourcing Suppliers & Pricing Strategy', duration: '30:20' },
        { title: '9.3 Building Recurring Revenue Systems', duration: '25:10' },
      ],
    },
    {
      id: 10,
      stepNumber: '10',
      title: 'Real-World Implementation',
      subtitle: 'Bring it all together. Launch your business, acquire clients, and start generating revenue.',
      description:
        'Bring it all together. Launch your business, acquire clients, and start generating revenue.',
      icon: <DollarSign className="w-5 h-5 text-[#3563FF]" />,
      duration: '5 Hours',
      deliverable: 'Business Launch & Client Acquisition System',
      keyTopics: [
        'Business Setup',
        'Lead Generation',
        'Sales Funnels',
        'Client Acquisition',
        'Final Project',
        'Business Launch',
      ],
      lessons: [
        { title: '10.1 Business Setup & Sales Funnel Integration', duration: '34:00' },
        { title: '10.2 Lead Generation & Client Acquisition', duration: '27:15' },
        { title: '10.3 Final Project & Official Business Launch', duration: '22:40' },
      ],
    },
  ];

  return (
    <section id="curriculum" className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-[#3563FF] font-bold text-xs tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5 text-[#3563FF]" />
            <span>CURRICULUM</span>
          </div>

          <h2 className="text-[#111827] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            10-Step Blueprint to Success
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            A comprehensive, step-by-step roadmap designed to guide you from complete beginner to running profitable digital AI businesses.
          </p>
        </div>

        {/* 10 Steps Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step) => {
            const isExpanded = expandedStep === step.id;

            return (
              <div
                key={step.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-[#3563FF] shadow-xl shadow-blue-500/10'
                    : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                {/* Step Header Bar */}
                <button
                  onClick={() => toggleStep(step.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    {/* Number Badge */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0 font-extrabold text-[#3563FF] text-base sm:text-lg">
                      {step.stepNumber}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1 text-xs font-semibold text-slate-500">
                        <span className="text-[#3563FF] uppercase font-bold tracking-wider">
                          Step {step.stepNumber}
                        </span>
                        <span>•</span>
                        <span>{step.duration}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#111827] truncate">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 truncate hidden sm:block">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-600 flex items-center justify-center shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-[#3563FF]" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Expanded Step Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-slate-100 space-y-5">
                    
                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {step.description}
                    </p>

                    {/* Key Topics Covered */}
                    {step.keyTopics && step.keyTopics.length > 0 && (
                      <div className="space-y-2">
                        <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Key Topics Covered:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {step.keyTopics.map((topic, tIdx) => (
                            <span
                              key={tIdx}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-50 text-[#3563FF] border border-blue-100 text-xs font-bold"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#3563FF]" />
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Deliverable */}
                    <div className="flex items-center gap-2.5 bg-blue-50/70 p-3 rounded-xl border border-blue-100/80 text-xs text-slate-800 font-medium">
                      <Sparkles className="w-4 h-4 text-[#3563FF] shrink-0" />
                      <span>
                        <strong className="text-[#3563FF] font-bold">Step Deliverable:</strong>{' '}
                        {step.deliverable}
                      </span>
                    </div>



                  </div>
                )}
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};
