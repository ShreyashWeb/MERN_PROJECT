import { useState } from "react";
import { FiCompass, FiHome, FiPenTool, FiShield, FiSearch } from "react-icons/fi";
import CardData from "../sampleData/cardData";

const HomeDetail = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  // Limit card list to top 3 featured spots for home page balance
  const featuredRetreats = CardData.slice(0, 3);

  return (
    <div className="wood-theme-body">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tagline">Premium Timber & Fine Slabs Catalog</span>
          <h1>Source the Finest Sustainable Wood & Timber</h1>
          <p>
            Welcome to the ultimate wood sanctuary. Discover high-density hardwoods, premium softwoods, 
            and unique exotic timber slabs curated for professional carpentry, construction, and design.
          </p>

          <form onSubmit={handleSearch} className="hero-search-bar">
            <input
              type="text"
              placeholder="Search teak, white oak, mahogany, or wood type..."
              className="hero-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="hero-search-btn">
              <FiSearch style={{ marginRight: '6px', verticalAlign: 'middle' }} />
              Search
            </button>
          </form>
        </div>
      </section>

      {/* 2. Core Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2>Premium Woodland Lumber Services</h2>
          <p>
            We supply high-grade lumber engineered for longevity, helping carpenters, furniture makers, 
            and home builders source the perfect wood.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiHome />
            </div>
            <h3>Premium Hardwoods</h3>
            <p>
              Dense species like Burma Teak, White Oak, and Mahogany. Excellent for durable flooring, outdoor decking, and cabinets.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiCompass />
            </div>
            <h3>High-Grade Softwoods</h3>
            <p>
              Resilient wood types like Cedar, Pine, and Douglas Fir. Perfect for general construction, panelling, and framing.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiPenTool />
            </div>
            <h3>Carpentry Wood Slabs</h3>
            <p>
              Naturally fallen and beautifully cured raw wood slabs. Handpicked to create high-end organic statement tables.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FiShield />
            </div>
            <h3>Sustained Forestry</h3>
            <p>
              We prioritize eco-friendly logging. For every mature timber tree harvested, we actively plant ten native saplings.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Wood Species Section */}
      <section className="wood-showcase-section">
        <div className="section-header">
          <h2>Featured Wood Species</h2>
          <p>
            Explore our curated catalog of raw and processed timber, each displaying unique grains, colors, and strength values.
          </p>
        </div>

        <div className="wood-grid">
          {featuredRetreats.map((retreat) => (
            <div key={retreat.id} className="wood-card">
              <img src={retreat.image} alt={retreat.title} className="wood-card-img" />
              <div className="wood-card-body">
                <span className="wood-card-category">{retreat.category}</span>
                <h3 className="wood-card-title">{retreat.title}</h3>
                <p className="wood-card-desc">{retreat.description}</p>
                <div className="wood-card-footer">
                  <span className="wood-card-price">{retreat.price}</span>
                  <button className="wood-card-btn" onClick={() => alert(`Inquiry for ${retreat.title} submitted!`)}>
                    Inquire Wood
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Brand Narrative Section */}
      <section className="wood-narrative-section">
        <div className="narrative-container">
          <div className="narrative-img-panel">
            <img 
              src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=800" 
              alt="Cozy Cabin in Forest" 
            />
            <div className="narrative-badge">
              <h4>100%</h4>
              <p>Certified Organic</p>
            </div>
          </div>

          <div className="narrative-text-panel">
            <span className="narrative-tag">Our Lumber Quality</span>
            <h2>Sourcing Premium Sustainable Timber & Supporting Forestry</h2>
            <p>
              We believe in wood sourcing that collaborates with the earth rather than conquering it. 
              Our timber products are processed from modular, locally-sourced woodland logs, 
              minimizing ecological footprint while maintaining absolute density and dry-moisture excellence.
            </p>

            <div className="narrative-stats-grid">
              <div className="stat-item">
                <h3>1.2k+</h3>
                <p>Tons of Lumber Cured</p>
              </div>
              <div className="stat-item">
                <h3>25k+</h3>
                <p>Forest Saplings Planted</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Native Species Cataloged</p>
              </div>
              <div className="stat-item">
                <h3>99.7%</h3>
                <p>Carpenter Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Newsletter Section */}
      <section className="wood-newsletter">
        <div className="wood-newsletter-content">
          <h2>Join the Woodland Circle</h2>
          <p>
            Receive bi-weekly forest dispatches, architectural guides, exclusive early-bird cabin booking discounts, 
            and conservation updates.
          </p>

          {subscribed ? (
            <div style={{ padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px', fontWeight: 600 }}>
              🌿 Thank you! You've joined our Woodland community newsletter. Check your inbox soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomeDetail;