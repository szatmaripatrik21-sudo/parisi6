import './BookingContact.css'
import outsidesittingImg from '../assets/outsidesitting.jpg'

const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=P%C3%A1rizsi+utca+6b%2C+1052+Budapest'

export default function BookingContact() {
  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking__layout">

          {/* Terrace photo */}
          <div className="booking__photo" data-reveal>
            <img
              src={outsidesittingImg}
              alt="Parisi6 outdoor terrace at Párizsi utca 6b, Budapest"
              loading="lazy"
            />
            <div className="booking__photo-tag">
              Outdoor terrace · Párizsi utca 6b
            </div>
          </div>

          {/* Single booking card */}
          <div className="booking__card" data-reveal data-delay="2">
            <span className="section-label">Contact & booking</span>
            <h2 className="booking__title">Reserve your table</h2>
            <p className="booking__sub">
              Classic Hungarian food, warm Budapest atmosphere, and a table
              waiting for you at Párizsi utca 6b.
            </p>

            <div className="booking__details">
              <div className="booking__detail">
                <span className="booking__detail-label">Address</span>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking__detail-value booking__detail-link"
                >
                  Párizsi utca 6b, 1052 Budapest
                </a>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-label">Phone</span>
                <a href="tel:+36305999137" className="booking__detail-value booking__detail-link">
                  +36 30 599 9137
                </a>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-label">Email</span>
                <a href="mailto:parisi6@parisi6.com" className="booking__detail-value booking__detail-link">
                  parisi6@parisi6.com
                </a>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-label">Hours</span>
                <div className="booking__hours">
                  <span className="booking__detail-value">Mon – Fri: 11:00 – 22:00</span>
                  <span className="booking__detail-value">Sat – Sun: 10:00 – 22:00</span>
                </div>
              </div>
            </div>

            <div className="booking__actions">
              <a
                href="https://wa.me/36305999137"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary booking__btn"
              >
                Book a table
              </a>
              <div className="booking__actions-row">
                <a href="tel:+36305999137" className="btn btn--outline-dark booking__btn-half">
                  Call now
                </a>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-dark booking__btn-half"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
