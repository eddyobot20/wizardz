import { useState } from "react";
import { Link } from "react-router-dom";

function About() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="support-page">
        <nav className="support-navbar">
            <Link to="/" className="support-logo">
                ✦ WizardZ
            </Link>

            <div className="support-nav-links">
                <Link to="/">Home</Link>
                {/* <Link to="/about">About us</Link> */}
                <Link to="/services">Services</Link>
                <a href="#cases">Use Cases</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
            </div>

            <Link to="/services" className="support-nav-button">
                Explore Services ↗
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
                    {/* <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link> */}
                    <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>

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

        <section className="support-hero">
            <span className="section-tag">ABOUT WIZARDZ</span>

            <h1>
                We turn digital ideas
                <br />
                into <span>real growth.</span>
            </h1>

            <p>
                We help businesses build their online presence,
                connect with the right audience, and turn ideas
                into meaningful digital experiences.
            </p>

            <Link to="/services" className="support-primary-button">
                Discover Our Services ↗
            </Link>
        </section>

        <section className="about-intro">
            <div>
            <span className="section-tag">WHO WE ARE</span>
            <h2>Creative thinking. Strategic action.</h2>
            </div>

            <p>
                WizardZ is a digital marketing agency focused on
                helping businesses grow through thoughtful strategy,
                creative content, and effective online campaigns.
                We believe good digital experiences should look
                great and deliver real value.
            </p>
        </section>

        <section className="about-values">
            <article className="value-card">
                <span>01</span>
                <h3>Our Mission</h3>
                <p>
                    To help businesses reach more people and grow
                    through effective digital marketing.
                </p>
            </article>

            <article className="value-card">
                <span>02</span>
                <h3>Our Vision</h3>
                <p>
                    To make digital opportunities more accessible
                    through creative and practical solutions.
                </p>
            </article>

            <article className="value-card">
                <span>03</span>
                <h3>Our Approach</h3>
                <p>
                    We combine creativity, strategy, and continuous
                    improvement to support business goals.
                </p>
            </article>
        </section>

        <section className="support-cta">
            <h2>Ready to grow your business?</h2>
            <p>Let's find the right digital strategy for you.</p>
            <Link to="/services" className="support-primary-button">
                View Our Services ↗
            </Link>
        </section>

        <footer className="support-footer">
            <Link to="/" className="support-logo">✦ WizardZ</Link>
            <p>Creative ideas. Meaningful growth.</p>
            <Link to="/services">Explore Services ↗</Link>
        </footer>
    </div>
  )
}

export default About