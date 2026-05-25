import './SignatureDishes.css'
import foodImg  from '../assets/food.jpg'
import food1Img from '../assets/food1.jpg'
import food2Img from '../assets/food2.jpg'

const dishes = [
  {
    name: 'Gourmet beef stew',
    desc: 'Slow-cooked for 24 hours, served with bread dumplings and pickled shimeji mushrooms.',
    price: '6 800 Ft / 17,80 €',
    accent: 'paprika',
    tag: 'Signature',
    img: foodImg,
    imgAlt: 'Gourmet beef stew at Parisi6',
  },
  {
    name: 'Goat cheese salad',
    desc: 'Honey mustard vinaigrette, dried tomatoes, dried figs, and seeded whole grain crumbles.',
    price: '4 800 Ft / 12,90 €',
    accent: 'gold',
    tag: 'Fresh',
    img: food1Img,
    imgAlt: 'Goat cheese salad at Parisi6',
  },
  {
    name: 'Homemade apple strudel',
    desc: 'Served with vanilla crème.',
    price: '2 200 Ft / 5,90 €',
    accent: 'gold',
    tag: 'Dessert',
    img: food2Img,
    imgAlt: 'Homemade apple strudel at Parisi6',
  },
]

export default function SignatureDishes() {
  return (
    <section className="dishes" id="dishes">
      <div className="container">
        <div className="dishes__header" data-reveal>
          <span className="section-label">Featured dishes</span>
          <h2 className="dishes__title">Hungarian classics, made fresh</h2>
          <p className="dishes__subtitle">
            Rooted in tradition, served with care — a taste of what awaits you.
          </p>
        </div>

        <div className="dishes__grid">
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`dish-card dish-card--${dish.accent}`}
              data-reveal
              data-delay={String(i + 1)}
            >
              <div className="dish-card__img">
                <img src={dish.img} alt={dish.imgAlt} loading="lazy" />
                <span className="dish-card__tag">{dish.tag}</span>
              </div>
              <div className="dish-card__body">
                <h3 className="dish-card__name">{dish.name}</h3>
                <p className="dish-card__desc">{dish.desc}</p>
                <p className="dish-card__price">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="dishes__cta" data-reveal>
          <a href="#menu" className="dishes__explore-link">Explore the full menu →</a>
        </div>
      </div>
    </section>
  )
}
