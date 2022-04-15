import React from "react";

import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import { useNavigate, useParams } from "react-router-dom";
import { api_url } from "../../../helpers/Helpers";
import { UserContext, userContext } from "../../../context/UserContext";
import { toast } from "react-toastify";
function AddAgentKYC() {
  const [individual, setIndividual] = React.useState(true);
  const [repFirm, setRepFirm] = React.useState(false);
  const [salesman, setSalesman] = React.useState(false);
  const [agentType, setAgentType] = React.useState("Individual");

  const [profileImage, setProfileImage] = React.useState(
    "/assets/images/upload_image.png"
  );
  const [adharCardImage, setAdharCardImage] = React.useState(
    "/assets/images/adhar_card.png"
  );
  const [panCardImage, setPanCardImage] = React.useState(
    "/assets/images/pancard_icon.png"
  );

  const navigate = useNavigate();
  const { mobile } = useParams();
  const { user } = React.useContext(userContext);
  const [agentDetails, setAgentDetails] = React.useState({});
  const user_context = React.useContext(userContext);
  React.useEffect(() => {
    if (mobile) {
      async function fetchDetail() {
        const response = await fetch(api_url + "v1/mwb/agent/" + mobile, {
          method: "GET",
          headers: {
            Authorization: user?.response?.access_token,
          },
        });

        if (response.ok == true) {
          const data = await response.json();
          const {
            full_name,
            mobile,
            dob,
            landmark,
            pan_card_no,
            state,
            city,
            pin_code,
            adhar_card_no,
            address,
            adhar_card_image_link,
            pan_card_image_link
          } = data.response;

          setAgentDetails({
            full_name,
            mobile,
          });

          user_context.setAgentDetails((prevState) => ({
            ...user_context.agentDetails,
            full_name,
            mobile,
            modified_by: "7905483808",
            dob,
            landmark,
            pan_card_no,
            state,
            city,
            pin_code,
            adhar_card_no,
            address,
            adhar_card_image_link,
            pan_card_image_link
          }));

          console.log(data);
        }
      }

      fetchDetail();
    }
  }, [mobile]);

  const updateAgentKYC = async() => {
  


    const response = fetch(api_url + "v1/mwb/agent/" + mobile, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer ${user.response.access_token}`
      },
      body: JSON.stringify(user_context.agentDetails),
    });
    response
      .then((r) => r.json())
      .then((data) => {
        // user_context.setAgentDetails({})
        console.log(data);
        console.log(user_context.agentDetails);
      });
  };

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
      <Navbar name="Agent" icon="/assets/images/icon_chart.png" />
      <GreyBG>
        <CenterDiv>
          <TopButton callBack={() => {}} text={"Agent KYC"} />

          <p className="mt-4">Are you an individual or representing a firm ?</p>

          <div className="d-flex mb-5">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIndividual(true);
                setRepFirm(false);
                setSalesman(false);
                setAgentType("Individual");
              }}
              className=" d-flex justify-content-center align-items-center flex-column mx-4"
            >
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
                  id="individual_radio"
                  class="form-check-input"
                  type="radio"
                  checked={individual}
                  className="radio_button "
                  onChange={(e) => {
                    setIndividual(true);
                    setRepFirm(false);
                    setSalesman(false);
                    setAgentType("Individual");
                  }}
                ></input>
              </div>
            </div>

            <div
              onClick={() => {
                setIndividual(false);
                setRepFirm(true);
                setSalesman(false);
                setAgentType("Rep.Firm");
              }}
              className=" d-flex justify-content-center align-items-center flex-column mx-4"
            >
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
                <img src="/assets/images/repfirm_icon.png"></img>
              </div>
              <div class="form-check mt-2 pl-0">
                <input
                  class="form-check-input"
                  type="radio"
                  className="radio_button "
                  checked={repFirm}
                  onChange={(e) => {}}
                ></input>
              </div>
            </div>

            <div
              onClick={() => {
                setIndividual(false);
                setRepFirm(false);
                setSalesman(true);
                setAgentType("Salesman");
              }}
              className=" d-flex justify-content-center align-items-center flex-column mx-4"
            >
              <p className="font-weight-bold">Salesman</p>
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
                <img src="/assets/images/salesman_icon.png"></img>
              </div>
              <div class="form-check mt-2 pl-0">
                <input
                  class="form-check-input"
                  type="radio"
                  className="radio_button "
                  checked={salesman}
                  onChange={(e) => {}}
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
              {repFirm ? "Rep.Firm" : "Individual"}
            </h2>
            {repFirm ? (
              <>
                <AddAgentComp
                  agentName={agentDetails["full_name"]}
                  agentMobileNumber={agentDetails["mobile"]}
                  profileImage={profileImage}
                  setProfileImage={setProfileImage}
                  adharCardImage={adharCardImage}
                  setAdharCardImage={setAdharCardImage}
                  panCardImage={panCardImage}
                  setPanCardImage={setPanCardImage}
                  agentType={agentType}
                  showGenderRow={false}
                />
              </>
            ) : null}
            {repFirm ? (
              <h2 className="addAgent__h2 ">
                <span>Personal Details</span>
              </h2>
            ) : null}
            <AddAgentComp
              agentName={user_context.agentDetails["full_name"]}
              agentMobileNumber={user_context.agentDetails["mobile"]}
              profileImage={profileImage}
              setProfileImage={setProfileImage}
              adharCardImage={adharCardImage}
              setAdharCardImage={setAdharCardImage}
              panCardImage={panCardImage}
              setPanCardImage={setPanCardImage}
              agentType={agentType}
              showGenderRow={true}
            />

            <button
              className="button btn mt-5 mb-4 addAgent__button"
              onClick={updateAgentKYC}
            >
              Submit
            </button>
          </div>
        </CenterDiv>
      </GreyBG>
    </div>
  );
}

export default AddAgentKYC;
