import React from 'react';
import { Link } from 'react-router-dom';
function DashboardTable( {data} ) {
    return (
        <div style={{
            width: '100%'
        }}>
            <table class="table ">
                <thead className='text-white ' >
                    <tr className='table-head'>
                        
                        <th scope="col" style={{
                            fontWeight: 'normal',
                            border: 'none'
                        }}>SR no.</th>

                        {data.map((e) => (
                           <th scope="col" style={{
                            fontWeight: 'normal',
                            border: 'none'
                        }}>
                            {e.name}
                        </th> 
                        ))}
                        <th scope="col" style={{
                            fontWeight: 'normal',
                            border: 'none'
                        }}>Status</th>
                        <th scope="col"  style={{
                            fontWeight: 'normal',
                            border: 'none'
                        }}>KYC</th>
                        <th scope="col" style={{
                            fontWeight: 'normal',
                            border: 'none'
                        }}>link</th>
                        <th style={{ 
                            fontWeight: 'normal',
                            border: 'none'
                        }}>View</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {Array(15).fill(null).map((e, index) => {
                        return (
                            <tr className=''>
                                <td className='py-4'>001</td>
                                {data.map((e)=> <td className='py-4'>
                                    {e.data}
                                </td>)}
                                <td className='py-4'>
                                    <span className='px-4 py-2 ' style={{
                                        backgroundColor: '#e3e3e31a',
                                        borderRadius: '15px'

                                    }}>KYC Submitted</span>
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
                                    <Link to="/add-agent-kyc">
                                    <div className='d-flex justify-content-center align-items-center  rounded p-3 mr-5 ' style={{
                                        backgroundColor: '#0272A5',
                                        width: '30px',
                                        height: '30px',

                                    }}>
                                        <img src='/assets/images/icon_delete.png'></img>
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
                        );
                    })}


                </tbody>
            </table>
        </div>
    );
}

export default DashboardTable;