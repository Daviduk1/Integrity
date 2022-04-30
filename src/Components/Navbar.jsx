import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white px-5 py-3">
  <div class="container-sm">
    <a class="navbar-brand" href="#"><img src="./Images/Integrity_Logo 1.png" alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto" style={{paddingRight:'1rem'}}>
        <li class="nav-item">
          <Link to='/' class="nav-link active" aria-current="page" href="#" style={{display: 'none'}}>Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" class="nav-link" href="#">About Us</Link>
        </li>
        
        <li class="nav-item">
          <Link to="/collection" class="nav-link" href="#">COllective Action Progress</Link>
        </li>
        <li class="nav-item">
          <Link to="/resources" class="nav-link" href="#">Resources</Link>
        </li>
        <li class="nav-item">
          <Link to="/media" class="nav-link" href="#">Media</Link>
        </li>
        <li class="nav-item">
          <Link to="/blog" class="nav-link" href="#">Blog</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" class="nav-link" href="#">Contact</Link>
        </li>
        <li class="nav-item">
        <button className='btn' id='navbtn'style={{marginLeft:'10px'}}>Search <span style={{paddingLeft:'10px',}}><i class="bi bi-search"></i></span></button>
       
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar