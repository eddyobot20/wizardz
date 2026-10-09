import { Link } from "react-router-dom"
import { useState } from 'react'
import heroImage from './assets/heroimg.PNG'

function Home() {
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
    <div className="home">
        <nav className="navbar">
            <div className="logo">
                ✦ WizardZ
            </div>

            <div className="nav-links">
                {/* <Link to= "/">Home</Link> */}
                <Link to= "/about">About us</Link>
                <Link to= "/services">Services</Link>
                {/* <a href="#about">About us</a> */}
                {/* <a href="#services">Services</a> */}
                <a href="#cases">Use Cases</a>
                <a href="#pricing">Pricing</a>
                <a href="#blog">Blog</a>
            </div>

            <button className="quote-button">
                Request a quote ↗
            </button>

            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu">
                {menuOpen ? '✕' : '☰'}
            </button>

            {menuOpen && (
                <div className="mobile-menu">

                    {/* <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link> */}
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About us</Link>
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

        <section className="hero">

            <div className="hero-text">

            <span className="hero-tag">
                DIGITAL GROWTH PARTNER
            </span>

            <h1>
                Navigating the
                <br />
                Digital Landscape
                <br />
                <span>for Success</span>
            </h1>

            <p>
                Our digital marketing agency helps businesses grow and
                succeed online through a range of services including SEO,
                PPC, social media marketing, and content creation.
            </p>

                <div className="hero-buttons">

                    <button className="primary-button">
                        Book a Consultation
                        <span>↗</span>
                    </button>

                    <button className="secondary-button">
                        View Our Services
                        <span>▶</span>
                    </button>

                </div>

            </div>


            <div className="hero-image">
                <img src={heroImage} alt="Digital marketing" />
            </div>

        </section>

        <section className="clients">
            <div className="client-logo">amazon</div>
            <div className="client-logo">dribbble</div>
            <div className="client-logo">HubSpot</div>
            <div className="client-logo">Notion</div>
            <div className="client-logo">NETFLIX</div>
            <div className="client-logo">zoom</div>
        </section>

        <section className="services">

            <div className="section-heading">
                <span className="section-tag">
                OUR SERVICES
                </span>

                <h2>
                Solutions to Grow Your Business
                </h2>

                <p>
                We offer a range of services to help businesses
                thrive in the digital world.
                </p>
            </div>


            <div className="service-cards">
                <div className="service-card">

                    <div className="service-icon">
                        <span className="chart-icon">▥</span>
                    </div>

                    <h3>
                        Search Engine
                        <br />
                        Optimization
                    </h3>

                    <p>
                        Improve your rankings and
                        drive organic traffic.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>

                <div className="service-card">

                    <div className="service-icon">
                        <span className="cursor-icon">↖</span>
                    </div>

                    <h3>
                        Pay Per Click
                        <br />
                        Advertising
                    </h3>

                    <p>
                        Get targeted traffic and
                        increase conversions.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>


                {/* Card 3 */}
                <div className="service-card">

                    <div className="service-icon">
                        <span className="social-icon">●</span>
                    </div>

                    <h3>
                        Social Media
                        <br />
                        Marketing
                    </h3>

                    <p>
                        Engage your audience and
                        build your brand.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>

                <div className="service-card">

                    <div className="service-icon">
                        <span className="mail-icon">@</span>
                    </div>

                    <h3>
                        E-mail
                        <br />
                        Marketing
                    </h3>

                    <p>
                        Nurture leads and boost
                        customer retention.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>

            </div>

        </section>

        <section className="cta-banner">

            <div className="cta-content">

                <h2>
                    Let's Make Things Happen
                </h2>

                <p>
                    Contact us today to learn more about how our digital
                    marketing services can help your business grow.
                </p>

                <button className="cta-button">
                    Get Your Free Proposal
                    <span>↗</span>
                </button>

            </div>

            <div className="cta-graphic">
                <div className="lightbulb">
                    💡
                </div>
            </div>

        </section>

        <section className="results">

            <div className="results-heading">

                <div>
                    <span className="section-tag">
                        CASE STUDY
                    </span>

                    <h2>
                        Real Results from Real Clients
                    </h2>
                </div>

                <p>
                    Explore how we've helped businesses
                    achieve measurable growth.
                </p>

            </div>


            <div className="result-cards">

                {/* Result 1 */}
                <div className="result-card">

                    <div className="result-icon">
                        🛍️
                    </div>

                    <h3>
                        E-commerce Brand
                    </h3>

                    <strong>
                        +180%
                    </strong>

                    <p>
                        Increase in organic traffic
                        within 6 months.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>


                {/* Result 2 */}
                <div className="result-card">

                    <div className="result-icon">
                        💼
                    </div>

                    <h3>
                        SaaS Company
                    </h3>

                    <strong>
                        +250%
                    </strong>

                    <p>
                        Boost in leads through
                        PPC campaigns.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>


                {/* Result 3 */}
                <div className="result-card">

                    <div className="result-icon">
                        🏪
                    </div>

                    <h3>
                        Retail Business
                    </h3>

                    <strong>
                        +120%
                    </strong>

                    <p>
                        Revenue growth with email
                        marketing automation.
                    </p>

                    <a href="#">
                        Learn more <span>↗</span>
                    </a>

                </div>

            </div>

        </section>

        <section className="final-cta">

            <div className="final-cta-icon">
                ↗
            </div>

            <div className="final-cta-text">
                <h3>
                    Ready to take your digital presence to the next level?
                </h3>

                <p>
                    Partner with WizardZ and unlock your business potential.
                </p>
            </div>

            <button className="final-cta-button">
                Let's Talk
                <span>↗</span>
            </button>

        </section>

        <footer className="footer">

            <div className="footer-logo">
                ✦ WizardZ
            </div>

            <div className="footer-links">
                <a href="#">About us</a>
                <a href="#">Services</a>
                <a href="#">Use Cases</a>
                <a href="#">Pricing</a>
                <a href="#">Blog</a>
            </div>

            <div className="social-links">
                <a href="#">f</a>
                <a href="#">in</a>
                <a href="#">𝕏</a>
                <a href="#">◎</a>
            </div>

        </footer>
    
    </div>
  )
}

export default Home