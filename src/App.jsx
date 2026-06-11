import './App.css'
import { useScrollReveal } from './utils/useScrollReveal'
import Navigation     from './components/Navigation'
import Hero           from './components/Hero'
import SignatureDishes from './components/SignatureDishes'
import About          from './components/About'
import MenuPreview    from './components/MenuPreview'
import Reviews        from './components/Reviews'
import BookingContact from './components/BookingContact'
import LocationSection from './components/LocationSection'
import DeliverySection from './components/DeliverySection'
import Footer         from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <Navigation />
      <Hero />
      <SignatureDishes />
      <DeliverySection />
      <About />
      <MenuPreview />
      <Reviews />
      <BookingContact />
      <LocationSection />
      <Footer />

      {/* Mobile sticky CTA */}
      <div className="mobile-sticky" role="navigation" aria-label="Quick actions">
        <a href="tel:+36304447823" className="mobile-sticky__action">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .9h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.69a16 16 0 006.22 6.22l1.06-1.16a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          <span>Call</span>
        </a>
        <a href="#menu" className="mobile-sticky__action">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="15" y2="18"/>
          </svg>
          <span>Menu</span>
        </a>
        <a href="#booking" className="mobile-sticky__action mobile-sticky__action--book">
          Book a table
        </a>
      </div>
    </>
  )
}
