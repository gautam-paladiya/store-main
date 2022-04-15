import React from "react";
import DashboardTable from "../../../components/DashboardTable";
import Navbar from "../../../components/Navbar";
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import { Link } from "react-router-dom";
import PaginationAndExport from "../../../components/PaginationAndExport";


function AgentList() {
  return (
    <>
      <Navbar name="Agent" icon="/assets/images/user.png" />
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
            <Link to="#" className="btn button-customer py-2">
              Customers
            </Link>
            <Link to="/wholesaler/add-agent" className="btn button-dashboard pr-5 py-2">
              <img src="/assets/images/icon_new_user.png" className="mr-3"></img>
              Add Agent
            </Link>
            <button className="btn mr-4">
              <img src="/assets/images/filter_icon.png" className="mr-2"></img>
              Filter
            </button>
          </div>
        </div>

        <CenterDiv>
          <div style={{width: '100%'}}>
            <table class="table ">
              <thead className='text-white ' >
                <tr className='table-head'>

                  <th scope="col" style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>SR no.</th>

                  <th scope="col" style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>Agent Type</th>
                  <th scope="col" style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>Name</th>
                  <th scope="col" style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>Mobile No</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>City</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>Status</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>Share Link</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>KYC Details</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}>View</th>
                  <th style={{
                    fontWeight: 'normal',
                    border: 'none'
                  }}></th>

                </tr>
              </thead>
              <tbody className='table-body'>
                <tr className=''>
                  <td className='py-4'>001</td>
                  <td className='py-4'>Agent</td>
                  <td className='py-4'>Akshay Tailor</td>
                  <td className='py-4'>8562067021</td>
                  <td className='py-4'>Udaipur</td>
                  <td className='py-4'>
                    <span className='px-4 py-2 ' style={{
                      backgroundColor: '#f3f3f3',
                      borderRadius: '15px'
                     }}>
                       KYC Submitted</span>
                  </td>

                  <td >
                    <Link to="/customer-kyc">
                      <div className='d-flex justify-content-center align-items-center rounded  p-3' style={{
                        backgroundColor: '#48DC4E',
                        width: '30px',
                        height: '30px',

                      }}>
                     <img src='/assets/images/share_icon.png'></img>

                      </div>
                    </Link>
                  </td>
                  <td>
                  <Link to="/wholesaler/add-agent-kyc">
                      <div className='d-flex justify-content-center align-items-center  rounded p-3 mr-5 ' style={{
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
                    <Link to="/customer-view">
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
export default AgentList;
