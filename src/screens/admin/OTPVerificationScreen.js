import React from 'react';

function OTPVerificationScreen(props) {
    const {ValidateOtp,otp,setOtp,setshow } = props;
    return (
        <div>
            <form onSubmit={e=>ValidateOtp(e)} className='mt-4'>
                <label className='light-grey'>ENTER OTP</label>
                <div className='d-flex justify-content-between'>
                    <input className='form-control rounded otp-input ml-0' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                    <input className='form-control rounded otp-input' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                    <input className='form-control rounded otp-input' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                    <input className='form-control rounded otp-input' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                    <input className='form-control rounded otp-input' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                    <input className='form-control rounded otp-input' onChange={e=>setOtp(otp + e.target.value)} name='digit-1' type='text' ></input>
                </div>
                <button type="submit"  className='button btn mt-4'>Continue</button>
            </form>
            <div className='row justify-content-between mt-4'>
            <button onClick={()=>setshow(false)} className='btn'>BACK</button>
            <button className='btn text-success'>RESEND OTP</button>
            </div>
        </div>
    );
}

export default OTPVerificationScreen;