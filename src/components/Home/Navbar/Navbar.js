import React from "react";
import './Navbar.css'
import logo1 from '../../../images/istockphoto-1169455737-612x612.jpg'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nab" style={{width:'100%', margin:'0 auto'}}>
      <nav style={{ borderRadius:'3px', backgroundColor:'#14D1CB'}} class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">

              <div style={{marginLeft:'140px'}}>
              <img style={{width:'30px', marginLeft:'27px'}} src={logo1} alt=""/> <br/>
              <small>Solving Service</small>
              </div>

              <li style={{marginLeft:'200px'}} class="nav-item">
                <Link class="nav-link text-white ms-5 active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/Order">
                  Order
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/order/:id">
                  Add Order
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white ms-5" to="/addReview">
                  Reviews
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-white ms-5" to="/adminOrder">
                  admin
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  text-white ms-5" to="/login">
                  <button>log in</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
