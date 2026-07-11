import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>MyWoods</h2>
          <p>
            Premium timber and sustainable wood species curated for professional carpentry, construction, and design.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/woods">Woods</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: shreyashtekriwal@gmail.com</p>
          <p>Phone: +91 99195XXXXX</p>
          <p>Lucknow, India</p>
          <div className="footer-social" style={{ marginTop: "12px" }}>
            <a 
              href="https://www.linkedin.com/in/shreyash-tekriwal-269089328/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                color: "#d4d4d8", 
                display: "inline-flex", 
                alignItems: "center", 
                gap: "8px", 
                textDecoration: "none", 
                transition: "color 0.2s" 
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#a3e635"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#d4d4d8"}
            >
              <FaLinkedin size={20} />
              <span style={{ fontSize: "14px", fontWeight: "500" }}>Connect on LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyWoods. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;