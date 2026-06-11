import './BookingContact.css'
import outsidesittingImg from '../assets/outsidesitting.jpg'

const MAPS_LINK = 'https://www.google.com/maps/search/?api=1&query=V%C3%A1ci+utca+14%2C+1052+Budapest'

export default function BookingContact() {
  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking__layout">

          {/* Terrace photo */}
          <div className="booking__photo" data-reveal>
            <img
              src={outsidesittingImg}
              alt="Pesti6 outdoor terrace at Váci utca 14, Budapest"
              loading="lazy"
            />
            <div className="booking__photo-tag">
              Outdoor terrace · Váci utca 14
            </div>
          </div>

          {/* Single booking card */}
          <div className="booking__card" data-reveal data-delay="2">
            <span className="section-label">Contact & booking</span>
            <h2 className="booking__title">Reserve your table</h2>
            <p className="booking__sub">
              Classic Hungarian food, warm Budapest atmosphere, and a table
              waiting for you at Váci utca 14.
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
                  Váci utca 14, 1052 Budapest
                </a>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-label">Phone</span>
                <a href="tel:+36304447823" className="booking__detail-value booking__detail-link">
                  +36 30 444 7823
                </a>
              </div>
              <div className="booking__detail">
                <span className="booking__detail-label">Email</span>
                <a href="mailto:info@pesti6.com" className="booking__detail-value booking__detail-link">
                  info@pesti6.com
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
                href="https://wa.me/36304447823"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary booking__btn"
              >
                Book a table
              </a>
              <div className="booking__actions-row">
                <a href="tel:+36304447823" className="btn btn--outline-dark booking__btn-half">
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
