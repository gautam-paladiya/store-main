import React from "react";
import DashboardTable from "../../../components/DashboardTable";
import Navbar from "../../../components/Navbar";
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import { Link } from "react-router-dom";
import PaginationAndExport from "../../../components/PaginationAndExport";

function OfferList() {
  return (
    <>
      <Navbar name="Offer" icon="/assets/images/user.png" />
      <GreyBG>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="position-relative search-input">
            <input
              type="text"
              className="rounded py-1 px-1 pl-5 rounded-lg "
              placeholder="Search by City,Name and Mobile no."
            ></input>
            <img src="/assets/images/icon_search.png" alt="" />
          </div>
          <div>
            <button className="btn mr-4">
              <img src="/assets/images/filter_icon.png" className="mr-2"></img>
              Filter
            </button>
            <Link to="/wholesaler/product-create" className="btn button-dashboard pr-5 py-2">
              <img src="/assets/images/create_offer_icon.png" className="mr-3"></img>
              Create Offer
            </Link>
          </div>
        </div>

        <CenterDiv>
          <div style={{
            width: '100%'
          }}>
            <table class="table ">
              <thead className='text-white ' >
                <tr className='table-head'>

                  <th scope="col" style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>SR no.</th>

                  <th scope="col" style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Offer type</th>
                  <th scope="col" style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Offer for</th>
                  <th scope="col" style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Name</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Offer Price</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Created Date</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Expiry Date</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Status</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>Edit</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}>View</th>
                  <th style={{
                    fontWeight: 'bold',
                    border: 'none'
                  }}></th>
                </tr>
              </thead>
              <tbody className='table-body'>
                <tr className=''>
                  <td className='py-4'>001</td>
                  <td className='py-4'>Item</td>
                  <td className='py-4'>Wholeseller<br />Retailer</td>
                  <td className='py-4'>
                    MWB Gold-Basmati Rice
                  </td>
                  <td className='py-4'>500.00</td>
                  <td className='py-4'>02/02/2022</td>
                  <td className='py-4'>10/02/2022</td>
                  <td className='py-4'>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                  </td>
                  <td >
                    <Link to="/customer-kyc">
                      <div className='d-flex justify-content-center align-items-center rounded  p-3' style={{
                        backgroundColor: '#0272A5',
                        width: '30px',
                        height: '30px',

                      }}>
                        <img src='/assets/images/icon_document.png'></img>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <Link to="/customer-view">
                      <div className='d-flex justify-content-center align-items-center  rounded p-3 mr-5 ' style={{
                        backgroundColor: '#FBB03B',
                        width: '30px',
                        height: '30px',

                      }}>
                        <img src='/assets/images/view.png'></img>
                      </div>
                    </Link>
                  </td>
                  <td>
                    <Link to="#">
                      <div className='d-flex justify-content-center align-items-center  rounded p-3 mr-5 ' style={{
                        backgroundColor: '#fff4f4',
                        width: '30px',
                        height: '30px',

                      }}>
                        <img src='/assets/images/icon_delete.png'></img>
                      </div>
                    </Link>
                  </td>
                </tr>


              </tbody>
            </table>
          </div>



        </CenterDiv>
        <PaginationAndExport />
      </GreyBG>
    </>
  );
}
export default OfferList;
