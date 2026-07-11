export default function ContactPage() {
  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            We'd love to hear from you. Whether you have a question about our wood species, require a custom bulk lumber quote, or want to discuss wood options for your project, feel free to contact our timber experts.
          </p>

          <div className="info-box">
            <h4>📍 Address</h4>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>

          <div className="info-box">
            <h4>📧 Email</h4>
            <p>shreyashtekriwal@gmail.com</p>
          </div>

          <div className="info-box">
            <h4>📞 Phone</h4>
            <p>+91 99195XXXXX</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Inquiry sent successfully!"); }}>
          <h2>Send Inquiry</h2>

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <input type="text" placeholder="Subject (e.g. Bulk Teak Quote)" required />

          <textarea
            rows="6"
            placeholder="Tell us about your timber requirements, sizes, and quantities..."
            required
          ></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>

      </div>
    </section>
  );
}