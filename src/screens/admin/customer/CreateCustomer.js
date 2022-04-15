import React from 'react'
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import AddAgentInput from '../../../components/AddAgentInput';
import { useNavigate } from 'react-router-dom';
import UploadProfileImage from '../../../components/UploadProfileImage';

function CustomerCreate() {
  const [agentType, setAgentType] = React.useState("");
  const [image,setImage] = React.useState('')
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
        <span>Add Customer</span>
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
            text={agentType == "Individual" ? "Agent KYC" : "Add Agent"}
          />
          
          <div
            className="d-flex justify-content-between flex-column align-items-center addAgent__mainDiv mt-5"
            style={{
              mixBlendMode: "normal",
              //border: "1px solid #FD6B09",
              borderRadius: "6px",
              width: "90%",
            }}
          >
            
            <UploadProfileImage image={image} setImage={setImage} id="admin_add_customer_profile_picture" defaultImage="/assets/images/upload_image.png" />

            <div className="row addAgent__individualDiv mt-3">
                
              <AddAgentInput placeholder={"Full Name"} name='full_name'/>
              <AddAgentInput placeholder={agentType == 'Rep.Firm' ? "GST No." : 'Mobile Number'} name={agentType == 'Rep.Firm' ? "GST No." : 'mobile'} />
              <AddAgentInput placeholder={agentType == 'Rep.Firm' ? "Pan card Number" : 'DOB'} name={agentType == 'Rep.Firm' ? "pan_card_no" : 'dob'} />
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

export default CustomerCreate;
