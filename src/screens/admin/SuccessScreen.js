import React from 'react'
function SuccessScreen() {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column height-100 success_div px-3'>
        <img src='/assets/images/success-icon.png' height='280px' className='mt-5 img-fluid'></img>
        <h3 className='text-success mt-3'>SUCCESS</h3>
        <h3 className='text-primary text-center'>You have been Logged In Successfully</h3>
    </div>
  )
}

export default SuccessScreen