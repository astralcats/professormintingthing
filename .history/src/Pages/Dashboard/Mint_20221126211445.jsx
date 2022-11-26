import React, { useState } from "react";
import "./styles/Mint.css";
import thread from "../../Assets/thread.png";
import text from "../../Assets/professor-text.png";
import board from "../../Assets/board.png";
import arrow from "../../Assets/arrow.png";
import prof from "../../Assets/prof.gif";
import gif from "../../Assets/gif.gif";
import axios from "axios";
import { useWeb3React } from "@web3-react/core";
import { contractAbi, contractAddress, rpcUrl } from "../../contracts";
import Web3 from "web3";

const Mint = () => {
  const { active, account, library } = useWeb3React();
  const [code, setCode] = useState("");

  async function mint() {
    const web3 = new Web3(rpcUrl);
    const contract = new web3.eth.Contract(contractAbi, contractAddress);
    let isBlackListed = await contract.methods.alreadyMinted(account).call();

    console.log(account);
    if (isBlackListed) {
      window.alert("Only one wallet per mint");
      console.log(isBlackListed);
      return;
    }

    axios
      .put("https://professors-mint-bot-server.herokuapp.com/mint", {
        mint_code: code,
        wallet_address: account,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        window.alert(error);
      });
    web3.eth.sendTransaction(
      {
        to: "0x9B4888677Fe18897439DA4a69c25CFDf9181F7ff",
        from: account,
        value: web3.utils.toWei("0.003", "ether"),
      },
      function (err, transactionHash) {
        if (!err) {
        }
        console.log(err);
      }
    );
  }

  return (
    <div className="mint-page">
      <img src={prof} className="prof" alt="" />
      <div className="gif-div">
        <img src={thread} className="wire" alt="" />
        <img src={gif} className="gif" alt="" />
        <p className="cp">
          !!! NO CODE !!! CLICK THE ALPHA BUTTON TO GET ONE FREE !!!!!
        </p>
      </div>
      <div className="mint-div">
        <div className="arrow-div">
          <div className="arrow-line"></div>
          <div className="arrow-head"></div>
        </div>
        <div onClick={mint} to={"/dashboard"} className="mint-btn">
          <img src={board} alt="" />
          <p className="btn-text cp">Mint Professor</p>
        </div>
        <div className="amount-div">
          <h2 className="cp">1/10,000</h2>
          <input
            onChange={(e) => setCode(e.target.value)}
            className="cp"
            type="text"
          />
        </div>
        <div className="input-desc">
          <p className="cp">INPUT MINT CODE FROM TG GROUP HERE</p>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="list-text">
        <h3 className="cp">FREE MINT FEATURES</h3>
        <ul>
          <li className="cp"> 10,000 Unique Professors</li>
          <li className="cp">
            Free Access To 'LABZ' Tech Builds In Professor AMA Lounge
          </li>
          <li className="cp">Whitelist Spot For Wagmilabz Collections</li>
          <li className="cp">Wagmi Market place access</li>
        </ul>
      </div>
      {/* <img src={prof} alt="" className="prof" /> */}
      <img src={text} alt="" className="prof-text" />
    </div>
  );
};

export default Mint;
