import React from "react";
import "./Card.css";

function Card({ body }) {
  return (
    <div className="card-container">
      <div className="card-table">{body}</div>
    </div>
  );
}

export default Card;