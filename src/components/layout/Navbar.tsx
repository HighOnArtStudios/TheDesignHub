import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Vendor App", href: "/vendor" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-brand-coral text-white flex items-center justify-center font-display font-bold text-xl group-hover:rotate-12 transition-transform shadow-sm">
            D
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-brand-dark">
            The Design Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-medium text-sm transition-colors hover:text-brand-coral",
                location.pathname === link.href
                  ? "text-brand-coral"
                  : "text-brand-dark/70"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-dark text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        )}
      >
        <div className="p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-lg font-medium py-2 transition-colors",
                location.pathname === link.href
                  ? "text-brand-coral"
                  : "text-brand-dark"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-coral text-white text-center py-3 rounded-xl font-medium mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
