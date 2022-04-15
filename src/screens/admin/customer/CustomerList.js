import React from "react";
import DashboardTable from "../../../components/DashboardTable";
import Navbar from "../../../components/Navbar";
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import { Link } from "react-router-dom";
import PaginationAndExport from "../../../components/PaginationAndExport";
import { api_url } from "../../../helpers/Helpers";

function CustomerList() {
  const [customers, setCustomers] = React.useState([]);
  React.useEffect(() => {
    const fetchCustomerList = async () => {
      const response = await fetch(
        api_url + "/v1/mwb/agent/all?user_type=admin"
      );
      console.log(response);
    };

    fetchCustomerList()
  });

  return (
    <>
      <Navbar name="Customer" icon="/assets/images/user.png" />
      <GreyBG>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="position-relative search-input mb-3">
            <input
              type="text"
              className="rounded py-1 px-1 pl-5 rounded-lg "
              placeholder="Search by City,Name and Mobile no."
            ></input>
            <img src="/assets/images/icon_search.png" alt="" />
          </div>
          <div className="mb-3">
            <button className="btn mr-4 filter-btn">
              <img src="/assets/images/filter_icon.png" className="mr-2"></img>
              Filter
            </button>
            <Link
              to="/customer-create"
              className="btn button-dashboard pr-5 py-2"
            >
              <img
                src="/assets/images/icon_new_user.png"
                className="mr-3"
              ></img>
              Add Customer
            </Link>
          </div>
        </div>

        <CenterDiv>
          <div
            style={{
              width: "100%",
            }}
          >
            <div className="table-responsive">
              <table class="table ">
                <thead className="text-white ">
                  <tr className="table-head">
                    <th
                      scope="col"
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      SR no.
                    </th>

                    <th
                      scope="col"
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Firm Name
                    </th>
                    <th
                      scope="col"
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      C_Name
                    </th>
                    <th
                      scope="col"
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Mobile No
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      City
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Business Type
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Sub-Categories
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Agent ID
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      KYC
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      Link
                    </th>
                    <th
                      style={{
                        fontWeight: "normal",
                        border: "none",
                      }}
                    >
                      View
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr className="">
                    <td className="py-4">001</td>
                    <td className="py-4">Firm A</td>
                    <td className="py-4">Ali</td>
                    <td className="py-4">8562067021</td>
                    <td className="py-4">Udaipur</td>
                    <td className="py-4">Type</td>
                    <td className="py-4">Sub-Categories</td>

                    <td className="py-4">
                      <span
                        className="px-4 py-2 "
                        style={{
                          backgroundColor: "#e3e3e31a",
                          borderRadius: "15px",
                        }}
                      >
                        KYC Submitted
                      </span>
                    </td>

                    <td className="py-4">Agent ID</td>

                    <td>
                      <Link to="/customer-kyc">
                        <div
                          className="d-flex justify-content-center align-items-center rounded  p-3"
                          style={{
                            backgroundColor: "#48DC4E",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          <img src="/assets/images/icon_document.png"></img>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <div
                        className="d-flex justify-content-center align-items-center  rounded p-3 mr-5 "
                        style={{
                          backgroundColor: "#0272A5",
                          width: "30px",
                          height: "30px",
                        }}
                      >
                        <img src="/assets/images/share_icon.png"></img>
                      </div>
                    </td>

                    <td>
                      <Link to="/customer-view">
                        <div
                          className="d-flex justify-content-center align-items-center  rounded p-3 mr-5 "
                          style={{
                            backgroundColor: "#FBB03B",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          <img src="/assets/images/view.png"></img>
                        </div>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CenterDiv>

        <PaginationAndExport />
      </GreyBG>
    </>
  );
}
export default CustomerList;
