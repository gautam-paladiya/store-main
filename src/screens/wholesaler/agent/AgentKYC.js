import React from "react";

import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import { useNavigate } from "react-router-dom";
import AddAgentInput from "../../../components/AddAgentInput";

function AgentKYC() {
  const [individual, setIndividual] = React.useState(true);
  const [repFirm, setRepFirm] = React.useState(false);
  const [agentType, setAgentType] = React.useState("Individual");
  const navigate = useNavigate();

  const TopButton = ({ callBack, text }) => {
    return (
      <button
        onClick={callBack}
        className="button btn py-4 px-4 addAgent__topButton"
      >
        <img
          src="/assets/images/icon_back.png"
          onClick={() => {
            navigate(-1);
          }}
          className="addAgent__topButtonIcon"
        ></img>
        <span>{text}</span>
      </button>
    );
  };
  return (
    <div>
      <Navbar name="Agent" icon='/assets/images/icon_chart.png' />
      <GreyBG>
        <CenterDiv>
          
          <TopButton callBack={() => {}} text={"Agent Name"} />

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
                    <h6 class="customerRequest-heading">Agent Approval Request</h6>
                      <p>
                        <a href="#" class="btn btn-primary my-2 reject__button">Reject</a>
                        <a href="#" class="btn btn-secondary my-2 accept__button">Accept</a>
                      </p>
                  </div>
              </section>
        </div>
          <div className="d-flex mb-5">
            
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
              {repFirm ? "" : "Individual"}
            </h2>
            
           
            <AddAgentComp agentType={agentType} showGenderRow={true} />
            

            <button className="button btn mt-5 mb-4 addAgent__button">
              Submit
            </button>
          </div>
        </CenterDiv>
      </GreyBG>
    </div>
  );
}

export default AgentKYC;
