import './Hero.css'
import interiorImg from '../assets/interior.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${interiorImg})` }}
      />
      <div className="hero__overlay" />

      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge hero__badge--anim">
            <span className="hero__badge-open">Open today</span>
            <span className="hero__badge-sep">·</span>
            <span className="hero__badge-star">★</span>
            <span>4.8</span>
            <span className="hero__badge-sep">·</span>
            <span>7,400+ Google reviews</span>
            <span className="hero__badge-sep hero__badge-sep--addr">·</span>
            <span className="hero__badge-addr">Váci utca 14</span>
          </div>

          <h1 className="hero__title hero__title--anim">
            <span className="hero__title-parisi">Pesti</span>
            <span className="hero__title-six">6</span>
          </h1>

          <p className="hero__sub hero__sub--anim">
            Modern Hungarian food in the heart of Budapest
          </p>

          <p className="hero__desc hero__desc--anim">
            Classic Hungarian flavours, warm Budapest atmosphere, and signature
            dishes served with a modern touch.
          </p>

          <div className="hero__actions hero__actions--anim">
            <a href="#booking" className="btn btn--primary">Book a table</a>
            <a href="#menu"    className="btn btn--outline">View menu</a>
          </div>

          <p className="hero__delivery-hint hero__delivery-hint--anim">
            Rendelés: <a href="#rendeles">Wolt</a> · <a href="#rendeles">Foodora</a>
          </p>
        </div>
      </div>

    </section>
  )
}
