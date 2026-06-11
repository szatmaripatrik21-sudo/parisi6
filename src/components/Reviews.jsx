import './Reviews.css'

const quotes = [
  {
    text: 'Best goulash I had in Budapest. We came back on our last night just for this. The staff remembered our table from two days earlier — that kind of warmth is rare.',
    author: 'Sarah M.',
    origin: 'London',
    date: 'May 2025',
  },
  {
    text: 'Perfect after walking the Chain Bridge. The apple strudel with vanilla crème is worth the trip alone. Generous portions, honest prices.',
    author: 'Thomas K.',
    origin: 'Munich',
    date: 'April 2025',
  },
  {
    text: 'Celebrated our anniversary here and the team made it feel genuinely special. Duck confit was flawless, and the Tokaj wine list has real gems.',
    author: 'Elena V.',
    origin: 'Vienna',
    date: 'March 2025',
  },
]

const favourites = [
  'Goulash soup',
  'Paprikás chicken',
  'Duck confit',
  'Apple strudel',
  'Outdoor seating',
  'Central Budapest',
  'Friendly staff',
  'Vegetarian options',
  'Wine selection',
  'Cottage cheese dumplings',
]

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews__header" data-reveal>
          <span className="section-label">Guest reviews</span>
          <h2 className="reviews__title">
            Loved by thousands<br />of Budapest guests
          </h2>
        </div>

        <div className="reviews__inner">
          <div className="reviews__stat" data-reveal data-delay="1">
            <div className="reviews__rating-block">
              <div className="reviews__rating">
                <span className="reviews__rating-num">4.8</span>
                <span className="reviews__rating-max">/5</span>
              </div>
              <div className="reviews__stars" aria-label="4.8 out of 5 stars">
                {[1,2,3,4,5].map(n => (
                  <span key={n} className={`reviews__star${n <= 4 ? '' : ' reviews__star--partial'}`}>★</span>
                ))}
              </div>
              <p className="reviews__count">7,400+ Google reviews</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=V%C3%A1ci+utca+14%2C+1052+Budapest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-paprika reviews__google-btn"
            >
              Read on Google →
            </a>
          </div>

          <div className="reviews__right" data-reveal data-delay="2">
            <div className="reviews__quotes">
              {quotes.map(q => (
                <div key={q.author} className="reviews__quote">
                  <div className="reviews__quote-stars" aria-hidden="true">★★★★★</div>
                  <p className="reviews__quote-text">"{q.text}"</p>
                  <div className="reviews__quote-meta">
                    <span className="reviews__quote-author">{q.author}</span>
                    <span className="reviews__quote-sep">·</span>
                    <span className="reviews__quote-origin">{q.origin}</span>
                    <span className="reviews__quote-sep">·</span>
                    <span className="reviews__quote-date">{q.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="reviews__tags-label">Guest favourites mentioned again and again</p>
            <div className="reviews__tags">
              {favourites.map(tag => (
                <span key={tag} className="reviews__tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
