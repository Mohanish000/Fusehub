import { Zap, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Zap size={24} />
              <span>FuseHub Media</span>
            </div>
            <p>Fusing Brands with Creators</p>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#case-study">Case Studies</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services">For Brands</a>
              </li>
              <li>
                <a href="#services">For Creators</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#contact">Start Campaign</a>
              </li>
            </ul>
          </div>

          {/* Creator Section */}
          <div className="footer-column">
            <h4>For Creators</h4>
            <ul>
              <li>
                <a href="#creators">Creator Network</a>
              </li>
              <li>
                <a href="#contact">Join Us</a>
              </li>
              <li>
                <a href="#services">Opportunities</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:fusehubmedia01@gmail.com">Email</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} FuseHub Media. All rights reserved. | Built in Nagpur{' '}
            <Heart size={16} className="heart-icon" />
          </p>
        </div>
      </div>
    </footer>
  );
}
