import React from 'react'
import './Society.css'

const Society = () => {
  return (
    <div className='gensoc'>
        <section>
            <div className="container" id='society'>
                
                    <div className="d-flex justify-content-evenly p-2 text-white" >
                        <div>
                          <img  src=" ./Images/image 13.png" alt="" style={{width:'60px'}} />  
                        </div>
                        <div>
                            <p className='mt-4'>The society that prefers Intergrity over corruption</p>
                        </div>
                        <div>
                            <a href="#" className='btn  mt-4' id='contactbtn'>Contact us</a>
                        </div>
                    </div>
                
            </div>

            <div className="container">
            <div className="d-sm-flex justify-content-evenly mx-5 py-5 text-white" id='footerlinks'>
              <div className='link'>
                <h5>Links</h5>
                <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Meet our team</a></li>
                  <li><a href="#">News & media</a></li>
                  <li><a href="#">Our projects</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className='cont'>
                <h6>Contact-Abuja</h6>
                <ul>
                  <li>
                    <img src="./Images/place.png" alt="" /><span>+234 816 447 2520</span>
                  </li>
                  <li>
                    <img src="./Images/place.png" alt="" /><span>+234 816 447 2520</span>
                  </li>
                  <li>
                    <img src="./Images/place.png" alt="" /> <span>92A, Reuben Okoya <br></br>Street,off N Okonjo <br></br>Iweala Way,Wuye,<span style={{color:'#ee672f'}}>Abuja</span></span>
                  </li>
                </ul>
                
              </div>
              <div>
                <h6>Contact-Lagos</h6>
                <ul id='conttact'>
                  <li>
                    <img src="./Images/place.png" alt="" /><span>+234 811 436 0119</span>
                  </li>
                  <li>
                    <img src="./Images/place.png" alt="" /><span>info@cbinigeria.com</span>
                  </li>
                  <li>
                    <img src="./Images/place.png" alt="" /><span>17A, House 2, Muyibat Oyefusi<br></br> Crescent, Off Adeyemo Akapo Street, <br></br>Omole Phase I, Ikeja,<span style={{color:'#ee672f'}}>Lagos</span></span>
                  </li>

                </ul>
              </div>
              <div className='social'>
                <ul>
                  
                    <li><a href="#"><i class="bi bi-twitter"></i></a></li>
                    <li><a href="#"><i class="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i class="bi bi-instagram"></i></a></li>
                    
                  
                </ul>
              </div>
            </div>
            </div>
        </section>
            
    </div>
  )
}

export default Society