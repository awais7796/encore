import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { openCal } from "../lib/cal";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleBookCall = () => {
    openCal();
    closeMenu();
  };

  return (
    <nav className="sticky top-0 z-[1000] backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#f8f8f8] text-xl font-semibold tracking-[0.08em] uppercase"
        >
          <span className="inline-block">Encore</span>
        </Link>

        {/* Desktop Menu */}
        <div
          className={`flex items-center gap-7 transition-transform duration-300 md:static md:flex-row md:translate-y-0 ${
            isMenuOpen
              ? "fixed inset-x-0 top-[70px] bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-start px-6 py-8 gap-5 translate-y-0"
              : "hidden md:flex"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "Contact", path: "/contact" },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.path}
              onClick={closeMenu}
              className={`uppercase text-sm tracking-[0.05em] transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={handleBookCall}
            className="rounded-full border border-white/20 bg-transparent text-white text-sm tracking-[0.08em] uppercase py-2.5 px-6 hover:bg-white hover:text-black transition-colors duration-200 w-full md:w-auto text-center"
          >
            Book a Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="flex flex-col gap-1 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
          <span className="w-6 h-[2px] bg-white rounded"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
