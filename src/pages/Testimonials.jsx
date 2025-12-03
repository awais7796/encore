import { openCal } from "../lib/cal";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "👩‍💼",
      rating: 5,
      text: "WebDev Solutions transformed our online presence. Their team delivered a stunning website that increased our conversions by 40%. Professional, responsive, and truly innovative.",
    },
    {
      name: "Michael Chen",
      role: "Founder, E-Commerce Plus",
      image: "👨‍💻",
      rating: 5,
      text: "Outstanding work! They built our e-commerce platform from scratch and it's been running flawlessly. The attention to detail and customer support is exceptional.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, Growth Co.",
      image: "👩‍🎨",
      rating: 5,
      text: "Working with WebDev Solutions was a game-changer. They understood our vision and brought it to life with a beautiful, user-friendly website. Highly recommend!",
    },
    {
      name: "David Thompson",
      role: "CTO, Innovation Labs",
      image: "👨‍🔬",
      rating: 5,
      text: "The team's technical expertise is impressive. They built a scalable solution that handles our growing traffic without any issues. Top-notch development work!",
    },
    {
      name: "Lisa Anderson",
      role: "Owner, Boutique Store",
      image: "👩‍💼",
      rating: 5,
      text: "I was amazed by how quickly they delivered our website. The design is modern, the functionality is perfect, and the mobile experience is outstanding. Thank you!",
    },
    {
      name: "James Wilson",
      role: "Director, Digital Agency",
      image: "👨‍💼",
      rating: 5,
      text: "Professional, reliable, and creative. WebDev Solutions exceeded our expectations. They're now our go-to partner for all web development projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-6 py-16 sm:px-4 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-12 text-left">
        <h1 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold mb-4">
          What Our Clients Say
        </h1>
        <p className="text-[var(--muted)]">
          Don't just take our word for it — hear from our satisfied clients
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 sm:p-6 rounded-2xl border border-[var(--border)] bg-white/5 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white/10 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-semibold text-lg m-0">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="text-white/60">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto mt-16 text-center p-10 sm:p-6 border border-[var(--border)] rounded-[28px] bg-[var(--bg-alt)]">
        <h2 className="text-3xl font-semibold mb-2">
          Ready to Join Our Happy Clients?
        </h2>
        <p className="text-[var(--muted)] mb-6">
          Let's create something amazing together
        </p>
        <button
          type="button"
          onClick={openCal}
          className="rounded-full bg-[var(--text)] text-[var(--bg)] py-3 px-8 font-medium uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-1"
        >
          Get Started Today
        </button>
      </section>
    </div>
  );
}

export default Testimonials;
