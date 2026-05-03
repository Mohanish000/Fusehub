import { Target, Users, Video, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Target,
      title: 'Brand Briefs Us',
      description: 'Share your campaign goals, target audience, and budget',
      color: '#FF5C3A',
    },
    {
      number: 2,
      icon: Users,
      title: 'We Match Creators',
      description: 'AI-powered matching with verified creators in your niche',
      color: '#0EA5A0',
    },
    {
      number: 3,
      icon: Video,
      title: 'Content Goes Live',
      description: 'Authentic, engaging content reaches millions of students',
      color: '#FFF0EC',
    },
    {
      number: 4,
      icon: TrendingUp,
      title: 'You See Results',
      description: 'Real-time analytics dashboard tracking ROI and performance',
      color: '#FF9966',
    },
  ];

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How FuseHub Works</h2>
          <p>A seamless 4-step process from brief to results</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="step-wrapper">
                <div className="step-card">
                  <div className="step-number">{step.number}</div>
                  <div
                    className="step-icon-bg"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon size={32} color="white" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-connector">
                    <svg viewBox="0 0 100 20" preserveAspectRatio="none">
                      <line x1="0" y1="10" x2="100" y2="10" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
