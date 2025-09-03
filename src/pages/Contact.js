import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
    <section className="about-hero">
          <h1 className="about-title">contant</h1>
          <div className="hero-box">
            <p className="breadcrumb">
              <Link to="/">Home</Link> / contant
            </p>
            
          </div>
        </section>
    <div className="contact-container">
        
      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <div className="emoji">📍</div>
          <h3>Our Location</h3>
          <p>3481 Melrose Place, Beverly Hills</p>
          <p>CA 90210</p>
        </div>
        <div className="divider"></div>
        <div className="contact-item">
          <div className="emoji">📞</div>
          <h3>Telephone</h3>
          <p>(+1) 517 397 7100</p>
          <p>(+1) 411 315 8138</p>
        </div>
        <div className="divider"></div>
        <div className="contact-item">
          <div className="emoji">✉️</div>
          <h3>Send Email</h3>
          <p>Info@example.com</p>
          <p>admin@example.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
  <h2>Send your message</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="form-group">
      <label>Your Subject</label>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />
    </div>

    <div className="form-group">
      <label>Your Message</label>
      <textarea
        name="message"
        placeholder="Type your message..."
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
    </div>

    <button type="submit" className="send-btn">Send your message</button>
  </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
