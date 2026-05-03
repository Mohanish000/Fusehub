import { ArrowRight, Eye, BarChart3, Zap } from 'lucide-react';
import './CaseStudy.css';

export default function CaseStudy() {
  return (
    <section className="case-study section section-dark" id="case-study">
      <div className="container">
        <div className="case-study-card">
          <div className="case-study-header">
            <div className="case-study-tag">Featured Campaign</div>
            <h2>Allen Career Institute × JEE Creator Network</h2>
          </div>

          <p className="case-study-description">
            FuseHub connected Allen with 6 top JEE YouTubers for a comprehensive 45-day pre-exam campaign targeting Class 11 & 12 students preparing for the JEE examination.
          </p>

          <div className="case-study-results">
            <div className="result-item">
              <div className="result-icon">
                <Eye size={24} />
              </div>
              <div className="result-content">
                <div className="result-number">2.4M</div>
                <div className="result-label">Total Views</div>
              </div>
            </div>

            <div className="result-item">
              <div className="result-icon">
                <BarChart3 size={24} />
              </div>
              <div className="result-content">
                <div className="result-number">18%</div>
                <div className="result-label">Avg. Engagement</div>
              </div>
            </div>

            <div className="result-item">
              <div className="result-icon">
                <Zap size={24} />
              </div>
              <div className="result-content">
                <div className="result-number">3.2x</div>
                <div className="result-label">ROI Achieved</div>
              </div>
            </div>
          </div>

          <a href="#contact" className="cta-link">
            <span>See All Case Studies</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
