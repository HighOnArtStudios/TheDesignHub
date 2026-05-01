import { ArrowRight, Calendar, Users, Store, Heart, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-yellow/20 via-warm-white to-warm-white"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-coral/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-dark/80 font-medium text-sm mb-6 border border-brand-teal/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              Upcoming: Picnic and Playlists (May 23rd)
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-extrabold tracking-tight text-brand-dark mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Where <span className="text-brand-coral">Community</span> meets <span className="text-brand-teal">Creativity</span>.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-brand-dark/70 mb-10 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Design Hub Studios hosts vibrant markets, interactive events, and creative experiences in Kerman, CA.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href="/vendor" size="lg" className="w-full sm:w-auto text-lg">
              Become a Vendor <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/events" variant="secondary" size="lg" className="w-full sm:w-auto text-lg">
              View Upcoming Events
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Event Banner */}
      <section className="px-6 -mt-12 mb-24 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto bg-brand-dark text-white rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row shadow-[0_20px_50px_rgba(7,59,76,0.15)] overflow-hidden relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Abstract pattern bg */}
          <div className="absolute right-0 top-0 w-64 h-full bg-brand-coral/20 skew-x-12 translate-x-32 hidden md:block"></div>
          
          <div className="flex-1 relative z-10">
            <h2 className="text-brand-yellow font-medium tracking-wider text-sm uppercase mb-2">Next Big Event</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">Picnic and Playlists</h3>
            <p className="text-white/80 mb-6 max-w-md text-lg">
              Join us for an afternoon of music, delicious food vendors, and local crafts. Bring a blanket, lawn chair, grab some food and enjoy the community.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-brand-yellow w-5 h-5" />
                <span className="font-medium">May 23, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-yellow w-5 h-5" />
                <span className="font-medium">Trinis Park, CA</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button href="/events" variant="secondary">Attend Free</Button>
              <Button href="/vendor" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-brand-dark">Apply to Vend</Button>
            </div>
          </div>
          <div className="hidden md:flex flex-1 items-center justify-center relative z-10 mt-8 md:mt-0">
             {/* Countdown mockup */}
             <div className="grid grid-cols-3 gap-4 text-center w-full max-w-xs">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                  <div className="font-display text-4xl font-bold text-brand-yellow">22</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Days</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                  <div className="font-display text-4xl font-bold text-brand-yellow">08</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Hours</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/10">
                  <div className="font-display text-4xl font-bold text-brand-yellow">42</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Mins</div>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-white rounded-[3rem] mx-4 lg:mx-8 shadow-sm my-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-brand-dark mb-4">How It Works</h2>
          <p className="text-xl text-brand-dark/70 mb-16 max-w-2xl mx-auto">Whether you're shopping or selling, our community is like family.</p>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 text-left">
            {/* For Vendors */}
            <motion.div 
              className="bg-warm-white p-10 rounded-3xl border border-gray-100 relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-coral/10 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="w-14 h-14 bg-brand-coral/20 rounded-2xl flex items-center justify-center mb-6 text-brand-coral">
                <Store size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">For Vendors</h3>
              <p className="text-brand-dark/70 mb-8 leading-relaxed">
                Affordable booths, great foot traffic, and a supportive network of small business owners. Gain exposure and grow your brand.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-coral text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <span>Submit our simple vendor application.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-coral text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <span>Secure your spot with a transparent booth fee.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-coral text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <span>Get on the layout and sell to the community!</span>
                </li>
              </ul>
              <Button href="/vendor" className="w-full">Apply to Vend</Button>
            </motion.div>
            
            {/* For Attendees */}
            <motion.div 
              className="bg-brand-dark text-white p-10 rounded-3xl relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/20 rounded-bl-full -mr-8 -mt-8"></div>
              <div className="w-14 h-14 bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 text-brand-teal">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">For the Community</h3>
              <p className="text-white/80 mb-8 leading-relaxed">
                Experience the best of local culture. Support small businesses, create art, and make memories with friends and family.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal text-brand-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
                  <span className="text-white/90">Find our upcoming markets and events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal text-brand-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
                  <span className="text-white/90">RSVP and invite your friends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-teal text-brand-dark flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
                  <span className="text-white/90">Show up, shop local, and enjoy the vibes.</span>
                </li>
              </ul>
              <Button href="/events" variant="secondary" className="w-full">Browse Events</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Heart className="w-12 h-12 text-brand-coral mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-balance">Help Us Build a Physical Studio!</h2>
          <p className="text-xl text-brand-dark/70 mb-10 max-w-2xl mx-auto">
            Our ultimate goal is to open a permanent creative space in Kerman. Support local artists, get exclusive event access, and join the family.
          </p>
          
          <div className="bg-white p-2 pl-6 rounded-full shadow-lg flex items-center max-w-lg mx-auto border border-gray-100">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-transparent border-none outline-none text-brand-dark placeholder:text-gray-400 w-full"
            />
            <Button size="md" className="ml-2 shrink-0">Stay Updated</Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">We respect your inbox. No spam.</p>
        </div>
      </section>
    </div>
  );
}
