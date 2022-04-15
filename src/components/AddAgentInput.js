import React from "react";
import { userContext } from "../context/UserContext";

function AddAgentInput({ placeholder, grey, dropdown, values, value,name }) {
  const { setAgentDetails,agentDetails } = React.useContext(userContext);
  return (
    <div class="form-group col-md-4">
      {dropdown ? (
        <select
        onChange={(e)=>{
            console.log(e.target.value)
            setAgentDetails(prevState=>({...prevState,[name]:e.target.value}))
        }}
          name={name}
          id="cars"
          className="form-control"
          style={{
            backgroundColor: grey ? "#f3f3f3" : "white",
          }}
        >
          {values.map((e) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      ) : (
        <input
        onChange={(e)=>{
            console.log(e.target.value)
            setAgentDetails(prevState=>({...prevState,[name]:e.target.value}))
            console.log(agentDetails)
        }}
        name={name}
          type="text"
          class="form-control "
          value={agentDetails[name]}
          placeholder={placeholder}
          style={{
            backgroundColor: grey ? "#f3f3f3" : "white",
          }}
        ></input>
      )}
    </div>
  );
}

export default AddAgentInput;
