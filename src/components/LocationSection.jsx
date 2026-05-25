import './LocationSection.css'

const MAPS_EMBED = 'https://maps.google.com/maps?q=P%C3%A1rizsi+utca+6b%2C+1052+Budapest%2C+Hungary&hl=en&z=16&output=embed'
const MAPS_LINK  = 'https://www.google.com/maps/search/?api=1&query=P%C3%A1rizsi+utca+6b%2C+1052+Budapest'

export default function LocationSection() {
  return (
    <section className="location" id="location">
      <div className="container">
        <div className="location__header" data-reveal>
          <span className="section-label">Find us</span>
          <h2 className="location__title">In the heart of Budapest</h2>
          <p className="location__sub">
            Walking distance from Váci utca, the Danube and Astoria metro station.
          </p>
        </div>

        <div className="location__grid" data-reveal data-delay="1">
          <div className="location__map">
            <iframe
              src={MAPS_EMBED}
              title="Parisi6 location — Párizsi utca 6b, Budapest"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="location__map-btn"
            >
              Get directions →
            </a>
          </div>

          <div className="location__info">
            <div className="location__info-block">
              <span className="location__info-label">Address</span>
              <p className="location__info-value">
                Párizsi utca 6b<br />
                1052 Budapest, Hungary
              </p>
            </div>

            <div className="location__info-block">
              <span className="location__info-label">Nearby</span>
              <ul className="location__nearby">
                <li>Váci utca – 3 min walk</li>
                <li>Astoria metro – 5 min walk</li>
                <li>Chain Bridge – 10 min walk</li>
                <li>Danube riverbank – 5 min walk</li>
              </ul>
            </div>

            <div className="location__info-block">
              <span className="location__info-label">Hours</span>
              <div className="location__hours">
                <div className="location__hours-row">
                  <span>Mon – Fri</span>
                  <span>11:00 – 22:00</span>
                </div>
                <div className="location__hours-row">
                  <span>Sat – Sun</span>
                  <span>10:00 – 22:00</span>
                </div>
              </div>
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
