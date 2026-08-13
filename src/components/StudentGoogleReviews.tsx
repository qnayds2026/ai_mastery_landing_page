import React from 'react';
import { Star, CheckCircle2, TrendingUp } from 'lucide-react';

interface GoogleReview {
  id: string;
  initials: string;
  name: string;
  googleReviewText: string;
  timeAgo: string;
  rating: number;
  review: string;
  highlightTag: string;
  bgColor: string;
  initialsColor: string;
}

const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: '1',
    initials: 'MM',
    name: 'Munshid pk Munxi',
    googleReviewText: 'Google Review • 1 week ago',
    timeAgo: '1 week ago',
    rating: 5,
    review:
      'Onayds provide more usefull trending skills and improving skills with supportive mentors and teams',
    highlightTag: 'Supportive Mentors & Trending Skills',
    bgColor: 'from-blue-400 to-blue-600',
    initialsColor: 'bg-blue-500',
  },
  {
    id: '2',
    initials: 'TS',
    name: 'TM Solutions',
    googleReviewText: 'Google Review • 2 weeks ago',
    timeAgo: '2 weeks ago',
    rating: 5,
    review: 'Helpfull Class... Next class arrange sir',
    highlightTag: 'Helpful Class & Practical Guidance',
    bgColor: 'from-red-400 to-red-600',
    initialsColor: 'bg-red-500',
  },
  {
    id: '3',
    initials: 'MM',
    name: 'Mymoona Maryam',
    googleReviewText: 'Google Review • 2 weeks ago',
    timeAgo: '2 weeks ago',
    rating: 5,
    review:
      'The session was very informative, nd very useful class.. 👍 ',
    highlightTag: 'Very Informative & Useful Class',
    bgColor: 'from-green-400 to-green-600',
    initialsColor: 'bg-green-500',
  },
  {
    id: '4',
    initials: 'DI',
    name: 'dikshith',
    googleReviewText: 'Google Review • 2 weeks ago',
    timeAgo: '2 weeks ago',
    rating: 5,
    review:
      'It was great learning experience. Thankyou Onayds team for providing the internship.',
    highlightTag: 'Great Learning Experience & Internship',
    bgColor: 'from-yellow-400 to-yellow-600',
    initialsColor: 'bg-yellow-500',
  },
  {
    id: '5',
    initials: 'MR',
    name: 'Manju Retheesh',
    googleReviewText: 'Google Review • 3 weeks ago',
    timeAgo: '3 weeks ago',
    rating: 5,
    review: 'Very good class. Interesting!',
    highlightTag: 'Very Good & Interesting Class',
    bgColor: 'from-blue-400 to-indigo-600',
    initialsColor: 'bg-blue-500',
  },
  {
    id: '6',
    initials: 'AB',
    name: 'Abel M Binol',
    googleReviewText: 'Google Review • 2 weeks ago',
    timeAgo: '2 weeks ago',
    rating: 5,
    review:
      'Excellent class with clear explanations. Very helpful for beginners learning AI skills.',
    highlightTag: 'Clear Explanations & Beginner Friendly',
    bgColor: 'from-purple-400 to-purple-600',
    initialsColor: 'bg-purple-500',
  },
];

export const StudentGoogleReviews: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden border-b border-slate-200">
      {/* Soft Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Students
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-700">
              <Star className="w-3.5 h-3.5 fill-amber-600" />
              Real Experiences
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-blue-700">
              <TrendingUp className="w-3.5 h-3.5" />
              Practical Results
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Real Student Google Reviews
          </h2>

          {/* Subtitle in Malayalam */}
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            കച്ചേത്ര പെൽപ്പുകളിൽ പോയ വിദ്യാർത്ഥികൾ പങ്കുവെച്ച യാഥാർത്ഥ്യ അനുഭവം.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`relative group rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${
                review.id === '2' ? 'lg:ring-2 lg:ring-blue-400' : ''
              }`}
            >
              {/* Background accent */}
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${review.bgColor} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              {/* Google Logo */}
              <div className="absolute top-4 right-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-slate-600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <text
                    x="12"
                    y="18"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="900"
                    fill="currentColor"
                  >
                    G
                  </text>
                </svg>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-sm ${review.initialsColor}`}
                >
                  {review.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {review.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Google Review • {review.timeAgo}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-xs sm:text-sm font-bold text-amber-600 ml-1">
                  5.0 • {review.timeAgo}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 font-medium">
                "{review.review}"
              </p>

              {/* Highlight Tag */}
              <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-xs sm:text-sm font-bold text-blue-700">
                {review.highlightTag}
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-4 right-4">
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-slate-600 font-medium mb-4">
            ✨ Join 10,000+ satisfied students and start your AI journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.google.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <text x="12" y="14" textAnchor="middle" fontSize="12">
                  G
                </text>
              </svg>
              Read All Reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
