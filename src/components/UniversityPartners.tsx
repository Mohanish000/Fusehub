import './UniversityPartners.css';

export default function UniversityPartners() {
  const universities = [
    'Newton School of Technology',
    'Polaris School of Technology',
    'Scaler School of Technology',
    'Physics Wallah',
    'Unacademy',
    'Mirai School of Technology',
    'Mathongo',
    'NxtWave',
    'Atta School of Technology',
    'Bosscoder Academy',
    'Zenith School of AI',
    'Allen Career Institute',
    'Motion Education',
    'Rishihood University',
    'Vedam School of Technology',
  ];

  return (
    <section className="university-partners section section-alt" id="universities">
      <div className="container">
        <div className="section-title">
          <h2>Our University & Ed-Platform Network</h2>
          <p>Partnerships with 15+ institutions across India</p>
        </div>

        <div className="universities-grid">
          {universities.map((university, idx) => (
            <div key={idx} className="university-badge">
              <span>{university}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
