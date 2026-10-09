import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    number: '01',
    title: 'Search Engine Optimization',
    description:
      'Improve your search visibility and help the right people discover your business.',
    icon: '↗',
  },
  {
    number: '02',
    title: 'Pay Per Click Advertising',
    description:
      'Reach targeted audiences through carefully planned paid advertising campaigns.',
    icon: '◎',
  },
  {
    number: '03',
    title: 'Social Media Marketing',
    description:
      'Build your online community and create content that connects with your audience.',
    icon: '✳',
  },
  {
    number: '04',
    title: 'Email Marketing',
    description:
      'Build stronger customer relationships with useful, engaging email campaigns.',
    icon: '@',
  },
]

function Services() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="support-page">
        <nav className="support-navbar">
            <Link to="/" className="support-logo">
                ✦ WizardZ
            </Link>

            <div className="support-nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                {/* <Link to="/services">Services</Link> */}
                <a href="#cases">Use Cases</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
            </div>

            <Link to="/about" className="support-nav-button">
                About Us ↗
            </Link>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
                <div className="mobile-menu">

                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
                    {/* <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link> */}

                    {/* <a href="#about" onClick={() => setMenuOpen(false)}>
                        About us
                    </a>

                    <a href="#services" onClick={() => setMenuOpen(false)}>
                        Services
                    </a> */}

                    <a href="#cases" onClick={() => setMenuOpen(false)}>
                        Use Cases
                    </a>

                    <a href="#pricing" onClick={() => setMenuOpen(false)}>
                        Pricing
                    </a>

                    <a href="#blog" onClick={() => setMenuOpen(false)}>
                        Blog
                    </a>

                    <button className="mobile-quote">
                        Request a quote ↗
                    </button>

                </div>
            )}
        </nav>

        <section className="support-hero services-hero">
            <span className="section-tag">WHAT WE DO</span>

            <h1>
                Digital services
                <br />
                built for <span>growth.</span>
            </h1>

            <p>
                Explore the services we use to help businesses
                improve visibility, connect with customers, and
                grow their digital presence.
            </p>
        </section>

        <section className="all-services">
            <div className="support-section-heading">
                <h2>How we help your business</h2>
                <p>Practical solutions for your digital goals.</p>
            </div>

            <div className="all-services-grid">
                {services.map((service) => (
                <article className="all-service-card" key={service.number}>
                    <div className="all-service-top">
                        <span>{service.number}</span>
                        <div className="all-service-icon">{service.icon}</div>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <Link to="/about">
                        Learn about us ↗
                    </Link>
                </article>
            ))}
            </div>
        </section>

        <section className="support-cta">
            <h2>Let's make things happen.</h2>
            <p>
                Every business has different goals. Let's explore
                what the right digital approach could look like.
            </p>
            <Link to="/about" className="support-primary-button">
                Meet WizardZ ↗
            </Link>
        </section>

        <footer className="support-footer">
            <Link to="/" className="support-logo">✦ WizardZ</Link>
            <p>Creative ideas. Meaningful growth.</p>
            <Link to="/about">About WizardZ ↗</Link>
        </footer>
    </div>
  )
}

export default Services