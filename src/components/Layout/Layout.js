import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import SideNav from "../SideNav/SideNav";

const Layout = () => {
  return (
    <div className="pt-[23px] px-4">
      <Header />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <SideNav />
        </div>
        <div className="col-span-10">
          
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
