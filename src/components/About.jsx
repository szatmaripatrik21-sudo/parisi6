import './About.css'
import interiorImg from '../assets/about.jpg'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__text" data-reveal>
            <span className="section-label section-label--paprika">Our story</span>
            <h2 className="about__title">
              Hungarian classics, served with Budapest warmth
            </h2>
            <p className="about__tagline">"Like you were at home."</p>
            <p className="about__body">
              Pesti6 brings classic Hungarian flavours into a relaxed, modern Budapest setting —
              goulash, paprika, duck, wine, and the kind of warm service that makes dinner feel easy.
            </p>
            <p className="about__body">
              Set on Váci utca, just steps from the Danube and Vörösmarty tér, it is a place
              to sit down, slow down, and enjoy Budapest through its food.
            </p>

            <div className="about__facts">
              <div className="about__fact">
                <span className="about__fact-num">4.8</span>
                <span className="about__fact-label">Google rating</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-num">7.4k+</span>
                <span className="about__fact-label">Reviews</span>
              </div>
              <div className="about__fact">
                <span className="about__fact-num">14</span>
                <span className="about__fact-label">Váci utca</span>
              </div>
            </div>

            <div className="about__tags">
              <span>Central Budapest</span>
              <span>English-speaking staff</span>
              <span>Outdoor terrace</span>
              <span>Vegetarian options</span>
              <span>Wine list</span>
            </div>
          </div>

          <div className="about__image" data-reveal data-delay="2">
            <img src={interiorImg} alt="Pesti6 restaurant interior — warm Budapest atmosphere" loading="lazy" />
            <div className="about__image-badge">
              <span className="about__image-badge-parisi">Pesti</span>
              <span className="about__image-badge-six">6</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
