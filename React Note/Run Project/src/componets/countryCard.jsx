import React, { useEffect, useState } from 'react';

const CountryCard = (desh) => {
    // console.log(desh)
    const [name] = desh;
    // console.log(desh);

    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
           {/* <img src={desh.flags.png} /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name.common} </h2>
            <h1></h1>
            <p>
              {/* <span>{desh.capital}</span> */}
            </p>
          </div>
        </div>
      </div>
    );
};

export default CountryCard;