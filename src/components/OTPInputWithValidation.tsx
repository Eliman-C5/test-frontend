// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react';

const correctOTP = "123456" // validate from your server

function OtpInputWithValidation({ numberOfDigits }) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [otpError, setOtpError] = useState(null);
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1].focus()
    }
  }

  useEffect(() => { 
    if(otp.join("") !== "" && otp.join("") !== correctOTP){
      setOtpError("❌ Wrong OTP Please Check Again")
    }else{
      setOtpError(null)
    } 
   }, [otp]);

  return (
    <article className="w-1/2">
      <p>OTP Input With Validation</p>
      <p>A special type of input box where as user types, it checks if the otp is correct else it shows an error message below with a shake animation.</p>
      
      <p>One Time Password (OTP)</p>
     
     <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
      {otp.map((digit, index)=>(
        <input key={index} value={digit} maxLength={1}  
        onChange={(e)=> handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference)}
        className={`border`}
        />
      ))}

     </div>


      <p className={`${otpError ? 'error-show' : ''}`}>{otpError}</p>
    </article>
  );
}

export default OtpInputWithValidation;