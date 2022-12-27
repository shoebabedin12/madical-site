import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Signup = () => {
  const [user, setUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password, state } = e.target.elements;
    setUser({ name: name.value, password: password.value, state: state.value });
  };
  console.log(user);
  return (
    <>
      <div className="max-w-[632px] border mx-auto mt-[135px]">
        <div className="py-16 px-14">
          <h2 className="font-bold text-2xl leading-9 -tracking-[0.015em] text-black mb-[42px]">
            Sign up
          </h2>
          <form onSubmit={handleSubmit} className="">
            <div className="form-control relative mb-6">
              <select
                name="state"
                id="state"
                className="form-input cursor-pointer border border-black/50 w-full py-2 px-[14px] appearance-none font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none"
              >
                <option value="">Select User Type</option>
                <option value="hospital">Hospital</option>
                <option value="doctor">Doctor</option>
              </select>
              <span className="absolute top-1/2 right-6 -translate-y-1/2">
                <IoIosArrowDown />
              </span>
            </div>
            <div className="form-control">
              <input
                className="form-input border border-black/50 w-full py-2 px-[14px] mb-6 font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="form-control">
              <input
                className="form-input border border-black/50 w-full py-2 px-[14px] mb-6 font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="form-control">
              <input
                className="form-input border border-black/50 w-full py-2 px-[14px] mb-6 font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none"
                type="text"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="form-control">
              <input
                className="form-input border border-black/50 w-full py-2 px-[14px] mb-6 font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none"
                type="text"
                name="c_Password"
                id="c_Password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="form-control">
              <button
                className="bg-[#18A0FB] rounded-md font-medium text-[15px] leading-[18px] -tracking-[0.015em] text-white py-[11px] px-[36px]"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
