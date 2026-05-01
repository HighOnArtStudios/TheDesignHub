import { Link } from "react-router-dom";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 px-6 lg:px-8 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4 lg:pr-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-coral text-white flex items-center justify-center font-display font-bold text-lg">
              D
            </div>
            <span className="font-display font-bold tracking-tight text-xl">
              The Design Hub
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Building a creative space in Kerman, CA. We host community events, vendor markets, and creative experiences to bring people together.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/events" className="hover:text-brand-yellow transition-colors">Upcoming Events</Link>
            </li>
            <li>
              <Link to="/vendor" className="hover:text-brand-yellow transition-colors">Become a Vendor</Link>
            </li>
            <li>
              <Link to="/sponsors" className="hover:text-brand-yellow transition-colors">Sponsorship</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-brand-yellow transition-colors">Our Story</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-brand-coral shrink-0" />
              <a href="mailto:Highonartstudios@gmail.com" className="hover:text-brand-yellow transition-colors">
                Highonartstudios@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brand-coral shrink-0" />
              <a href="tel:5595159558" className="hover:text-brand-yellow transition-colors">
                (559) 515-9558
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-coral shrink-0" />
              <span>Kerman / Fresno Area, CA</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg mb-4">Follow Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            Stay updated on our latest events and creative projects.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/thedesignhubstudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors">
              <Instagram size={20} />
            </a>
            {/* TikTok Icon placeholder (lucide doesn't have tiktok natively, using a generic play or user icon could work, or a custom svg. We'll skip for now or use a word mark) */}
            <a href="#" className="h-10 px-4 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-coral transition-colors text-sm font-medium">
              TikTok
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-xs">
        <p>&copy; {new Date().getFullYear()} The Design Hub Studios. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/vendor" className="hover:text-white transition-colors">Vendor Policies</Link>
          <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
