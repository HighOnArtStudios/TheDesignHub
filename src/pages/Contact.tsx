import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Contact() {
  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-dark mb-6">Let's Connect</h1>
        <p className="text-lg md:text-xl text-brand-dark/70 max-w-2xl mx-auto">
          Have a question about an upcoming market? Want to collaborate? Drop us a message and we'll get back to you soon.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-dark/5">
            <h2 className="text-2xl font-display font-bold mb-8">Get In Touch</h2>
            
            <div className="space-y-6">
              <a href="mailto:Highonartstudios@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-coral group-hover:bg-brand-coral group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-dark/50 font-medium">Email Us</p>
                  <p className="font-medium text-brand-dark">Highonartstudios@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:5595159558" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-dark transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-dark/50 font-medium">Call/Text Us</p>
                  <p className="font-medium text-brand-dark">(559) 515-9558</p>
                </div>
              </a>

              <a href="https://instagram.com/thedesignhubstudios" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                  <Instagram size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-dark/50 font-medium">Follow on Instagram</p>
                  <p className="font-medium text-brand-dark">@thedesignhubstudios</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-brand-blue">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-brand-dark/50 font-medium">Service Area</p>
                  <p className="font-medium text-brand-dark">Kerman & Fresno County, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-sm text-brand-dark/70 leading-relaxed">
                <strong className="text-brand-dark">Office Hours:</strong><br />
                Monday - Friday: 9:00 AM - 5:00 PM<br />
                Response time is typically within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        <div>
          <form className="bg-white p-8 rounded-3xl shadow-sm border border-brand-dark/5 space-y-6">
            <h2 className="text-2xl font-display font-bold mb-6">Send a Message</h2>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-coral transition-all" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-coral transition-all" required />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <select className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-coral transition-all">
                <option>General Inquiry</option>
                <option>Vendor Question</option>
                <option>Sponsorship</option>
                <option>Event Feedback</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white outline-none focus:ring-2 focus:ring-brand-coral transition-all resize-none" required></textarea>
            </div>

            <Button type="button" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
