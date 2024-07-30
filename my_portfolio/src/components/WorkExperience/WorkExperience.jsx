import React, { useRef } from 'react'
import './WorkExperience.css'
import ExperienceCard from './ExperienceCard/ExperienceCard'
import {WORK_EXPERIENCE} from '../../utils/data'
import Slider from "react-slick"

const WorkExperience = () => {

  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const slideRight = () => {
    sliderRef.current.slickNext()
  }

  const slideLeft = () => {
    sliderRef.current.slickPrev()
  }

  return (
    <section className='experience_container'>
        <h5>Work Experience</h5>

        <div className='experience_content'>

          <div className='arrow_right' onClick={slideRight}>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </div>
          <div className='arrow_left' onClick={slideLeft}>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
                <ExperienceCard key={item.title} details={item} />
            ))}  
          </Slider> 
        </div>
    </section>
  )
}

export default WorkExperience