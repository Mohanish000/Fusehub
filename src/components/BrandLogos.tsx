import './BrandLogos.css';

export default function BrandLogos() {
  const brands = [
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
    <section className="brand-logos section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>Trusted By Leading Brands</h2>
          <p>50+ brands across education, tech, and lifestyle sectors</p>
        </div>

        <div className="marquee-container">
          <div className="marquee marquee-1">
            {brands.map((brand, idx) => (
              <div key={idx} className="brand-item">
                <span>{brand}</span>
              </div>
            ))}
            {brands.map((brand, idx) => (
              <div key={`repeat-${idx}`} className="brand-item">
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee marquee-2">
            {[...brands].reverse().map((brand, idx) => (
              <div key={idx} className="brand-item">
                <span>{brand}</span>
              </div>
            ))}
            {[...brands].reverse().map((brand, idx) => (
              <div key={`repeat-${idx}`} className="brand-item">
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
