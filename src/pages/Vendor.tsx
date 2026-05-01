import { Check, Shield, DollarSign, FormInput, Users } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Vendor() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Become a Vendor</h1>
        <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto">
          Join a family of local creators and small businesses. We provide the foot traffic and the vibe, you provide the amazing items.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_350px] gap-12 items-start">
        {/* Left Col - Details */}
        <div className="space-y-12">
          {/* Benefits */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-yellow rounded-full"></span>
              Why Vend with Us?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5">
                <div className="w-10 h-10 bg-brand-coral/10 text-brand-coral rounded-xl flex items-center justify-center mb-4">
                  <Users size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-brand-dark">Building Our Future</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">You're helping build something for our community now and in the future, inspiring youth to elders and opening opportunities for collaborations and for teaching workshops in the community during our monthly fundraising events to build awareness and funds to open an art studio in Kerman, CA.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-brand-dark/5">
                <div className="w-10 h-10 bg-brand-teal/10 text-brand-teal rounded-xl flex items-center justify-center mb-4">
                  <DollarSign size={20} />
                </div>
                <h3 className="font-bold text-lg mb-2">Affordable Booths</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">Pricing varies for booths depending on the location of the event and if you have a Kerman business license.</p>
              </div>
            </div>
          </section>

          {/* How it Works */}
          <section>
            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-brand-blue rounded-full"></span>
              Simple 3-Step Process
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex shrink-0 items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg">Submit Application</h3>
                  <p className="text-brand-dark/70 text-sm font-sans mb-1">Fill out our quick online form. Let us know if you have a local Kerman license!</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex shrink-0 items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg">Pay Booth Fee</h3>
                  <p className="text-brand-dark/70 text-sm font-sans mb-1">Secure your spot with a transparent fee (Starts at $35, varies by venue/license).</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex shrink-0 items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg">Get Layout & Setup</h3>
                  <p className="text-brand-dark/70 text-sm">Receive the event layout one week prior, load in, and get ready for a great day.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Policies */}
          <section className="bg-brand-dark text-white p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-brand-yellow" size={24} />
              <h2 className="text-2xl font-display font-bold">Vendor Policies</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-brand-yellow mb-2 text-lg">Cancellations & Refunds</h3>
                <p className="text-white/80 text-sm leading-relaxed font-sans">
                  All booth fees are strictly <span className="font-bold text-white">non-refundable</span>. By making a payment, you secure your spot and block other vendors from taking it.
                </p>
              </div>
              <div className="h-px bg-white/10 w-full"></div>
              <div>
                <h3 className="font-bold text-brand-yellow mb-2 text-lg">Rescheduling</h3>
                <ul className="space-y-3 text-sm text-white/80 font-sans">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong className="text-white">Free transfers</strong> if the event is rescheduled on the host's end.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <span><strong className="text-white">$10.83 reschedule fee</strong> if requested 2 weeks or more before the event.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-brand-coral shrink-0 mt-0.5" />
                    <span><strong className="text-white">Non-refundable</strong> and no changes allowed if requested less than 2 weeks before the event.</span>
                  </li>
                </ul>
              </div>
              <div className="h-px bg-white/10 w-full mt-6 mb-6"></div>
              <div>
                <h3 className="font-bold text-brand-yellow mb-2 text-lg">Vendor Placement</h3>
                <p className="text-white/80 text-sm leading-relaxed font-sans mt-2">
                  We allow multiple vendors of a category and let everyone know, and we work hard to provide a fair layout for everyone.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Col - Sticky application card */}
        <div className="lg:sticky lg:top-28">
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-6">
              <div>
                <p className="text-sm font-medium text-brand-dark/60 uppercase tracking-widest mb-1">Standard Booth</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-brand-dark/50 mr-1 italic">Starts at</span>
                  <span className="text-4xl font-display font-bold">$35</span>
                </div>
              </div>
              <span className="bg-brand-coral/10 text-brand-coral text-xs font-bold px-2 py-1 rounded-md shrink-0">Selling Fast</span>
            </div>
            
            <ul className="space-y-4 mb-8 font-sans">
              <li className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                <span>10x10 Space (You provide canopy/tables)</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                <span>Kerman Business License Discount</span>
              </li>
              <li className="flex items-start gap-3 text-sm italic">
                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                <span>Location-based pricing applies</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-brand-teal shrink-0" />
                <span>Social Media Shoutout</span>
              </li>
            </ul>

            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest text-brand-dark/50 uppercase mb-3 text-center">Accepted Payments</p>
              <div className="flex justify-center gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                {/* Simulated payment badges */}
                <div className="bg-[#005ea6] text-white text-[10px] py-1 px-2 rounded-sm font-bold">Venmo</div>
                <div className="bg-[#0079C1] text-white text-[10px] py-1 px-2 rounded-sm font-bold">PayPal</div>
                <div className="bg-[#00D632] text-white text-[10px] py-1 px-2 rounded-sm font-bold">Cash App</div>
                <div className="bg-[#741bd9] text-white text-[10px] py-1 px-2 rounded-sm font-bold">Zelle</div>
              </div>
            </div>

            <Button className="w-full text-lg py-4" href="#application-form">
              Apply Now <FormInput className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-center text-xs text-brand-dark/50 mt-4">Spots are limited. Deadline: May 9th.</p>
          </div>
        </div>
      </div>

      {/* Actual Form Section */}
      <div id="application-form" className="mt-20 pt-20 border-t border-gray-200">
        <h2 className="text-3xl font-display font-bold text-center mb-10">Vendor Application</h2>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Business Name*</label>
                <input type="text" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Contact Name*</label>
                <input type="text" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all" required />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email*</label>
                <input type="email" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone*</label>
                <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Instagram Handle</label>
              <input type="text" placeholder="@yourbrand" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">What do you sell?*</label>
              <textarea rows={3} className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none" required></textarea>
            </div>

            <Button type="button" className="w-full">Submit Application</Button>
            <p className="text-center text-xs text-brand-dark/50 mt-4">We will contact you via email within 48 hours for approval and payment instructions.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
