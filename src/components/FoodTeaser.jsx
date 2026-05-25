import './FoodTeaser.css'
import foodImg  from '../assets/food.jpg'
import food1Img from '../assets/food1.jpg'
import food2Img from '../assets/food2.jpg'
import tableImg from '../assets/tableoffood.jpg'

const photos = [
  { src: foodImg,  alt: 'Goulash soup' },
  { src: food1Img, alt: 'Paprikás chicken' },
  { src: food2Img, alt: 'Duck confit' },
  { src: tableImg, alt: 'Table spread' },
]

export default function FoodTeaser() {
  return (
    <div className="food-teaser">
      <div className="container">
        <p className="food-teaser__label">Signature Hungarian dishes</p>
        <div className="food-teaser__grid">
          {photos.map(p => (
            <div key={p.alt} className="food-teaser__item">
              <img src={p.src} alt={p.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
