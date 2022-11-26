import React from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDiscord,
  faTelegram,
  faTwitter,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/professor-text.png";
import soon from "../../Assets/soon.gif";
function Sidebar({ open, func }) {
  return (
    <>
      <div
        onClick={() => func(false)}
        className={`overlay ${open ? "open-overlay" : ""}`}
      ></div>
      <div className={`sidebar ${open ? "open-sidebar" : ""}`}>
        <img src={logo} className={"display logo"} alt="" />
        <div className="top-sidebar">
          <NavLink
            onClick={() => func(false)}
            end
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "row-link active" : "row-link"
            }
          >
            <p className="cp">Mint Professor</p>
          </NavLink>
          <NavLink
            onClick={() => func(false)}
            to={"/dashboard/traits"}
            className={({ isActive }) =>
              isActive ? "row-link active" : "row-link"
            }
          >
            <p className="cp">The Traits</p>
          </NavLink>
          <NavLink
            onClick={() => func(false)}
            to={"/dashboard/nft"}
            className={({ isActive }) =>
              isActive ? "row-link active" : "row-link"
            }
          >
            <p className="cp">My NFT'S</p>
          </NavLink>
          <NavLink
            onClick={() => func(false)}
            to={"/dashboard/tech"}
            className={({ isActive }) =>
              isActive ? "row-link active" : "row-link disabled-link"
            }
          >
            <p className="cp">Labz Tech</p>
            <img src={soon} alt="" />
          </NavLink>
          <NavLink
            onClick={() => func(false)}
            to={"/dashboard/evolution"}
            className={({ isActive }) =>
              isActive ? "row-link active" : "row-link disabled-link"
            }
          >
            <p className="cp">LABZ EVOLUTION</p>
            <img src={soon} alt="" />
          </NavLink>
        </div>
        <div className="bottom-sidebar">
          <a onClick={() => func(false)} href="#">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a onClick={() => func(false)} href="#">
            <FontAwesomeIcon icon={faMedium} />
          </a>
          <a onClick={() => func(false)} href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a onClick={() => func(false)} href="#">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
