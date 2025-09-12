import React, { useState } from 'react';
import { Mail, Calendar, Sparkles, Users, ArrowRight, CheckCircle2, Crown, Gem } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6195149/6195149-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Elegant overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/O2_LOGO copy copy copy.png" 
              alt="OfficetoFlex" 
              className="h-16 w-auto drop-shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
          <div className="text-center">
            {/* Large centered logo */}
            <div className="mb-12">
              <img 
                src="/O2_LOGO copy copy copy.png" 
                alt="OfficetoFlex" 
                className="mx-auto h-48 sm:h-56 lg:h-72 w-auto drop-shadow-2xl"
              />
            </div>
            
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/95 backdrop-blur-sm text-rose-800 text-sm font-medium mb-8 shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional to Flexible Fashion
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-2xl">
              From
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600"> Office</span>
              <br />
              toFlex
            </h1>
            
            <p className="text-xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
              Transform your professional wardrobe into flexible, stylish pieces perfect for any occasion. 
              Rent premium clothing that transitions seamlessly from boardroom to social events.
            </p>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto mb-16">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for early access"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-white/20 bg-white/95 backdrop-blur-sm focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-200 text-slate-900 placeholder-slate-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    Join Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center space-x-3 text-rose-700 bg-white/95 backdrop-blur-sm px-8 py-5 rounded-xl shadow-xl">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold">Welcome to luxury! We'll be in touch soon.</span>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-2 text-white/80 mb-20">
              <Users className="w-5 h-5" />
              <span className="text-sm">Join 5,000+ fashion enthusiasts on the waitlist</span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Logo in Features Section */}
            <div className="text-center mb-12">
              <img 
                src="/O2_LOGO copy copy copy.png" 
                alt="OfficetoFlex" 
                className="mx-auto h-20 w-auto opacity-80"
              />
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Luxury Fashion, Redefined
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Experience haute couture and designer fashion like never before with our premium rental service
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Designer Collections</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Curated pieces from Chanel, Dior, Valentino, and other luxury houses. Access runway looks and exclusive designs.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Perfect Fit Guarantee</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Professional styling consultation and alterations included. Look flawless for galas, weddings, and special events.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Gem className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">White Glove Service</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Concierge delivery, professional cleaning, and insurance included. Luxury service from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-900 to-slate-900 py-24">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Logo in CTA Section */}
            <div className="mb-8">
              <img 
                src="/O2_LOGO copy copy copy.png" 
                alt="OfficetoFlex" 
                className="mx-auto h-24 w-auto drop-shadow-xl filter brightness-0 invert"
              />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Your Designer Wardrobe Awaits
            </h2>
            <p className="text-xl text-rose-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the exclusive world of luxury fashion rental. Be the first to access our curated collection of designer pieces.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-rose-200">
              <span className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                VIP early access
              </span>
              <span className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                Exclusive member pricing
              </span>
              <span className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="w-5 h-5" />
                Personal styling service
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <img 
                src="/O2_LOGO copy copy copy.png" 
                alt="OfficetoFlex" 
                className="h-12 w-auto opacity-80"
              />
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>© 2024 OfficetoFlex. Professional fashion rental reimagined.</p>
              <p className="text-sm mt-1">Coming soon to select cities worldwide.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;