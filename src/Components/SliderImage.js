import React from 'react'
import './SliderImage.css'

const SliderImage = () => {
  return (
    <div>
        <div className="container">
        <div  id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner" id='carousel'>
                <div class="carousel-item active">
                <img src="./Images/image 3.png" class="img-fluid h-50 w-100" alt="..." />
                </div>
                <div class="carousel-item">
                <img src="./Images/image 14.png" class=" img-fluid h-50 w-100" alt="..." />
                </div>
            
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div className='text-center pt-5'>
            <img src="Images/Group 63.png" alt="" />
            <h3 className='py-4'>Areas of Expertise</h3>
            <p>
            At CBi, we focus on these core areas for our consulting, collaborative,<br></br> grant-funded, and research projects.
            </p>
        </div>
        </div>
    </div>
  )
}

export default SliderImage