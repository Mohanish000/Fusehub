import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'FuseHub helped us reach 800K JEE aspirants in just 3 weeks. Incredible ROI.',
      author: 'Marketing Head',
      company: 'Allen Institute',
      rating: 5,
    },
    {
      text: 'The creator matching was spot on. Our app downloads jumped 40% post campaign.',
      author: 'Growth Lead',
      company: 'Adda247',
      rating: 5,
    },
    {
      text: 'Finally an agency that gets the education creator space. Highly recommend.',
      author: 'Brand Manager',
      company: 'Infinity Learn',
      rating: 5,
    },
  ];

  return (
    <section className="testimonials section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>What Our Partners Say</h2>
          <p>Feedback from brands and creators we've worked with</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card card">
              <Quote className="quote-icon" size={32} />

              <p className="testimonial-text">"{testimonial.text}"</p>

              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="star filled" />
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
