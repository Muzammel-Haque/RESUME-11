import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import PaymentProcess from "../../PaymentProcess/PaymentProcess";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const PlaceOrder = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [info, setInfo] = useState(null);
  const [data, setData] = useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data[0]));
  }, []);
  console.log(product);

  const handleBlur = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    e.preventDefault();
  };

  const handleClick = (data, e) => {
    setInfo(data);
  };

  const handlePaymentSuccess = (idToken) => {
    const eventData = {
      name: info.name,
      price: product.price,
      email: loggedInUser.email,
      address: info.address,
      idToken,
      status: "undo",
      date: new Date(),
    };
    const url = `http://localhost:5000/addOrder`;
    console.log("price", eventData);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server site response"));
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
        <div style={{ display: info ? "none" : "block" }}>
          <div
              style={{
                width: "500px",
                border: "1px solid gray",
                margin: "20px",
                padding: "40px",
                borderRadius: "10px",
              }}>
            <form>
              <h3 style={{ textAlign: "center" }}>{product.name}</h3>
              <h6 style={{ textAlign: "center" }}>Price: ${product.price}</h6>
              <div class="form-group">
                <label for="exampleInputPassword1">name</label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="name"
                />
              </div>{" "}
              <br />
              <div class="form-group">
                <label for="exampleInputPassword1">Address</label>
                <input
                  onBlur={handleBlur}
                  type="text"
                  class="form-control"
                  name="address"
                  placeholder="Address"
                />
              </div>
              <br />
            </form>
            <button
              onClick={handleClick}
              style={{
                backgroundColor: "#14D1CB",
                border: "none",
                padding: "10px",
                borderRadius: "3px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <div style={{ display: info ? "block" : "none" }}>
          <div style={{ width: "300px", marginLeft: "30px" }}>
            <h4>Please Payment</h4>
            <PaymentProcess
              handlePaymentSuccess={handlePaymentSuccess}
            ></PaymentProcess>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
