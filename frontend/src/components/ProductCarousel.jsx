// import {useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'
const ProductCarousel = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={3000}>
        <img src='./images/dell.jpg' alt='First slide' className='carousel-image' />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src='./images/prime_day_mobile.webp' alt='Second slide' className='carousel-image' />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src='./images/keychron.jpg' alt='third slide' className='carousel-image' />
      </Carousel.Item>

   
      <Carousel.Item interval={3000}>
        <img src='./images/bigBillion.webp' alt='fourth slide' className='carousel-image' />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img src='./images/guide.jpg' alt='fifth slide' className='carousel-image' />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
          src='./images/Electronics.gif'
          alt='Third slide'
          className='carousel-image'
        />
        </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
