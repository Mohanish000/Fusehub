import { useEffect, useState, useRef } from 'react';
import { Users, TrendingUp, Target, Award } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { icon: Users, number: 50, label: 'Verified Creators', suffix: '+' },
    { icon: TrendingUp, number: 15, label: 'Student Reach', suffix: 'M+' },
    { icon: Target, number: 200, label: 'Brand Campaigns', suffix: '+' },
    { icon: Award, number: 30, label: 'University Tie-ups', suffix: '+' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ size: number }>;
  number: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function StatCard({ icon: Icon, number, suffix, label, isVisible, delay }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const increment = number / 60;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isVisible, number, delay]);

  return (
    <div className="stat-item card">
      <div className="stat-icon">
        <Icon size={32} />
      </div>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
