import { useState } from "react";
import { openCal } from "../lib/cal";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-[var(--bg)] text-[var(--text)]">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-[clamp(2.5rem,6vw,3.8rem)] font-semibold mb-4">
          Get In Touch
        </h1>
        <p className="text-[var(--muted)]">
          Let's discuss your project and bring your vision to life
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact Info */}
          <div className="bg-white/5 border border-[var(--border)] rounded-3xl p-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-[var(--muted)] mb-8">
              We're here to help! Reach out to us through any of these channels.
            </p>

            {[
              { icon: "📧", title: "Email", info: "hello@encoresolutions.com" },
              { icon: "📞", title: "Phone", info: "+1 (555) 123-4567" },
              {
                icon: "📍",
                title: "Address",
                info: "123 Tech Street\nAmravati, MH",
              },
              {
                icon: "⏰",
                title: "Business Hours",
                info: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 pb-6 mb-6 border-b border-white/10 last:border-b-0 last:pb-0 last:mb-0`}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="uppercase text-sm tracking-[0.15em] mb-1 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-white/70 whitespace-pre-line leading-relaxed">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className="bg-white/5 border border-[var(--border)] rounded-3xl p-10"
            id="contact-form"
          >
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {[
                {
                  id: "name",
                  label: "Full Name *",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "email",
                  label: "Email Address *",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  id: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "+1 (555) 123-4567",
                },
              ].map((input) => (
                <div key={input.id} className="flex flex-col">
                  <label
                    htmlFor={input.id}
                    className="text-sm tracking-[0.15em] uppercase text-[var(--muted)] mb-1"
                  >
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    value={formData[input.id]}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    required={input.label.includes("*")}
                    className="w-full p-3 rounded-xl bg-black/20 border border-white/10 text-[var(--text)] focus:outline-none focus:border-white/40"
                  />
                </div>
              ))}

              {/* Select */}
              <div className="flex flex-col">
                <label
                  htmlFor="service"
                  className="text-sm tracking-[0.15em] uppercase text-[var(--muted)] mb-1"
                >
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-black/20 border border-white/10 text-[var(--text)] focus:outline-none focus:border-white/40"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-design">Mobile-First Design</option>
                  <option value="ecommerce">E-Commerce Solutions</option>
                  <option value="cloud">Cloud Integration</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
              </div>

              {/* Textarea */}
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm tracking-[0.15em] uppercase text-[var(--muted)] mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full p-3 rounded-xl bg-black/20 border border-white/10 text-[var(--text)] min-h-[140px] resize-y focus:outline-none focus:border-white/40"
                ></textarea>
              </div>

              {submitStatus === "success" && (
                <div className="rounded-xl p-4 bg-emerald-500/15 border border-emerald-400/40 text-emerald-200 text-center">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 rounded-full bg-[var(--text)] text-[var(--bg)] py-3 px-10 font-medium uppercase tracking-[0.2em] transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Book Call Section */}
      <section className="max-w-6xl mx-auto mt-16 p-10 rounded-[28px] border border-[var(--border)] bg-[var(--bg-alt)] text-center">
        <h2 className="text-2xl font-semibold mb-2">Prefer to Talk?</h2>
        <p className="text-[var(--muted)] mb-6">
          Schedule a free consultation call with our team
        </p>
        <button
          type="button"
          onClick={openCal}
          className="rounded-full bg-[var(--text)] text-[var(--bg)] py-3 px-8 font-medium uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-1"
        >
          Book a Call
        </button>
      </section>
    </div>
  );
}

export default Contact;
