import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import myImageLogin from "../Static/login1.jpg";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function LoginComponent() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");
  const [signinname, signinName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("91");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setSignInPassword] = useState("");
  const [signInError, setSignInError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [role, setRole] = useState("");
  const [emailError, setEmailError] = useState("");
  const [activeForm, setActiveForm] = useState("sign_up");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPasswordSignIn] = useState(false);

  // ... (previous functions)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPasswordSignIn(!showPassword1);
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handlesignInputChange = (event) => {
    signinName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    let numericValue = event.target.value.replace(/[^0-9]/g, "");
    numericValue = numericValue.slice(0, 12);
    if (!numericValue.startsWith("91")) {
      numericValue = `91${numericValue}`;
    }
    setPhoneNumber(numericValue);
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setEmailError(isValidEmail(enteredEmail) ? "" : "Invalid email format");
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;

    setPassword(newPassword);
    setPasswordError(
      newPassword.length >= 8
        ? ""
        : "Password must be at least 8 characters long"
    );
  };

  const handleSignInPasswordChange = (event) => {
    const newPassword = event.target.value;

    setSignInPassword(newPassword);
    setPasswordError(
      newPassword.length >= 8
        ? ""
        : "Password must be at least 8 characters long"
    );
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleSignUp = (user_choice) => {
    if (user_choice === "sign_up") {
      setActiveForm("sign_up");
    } else if (user_choice === "sign_in") {
      setActiveForm("sign_in");
    }
  };

  const submitHandlerSignUp = (event) => {
    event.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 12) {
      console.log("Invalid phone number");
      return;
    }
    // document.getElementById("forms_window").classList.add("hidden");
    const roleValues = {
      student: 1,
      parent: 2,
      teacher: 3,
    };
    const userName = name;
    const userPhnNumber = phoneNumber;
    const userEmail = email;
    const userPass = password;
    const userRole = roleValues[role];

    axios.defaults.withCredentials = true;

    axios
      .post("http://padhaiplanet.com/api/v1/signup", {
        name: userName,
        email: userEmail,
        phone: userPhnNumber,
        password: userPass,
        role: userRole,
      })
      // .then((response) => {
      // console.log(response);
      // localStorage.setItem("isLoggedIn", 1);
      // navigate("/");

      .then((response) => {
        if (response.data.meta.success) {
          localStorage.setItem("user_id", response.data.data.user_id);
          navigate("/");
        } else {
          console.log("SignUp failed");
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandlerSignIn = (event) => {
    event.preventDefault();

    let userPhnNumber = signinname;
    const userPass = password1;
    if (!isNaN(userPhnNumber)) {

      if (userPhnNumber.length === 10) {
        userPhnNumber = `91${userPhnNumber}`;
      }
      else if (userPhnNumber.length === 12) {
        userPhnNumber = `${userPhnNumber}`
      }
      else {
        userPhnNumber = "";
      }
      console.log(userPhnNumber.length);
    }

    axios.defaults.withCredentials = true;

    axios
      .post("http://padhaiplanet.com/api/v1/login", {
        email_or_phone: userPhnNumber,
        password: userPass,
      })
      .then((response) => {
        console.log(response);
        if (response.data.meta.message === "User logged in") {
          localStorage.setItem("user_id", response.data.data.user_id);
          navigate("/");
        } else {
          setSignInError("Invalid credentials / Please SignUp if you dont have an account");
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {screenWidth >= 768 && (
          <img
            src={myImageLogin}
            alt="Your Image Alt Text"
            className="w-full w-[450px] h-auto md:h-[650px]  lg:ml-[150px] xl:ml-[300px] 2xl:ml-[350px] mt-[6%]"
          />
        )}
        <div className="w-full md:w-[430px] sm:pr-1 mr:ml-[100px] md:mr-[350px] md:mt-[6%] 2xl:mr-[400px] bg-gray-200 h-auto md:h-[650px] relative">
          <div className="border border-gray-200 border-solid w-full md:w-[402px] md:mr-[5%] md:mt-[2%] h-auto md:h-[500px]">
            <p className="text-center text-lg">Please Login to continue</p>
            <div className="mt-[3%] inner-content h-[600px] bg-white ">
              <div className="flex w-full">
                <button
                  onClick={() => toggleSignUp("sign_up")}
                  className={`relative w-full h-12 text-black font-semibold ${activeForm === "sign_up" ? "bg-blue-600" : "bg-white"
                    } `}
                >
                  Sign Up
                  {activeForm === "sign_up" && (
                    <span className="w-full h-1"></span>
                  )}
                </button>
                <button
                  onClick={() => toggleSignUp("sign_in")}
                  className={`relative w-full h-12 text-black font-semibold ${activeForm === "sign_in" ? "bg-blue-600" : "bg-white"
                    } `}
                >
                  Sign In
                  {activeForm === "sign_in" && (
                    <span className=" w-full h-2 "></span>
                  )}
                </button>
              </div>

              <form
                onSubmit={
                  activeForm === "sign_up"
                    ? submitHandlerSignUp
                    : submitHandlerSignIn
                }
                id="signup"
                className={`${activeForm === "sign_up" ? "" : "hidden"}`}
              >
                <div className="w-[90%] pl-[8%] md:pl-[10%] lg:pl-[10%]  mt-[8%]">
                  <div className="relative mb-6 ">
                    <label htmlFor="uname">{name ? "" : ""}</label>
                    <input
                      type="text"
                      name="uname"
                      className=" text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1 sm:mr-4"
                      placeholder=""
                      value={name}
                      onChange={handleInputChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Name*
                    </span>
                  </div>

                  <div className="relative mb-6">
                    <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                    <input
                      type="text"
                      name="phone"
                      className="text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1"
                      placeholder=""
                      minlength="10"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Phone Number*
                    </span>
                  </div>

                  <div className="relative mb-5">
                    <label htmlFor="email">{email ? "" : ""}</label>
                    <input
                      type="text"
                      name="email"
                      className={`text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1 ${emailError ? "border-red-500" : ""
                        }`}
                      placeholder=""
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Email*
                    </span>
                    {emailError && (
                      <p className="text-red-500 text-sm mt-1">{emailError}</p>
                    )}
                  </div>

                  <div className="relative mb-5">
                    <label htmlFor="role">{role ? "" : ""}</label>
                    <select
                      name="role"
                      className="text-4sm text-gray-900 w-full h-[54px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1"
                      value={role}
                      onChange={handleRoleChange}
                    >
                      <option value="" disabled hidden></option>
                      <option value="student">Student</option>
                      <option value="parent">Parent</option>
                      <option value="teacher">Teacher</option>
                    </select>
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Select Role
                    </span>
                  </div>

                  <div className="relative mb-2">
                    <label htmlFor="password">{password ? '' : ''}</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-black focus:outline-none"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1"
                        placeholder=""
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Password*
                    </span>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                    )}
                  </div>


                  {/* <div className="text-sm ml-[5%] mt-[2%]">
                    * Password must contain a Capital letter, a small letter,
                    character(eg. @), and a number.
                  </div> */}
                  <div>
                    <button
                      className="w-[200px] ml-[18%] rounded-lg text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5 mb-[20px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      <span className="mx-auto">Sign Up</span>
                    </button>
                  </div>
                </div>
              </form>

              <form
                onSubmit={submitHandlerSignIn}
                id="signin"
                className={`${activeForm === "sign_in" ? "" : "hidden"}`}
              >
                <div className="w-full pl-[8%] mt-[35%] mr-[3%]">
                  <div className=" w-[90%] relative mb-2 lg:ml-4 ">
                    <label htmlFor="phone">{phoneNumber ? "" : ""}</label>
                    <input
                      type="text"
                      name="phone"
                      className="text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1"
                      placeholder=""
                      minlength="10"
                      value={signinname}
                      onChange={handlesignInputChange}
                      required
                    />
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Phone Number/Email*
                    </span>
                  </div>
                  <div className="mb-8">
                    {signInError && (
                      <p className="text-red-500 text-xs mt-1 mx-2 lg:mx-4">{signInError}</p>
                    )}</div>

                  <div className="w-[90%] relative mb-5 lg:ml-4">
                    <label htmlFor="password">{password1 ? "" : ""}</label>
                    <div className="relative">
                      <button
                        type="button"
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-black focus:outline-none"
                        onClick={togglePasswordVisibility1}
                      >
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      <input
                        type={showPassword1 ? "text" : "password"}
                        name="password"
                        className="text-4sm text-gray-900 w-full h-[50px] p-4 rounded-lg border-2 border-gray-300 outline-none focus:outline-none focus:border-blue-500 transition-all duration-200 relative z-1"
                        placeholder=""
                        value={password1}
                        onChange={handleSignInPasswordChange}
                        required
                      />
                    </div>
                    <span className="placeholder absolute top-0 left-4 px-1 font-sans text-gray-400 flex items-center text-2sm -translate-y-1/2 bg-white pointer-events-none z-20 transition-all duration-200">
                      Password*
                    </span>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1 mx-2">
                        {passwordError}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="w-[200px] ml-[18%] rounded-lg text-white button-bg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-lg py-2.5 mb-[20px] inline-flex items-center dark:bg-blue-600 mt-6 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      <span className="mx-auto">Sign In</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
