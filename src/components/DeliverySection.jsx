import './DeliverySection.css'

const platforms = [
  {
    id: 'wolt',
    name: 'Wolt',
    cta: 'Rendelj most →',
    href: 'https://wolt.com/hu/hun/budapest',
    logo: '/wolt.png',
  },
  {
    id: 'foodora',
    name: 'Foodora',
    cta: 'Rendelj most →',
    href: 'https://www.foodora.hu',
    logo: '/foodora.jpg',
  },
]

export default function DeliverySection() {
  return (
    <section className="delivery" id="rendeles">
      <div className="container">
        <div className="delivery__card" data-reveal>
          <div className="delivery__text">
            <span className="section-label">Kiszállítás</span>
            <h2 className="delivery__title">Otthonról is rendelhetsz</h2>
            <p className="delivery__sub">
              Pesti6 kedvenceid Wolton és Foodorán keresztül is elérhetők.
            </p>
          </div>

          <div className="delivery__platforms">
            {platforms.map(p => (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`delivery__platform delivery__platform--${p.id}`}
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="delivery__logo"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="delivery__platform-name">{p.name}</span>
                <span className="delivery__platform-cta">{p.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
