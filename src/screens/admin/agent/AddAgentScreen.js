import React from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";
import UploadProfileImage from "../../../components/UploadProfileImage";
import { userContext } from '../../../context/UserContext';
import { api_url, required_msg, uploadImage } from "../../../helpers/Helpers";



function AddAgentScreen() {

  

  const [agentType, setAgentType] = React.useState("Individual");
  const [image, setImage] = React.useState("/assets/images/upload_image.png");
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("")
  const [currentCity, setCurrentCity] = React.useState("udaipur");
  const [cityList, setCityList] = React.useState([]);
  const { user } = React.useContext(userContext);

  function submit() {
    if (name && mobile && currentCity) {
      if (image) {
        uploadImage(image).then(async (image_link) => {
          sendDataLayer("image",image_link)
        }).catch(err => toast.error(err))
      } else {
        sendDataLayer("no image","no image")
      }
    } else {
      toast.warn(required_msg)
    }
  }

  function sendDataLayer(condition, image_link){
    async function sendData() {
      let send_obj = {
        "full_name": name,
        "mobile": mobile,
        "agent_type": agentType,
        "city": currentCity,
        "created_by" : user.user_number 
      }
  
      if (condition == "image") {
        send_obj["profile_image_link"] = image_link
      }
      
      console.log(JSON.stringify(send_obj))
      const response = await fetch(api_url + 'v1/mwb/admin/agent', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
          // "Authorization": `Bearer ${user.response.access_token}`
        },
        body: JSON.stringify(send_obj)
      });
  
      if (response.ok == true) {
        const data = await response.json();
        console.log(data)
  
      }
  
    }

    sendData()
  }

  const navigate = useNavigate();

  const TopButton = ({ callBack, text }) => {
    return (
      
      <div
        className="py-3 px-4 addAgent__topButton"
      >
        <img src='/assets/images/icon_back.png' onClick={() => {
          window.history.back()
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
            text="Add Agent"
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
                  checked={agentType == "Individual" ? true : false}
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
                  className="radio_button "
                  checked={agentType == "Rep.Firm" ? true : false}
                  onChange={() => {
                    setAgentType("Rep.Firm");
                    // console.log(e.target.value)
                  }}
                ></input>
              </div>
            </div>



            <div className=" d-flex justify-content-center align-items-center flex-column mx-4">
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
                <img src='/assets/images/salesman_icon.png'></img>
              </div>
              <div class="form-check mt-2 pl-0">
                <input
                  class="form-check-input"
                  type="radio"
                  className="radio_button "
                  checked={agentType == "Salesman" ? true : false}
                  onChange={() => {
                    setAgentType("Salesman");
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


            <UploadProfileImage image={image} setImage={setImage} id="admin_add_agent_profile_picture" defaultImage="/assets/images/upload_image.png" />

            <div className="row addAgent__individualDiv mt-3">

              <div class="form-group col-md-4">
                <input value={name} onChange={e => setName(e.target.value)} type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group col-md-4">
                <input value={mobile} onChange={e => setMobile(e.target.value)} type="text" class="form-control" placeholder="Mobile No." />
              </div>
              <div class="form-group col-md-4">
                <select value={currentCity} onChange={e => setCurrentCity(e.target.value)} class="form-control" id="exampleFormControlSelect1">
                  <option disabled selected>City</option>
                  <option value="udaipur">Udaipur</option>
                </select>
              </div>
            </div>

            <button onClick={() => submit()} className="button btn mt-5 mb-4 addAgent__button">
              Submit
            </button>
          </div>
        </CenterDiv>
      </GreyBG>
      <div></div>
    </div>
  );
}

export default AddAgentScreen;
