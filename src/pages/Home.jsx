import { WavyBackground } from '../components/ui/wavy-background'
import { Link } from 'react-router-dom'
import { openCal } from '../lib/cal'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <WavyBackground
          containerClassName="hero-wavy"
          className="hero-overlay"
          colors={[
            'rgba(255,255,255,0.35)',
            'rgba(255,255,255,0.15)',
            'rgba(255,255,255,0.25)',
          ]}
          waveOpacity={0.45}
          backgroundFill="#030303"
          blur={35}
          speed="slow"
        >
          <p className="eyebrow">Encore Studio — Web Solutions</p>
          <h1 className="hero-title">
            Web experiences, engineered with intention.
          </h1>
          <p className="hero-subtitle">
            We collaborate with ambitious founders to design, build, and scale
            digital products that feel effortless on every device.
          </p>
          <div className="hero-buttons">
            <button type="button" className="btn btn-primary" onClick={openCal}>
              Book a call
            </button>
            <Link to="/services" className="btn btn-secondary">
              Explore services
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <span className="meta-label">Focus</span>
              <span className="meta-value">Web & product engineering</span>
            </div>
            <div>
              <span className="meta-label">Response time</span>
              <span className="meta-value">&lt; 24 hours</span>
            </div>
          </div>
        </WavyBackground>
      </section>

      <section className="features">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Lean, deliberate, measurable.</h2>
        </div>
        <div className="features-grid">
          <article className="feature-card">
            <span className="feature-id">01</span>
            <h3>Strategy & architecture</h3>
            <p>Systems designed for scale, resilience, and clarity.</p>
          </article>
          <article className="feature-card">
            <span className="feature-id">02</span>
            <h3>Interfaces & interactions</h3>
            <p>Minimal layouts with purposeful motion and hierarchy.</p>
          </article>
          <article className="feature-card">
            <span className="feature-id">03</span>
            <h3>Engineering & launch</h3>
            <p>Robust frontends, automated pipelines, measurable outcomes.</p>
          </article>
          <article className="feature-card">
            <span className="feature-id">04</span>
            <h3>Care & iteration</h3>
            <p>Lifecycle support, optimization, and ongoing partnerships.</p>
          </article>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Availability</p>
            <h2>Next sprint opens December 9</h2>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-large"
            onClick={openCal}
          >
            Reserve a slot
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home

