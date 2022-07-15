// import {useEffect} from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'
const ProductCarousel = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={3000}>
        <img src='./images/primeday.jpg' alt='First slide' className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src='./images/keychron.jpg' alt='Second slide' className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          src='./images/Electronics.gif'
          alt='Third slide'
          className='carousel-image'
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src='./images/macbook.jpg' alt='fourth slide' className='carousel-image' />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src='./images/guide.jpg' alt='fifth slide' className='carousel-image' />
      </Carousel.Item>
    </Carousel>
  )
}

export default ProductCarousel
