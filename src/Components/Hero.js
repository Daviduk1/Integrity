import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='herosection'>
        <div className="container-md py-5" >
            <div className="row  gap-5">
                <div className="col-md mr-md-5" heromobile>
                    <div className='mr'>
                        <h1 className=' lh-sm' style={{ fontWeight:'800', }}>
                        Welcome to a society <br></br>that prefers <span style={{color: '#ee672f'}}>integrity</span> <br></br> over <span style={{color:'#d23a26'}}>corruption.</span> 
                        </h1>
                        <p className='py-4 lh-base' style={{textAlign:'justify'}}>
                            The Convention on Business Integrity  is a company limited by<br></br> Guarantee. The organization was established in 1997 with the<br></br> mission of promoting ethical business Practices, transparency and fair <br></br>competition in the private and public sectors.
                            Our vision is to build “a <br></br>society that prefers integrity over corruption”.
                        </p>
                        <button className='btn '>Read more</button>
                    </div>
                </div>
                <div className="col-md">
                    <div>
                        <img className='img-fluid' src="./Images/image 2.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="d-sm-flex justify-content-evenly align-item-center text-center  p-5" id='heroImages'>
                <div>
                    <img className='img-fluid' src="./Images/image 5.png" alt="" />
                </div>
                <div>
                    <img className='img-fluid' src="./Images/image 6.png" alt="" />
                </div>
                <div>
                    <img className='img-fluid' src="./Images/image 7.png" alt="" />
                </div>
                <div>
                    <img className='img-fluid' src="./Images/image 8.png " alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Hero