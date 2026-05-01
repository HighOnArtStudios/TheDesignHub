import { HeartHandshake, Gift, Target, Megaphone } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Sponsors() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Partner With Us</h1>
        <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto">
          Help us bring creative, community-focused events to Kerman. Showcase your business to local families and support the arts securely.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 text-center">
          <div className="w-16 h-16 bg-brand-coral/10 text-brand-coral rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Gift size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">Donate Supplies / Funds</h3>
          <p className="text-brand-dark/70 text-sm">
            Help offset the costs of venues, permits, and art supplies for community activities.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 text-center">
          <div className="w-16 h-16 bg-brand-yellow/20 text-brand-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HeartHandshake size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">Host an Activity</h3>
          <p className="text-brand-dark/70 text-sm">
            Run a booth with an interactive game, craft, or info station. Perfect for local services.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 text-center">
          <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-3">Promote Your Business</h3>
          <p className="text-brand-dark/70 text-sm">
            Put your logo on our flyers, banners, and digital promos. Reach thousands locally.
          </p>
        </div>
      </div>

      <div className="bg-brand-dark text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-brand-coral/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">Sponsor Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Megaphone className="text-brand-yellow" size={24} />
                <span className="text-lg">Massive Brand Exposure</span>
              </li>
              <li className="flex items-center gap-3">
                <Megaphone className="text-brand-yellow" size={24} />
                <span className="text-lg">"Sponsored By" Recognition</span>
              </li>
              <li className="flex items-center gap-3">
                <Megaphone className="text-brand-yellow" size={24} />
                <span className="text-lg">Dedicated Social Media Posts</span>
              </li>
              <li className="flex items-center gap-3">
                <Megaphone className="text-brand-yellow" size={24} />
                <span className="text-lg">Prime Booth Placement</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-display font-bold mb-4 text-brand-yellow">Ready to partner?</h3>
            <p className="mb-6 text-white/80">
              We offer flexible sponsorship packages starting at $100. Reach out to discuss how we can work together.
            </p>
            <Button variant="secondary" className="w-full" href="/contact">Become a Sponsor</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
