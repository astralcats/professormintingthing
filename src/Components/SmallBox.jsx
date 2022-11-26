import React from "react";
function SmallBox({ img, name }) {
  return (
    <div className="trait-small-box">
      <img src={img} alt="" className="trait-img" />
      <p>{name}</p>
    </div>
  );
}

export default SmallBox;
