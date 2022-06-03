import React, { useState, useEffect } from "react";
import SelectDrivers from "../components/SelectDrivers";


// async function fetchDrivers() {
//   const response = await fetch(
//     "https://ergast.com/api/f1/current/drivers.json"
//   );
//   const data = await response.json();
//   return data.MRData.DriverTable.Drivers;
// }

function Drivers() {
  // we declare the state, initially it's an empty array
//   const [drivers, setDrivers] = useState([]);

//   // we declare the effect that runs exactly once,
//   // when the component is mounted
//   useEffect(() => {
//     fetchDrivers().then(setDrivers);
//   }, []);

//  return (
//     <div>
//       <div style={{ textAlign: "left" }}>
//         <br></br>
//         {drivers.map((driver, index) => (
//           <p key={index}>
//             <i>{driver.familyName}</i>
//           </p>
//         ))}
//       </div>
//     </div>
//   );
}
  // const [allDrivers, setDrivers] = useState([]);
  // useEffect(() => {
  //   AllDrivers().then(setDrivers);
  // }, []);

  // var defaultDriver = f1drivers[0].familyName;




export default Drivers;