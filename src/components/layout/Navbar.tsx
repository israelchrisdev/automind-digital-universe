import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Reviews", href: "/reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [session, setSession] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check for auth session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setSession(session);
      }
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-automind-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold gradient-text">
                AutoMind
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-automind-purple border-b-2 border-automind-purple"
                    : "text-foreground hover:text-automind-purple"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
            <Button
              asChild
              className="btn-primary"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-automind-purple focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 pl-3 pr-4 text-base font-medium rounded-md ${
                  location.pathname === item.href
                    ? "bg-automind-purple/10 text-automind-purple"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-automind-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4">
              <Button
                asChild
                className="w-full btn-primary"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
