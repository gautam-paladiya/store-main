import React from 'react'
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import Navbar from "../../../components/Navbar";

import AddAgentComp from "../../../components/AddAgentComp";
import AddAgentInput from '../../../components/AddAgentInput';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
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
        <span>Add Product</span>
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
              //border: "1px solid #FD6B09",
              borderRadius: "6px",
              width: "90%",
            }}>
           
            <div class="container">
                <div class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
                    <p class="col-md-4 mb-0 text-muted"></p>
                    <a>
                      <strong>Status?</strong>
                      <label className="switch status_switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </a>

                <ul className="nav col-md-4 justify-content-end">
                  <li>Stock?</li>
                  <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions"/>
                      <label className="form-check-label" for="inlineRadio1">In Stock</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions"/>
                      <label className="form-check-label" for="inlineRadio1">Out of Stock</label>
                  </div>
                </ul>

  <section className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
       <label for="GroupName" class="form-label">Group Name</label>
              <select className="form-select" id="country" required>
                <option value="">Food Grains</option>
              </select>
      </div>
      </div>
  </section>

  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5">   
        <div class="col">
          <div class="card shadow-sm">
            <img src='/assets/images/rice.jpg' class="bd-placeholder-img card-img-top" width="100%" height="180" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
              <p class="card-text">Rice</p>   
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src='/assets/images/dal.jpg' class="bd-placeholder-img card-img-top" width="100%" height="180" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
              <p class="card-text">Dal</p>   
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src='/assets/images/poha.jpg' class="bd-placeholder-img card-img-top" width="100%" height="180" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
              <p class="card-text">Poha</p>   
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src='/assets/images/dry_fruits.jpg' class="bd-placeholder-img card-img-top" width="180" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
              <p class="card-text">Dry Fruits</p>   
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
            <img src='/assets/images/food_oil.jpg' class="bd-placeholder-img card-img-top" width="180" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" />
            <div class="card-body">
              <p class="card-text">Food Oil</p>   
            </div>
          </div>
        </div>
      </div>              
    </div>
     
     <div className='col-12'>
              <label for="Product Name" class="form-label"></label>
              <input type="Name" class="form-control" id="Name" placeholder="Product Name" />
      </div>  

      <div className='addProduct_fields'>
      <section className="py-1 text-left container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
              <select className="form-select" id="country" required>
                <option value="">20  KG</option>
              </select>
              <select className="form-select" id="country" required>
                <option value="">5  Unit</option>
              </select>
              <input type="Price" id="Price" placeholder="Product Price" value="500.00Rs"/>
          </div>
          <div className="col-lg-6 col-md-8 mx-auto">
            <fieldset>
              <legend className='perUnit'>Per Unit</legend>
              <input type="Price" id="Price" placeholder="4 KG" />
              <input type="Price" id="Price" placeholder="100.00 Rs"/>
            </fieldset>  
          </div>
        </div>
      </section>
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

export default AddProduct;
