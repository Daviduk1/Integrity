import React from 'react'
import './CommitSec.css'

const CommitSec = () => {
  return (
    <div className='commitsec'>
        <div className="container pt-1" style={{position:'relative', bottom:'6rem'}}>
            <div className="row">
                <div className="col-lg" id='influence' >
                    <div>
                        <img className='py-4' src="./Images/Group 63.png" alt="" />
                        <h1  className='pb-3'>Our Mission</h1>
                        <p>
                        To influence the behavior of systems and institutions through the wide<br></br> publication of ratings and rankings performed on them; to enable more <br></br>transparent, consistent and predictable transactions that people<br></br> benefit from.
                        </p>
                    </div>
                    <div className="d-flex gap-5">
                        <div>
                            <h5 className=''style={{fontWeight:'bold', color:'#FF7E3D', }}>100+</h5>
                            <p>
                            Happy Clients
                            </p>
                        </div>
                        <div>
                            <h5 className=''style={{fontWeight:'bold', color:'#114A82'}}>500+</h5>
                            <p>
                            Projects Delivered
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg" id='integrityy'>
                    <div className="card" style={{width:'13rem', boxShadow: '0 0 15px rgba(255,126,61,0.25)'}}>
                        <div className="card-body">
                            <img className='img-fluid py-3' src="./Images/group 60.png" alt="" />
                            <h5 className='card-title pb-3'>Integrity</h5>
                            <p className='card-text pb-3'>
                            We use our strengths to 
                            towards a common purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default CommitSec