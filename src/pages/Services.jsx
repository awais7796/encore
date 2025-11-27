import './Services.css';
import { openCal } from '../lib/cal';

function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and more.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Scalable Architecture']
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Beautiful, responsive designs that work perfectly on all devices and screen sizes.',
      features: ['Mobile Optimization', 'Touch-Friendly', 'Cross-Browser', 'Progressive Web Apps']
    },
    {
      icon: '🛠️',
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard']
    },
    {
      icon: '☁️',
      title: 'Cloud Integration',
      description: 'Deploy and scale your applications on cloud platforms with high availability.',
      features: ['AWS/Azure/GCP', 'Auto Scaling', 'CDN Setup', 'Database Management']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and 24/7 support to keep your site running smoothly.',
      features: ['Regular Updates', 'Security Patches', 'Performance Monitoring', '24/7 Support']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive web solutions tailored to your business needs</p>
        </div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss your project and find the perfect solution for your needs</p>
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={openCal}
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;

