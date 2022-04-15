import React from 'react'
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";
import { useNavigate } from 'react-router-dom';

function ViewCustomer() {
  const [agentType, setAgentType] = React.useState("");
  const navigate = useNavigate();

  const TopButton = ({ callBack, text }) => {
    return (
      <button
        onClick={callBack}
        className="button btn py-4 px-4 addAgent__topButton"
      >
        <img src="/assets/images/icon_back.png" onClick={() => {
          navigate(-1);
        }} className="addAgent__topButtonIcon"></img>
        <span>Customer Request</span>
      </button>
    );
  };
  return (
    <div>
      <Navbar name="Customer" icon="/assets/images/user.png" />
      <GreyBG>
        <CenterDiv>
          <TopButton
            callBack={() => { }}
          />
          
          <div
            className="d-flex justify-content-between flex-column align-items-center addAgent__mainDiv mt-5"
            style={{
              mixBlendMode: "normal",
              border: "2px solid #EBEAEA",
              borderRadius: "6px",
              width: "97%",
            }} >

             <section class="text-center">
                <div class="request_container">
                    <h6 class="customerRequest-heading">Customer Approval Request</h6>
                      <p>
                        <a href="#" class="btn btn-primary my-2 reject__button">Reject</a>
                        <a href="#" class="btn btn-secondary my-2 accept__button">Accept</a>
                      </p>
                  </div>
              </section>
        </div>

        <div
            className="row d-flex justify-content-between flex-column align-items-left addAgent__mainDiv mt-5"
            style={{
              mixBlendMode: "normal",
              width: "90%",
              fontWeight: "500px",
              fontSize: "14px",
            }} >

              <div class="row customerDetails_row">
                <div class="col-md-3 ">
                  <small>Plan Name</small>
                  <p><strong>Sachin Yadav</strong></p>
                </div>
                <div class="col-md-3">
                  <small>Days</small>
                  <p><strong>40</strong></p>
                </div>
                <div class="col-md-3">
                  <small>Amount</small>
                  <p><strong>500</strong></p>
                </div>
              </div> 
 
              <div class="row customerDetails_row">
                <div class="col-md-3">
                  <small>Plan Type</small>
                  <p><strong>Paid Plan</strong></p>
                </div>
                <div class="col-md-3">
                  <small>No. of Branches</small>
                  <p><strong>10</strong></p>
                </div>
              </div>          

              <div class="row">
                <div class="col-md-10">
                  <small>Address</small>
                  <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</strong></p>
                </div>
              </div>           
        </div>      
        </CenterDiv>
      </GreyBG>
    </div>
  );
}

export default ViewCustomer;
