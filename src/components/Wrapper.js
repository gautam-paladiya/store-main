import React from 'react';
function Wrapper({ children, cardTitle, cardSubTitle,mainTitle }) {
    return (
        <div>
            <div className='row mx-0' style={{height:'100vh'}}>
                <div className='col-lg-6 d-none d-lg-flex bg-image justify-content-center align-items-center'>
                    <img src='/assets/images/logo.png'></img>
                </div>
                <div className='col-lg-6 d-flex justify-content-center align-items-center flex-column '>
                    <h2 className='font-weight-bold'>{mainTitle}</h2> 
                    <div className='card custom-card shadow rounded  align-items-center' style={{
                        marginTop:'100px'
                    }}>
                        <h5 className='title text-center'>{cardTitle}</h5>
                        <p className='light-grey mt-1 w-75 text-center'>{cardSubTitle}</p>
                    {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wrapper;