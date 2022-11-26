import "./styles/Dashboard.css";
import React, { useState } from "react";
import Sidebar from "../../Layout/Sidebar/Sidebar";
import Header from "../../Layout/DashHeader/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Traits from "./Traits";
import Mint from "./Mint";
import MyNft from "./MyNft";
function Dashboard() {
  const [open, setOpen] = useState(false);
  const openHeader = (val) => {
    setOpen(val);
  };
  const location = useLocation();
  return (
    <div className="dash-wrapper">
      <div className="dashboard">
        <Header func={openHeader} />
        <div className="bottom-App">
          <Sidebar func={openHeader} open={open} />
          <div className="right-div">
              <Routes key={location.pathname} location={location}>
                <Route path="" element={<Mint />}></Route>
                <Route path="traits" element={<Traits />}></Route>
                <Route path="nft" element={<MyNft />}></Route>
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
