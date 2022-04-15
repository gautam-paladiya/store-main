import React from "react";

import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import AddAgentInput from '../../../components/AddAgentInput';
import { useNavigate } from 'react-router-dom';

function AgentCreate() {
  const [agentType, setAgentType] = React.useState("Individual");
  const navigate = useNavigate();

  const TopButton = ({ callBack, text }) => {
    return (
      // <button
      //   onClick={callBack}
      //   className="button btn py-4 px-4 addAgent__topButton"
      // >
      //   <img src='/assets/images/icon_back.png' onClick={() => {
      //     navigate(-1);
      //   }} className="addAgent__topButtonIcon"></img>
      //   <span>{text}</span>
      // </button>




      <div
        onClick={callBack}
        className="py-3 px-4 addAgent__topButton"
      >
        <img src='/assets/images/icon_back.png' onClick={() => {
          navigate(-1);
        }} className="addAgent__topButtonIcon"></img>
        <span className="text-white">{text}</span>
      </div>
    );
  };
  return (
    <div>
      <Navbar name="Agent" icon='/assets/images/icon_chart.png' />
      <GreyBG>
        <CenterDiv>
          <TopButton
            callBack={() => { }}
            text={agentType == "Individual" ? "Agent KYC" : "Add Agent"}
          />

          <p className="mt-4 px-3">
            Are you an individual or representing a firm ?
          </p>

          <div
            className="d-flex mb-5 justify-content-center flex-wrap"
          >
            <div className=" d-flex justify-content-center align-items-center flex-column mx-4">
              <p className="font-weight-bold">Individual</p>
              <div
                style={{
                  background: "#FFF1E7",
                  mixBlendMode: "normal",
                  border: "1px solid #FD6B09",
                  borderRadius: "6px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <img src="/assets/images/man_1.png"></img>
              </div>
              <div class="form-check mt-2 pl-0">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  className="radio_button "
                  onChange={() => {
                    setAgentType("Individual");
                    // console.log(e.target.value)
                  }}
                ></input>
              </div>
            </div>

            <div className=" d-flex justify-content-center align-items-center flex-column mx-4">
              <p className="font-weight-bold">Rep.Firm</p>
              <div
                style={{
                  background: "#FFF1E7",
                  mixBlendMode: "normal",
                  border: "1px solid #FD6B09",
                  borderRadius: "6px",
                  padding: "0",
                  margin: "0",
                }}
              >
                <img src='/assets/images/repfirm_icon.png'></img>
              </div>
              <div class="form-check mt-2 pl-0">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  className="radio_button "
                  onChange={() => {
                    setAgentType("Rep.Firm");
                    // console.log(e.target.value)
                  }}
                ></input>
              </div>
            </div>
  
          </div>
          <div
            className="d-flex justify-content-between flex-column align-items-center addAgent__mainDiv mt-5"
            style={{
              mixBlendMode: "normal",
              border: "1px solid #FD6B09",
              borderRadius: "6px",
              width: "90%",
            }}
          >
            <h2
              className="px-4 "
              style={{
                marginTop: "-20px",
                backgroundColor: "white",
                color: "#FD6B09",
              }}
            >
              {agentType == "Rep.Firm" ? "Rep.Firm" : "Individual"}
            </h2>
            <div className="d-flex justify-content-center align-items-center flex-column mt-5">
              <img src='/assets/images/upload_image.png'></img>
              <p className="mt-3 mb-5">Upload Profile Image</p>
            </div>

            <div className="row addAgent__individualDiv mt-3">
              {/* <AddAgentInput placeholder={"Full Name"} />
              <AddAgentInput placeholder={agentType == 'Rep.Firm' ? "GST No." : 'Mobile Number'} />
              <AddAgentInput placeholder={agentType == 'Rep.Firm' ? "Pan card Number" : 'DOB'} /> */}
              <div class="form-group col-md-3">
                <input type="text" class="form-control" placeholder="Agent Type" />
              </div>
              <div class="form-group col-md-3">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group col-md-3">
                <input type="text" class="form-control" placeholder="Mobile No." />
              </div>
              <div class="form-group col-md-3">
                <select class="form-control" id="exampleFormControlSelect1">
                  <option disabled selected>City</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>

            <button className="button btn mt-5 mb-4 addAgent__button">
              Submit
            </button>
          </div>
        </CenterDiv>
      </GreyBG>
      <div></div>
    </div>
  );
}

export default AgentCreate;
