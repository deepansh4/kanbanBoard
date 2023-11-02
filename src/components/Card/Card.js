import React from "react";
import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
      <div className="top-row">
        <div className="item">{props.id}
          <img src="https://cdn-icons-png.flaticon.com/128/201/201634.png" className="profile"></img>
        </div>
      </div>
      <div className="middle">
        <div className="item">{props.title}</div>
      </div>
      <div className="bottom-row">
        <div className="available-icon">
        <img src="https://cdn-icons-png.flaticon.com/128/40/40059.png" className="profile" />
        </div>

        <div className="feature">
          <div className="item"><img className="circle" src="https://cdn-icons-png.flaticon.com/128/5720/5720434.png"></img> {props.feature}</div>
        </div>

      </div>

    </div>
  );
}

export default Card;