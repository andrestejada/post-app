import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import hora from '../../assets/horario.png';
import remote from '../../assets/remote.png';
import workshops from '../../assets/workshops.png';
import fruit from '../../assets/fruit.png';
import './Carousel.scss'
import { SampleNextArrow } from './NextArrow';
import { SamplePrevArrow } from './PrevArrow';


export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,        
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            },
            // eslint-disable-next-line
            breakpoint: 450,
            // eslint-disable-next-line
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            },
          }
          ]
      };
    return (
        <div className='carousel-container' >        
        <Slider {...settings} >
            
          <div>            
            <img src={hora} alt='img' />
            <p>Flexibilidad Horaria</p>
          </div>
          <div>            
            <img src={remote} alt='img' />
            <p>Home Office</p>
          </div>
          <div>            
            <img src={workshops} alt='img' />
            <p>Capacitaciones y workshops</p>
          </div>
          <div>            
            <img src={fruit} alt='img' />
            <p>Snacks, frutas y bebidas gratis</p>
          </div>
          
        </Slider>
        </div>
    )
}
