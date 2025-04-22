import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 dark:from-automind-dark dark:to-black">
      <div className="container-custom pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold gradient-text">AutoMind</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Leading tech company creating innovative software and AI-powered robotic 
              technologies to boost daily human productivity across all sectors.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/officialautomind"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-automind-purple transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Portfolio", "/portfolio"],
                ["Blog", "/blog"],
                ["Reviews", "/reviews"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    to={url}
                    className="text-gray-600 hover:text-automind-purple transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                ["Business Software", "/services#business"],
                ["Agriculture Tech", "/services#agriculture"],
                ["Real Estate Solutions", "/services#real-estate"],
                ["AI-Powered Robots", "/services#ai-robots"],
                ["AI Smartphones", "/services#ai-smartphones"],
                ["AI Vehicles", "/services#ai-vehicles"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link
                    to={url}
                    className="text-gray-600 hover:text-automind-purple transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="flex-shrink-0 text-automind-purple" />
                <span className="text-gray-600">
                  Akure, Ondo State, Nigeria
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="flex-shrink-0 text-automind-purple" />
                <a
                  href="tel:+2348161219685"
                  className="text-gray-600 hover:text-automind-purple transition-colors"
                >
                  +234 816 121 9685
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="flex-shrink-0 text-automind-purple" />
                <a
                  href="mailto:info@automind.com"
                  className="text-gray-600 hover:text-automind-purple transition-colors"
                >
                  info@automind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} AutoMind. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link
                to="/privacy"
                className="text-sm text-gray-600 hover:text-automind-purple transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-600 hover:text-automind-purple transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
