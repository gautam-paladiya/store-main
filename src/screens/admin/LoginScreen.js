import React, { useState } from "react";
import { auth } from "../../firebase";
import { RecaptchaVerifier } from "firebase/auth";
import OTPVerificationScreen from "./OTPVerificationScreen";
import { api_url, error_msg } from "../../helpers/Helpers";
import { toast } from "react-toastify";
import { userContext } from "../../context/UserContext";
function LoginScreen(props) {
  const [number, setNumber] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [final, setfinal] = useState("");
  const [show, setshow] = useState(false);
  const { setUser } = React.useContext(userContext);

  const ValidateOtp = (e) => {
    e.preventDefault();
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        async function checkUser() {
          const response = await fetch(
            api_url + "v1/mwb/auth/check-user/" + number
          );
          if (response.ok === true) {
            const data = await response.json();
            if (data.status == "success") {
              if (data.response.user_type == "super_admin") {
                let access_token = data.response.access_token;
                data["user_number"] = number;
                setUser(data);
                setTimeout(() => {
                  window.location = window.location.origin + "/success";
                }, 3000);
              }
            } else {
              toast.error("You are not registered as admin");
            }
          } else {
            toast.error(error_msg);
          }
        }

        checkUser();
      })
      .catch((err) => {
        toast.error("Invalid OTP");
      });
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (number === "" || number.length < 10) return;

    async function checkUser() {
      const response = await fetch(
        api_url + "v1/mwb/auth/check-user/" + number
      );
      if (response.ok === true) {
        const data = await response.json();
        if (data.status == "success") {
          console.log(data);

          if (data.response.user_type == "super_admin") {
            let verify = new RecaptchaVerifier("recaptcha-container");
            auth
              .signInWithPhoneNumber("+91" + number, verify)
              .then((result) => {
                setfinal(result);
                setshow(true);

                console.log(result);
              })
              .catch((err) => {
                toast.error(err);
                console.log(err);
                // window.location.reload()
              });
          }
        } else {
          toast.error("You are not registered as admin");
        }
      } else {
        toast.error(error_msg);
      }
    }

    checkUser();
  }

  return (
    <>
      {show ? (
        <OTPVerificationScreen
          setshow={setshow}
          ValidateOtp={ValidateOtp}
          otp={otp}
          setOtp={setOtp}
        />
      ) : (
        <div className="mt-3 w-100">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div class="form-group">
              <label className="light-grey">Mobile Number</label>
              <input
                style={{
                  backgroundColor: "#FCFDFE",
                }}
                placeholder="i.e. 9256783625"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                type="text"
                class="form-control py-2"
              ></input>
              <div id="recaptcha-container"></div>
            </div>
            <div id="recaptcha-container"></div>
            <button type="submit" className="button btn mt-2 btn-block">
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default LoginScreen;
