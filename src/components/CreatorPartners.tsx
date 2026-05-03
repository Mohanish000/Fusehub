import './CreatorPartners.css';

export default function CreatorPartners() {
  const creators = [
    {
      id: 1,
      name: 'Adarsh Barnwal',
      niche: 'JEE Prep',
      platform: 'youtube',
      followers: '850K',
      verified: true,
    },
    {
      id: 2,
      name: 'Ajay Singh',
      niche: 'Physics',
      platform: 'youtube',
      followers: '720K',
      verified: true,
    },
    {
      id: 3,
      name: 'Jee Core',
      niche: 'JEE Prep',
      platform: 'youtube',
      followers: '670K',
      verified: true,
    },
    {
      id: 4,
      name: 'Akash Gupta',
      niche: 'Mathematics',
      platform: 'youtube',
      followers: '680K',
      verified: true,
    },
    {
      id: 5,
      name: 'Akash Jaiswal',
      niche: 'Chemistry',
      platform: 'youtube',
      followers: '650K',
      verified: true,
    },
    {
      id: 6,
      name: 'Anisha Singh',
      niche: 'NEET Biology',
      platform: 'instagram',
      followers: '620K',
      verified: true,
    },
    {
      id: 7,
      name: 'Armaan Gupta',
      niche: 'Coding',
      platform: 'youtube',
      followers: '590K',
      verified: true,
    },
    {
      id: 8,
      name: 'Aryan Sehgal',
      niche: 'Tech Tutorials',
      platform: 'youtube',
      followers: '560K',
      verified: true,
    },
    {
      id: 9,
      name: 'Aryan Zaveri',
      niche: 'Competitive Exams',
      platform: 'youtube',
      followers: '540K',
      verified: true,
    },
    {
      id: 10,
      name: 'Ashish Mukharya',
      niche: 'JEE Advanced',
      platform: 'youtube',
      followers: '520K',
      verified: true,
    },
    {
      id: 11,
      name: 'Ashish Pandey',
      niche: 'Programming',
      platform: 'youtube',
      followers: '500K',
      verified: true,
    },
    {
      id: 12,
      name: 'Eknoor Singh',
      niche: 'IIT Lifestyle',
      platform: 'instagram',
      followers: '480K',
      verified: true,
    },
    {
      id: 13,
      name: 'Harsh Suri',
      niche: 'Study Tips',
      platform: 'youtube',
      followers: '460K',
      verified: true,
    },
    {
      id: 14,
      name: 'Harshvardhan Pathak',
      niche: 'Exam Prep',
      platform: 'youtube',
      followers: '440K',
      verified: true,
    },
    {
      id: 15,
      name: 'Krishna Mudgal',
      niche: 'Comedy & Tech',
      platform: 'youtube',
      followers: '800K',
      verified: true,
    },
    {
      id: 17,
      name: 'Mayank Raj',
      niche: 'Motivation',
      platform: 'youtube',
      followers: '380K',
      verified: true,
    },
    {
      id: 18,
      name: 'Ripudaman Singh',
      niche: 'Fitness & Prep',
      platform: 'instagram',
      followers: '360K',
      verified: true,
    },
    {
      id: 19,
      name: 'Prayush Rai',
      niche: 'Tech & Education',
      platform: 'youtube',
      followers: '340K',
      verified: true,
    },
    {
      id: 20,
      name: 'Yugam Gupta',
      niche: 'Coding Tutorials',
      platform: 'youtube',
      followers: '300K',
      verified: true,
    },
    {
      id: 22,
      name: 'Yash Garg',
      niche: 'JEE Strategy',
      platform: 'youtube',
      followers: '280K',
      verified: true,
    },
    {
      id: 23,
      name: 'Ritik Meghwani',
      niche: 'Science',
      platform: 'instagram',
      followers: '260K',
      verified: true,
    },
    {
      id: 24,
      name: 'Snehit Mishra',
      niche: 'AI & Tech',
      platform: 'youtube',
      followers: '240K',
      verified: true,
    },
    {
      id: 25,
      name: 'Tanish',
      niche: 'Tech Reviews',
      platform: 'youtube',
      followers: '180K',
      verified: true,
    },
    {
      id: 26,
      name: 'Vikas Sihara',
      niche: 'Lifestyle',
      platform: 'instagram',
      followers: '160K',
      verified: true,
    },
    {
      id: 27,
      name: 'Vivaan Gupta',
      niche: 'Academics',
      platform: 'youtube',
      followers: '140K',
      verified: true,
    },
    {
      id: 28,
      name: 'Zaki Saudagar',
      niche: 'Motivation',
      platform: 'youtube',
      followers: '120K',
      verified: true,
    },
  ];

  return (
    <section className="creator-partners section" id="creators">
      <div className="container">
        <div className="section-title">
          <h2>Our Creator Network</h2>
          <p>26+ verified creators across education, tech, and lifestyle</p>
        </div>

        <div className="creators-list">
          {creators.map((creator) => (
            <div key={creator.id} className="creator-name-item">
              {creator.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
