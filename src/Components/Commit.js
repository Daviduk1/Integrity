import React from 'react'
import './Commit.css'

const Commit = () => {
  return (
    <div className='commit'>
        <div className="container">
            <div className="row">
                <div className="col-lg">
                    <div className='' id='mobile'>
                        <img src="./Images/Group 63.png" alt=""/>
                        <h1 className='py-4'>Our Commitment</h1>
                        <p>
                        We let our actions speak for us, by envisioning a society that prefers<br></br> integrity over corruption.
                        </p>
                    </div>
                </div>
                <div className="col-md" id='clear'>
                    <div className="contain">
                        <div className="d-sm-flex gap-4">
                            <div className="card" id='intergrity' style={{width:'13rem', height:'13rem',boxShadow: '0 0 15px rgba(255,126,61,0.25)'}}>
                                <div className="card-body">
                                    <img className='img-fluid pt-3' src="./Images/group.png" alt="" />
                                    <h5 className='card-title pb-'>Integrity</h5>
                                    <p className='card-text pb-'>
                                    We are clearly above board in
                                    all we do.
                                    </p>
                                </div>
                            </div>
                            <div className="card"id='effectivecard' style={{width:'13rem', height:'',boxShadow: '0 0 15px rgba(255,126,61,0.25)', position:'relative',top:'6rem'}}>
                                <div className="card-body">
                                    <img className='img-fluid pt-5 pb-3' src="./Images/group 61.png" alt="" />
                                    <h5>Effective <br></br>Implementation</h5>
                                    <p className='card-text pb-4'>
                                    We are able to generate creative
                                    ideas on how to live today like 
                                    that future has already come.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
       
        
    </div>
  )
}

export default Commit