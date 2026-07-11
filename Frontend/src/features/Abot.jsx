export default function AboutDeatil() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://i.pinimg.com/originals/c9/e4/b8/c9e4b8405e30520943b47edcef41e367.jpg"
            alt="Timber Workshop"
          />
        </div>

        <div className="about-content">
          <span className="about-tag">Our Lumber Quality</span>

          <h1>Providing Premium Sustainable Lumber & Exquisite Wood Species</h1>

          <p>
            We are a dedicated team of timber specialists and wood craftsmen committed to supplying the highest-quality lumber. We source our wood from responsibly managed forests, ensuring that every board of Teak, Oak, Mahogany, or exotic timber satisfies rigorous quality, moisture, and density standards. We serve carpenters, architects, and designers worldwide.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h2>50+</h2>
              <p>Wood Species</p>
            </div>

            <div className="stat">
              <h2>500+</h2>
              <p>Happy Carpenters</p>
            </div>

            <div className="stat">
              <h2>15+</h2>
              <p>Years Sourcing</p>
            </div>
          </div>

          <button onClick={() => window.location.href = "/woods"}>Explore Catalog</button>
        </div>
      </div>
    </section>
  );
}