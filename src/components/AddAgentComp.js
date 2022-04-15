import React from "react";
import AddAgentInput from "../components/AddAgentInput";
import { useLocation } from "react-router-dom";
import UploadProfileImage from "./UploadProfileImage";
import { userContext } from "../context/UserContext";

function AddAgentComp(props) {
  const {
    agentType,
    showGenderRow,
    profileImage,
    setProfileImage,
    adharCardImage,
    setAdharCardImage,
    panCardImage,
    setPanCardImage,
    agentName,
    agentMobileNumber
  } = props;
  const { pathname } = useLocation();
  const { setAgentDetails,agentDetails } = React.useContext(userContext);
  console.log(profileImage)
  return (
    <>
      <UploadProfileImage
        image={agentDetails.profile_image_link ? agentDetails.profile_image_link :profileImage}
        setImage={setProfileImage}
        id="admin_add_agent_kyc_profile_picture"
        text="Upload Image"
        defaultImage={agentDetails.profile_image_link ? agentDetails.profile_image_link :profileImage}
      />
      <div className="row addAgent__individualDiv mt-3">
        <AddAgentInput placeholder={"Full Name"} value={agentName} name='full_name' />
        <AddAgentInput
          placeholder={agentType == "Rep.Firm" ? "GST No." : "Mobile Number"}
          value={agentType == "Rep.Firm" ? "GST No." : agentMobileNumber} 
          name={agentType == "Rep.Firm" ? "pan_card_no" : "mobile"}
        />
        <AddAgentInput
          placeholder={agentType == "Rep.Firm" ? "Pan card Number" : "DOB"} 
          value={agentType == "Rep.Firm" ? agentDetails['pan_card_no'] : agentDetails['dob']}
          name={agentType == "Rep.Firm" ? "pan_card_no" : "dob"}
        />
      </div>

      {showGenderRow ? (
        <div className="row addAgent__individualDiv mt-3">
          <div className="col-md-4 d-flex justify-content-between align-items-center">
            <p>Gender : </p>
            <div className="d-flex align-items-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  className="radio_button"
                  checked
                ></input>
                <p
                  className="mr-1 mt-1"
                  style={{
                    fontSize: "10px",
                  }}
                >
                  Male
                </p>
              </div>
              <img src="/assets/images/groom_icon.png"></img>
            </div>
            <div className="d-flex align-items-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  className="radio_button"
                  checked
                ></input>
                <p
                  className="mr-1 mt-1"
                  style={{
                    fontSize: "10px",
                  }}
                >
                  Female
                </p>
              </div>
              <img src="/assets/images/groom_icon.png"></img>
            </div>
          </div>
          {agentType == "Rep.Firm" ? null : (
            <AddAgentInput placeholder={"Adharcard No"} name='adhar_card_no'  value={''} />
          )}
          <AddAgentInput placeholder={"PAN Card No"} name='pan_card_no'  value={''} />
        </div>
      ) : null}
      <div
        className="row mt-4"
        style={{
          width: "90%",
        }}
      >
        <div className="col-md-6">
          <div class="form-group">
            <textarea
            onChange={(e)=>{
              setAgentDetails((prevState)=>({
                ...prevState,
                address:e.target.value
              }))
              console.log(agentDetails)
            }}
            name='address'
            value={agentDetails['address']}
              placeholder="Address"
              style={{
                resize: "none",
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div class="form-group">
            <textarea
            value={agentDetails['landmark']}
            name='landmark'
            onChange={(e)=>{
              setAgentDetails((prevState)=>({
                ...prevState,
                landmark:e.target.value
              }))
              console.log(agentDetails)
            }}
              placeholder="Landmark"
              style={{
                resize: "none",
                backgroundColor: "#f3f3f3",
              }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <div
        className="row mt-1"
        style={{
          width: "90%",
        }}
      >
        <AddAgentInput
        name={'state'}
          placeholder={"State"}
          grey
          dropdown
          values={["State", "assad", "asdasfsdf", "powopewjop"]}
        />
        <AddAgentInput
        name={'city'}
          placeholder={"City"}
          grey
          dropdown
          values={["City", "assad", "asdasfsdf", "powopewjop"]}
        />
        <AddAgentInput name={'pin_code'} placeholder={"Pincode"} grey  value={''} />
      </div>
      <div
        className="row mt-4"
        style={{
          width: "90%",
        }}
      >
        {agentType == "Rep.Firm" ? (
          <AddAgentInput  placeholder={"Select Category"} value={''} name='category' dropdown values={['sadas','asdad','vvvv']} />
        ) : null}
        <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
          <p className="font-weight-bold m-0 p-0">Upload Documents</p>
          <small>(JPG,JPEG,PNG,PtDF format)</small>
        </div>
        <div className="col-md-4 d-flex justify-content-between">
          <div className="d-flex flex-column align-items-center ">
            <div className="d-flex flex-column align-items-center addAgent__deleteIconDiv">
              <img
                src="/assets/images/delete_icon.png"
                alt=""
                className="addAgent__deleteIcon"
              />
              <UploadProfileImage
                image={agentDetails.adhar_card_image_link ? agentDetails.adhar_card_image_link :adharCardImage}
                setImage={setAdharCardImage}
                id="admin_add_agent_kyc_adhar_card"
                text="Adhar card"
                defaultImage={agentDetails.adhar_card_image_link ? agentDetails.adhar_card_image_link :adharCardImage}
              />
            </div>
          </div>
          <UploadProfileImage
            image={agentDetails.pan_card_image_link ? agentDetails.pan_card_image_link : panCardImage}
            setImage={setPanCardImage}
            id="admin_add_agent_kyc_pan_card"
            text="Pan card"
            defaultImage={agentDetails.pan_card_image_link ? agentDetails.pan_card_image_link : panCardImage}
          />
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}

export default AddAgentComp;
