import React from "react";

import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import { useNavigate } from 'react-router-dom';

function AddAgentKYC() {
  const [individual,setIndividual] = React.useState(true)
  const [repFirm,setRepFirm] = React.useState(true)
  const [salesman,setSalesman] = React.useState(true)
  const [agentType,setAgentType] = React.useState("Individual")
  const navigate = useNavigate()

  console.log('first')

 
  const TopButton = ({ callBack, text }) => {
    return (
      <button
        onClick={callBack}
        className="button btn py-4 px-4 addAgent__topButton"
      >
        <img src="/assets/images/icon_back.png" 
        onClick={()=>{
          navigate(-1)
        }}
       className="addAgent__topButtonIcon"></img>
        <span>{text}</span>
      </button>
    );
  };
  return (
    <div>
      <Navbar name="Customer" icon="/assets/images/user.png" />
      <GreyBG>
        <CenterDiv>
          <TopButton
            callBack={() => {}}
            text={"Customer KYC"}
          />
          
          <div
            className="d-flex justify-content-between flex-column align-items-center addAgent__mainDiv mt-5"
            style={{
              mixBlendMode: "normal",
              width: "90%",
            }}
          >
            {agentType == "Rep.Firm" ? (
              <>
                <AddAgentComp agentType={agentType} showGenderRow={false} />
              </>
            ) : null}
            {agentType == "Rep.Firm" ? (
              <h2 className="addAgent__h2 ">
                <span>Personal Details</span>
              </h2>
            ) : null}
            <AddAgentComp agentType={agentType} showGenderRow={true} />

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

export default AddAgentKYC;
