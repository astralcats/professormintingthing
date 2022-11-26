import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/professor-text.png";
import connect1 from "../../Assets/connect1.svg";
import connect2 from "../../Assets/connect2.svg";
import connect3 from "../../Assets/connect3.svg";
import connect4 from "../../Assets/connect4.gif";
import { Link } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { coinbaseWallet, injected, walletConnect } from "../../connectors";


function Header({ func }) {
  const [modal, setModal] = useState(false);
  const {activate, active} = useWeb3React();


  async function Connect(){
    try{
      await activate(injected)
    } catch(ex){
      console.log(ex)
    }
  }

  async function WalletConnect(){
    try{
      await activate(walletConnect)
    } catch(ex){
      console.log(ex)
    }
  }

  async function CoinbaseConnect(){
    try{
      await activate(coinbaseWallet)
    } catch(ex){
      console.log(ex)
    }
  }


  return (
    <div className="header">
      {/* modal ------------ */}
      <>
        <div
          onClick={() => setModal(false)}
          className={`overlay-modal-connect ${
            modal ? "open-modal-connect" : ""
          }`}
        ></div>
        <div className={`modal-connect ${modal ? "open-modal-connect" : ""}`}>
          <div className="modal-box">
            <div className="modal-cont-connect" onClick={Connect}>
              <img src={connect1} alt="" />
              <h2>MetaMask</h2>
              <p>Connect to your MetaMask Wallet</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect" onClick={WalletConnect}>
              <img src={connect2} alt="" />
              <h2>WalletConnect</h2>
              <p>Scan with WalletConnect to connect</p>
            </div>
          </div>
          <div className="modal-box">
            <div className="modal-cont-connect" onClick={CoinbaseConnect}>
              <img src={connect3} alt=""/>
              <h2>Coinbase Wallet</h2>
              <p>Scan with CoinBase Wallet to connect</p>
            </div>
          </div>
        </div>
      </>
      {/* modal end------------ */}
      <div className="left-header">
        <FontAwesomeIcon
          onClick={() => func(true)}
          icon={faBars}
          className="mobile"
        />
        <Link to="/dashboard">
          {" "}
          <img src={logo} className={"logo"} alt="" />
        </Link>
      </div>
      <div className="right-header">
        {/* <div className="link drop">
          <div className="top-link">
            <FontAwesomeIcon icon={faCircleInfo} />
            <p>$OP $0.0771 USD</p>
          </div>

          <div className="dropdown">
            <a
              target={"blank"}
              href="https://pancakeswap.finance/swap?outputCurrency=0xd87fce0d8d6d8a38a2d808081fcfa79e78ba5a4a"
              className="drop-link"
            >
              <p>Buy on Pancake Swap</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <div className="drop-link">
              <p>Chart</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div> */}
        <div onClick={() => setModal(true)} className="link2">
          <p className="cp">Connect Wallet</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
