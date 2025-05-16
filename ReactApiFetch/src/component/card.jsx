import React from "react";

const Card = ({ country }) => {
  return (
    <div className="grid grid-cols-3">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={country.url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.name}</h2>
          <p>{country.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
