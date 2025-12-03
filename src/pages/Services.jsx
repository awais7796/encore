import { openCal } from "../lib/cal";

function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Custom web applications built with modern technologies like React, Node.js, and more.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Scalable Architecture",
      ],
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description:
        "Beautiful, responsive designs that work perfectly on all devices and screen sizes.",
      features: [
        "Mobile Optimization",
        "Touch-Friendly",
        "Cross-Browser",
        "Progressive Web Apps",
      ],
    },
    {
      icon: "🛠️",
      title: "E-Commerce Solutions",
      description:
        "Complete e-commerce platforms with payment integration and inventory management.",
      features: [
        "Payment Gateway",
        "Inventory System",
        "Order Management",
        "Analytics Dashboard",
      ],
    },
    {
      icon: "☁️",
      title: "Cloud Integration",
      description:
        "Deploy and scale your applications on cloud platforms with high availability.",
      features: [
        "AWS/Azure/GCP",
        "Auto Scaling",
        "CDN Setup",
        "Database Management",
      ],
    },
    {
      icon: "🔧",
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and 24/7 support to keep your site running smoothly.",
      features: [
        "Regular Updates",
        "Security Patches",
        "Performance Monitoring",
        "24/7 Support",
      ],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive and engaging user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] px-6 py-16 sm:px-4 sm:py-12">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-12 text-left">
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold mb-4">
          Our Services
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">
          Comprehensive web solutions tailored to your business needs
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 sm:p-6 rounded-2xl border border-[var(--border)] bg-gradient-to-br from-white/[0.03] to-transparent flex flex-col gap-5 min-h-[320px] hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="text-3xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-2 text-white/75 text-[0.95rem]"
                  >
                    <span className="text-white/50 text-sm">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto mt-16 text-center p-10 sm:p-6 border border-[var(--border)] rounded-3xl bg-[var(--bg-alt)]">
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-semibold mb-3">
          Ready to Get Started?
        </h2>
        <p className="text-[var(--muted)] mb-6">
          Let's discuss your project and find the perfect solution for your
          needs
        </p>
        <button
          type="button"
          onClick={openCal}
          className="rounded-full bg-[var(--text)] text-[var(--bg)] py-3 px-8 font-medium uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-1"
        >
          Contact Us Today
        </button>
      </section>
    </div>
  );
}

export default Services;
