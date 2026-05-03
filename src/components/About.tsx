import './About.css';

export default function About() {
  const values = ['Authenticity', 'Results-Driven', 'Creator-First'];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2>About FuseHub Media</h2>
            <p>
              FuseHub Media was founded with one goal — to make creator-brand collaboration effortless, authentic, and result-driven. We specialize in the education, JEE, and tech creator ecosystem because we understand this audience deeply.
            </p>
            <p>
              We believe in bridging the gap between innovative brands and talented creators who have built loyal communities of millions of students. Through data-driven matching and transparent partnerships, we ensure both sides win.
            </p>

            <div className="values-list">
              {values.map((value, idx) => (
                <div key={idx} className="value-pill">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
