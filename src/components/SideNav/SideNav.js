import React from "react";
import { NavLink } from "react-router-dom";


const SideNav = () => {
  return (
    <div className="border flex items-center justify-center flex-col p-4 mt-1 sidenav">
      <NavLink to="/" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>Dashboard</NavLink>
      <NavLink to="/add-new-report" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>Add New Report</NavLink>
      <NavLink to="/send-report" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>Sent Reports</NavLink>
      <NavLink to="/complete-report" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>Completed Reports</NavLink>
      <NavLink to="/all-report" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>All Reports</NavLink>
      <NavLink to="/faq" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80 mb-[22px]`}>FAQ</NavLink>
      <NavLink to="/help" className={`border border-black/50 w-full py-4 text-center font-bold text-xl -tracking-[0.015em] text-black/80`}>Help</NavLink>
    </div>
  );
};

export default SideNav;
