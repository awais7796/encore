import './Testimonials.css';
import { openCal } from '../lib/cal';

function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: '👩‍💼',
      rating: 5,
      text: 'WebDev Solutions transformed our online presence. Their team delivered a stunning website that increased our conversions by 40%. Professional, responsive, and truly innovative.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, E-Commerce Plus',
      image: '👨‍💻',
      rating: 5,
      text: 'Outstanding work! They built our e-commerce platform from scratch and it\'s been running flawlessly. The attention to detail and customer support is exceptional.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Growth Co.',
      image: '👩‍🎨',
      rating: 5,
      text: 'Working with WebDev Solutions was a game-changer. They understood our vision and brought it to life with a beautiful, user-friendly website. Highly recommend!'
    },
    {
      name: 'David Thompson',
      role: 'CTO, Innovation Labs',
      image: '👨‍🔬',
      rating: 5,
      text: 'The team\'s technical expertise is impressive. They built a scalable solution that handles our growing traffic without any issues. Top-notch development work!'
    },
    {
      name: 'Lisa Anderson',
      role: 'Owner, Boutique Store',
      image: '👩‍💼',
      rating: 5,
      text: 'I was amazed by how quickly they delivered our website. The design is modern, the functionality is perfect, and the mobile experience is outstanding. Thank you!'
    },
    {
      name: 'James Wilson',
      role: 'Director, Digital Agency',
      image: '👨‍💼',
      rating: 5,
      text: 'Professional, reliable, and creative. WebDev Solutions exceeded our expectations. They\'re now our go-to partner for all web development projects.'
    }
  ];

  return (
    <div className="testimonials-page">
      <section className="testimonials-hero">
        <div className="container">
          <h1>What Our Clients Say</h1>
          <p>Don't just take our word for it - hear from our satisfied clients</p>
        </div>
      </section>

      <section className="testimonials-content">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {testimonial.image}
                  </div>
                  <div className="testimonial-info">
                    <h3>{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-cta">
        <div className="container">
          <h2>Ready to Join Our Happy Clients?</h2>
          <p>Let's create something amazing together</p>
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={openCal}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;

