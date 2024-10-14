import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import signin from '../image/signin.jpg'
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";


function Signin() {
    const [value, setValue] = useState()

    const [otp, setOtp] = useState(''); // OTP state
    const [isOtpSent, setIsOtpSent] = useState(false); // To track if OTP has been sent
    const navigate = useNavigate();

    
      // Function to simulate sending OTP
  const handleSendOtp = () => {
    if (value) {
      alert(`OTP sent to ${value}. Use 1234 to verify.`);
      setIsOtpSent(true); // Set flag to indicate OTP has been sent
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  // Function to handle OTP submission
  const handleVerifyOtp = () => {
    if (otp === '1234') {
      alert("OTP verified successfully!");
      navigate("/")
      // Here you can add further actions, like redirecting to another page
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <>
    {/* <Sidebar/> */}
      <div className="grid grid-cols-2 bg-black " style={{height : "100vh"}} >
        <div style={{ backgroundImage: `linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${signin})` }}>      
        </div>      
        <div> 
        <h1 className="text-xl font-semibold mt-6  text-white" >
            Login or sign up to continue
          </h1>
          <p className="text-gray-500">Enter the phone number to login</p>
          <PhoneInput
            className="mt-4 w-64 mb-3 bg-black"
            defaultCountry="IN"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          <p className="text-gray-500">By proceding you confirm that you are above  18  years <br/>  of age and  agree to the <span className="text-blue-500">Privacy policy $ termsof Use</span> </p>
          <button className=" bg-blue-700 w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-60 " onClick={handleSendOtp} >Get OTP  </button>

          {isOtpSent && (
            <div className="mt-6">
              <h2 className="text-gray-500">Enter OTP:</h2>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="bg-black border border-gray-500 text-white w-64 p-2"
                placeholder="Enter OTP"
              />
              <button
                onClick={handleVerifyOtp}
                className="bg-green-700 w-64 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Verify OTP
              </button>
            </div>
          )}


          <div>
            <p className="text-gray-500 mt-36">Having troble loggind in? Get Help</p>
          </div> 
        </div>
      </div>
    </>
  );
}

export default Signin;
