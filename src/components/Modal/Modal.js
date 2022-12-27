import React, { useState } from "react";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, closeModal }) => {
  const [editModal, setEditModal] = useState(false);
  const [updateUser, setUpdateUser] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, new_pass, old_pass, phone, address, location } = e.target.elements;
    setUpdateUser({ name: name.value, email: email.value, new_pass: new_pass.value, old_pass: old_pass.value, phone: phone.value, address: address.value, location: location.value});
  };

  const profileEdit = () => {
    setEditModal(!editModal);
    closeModal(false);
  };
  return (
    <>
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1075px] w-full border py-9 px-[68px] bg-white transition-opacity duration-500  ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="modal-header font-bold text-4xl leading-6 -tracking-[0.015em] text-black/80 text-center mb-[84px]">
          Hospital Profile
        </div>
        <div className="modal-content">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <img
                className="w-24 h-24 mb-7"
                src={require(`./../../assets/images/hospital1.png`)}
                alt=""
              />
              <h3 className="font-bold text-[32px] leading-6 -tracking-[0.015em] text-[rgba(23,53,132,0.8)] mb-7">
                X Hospital Pvt. Ltd.
              </h3>
              <p className="font-normal text-2xl leading-6 text-black/80 -tracking-[0.015em]">
                Madhuri Bhaban (3rd Floor), Holding- 5 Road No- 3, Section- 7,
                Bus Stand, Dhaka 1216
              </p>
            </div>
            <div className="col-span-6">
              <img
                onClick={profileEdit}
                className="w-14 h-14 ml-auto mb-24 cursor-pointer"
                src={require(`./../../assets/images/edit.png`)}
                alt=""
              />
              <ul className="text-right">
                <li className="font-normal text-2xl leading-6 text-black/80 -tracking-[0.015em] mb-[30px]">
                  <Link to="#" className="flex items-center justify-start">
                    <img
                      className="w-8 h-8 ml-auto"
                      src={require(`./../../assets/images/telephone.png`)}
                      alt=""
                    />
                    01743605621
                  </Link>
                </li>
                <li className="font-normal text-2xl leading-6 text-black/80 -tracking-[0.015em] mb-[30px]">
                  <Link
                    to="#"
                    className="flex items-center justify-start gap-4"
                  >
                    <img
                      className="w-8 h-8 ml-auto"
                      src={require(`./../../assets/images/email.png`)}
                      alt=""
                    />
                    xhospital@gmail.com
                  </Link>
                </li>
                <li className="font-normal text-2xl leading-6 text-black/80 -tracking-[0.015em]">
                  <Link
                    to="#"
                    className="flex items-center justify-start gap-4"
                  >
                    <img
                      className="w-8 h-8 ml-auto"
                      src={require(`./../../assets/images/google-maps.png`)}
                      alt=""
                    />
                    X Hospital Pvt. Ltd. Location
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full border py-9 px-[68px] bg-white transition-opacity duration-500  ${
          editModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="modal-header font-bold text-4xl leading-6 -tracking-[0.015em] text-black/80 text-center mb-[84px]">
          Hospital Profile Edit
        </div>
        <div className="modal-content">
          <form onSubmit={handleSubmit}
            className="grid grid-cols-12 gap-4 max-w-[1376px] mx-auto border py-16 px-16"
            action=""
          >
            <div className="col-span-6 form-control">
              <div className="form-control mb-[52px]">
                <label className="flex items-center justify-between gap-10">
                  <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                    Hospital Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value="X Hospital Pvt. Ltd."
                    className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Hospital Name"
                  />
                </label>
              </div>
              <div className="form-control mb-[52px]">
                <label className="flex items-center justify-between gap-10">
                  <span className="after:content-['*'] after:ml-0.5 after:text-black/80 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input
                    disabled
                    type="email"
                    name="email"
                    value="monjurulalom007@gmail.com"
                    className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Email"
                  />
                </label>
              </div>
              <div className="form-control mb-[52px]">
                <label className="flex items-center justify-between gap-10">
                  <span className="block text-sm font-medium text-slate-700">
                    New Password
                  </span>
                  <input
                    type="text"
                    name="new_pass"
                    className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="New Password"
                  />
                </label>
              </div>
              <div className="form-control mb-[52px]">
                <label className="flex items-center justify-between gap-10">
                  <span className="block text-sm font-medium text-slate-700">
                    Old Password
                  </span>
                  <input
                    type="text"
                    name="old_pass"
                    className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="Old Password"
                  />
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
                  <div className="flex items-center gap-4">
                      <input
                        type="text"
                        name="location"
                        value="https://www.google.com/maps/dir/23.83872"
                        className="max-w-[292px] px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                    <button onClick={() => setEditModal(false)} className="border-[0.5px] border-[#1E1919] py-[5px] px-[34px] rounded-md bg-[rgba(243,3,3,0.89)] font-bold text-base text-white">Cancel</button>
                    <button type="submit" className="border-[0.5px] border-[#1E1919] py-[5px] px-[34px] rounded-md bg-[rgba(9,173,65,0.89)] font-bold text-base text-white">Update</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
