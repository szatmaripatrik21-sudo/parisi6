import { useState } from 'react'
import './MenuPreview.css'
import tableImg from '../assets/tableoffood.jpg'

const categories = [
  {
    id: 'soups',
    label: 'Soups',
    hungarian: 'Levesek',
    items: [
      { name: 'Goulash Soup (Gulyásleves)',  desc: 'Beef, peppers, potato, paprika',          price: '2 890 Ft' },
      { name: "Fisherman's Soup (Halászlé)", desc: 'River fish, hot paprika, hand-cut pasta', price: '3 290 Ft' },
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    hungarian: 'Előételek',
    items: [
      { name: 'Lángos',                      desc: 'Deep-fried dough, sour cream, cheese',   price: '2 190 Ft' },
      { name: 'Angus Tartare',               desc: 'Hand-cut beef, capers, quail egg, rye',  price: '3 590 Ft' },
      { name: 'Mangalica Sausage Selection', desc: 'Three cured sausages, mustard, pickles', price: '2 990 Ft' },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    hungarian: 'Főételek',
    items: [
      { name: 'Paprikás Chicken',   desc: 'Paprika cream sauce, crêpe dumplings',   price: '4 290 Ft' },
      { name: 'Slow Duck Confit',   desc: 'Red cabbage, rösti potato, plum jus',    price: '5 590 Ft' },
      { name: 'Braised Pork Knuckle', desc: 'Slow-cooked, mustard, sauerkraut',     price: '4 990 Ft' },
    ],
  },
  {
    id: 'vegetarian',
    label: 'Vegetarian',
    hungarian: 'Vegetáriánus',
    items: [
      { name: 'Stuffed Peppers',    desc: 'Rice, vegetables, tomato sauce',         price: '3 490 Ft' },
      { name: 'Mushroom Paprikash', desc: 'Oyster mushroom, paprika cream, pasta',  price: '3 290 Ft' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    hungarian: 'Desszertek',
    items: [
      { name: 'Apple Strudel (Almás Rétes)', desc: 'Flaky pastry, cinnamon apple, vanilla', price: '1 990 Ft' },
      { name: 'Cottage Cheese Dumplings',   desc: 'Ricotta, breadcrumb, sour cream, jam',  price: '1 790 Ft' },
      { name: 'Somlói Galuska',             desc: 'Sponge, cream, chocolate, rum raisin',  price: '1 690 Ft' },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    hungarian: 'Italok',
    items: [
      { name: 'Egri Bikavér',      desc: 'Full-bodied Hungarian red, Eger region',      price: '1 490 Ft' },
      { name: 'Tokaji Furmint',    desc: 'Dry white from the Tokaj wine region',         price: '1 590 Ft' },
      { name: 'Unicum',            desc: 'Classic Hungarian herbal digestif, 40ml',      price: '990 Ft'   },
      { name: 'Pálinka',           desc: 'Traditional Hungarian fruit brandy, 40ml',     price: '1 190 Ft' },
    ],
  },
]

export default function MenuPreview() {
  const [active, setActive] = useState('soups')
  const current = categories.find(c => c.id === active)

  return (
    <section className="menu-preview" id="menu">
      <div className="container">
        <div className="menu-preview__layout">
          {/* Photo side */}
          <div className="menu-preview__photo" data-reveal>
            <img src={tableImg} alt="Table full of Hungarian dishes at Pesti6" loading="lazy" />
            <div className="menu-preview__photo-overlay">
              <span className="menu-preview__photo-text">
                Classic Hungarian dishes, served fresh
              </span>
            </div>
          </div>

          {/* Menu side */}
          <div className="menu-preview__panel" data-reveal data-delay="2">
            <span className="section-label">Menu preview</span>
            <h2 className="menu-preview__title">What we serve</h2>

            <div className="menu-tabs" role="tablist">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={active === cat.id}
                  className={`menu-tab${active === cat.id ? ' menu-tab--active' : ''}`}
                  onClick={() => setActive(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="menu-items" key={active}>
              <p className="menu-items__hungarian">{current.hungarian}</p>
              {current.items.map((item) => (
                <div key={item.name} className="menu-row">
                  <div className="menu-row__info">
                    <span className="menu-row__name">{item.name}</span>
                    <span className="menu-row__desc">{item.desc}</span>
                  </div>
                  <span className="menu-row__price">{item.price}</span>
                </div>
              ))}
            </div>

            <div className="menu-preview__cta">
              <div className="menu-preview__cta-row">
                <a href="#booking" className="btn btn--primary">Book a table</a>
                <a href="#booking" className="menu-preview__full-link">View full menu →</a>
              </div>
              <p className="menu-preview__note">Prices include VAT · Seasonal selection shown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
