import React from "react";
import "./styles/Traits.css";
import SmallBox from "../../Components/SmallBox.jsx";
import data from "./images";
function Traits() {
  return (
      <div className="traits">
        {/* Backgrounds box ----------------- */}
        <div className="traits-box">
          <h1>Backgrounds</h1>
          <div className="traits-grid">
            {data.background.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Body box ----------------- */}
        <div className="traits-box">
          <h1>Body</h1>
          <div className="traits-grid">
            {data.body.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Clothes box --------------------------- */}
        <div className="traits-box">
          <h1>Clothes</h1>
          <div className="traits-grid">
            {data.clothes.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* Eyes box --------------------------- */}
        <div className="traits-box">
          <h1>Eyes</h1>
          <div className="traits-grid">
            {data.eyes.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* glasses box --------------------------- */}
        <div className="traits-box">
          <h1>Glasses</h1>
          <div className="traits-grid">
            {data.glasses.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* head box --------------------------- */}
        <div className="traits-box">
          <h1>Headwear</h1>
          <div className="traits-grid">
            {data.head.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* moustache box --------------------------- */}
        <div className="traits-box">
          <h1>Moustache</h1>
          <div className="traits-grid">
            {data.moustache.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* mouth box --------------------------- */}
        <div className="traits-box">
          <h1>Mouth</h1>
          <div className="traits-grid">
            {data.mouth.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* nose box --------------------------- */}
        <div className="traits-box">
          <h1>Nose</h1>
          <div className="traits-grid">
            {data.nose.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
        {/* special box --------------------------- */}
        <div className="traits-box">
          <h1>Special Edition</h1>
          <div className="traits-grid">
            {data.special.map((elem, index) => {
              return <SmallBox key={index} img={elem.img} name={elem.name} />;
            })}
          </div>
        </div>
      </div>
  );
}

export default Traits;
