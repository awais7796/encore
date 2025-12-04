import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" h-6 bg-[#040404] text-[#f5f5f5] mt-16 pt-16 pb-8 px-8 border-t border-white/10 sm:px-6 sm:pt-12 sm:pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 className="uppercase tracking-[0.15em] text-sm text-white/60 mb-2">
              Encore
            </h3>
            <p className="text-white/60 leading-relaxed mb-4">
              Building innovative web solutions that drive business growth and
              success.
            </p>
            <div className="flex gap-3 text-xl">
              <a href="#" aria-label="Facebook" className="hover:opacity-75">
                📘
              </a>
              <a href="#" aria-label="Twitter" className="hover:opacity-75">
                🐦
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:opacity-75">
                💼
              </a>
              <a href="#" aria-label="Instagram" className="hover:opacity-75">
                📷
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-sm text-white/60 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-sm text-white/60 mb-3">
              Services
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>Web Development</li>
              <li>Mobile Design</li>
              <li>E-Commerce</li>
              <li>Cloud Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase tracking-[0.15em] text-sm text-white/60 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-white/60">
              <li>📧 hello@encoresolutions.com</li>
              <li>📞 +1 0000000</li>
              <li>📍 Amravati, Maharashtra</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm tracking-[0.1em]">
          <p>&copy; 2025 Encore Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
