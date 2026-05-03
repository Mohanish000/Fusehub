import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What type of creators does FuseHub work with?',
      answer: 'We specialize in education, JEE, tech, and NEET creators with verified audiences. Our network includes 50+ verified creators ranging from 200K to 800K+ followers across YouTube and Instagram.',
    },
    {
      question: 'What is the minimum campaign budget?',
      answer: 'Our minimum campaign budget starts at ₹2,00,000. However, we offer flexible packages tailored to your specific goals, audience size, and campaign duration.',
    },
    {
      question: 'How long does a campaign take to go live?',
      answer: 'Once you brief us and approve creator selections, we typically go live within 7-10 days. This includes creator negotiations, content planning, and finalization.',
    },
    {
      question: 'Do you work with non-education brands too?',
      answer: 'Yes! While education is our specialty, we also work with tech, e-commerce, and lifestyle brands that align with our creator network and audience demographics.',
    },
    {
      question: 'How are creators verified?',
      answer: 'All our creators undergo rigorous verification including audience analytics checks, engagement metrics review, and content quality assessment to ensure authenticity.',
    },
    {
      question: 'Can I track campaign performance?',
      answer: 'Absolutely! We provide a real-time analytics dashboard showing views, engagement, reach, conversions, and ROI metrics updated daily throughout your campaign.',
    },
    {
      question: 'How do I join as a creator?',
      answer: 'Visit our website and click "Join as Creator". Fill out the form with your channel details, audience demographics, and niche. Our team reviews and gets back within 48 hours.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about FuseHub</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown size={24} className="faq-icon" />
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
