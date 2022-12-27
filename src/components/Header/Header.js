import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Header = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const signIN = () => {
    navigate("signin");
    console.log("sign in");
  };
  const signUP = () => {
    navigate("signup");
    console.log("sign up");
  };
  const signOut = () => {
    navigate("signin");
    console.log("signOut");
  };
  const profileView = () => {
    setModalOpen(!modalOpen)
  };
  const closeModal = (item) => {
    console.log(item);
    setModalOpen(item)
  }
  return (
    <div>
      <div className="flex items-center justify-between border border-[rgba(0, 0, 0, 0.56)] py-6 px-16">
        <div className="">
          <h2 className="text-center font-bold text-[40px] leading-[72px] -tracking-[0.015em] text-black invisible">
            Medical Report
          </h2>
        </div>
        <div className="">
          <h2 className="text-center font-bold text-[40px] leading-[72px] -tracking-[0.015em] text-black">
            Medical Report Maker
          </h2>
        </div>
        {isAuth ? (
          <div className="flex items-center justify-end gap-10">
            <button
              onClick={signIN}
              className="border border-[rgba(0, 0, 0, 0.44)] rounded-md py-3 px-9"
            >
              Sign In
            </button>
            <button
              onClick={signUP}
              className="border border-[rgba(0, 0, 0, 0.44)] rounded-md py-3 px-9"
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end gap-4">
            <img className="cursor-pointer" onClick={profileView}
              src={require(`./../../assets/images/user.png`)}
              alt=""
            />
            <p
              onClick={profileView}
              className="font-bold text-[22px] leading-7 text-[#0F0202] text-center -tracking-[0.015em] cursor-pointer"
            >
              X Hospital Pvt. Ltd
            </p>
            <span className="font-bold text-[22px] leading-7 text-[#0F0202] text-center -tracking-[0.015em]">
              |
            </span>
            <button
              onClick={signOut}
              className="font-bold text-[22px] leading-7 text-[#0F0202] text-center -tracking-[0.015em]"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
      <Modal isOpen={modalOpen} closeModal={closeModal}/>
    </div>
  );
};

export default Header;
