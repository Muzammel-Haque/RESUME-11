import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import computerImage from '../../../images/106849231-young-man-repairing-computer-hardware-and-using-laptop-in-service-center (1).jpg'

const OurServices = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Our Servicing Center</h1>
        <p className="text-secondary">
          Service features tended no do thoughts me on dissuade scarcely own are
          pretty spring suffer <br /> old denote his proposal speedily amr
          striking am now.
        </p>
      </div>
      <div className="row">
        <div style={{textAlign:'right'}} className="col-md-4">
          <div>
            <div>
              <FontAwesomeIcon className="icon"
                style={{ fontSize: "50px", marginBottom: "5px" }}
                icon={faMapMarker}
              />
              <h4>Dhaka</h4>
              <p className="text-secondary">
                It’s soon going to be much easier to get your <br/> iPhone fixed.
                Apple said early day that it was <br/> expanding its product
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="icon"
                style={{ fontSize: "50px", marginBottom: "5px" }}
                icon={faMapMarker}
              />
              <h4>Shylet</h4>
              <p className="text-secondary">
                It’s soon going to be much easier to get your <br /> iPhone
                fixed. Apple said early day that it was <br /> expanding its
                product
              </p>
            </div>
          </div>
          </div>
          <div className="col-md-4">
              <div>
                  <img style={{width:'400px', height:'350px', borderRadius:'50px', marginLeft:'15px', marginTop:'10px'}} src={computerImage} alt=""/>
              </div>
          </div>
          <div style={{textAlign:'left'}} className="col-md-4">
          <div>
            <div>
              <FontAwesomeIcon className="icon"
                style={{ fontSize: "50px", marginBottom: "5px" }}
                icon={faMapMarker}
              />
              <h4>Khulna</h4>
              <p className="text-secondary">
                It’s soon going to be much easier to get your <br/> iPhone fixed.
                Apple said early day that it was <br/> expanding its product
              </p>
            </div>
            <div>
              <FontAwesomeIcon className="icon"
                style={{ fontSize: "50px", marginBottom: "5px" }}
                icon={faMapMarker}
              />
              <h4>Chittagong</h4>
              <p className="text-secondary">
                It’s soon going to be much easier to get your <br /> iPhone
                fixed. Apple said early day that it was <br /> expanding its
                product
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
};

export default OurServices;
