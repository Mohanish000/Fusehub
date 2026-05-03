import { useState } from 'react';
import { Mail, Phone, MapPin, Share2, Heart } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goal: 'brand-awareness',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Using FormSubmit.co as a free email service
      const response = await fetch('https://formspree.io/f/mdabendb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          goal: 'brand-awareness',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Let's Work Together</h2>
          <p>Get in touch with our team to start your campaign</p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Brand Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="goal">Campaign Goal</label>
                <select
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                >
                  <option value="brand-awareness">Brand Awareness</option>
                  <option value="lead-generation">Lead Generation</option>
                  <option value="app-downloads">App Downloads</option>
                  <option value="sales">Sales Conversion</option>
                  <option value="student-enrollment">Student Enrollment</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your campaign idea..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Send Message
              </button>

              {submitted && (
                <p className="success-message">
                  ✓ Message sent! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <Mail size={24} className="info-icon" />
              <h3>Email</h3>
              <a href="mailto:fusehubmedia01@gmail.com">
                fusehubmedia01@gmail.com
              </a>
            </div>

            <div className="info-card">
              <Phone size={24} className="info-icon" />
              <h3>Phone</h3>
              <a href="tel:+917045286044">+91 70452 86044</a>
            </div>

            <div className="info-card">
              <MapPin size={24} className="info-icon" />
              <h3>Location</h3>
              <p>Nagpur, Maharashtra, India</p>
            </div>

            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Heart size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Play size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Share2 size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Play(props: { size: number; children?: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.615 3.595a2 2 0 011.409 2.585l-1.454 5.41a2 2 0 01-1.922 1.408h-8.536a2 2 0 01-2-2V7a2 2 0 012-2h9.5a2 2 0 011.003.194zm-17 3.2a2 2 0 012-2h1v14h-1a2 2 0 01-2-2v-10z" />
    </svg>
  );
}
