import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'How It Works', to: 'how-it-works' },
    { label: 'Creators', to: 'creators' },
    { label: 'Universities', to: 'universities' },
    { label: 'Services', to: 'services' },
    { label: 'About', to: 'about' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">FuseHub Media</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ScrollLink to="contact" smooth={true} duration={500}>
          <button className="btn btn-primary">Partner With Us</button>
        </ScrollLink>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="nav-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>
      )}
    </header>
  );
}
