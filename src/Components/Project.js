import React from 'react'
import './Product.css'

const Project = () => {
  return (
    <div>
        <div className="container">
            <div className='text-center py-5'>
                <img src="Images/Group 63.png" alt="" />
                <h3 className='pt-2'>Our Projects</h3>
                <p>
                    At CBi, we focus on these core areas for our consulting, collaborative,<br></br> grant-funded, and research projects.

                </p>
            </div>
            <div className="row gap-5 text-center">
                <div className="col-md">
                    <img className='img-fluid' src="./Images/image 9.png" alt="" />
                </div>
                <div className="col-md">
                    <img className='img-fluid' src="./Images/image 10.png" alt="" />
                </div>
                <div className="col-md">
                    <img className='img-fluid' src="./Images/image 11.png" alt="" />
                </div>
                <div className="col-md">
                    <img className='img-fluid' src="./Images/image 12.png" alt="" />
                </div>
            </div>
            <div className='text-center'>
                    <img src="./Images/Group 63.png" alt="" />
                    <h3 className='py-4'>News and Articles</h3>
                    
            </div>

            <div className="row">
                <div className="col-md">
                    <div class="card " style={{width:'25rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)'}}>
                        <img src="./Images/pic1 (2).png" className="card-img-top img-fluid" alt="..." />
                        <a href="#" class="btn"id='allbtn' style={{width:'110px', position:'relative', bottom:'15rem', left:'19px', backgroundColor:'#EE672F', color:'white'}}>VANCANCY</a>
                    <div class="card-body" id='discover'>
                        <div className='d-sm-flex gap-3' id='space'>
                            <div className=''>
                                <img src="./Images/Vector.png" alt="" /> <span>8 Jan, 2022</span>
                            </div>
                            <div>
                                <img src="./Images/Vector.png" alt="" /> <span>Vacancy</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='space'>UI/UX Designer - Abuja <br></br>Fulltime</h5>
                            <a id='hreff' href="#">Discover more</a> <span className='icon'><i class="bi bi-arrow-right"></i></span>
                        </div>
                    </div>
                    </div>
        
                </div>
                <div className="col-md">
                <div class="card " style={{width:'25rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)'}}>
                    <img src="./Images/pic1 (3).png" className="card-img-top img-fluid" alt="..." />
                    <a href="#" class="btn btn-primary" style={{width:'110px', position:'relative', bottom:'15rem', left:'19px'}}>NEWS</a>
                    <div class="card-body" id='discover'>
                        <div className='d-sm-flex gap-3' id='space'>
                            <div className=''>
                                <img src="./Images/Vector.png" alt="" /> <span>8 Jan, 2022</span>
                            </div>
                            <div>
                                <img src="./Images/Vector.png" alt="" /> <span>News</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='space'>Call for Proposal Monitoring and Evaluation</h5>
                            <a id='hreff' href="#">Discover more</a> <span className='icon'><i class="bi bi-arrow-right"></i></span>
                        </div>
                    </div>
                    </div>
        
                </div>
                <div className="col-md">
                <div class="card " style={{width:'25rem', boxShadow: '0 0 15px rgba(0, 0, 0, 0.05)'}}>
                    <img src="./Images/pic1 (1).png" className="card-img-top img-fluid" alt="..." />
                    <a href="#" class="btn btn-primary" style={{width:'110px', position:'relative', bottom:'15rem', left:'19px'}}>VANCANCY</a>
                    <div class="card-body" id='discover'>
                        <div className='d-sm-flex gap-3' id='space'>
                            <div className=''>
                                <img src="./Images/Vector.png" alt="" /> <span>8 Jan, 2022</span>
                            </div>
                            <div>
                                <img src="./Images/Vector.png" alt="" /> <span>News</span>
                            </div>
                        </div>
                        <div>
                            <h5 className='space'>Press Statement- CPI 2021-Matter Arising</h5>
                            <a id='hreff' href="#">Discover more</a> <span className='icon'><i class="bi bi-arrow-right"></i></span>
                        </div>
                    </div>
                    </div>
        
                </div>
            </div>
            <div className='pt-5 text-center' id='gradient'>
                    <a href="#" className='btn '>Show more</a>
            </div>
        </div>
    </div>
  )
}

export default Project