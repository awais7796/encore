import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { WavyBackground } from "../components/ui/wavy-background";
import { openCal } from "../lib/cal";
import Services from "./Services";
import Contact from "./Contact";
import {
  TextHoverEffect,
  FooterBackgroundGradient,
} from "../components/hover-footer.jsx";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const { pathname, hash } = location;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => scrollToId(id), 50);
      return;
    }
    const routeToId = {
      "/services": "services",
      "/contact": "contact",
      "/testimonials": "testimonials",
      "/": null,
    };
    const targetId = routeToId[pathname];
    if (targetId) {
      if (pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToId(targetId), 80);
      } else {
        setTimeout(() => scrollToId(targetId), 30);
      }
    }
  }, [location, navigate]);

  return (
    <div className="min-h-screen flex flex-col gap-20 px-6 pb-24 bg-[var(--bg)] scroll-smooth">
      {/* Hero Section */}
      <section id="hero" className="-mx-6 sm:-mx-4 scroll-mt-[72px]">
        <WavyBackground
          containerClassName="relative min-h-screen overflow-hidden bg-[var(--bg)] isolate"
          className="relative z-10 flex flex-col gap-6 max-w-[760px] text-[var(--text)] p-[clamp(2.5rem,6vw,6rem)] sm:p-10"
          colors={[
            "rgba(255,255,255,0.35)",
            "rgba(255,255,255,0.15)",
            "rgba(255,255,255,0.25)",
          ]}
          waveOpacity={0.45}
          backgroundFill="#030303"
          blur={35}
          speed="slow"
        >
          <p className="uppercase tracking-[0.2em] text-[0.85rem] text-[var(--muted)]">
            Encore Studio — Web Solutions
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] font-semibold">
            Web experiences, engineered with intention.
          </h1>
          <p className="text-[1.1rem] leading-[1.7] text-[var(--muted)] max-w-[540px]">
            We collaborate with ambitious founders to design, build, and scale
            digital products that feel effortless on every device.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={openCal}
              className="px-5 py-2.5 rounded-xl font-medium bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
            >
              Book a call
            </button>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl font-medium border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              Explore services
            </Link>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 mt-4 pt-6 border-t border-[var(--border)]">
            <div>
              <span className="uppercase tracking-[0.2em] text-[0.7rem] text-[var(--muted)]">
                Focus
              </span>
              <span className="block mt-1 text-[0.95rem] text-[var(--text)]">
                Web & product engineering
              </span>
            </div>
            <div>
              <span className="uppercase tracking-[0.2em] text-[0.7rem] text-[var(--muted)]">
                Response time
              </span>
              <span className="block mt-1 text-[0.95rem] text-[var(--text)]">
                &lt; 24 hours
              </span>
            </div>
          </div>
        </WavyBackground>
      </section>

      {/* Capabilities Section */}
      <section
        id="capabilities"
        className="max-w-[1200px] mx-auto flex flex-col gap-10 scroll-mt-[72px]"
      >
        <div className="space-y-2">
          <p className="uppercase tracking-[0.2em] text-[0.85rem] text-[var(--muted)]">
            Capabilities
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-[#f5f5f5]">
            Lean, deliberate, measurable.
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {[
            [
              "01",
              "Strategy & architecture",
              "Systems designed for scale, resilience, and clarity.",
            ],
            [
              "02",
              "Interfaces & interactions",
              "Minimal layouts with purposeful motion and hierarchy.",
            ],
            [
              "03",
              "Engineering & launch",
              "Robust frontends, automated pipelines, measurable outcomes.",
            ],
            [
              "04",
              "Care & iteration",
              "Lifecycle support, optimization, and ongoing partnerships.",
            ],
          ].map(([id, title, desc]) => (
            <article
              key={id}
              className="flex flex-col gap-3 min-h-[200px] p-7 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/5 to-transparent"
            >
              <span className="text-[0.9rem] text-[var(--muted)]">{id}</span>
              <h3 className="text-[1.3rem] text-[var(--text)] font-medium">
                {title}
              </h3>
              <p className="text-[var(--muted)] leading-[1.5]">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1200px] mx-auto scroll-mt-[72px]">
        <div className="flex justify-between items-center gap-6 flex-col md:flex-row p-10 rounded-[28px] border border-[var(--border)] bg-[var(--bg-alt)]">
          <div>
            <p className="uppercase tracking-[0.2em] text-[0.85rem] text-[var(--muted)]">
              Availability
            </p>
            <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] mt-1">
              Next sprint opens December 9
            </h2>
          </div>
          <button
            type="button"
            onClick={openCal}
            className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
          >
            Reserve a slot
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-[72px]">
        <Services />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-[72px]">
        <div className="space-y-2">
          <p className="uppercase tracking-[0.2em] text-[0.85rem] text-[var(--muted)]">
            Testimonials
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] text-[#f5f5f5]">
            What partners say
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-6">
          <blockquote className="p-6 border border-[var(--border)] rounded-2xl bg-white/5 text-[var(--muted)] italic">
            “They turned our idea into a product that users love. Fast and
            thoughtful.” — Product Lead, Acme Co.
          </blockquote>
          <blockquote className="p-6 border border-[var(--border)] rounded-2xl bg-white/5 text-[var(--muted)] italic">
            “Reliable engineering and clear communication throughout the
            project.” — Founder, Bright Startup
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-[72px]">
        <Contact />
      </section>
      <section
        id="footer"
        className="relative h-[200px] flex items-center justify-center"
      >
        <TextHoverEffect text="Encore Studio" duration={2} />
        <FooterBackgroundGradient />
      </section>
    </div>
  );
}

export default Home;
