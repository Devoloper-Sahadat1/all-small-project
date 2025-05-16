import React, { useEffect, useState } from 'react';

const Fetch = () => {
    const [country, setCountrys] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => setCountrys(data));
    }, [])
    console.log(country[0]);
    // console.log(typeof(country));
    
        
    return (
      <div>
        <div className="grid grid-cols-3 gap-5">
                {country.map((desh,index) => (
            <Card key={index} desh={desh} ></Card>
            
          ))}
        </div>
       
        <h1>hello</h1>
      </div>
    );
};

export default Fetch;

function Card({ prams }) {
    console.log(prams)
        return(
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>{/* <img src={desh.flags.png} /> */}</figure>
      <div className="card-body">
        <h2 className="card-title">{prams.name.common} </h2>
        <h1></h1>
        <p>{/* <span>{desh.capital}</span> */}</p>
      </div>
            </div>
        )
}

// import React, { useEffect, useState } from "react";

// const Fetch = () => {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-5 p-5">
//         {countries.map((desh, index) => (
//           <Card key={index} desh={desh} />
//         ))}
//       </div>
//       <h1 className="text-center mt-5 text-xl font-bold">Hello</h1>
//     </div>
//   );
// };

// export default Fetch;

// function Card({ desh }) {
//   return (
//     <div className="card bg-base-100 w-96 shadow-xl">
//       <figure>
//         <img
//           src={desh.flags?.png}
//           className="w-full h-48 object-cover"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{desh.name.common}</h2>
       
//       </div>
//     </div>
//   );
// }
