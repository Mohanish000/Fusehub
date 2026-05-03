import { useState } from 'react';
import {
  Zap,
  BarChart3,
  Users,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import './Services.css';

export default function Services() {
  const [activeTab, setActiveTab] = useState('brands');

  const brandServices = [
    {
      icon: Zap,
      title: 'Sponsored Content',
      description: 'Authentic creator-led promotions that engage your target audience',
    },
    {
      icon: BarChart3,
      title: 'Campaign Strategy',
      description: 'End-to-end planning & execution for maximum ROI',
    },
    {
      icon: Users,
      title: 'Creator Matching',
      description: 'AI-powered niche targeting to find perfect brand ambassadors',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reports',
      description: 'Real-time ROI tracking dashboard with detailed performance metrics',
    },
    {
      icon: MapPin,
      title: 'College Activations',
      description: 'On-ground campus events and community engagement programs',
    },
  ];

  const creatorServices = [
    {
      icon: Zap,
      title: 'Brand Deals',
      description: 'Curated, high-paying sponsorships matching your content',
    },
    {
      icon: TrendingUp,
      title: 'Profile Boost',
      description: 'Grow your creator identity and personal brand value',
    },
    {
      icon: Users,
      title: 'Collab Network',
      description: 'Connect with fellow creators for cross-promotions',
    },
    {
      icon: BarChart3,
      title: 'Monetization Help',
      description: 'Access multiple revenue streams beyond YouTube AdSense',
    },
    {
      icon: Zap,
      title: 'Content Guidance',
      description: 'Strategy & ideation support for consistent growth',
    },
  ];

  const services = activeTab === 'brands' ? brandServices : creatorServices;

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>What We Offer</h2>
          <p>Tailored solutions for brands and creators</p>
        </div>

        <div className="services-tabs">
          <button
            className={`tab-button ${activeTab === 'brands' ? 'active' : ''}`}
            onClick={() => setActiveTab('brands')}
          >
            For Brands
          </button>
          <button
            className={`tab-button ${activeTab === 'creators' ? 'active' : ''}`}
            onClick={() => setActiveTab('creators')}
          >
            For Creators
          </button>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card card">
                <div className="service-icon-wrapper">
                  <Icon size={32} className="service-icon" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
