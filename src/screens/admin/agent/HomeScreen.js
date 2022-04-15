import React from "react";
import DashboardTable from "../../../components/DashboardTable";
import Navbar from "../../../components/Navbar";
import CenterDiv from "../../../components/CenterDiv";
import GreyBG from "../../../components/GreyBG";
import { Link } from "react-router-dom";
import PaginationAndExport from "../../../components/PaginationAndExport"
import { userContext } from '../../../context/UserContext'
import { api_url } from "../../../helpers/Helpers";

function HomeScreen() {
  const { user } = React.useContext(userContext);
  const [list, setList] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sendData, setSendData] = React.useState("");
  const [listStore,setListStore] = React.useState([]);

  function changePage(condition,page){
    if (condition == "prev" && page > 1){
      setCurrentPage(page - 1)
      setList(listStore[page-1])
      console.log(listStore)
    }

    if (condition == "next"){
      setCurrentPage(page+1)
      console.log("ls",listStore.length);
      
      if (listStore.length > page){
        setList(listStore[page+1])
      }else{
        fetchList()
      }
      
    }
  }

  React.useEffect(() => {
    fetchList(currentPage)
  }, [])

  async function fetchList() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let send_data = {
      "page_size": 50
    }

    if (sendData){
      send_data["start"] = sendData
    }

    const response = await fetch(api_url + 'v1/mwb/agent/all', {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(send_data)
    });

    if (response.ok == true) {
      const data = await response.json();
      if (data.status == "success") {
        console.log(data)
        setList(data.response.items);
        setSendData(data.response.start);
        let past_list = [];
        if (listStore.length > 0){
          for (let i=0;i<listStore.length;i++ ){
            past_list.push(listStore[i])
          }
        }
        past_list.push(data.response.items)

        setListStore(past_list)
      }

    }
  }
  return (
    <>
      <Navbar name="Agent" icon='/assets/images/icon_chart.png' />
      <GreyBG>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="position-relative search-input mb-3">
            <input
              type="text"
              className="rounded py-1 px-1 pl-5 rounded-lg "
              placeholder="Search by City,Name and Mobile no."
            ></input>
            <img src='/assets/images/icon_search.png' alt="" />
          </div>
          <div className="mb-3">
            <button className="btn mr-4 filter-btn">
              <img src='/assets/images/filter_icon.png' className="mr-2"></img>
              <span>Filter</span>
            </button>
            <Link to="/add-agent" className="btn button-dashboard pr-3 pr-sm-5 py-2">
              <img src='/assets/images/icon_new_user.png' className="mr-3"></img>
              Add Agent
            </Link>
          </div>
        </div>

        <CenterDiv>
          <div style={{
            width: '100%'
          }}>
            <div className="table-responsive">
              {list.length > 0 && (
                <table class="table">
                  <thead className='text-white ' >
                    <tr className='table-head'>

                      <th scope="col" style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>SR no.</th>

                      <th scope="col" style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>Name</th>
                      <th scope="col" style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>Mobile No</th>
                      <th scope="col" style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>City</th>
                      <th style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>Agent Type</th>
                      <th style={{
                        fontWeight: 'normal',
                        border: 'none',
                        paddingLeft: '20px',
                        minWidth: '10rem'
                      }}>Status</th>
                      <th style={{
                        fontWeight: 'normal',
                        border: 'none',
                        minWidth: '6.5rem'
                      }}>Share Link</th>
                      <th style={{
                        fontWeight: 'normal',
                        border: 'none'
                      }}>KYC Details</th>

                    </tr>
                  </thead>
                  <tbody className='table-body'>
                    {list.map((item, index) => {
                      return (
                        <tr className=''>
                          <td className='py-4'>{index + 1}</td>
                          <td className='py-4'>{item.full_name}</td>
                          <td className='py-4'>{item.mobile}</td>
                          <td className='py-4'>{item.city}</td>
                          <td className='py-4'>{item.agent_type}</td>

                          <td className='py-4'>
                            <span className='px-2 py-2 ' style={{
                              backgroundColor: '#e3e3e31a',
                              borderRadius: '15px'

                            }}>{item.status}</span>
                          </td>
                          <td > <Link to="/add-agent-kyc">
                            <div className='d-flex justify-content-center align-items-center rounded  p-3' style={{
                              backgroundColor: '#48DC4E',
                              width: '30px',
                              height: '30px',

                            }}>
                              <img src='/assets/images/share_icon.png'></img>
                            </div>
                          </Link>
                          </td>
                          <td className='d-flex '>
                            <Link to={`/add-agent-kyc/${item.mobile}`}>
                              <div className='d-flex justify-content-center align-items-center  rounded p-3 mr-5 ' style={{
                                backgroundColor: '#0272A5',
                                width: '30px',
                                height: '30px',

                              }}>
                                <img src='/assets/images/icon_document.png'></img>
                              </div>
                            </Link>


                            <div className='d-flex justify-content-center align-items-center ml-4 rounded p-3' style={{
                              backgroundColor: '#fd8f8f1c',
                              width: '30px',
                              height: '30px',


                            }}>
                              <img src='/assets/images/icon_delete.png'></img>
                            </div>
                          </td>

                        </tr>
                      )
                    })}


                  </tbody>
                </table>
              )}
            </div>
          </div>

        </CenterDiv>
        <PaginationAndExport changePage={changePage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </GreyBG>
    </>
  );
}

export default HomeScreen;
