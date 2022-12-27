import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
// import { SlCalender } from "react-icons/sl";

const AddNewReport = () => {
  const [updateUser, setUpdateUser] = useState();
  const [value, setValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, new_pass, old_pass, phone, address, location } =
      e.target.elements;
    setUpdateUser({
      name: name.value,
      email: email.value,
      new_pass: new_pass.value,
      old_pass: old_pass.value,
      phone: phone.value,
      address: address.value,
      location: location.value
    });
  };
  console.log(updateUser);

  return (
    <div
      className={`w-full border py-9 bg-white transition-opacity duration-500 mt-1`}
    >
      <div className="modal-header font-bold text-4xl leading-6 -tracking-[0.015em] text-black/80 text-center mb-[84px]">
        New Report Entry
      </div>
      <div className="modal-content">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-12 gap-4 mx-auto py-16 px-16"
          action=""
        >
          <div className="col-span-6 form-control">
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10 relative">
                <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                  Date
                </span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    className="max-w-[292px] px-3 py-2 appearance-none bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    value={value}
                    name="name"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10">
                <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                  Rerport Title
                </span>
                <input
                  type="text"
                  name="title"
                  className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Rerport Title"
                />
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10">
                <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                  Patient Name
                </span>
                <input
                  type="text"
                  name="new_pass"
                  className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Patient Name"
                />
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10 relative">
                <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                  Gender
                </span>
                <select
                  name="state"
                  id="state"
                  className="max-w-[292px] form-input cursor-pointer border border-slate-300 w-full py-2 px-[14px] appearance-none font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none rounded-md"
                >
                  <option value="">Select One</option>
                  <option value="hospital">Male</option>
                  <option value="doctor">Female</option>
                </select>
                <span className="absolute top-1/2 right-6 -translate-y-1/2">
                  <IoIosArrowDown />
                </span>
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10 relative">
                <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                  Preferred Doctor
                </span>
                <select
                  name="state"
                  id="state"
                  className="max-w-[292px] form-input cursor-pointer border border-slate-300 w-full py-2 px-[14px] appearance-none font-normal text-[15px] leading-6 -tracking-[0.015em] text-black/80 focus-visible:outline-none rounded-md"
                >
                  <option value="">Select One</option>
                  <option value="hospital">Male</option>
                  <option value="doctor">Female</option>
                </select>
                <span className="absolute top-1/2 right-6 -translate-y-1/2">
                  <IoIosArrowDown />
                </span>
              </label>
            </div>
          </div>
          <div className="col-span-6 form-control pl-16">
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10">
                <span className="block text-sm font-medium text-slate-700">
                  Phone No
                </span>
                <input
                  value="01743605621"
                  type="text"
                  name="phone"
                  className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Phone No"
                />
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-start justify-between gap-10">
                <span className="block text-sm font-medium text-slate-700">
                  Address
                </span>
                <textarea
                  rows="4"
                  type="text"
                  name="address"
                  value="Madhuri Bhaban (3rd Floor), Holding- 5 Road No- 3, Section- 7, Bus Stand, Dhaka 1216"
                  className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Address"
                />
              </label>
            </div>
            <div className="form-control mb-[52px]">
              <label className="flex items-center justify-between gap-10">
                <span className="block text-sm font-medium text-slate-700">
                  GEO Location
                </span>
                <div className="max-w-[292px] w-full flex items-center gap-4">
                  <input
                    type="text"
                    name="location"
                    value="https://www.google.com/maps/dir/23.83872"
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="GEO Location"
                  />
                  <img
                    className="w-8 h-8 ml-auto cursor-pointer"
                    src={require(`./../../assets/images/pin.png`)}
                    alt=""
                  />
                </div>
              </label>
            </div>
          </div>
          <div className="col-span-12">
            <div className="flex items-center justify-end gap-11">
              <button className="border-[0.5px] border-[#1E1919] py-[5px] px-[34px] rounded-md bg-[rgba(243,3,3,0.89)] font-bold text-base text-white">
                Cancel
              </button>
              <button
                type="submit"
                className="border-[0.5px] border-[#1E1919] py-[5px] px-[34px] rounded-md bg-[rgba(9,173,65,0.89)] font-bold text-base text-white"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewReport;
