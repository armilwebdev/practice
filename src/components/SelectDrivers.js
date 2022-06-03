import { useState, useEffect } from "react";
// import HandleDriver from "../handlers/HandleDriver";


async function fetchDrivers() {
  const response = await fetch(
    "https://ergast.com/api/f1/current/drivers.json"
  );
  const data = await response.json();
  return data.MRData.DriverTable.Drivers;
}


function SelectDrivers() {
  const [drivers, setDrivers] = useState([]);
  // const [selectedDrivers, setSelectedDrivers] = useState('');

  // const [selectedDrivers, setSelectedDrivers] = useState([]);
  // const [driverKey, setDriverKey] = useState('');

  useEffect(() => {
    fetchDrivers().then(setDrivers);
  }, []);
  
  function HandleDriver(driverId) {
    // console.log(driverId);

    // function UpdateDriver(driverId) {
    //   const a = driverId.value;
    //   return a
    // }

    

    // setSelectedDrivers(selectedDrivers[driverId]);

    // console.log(selectedDrivers + "<--");
        // driverId.preventDefault();

    return (
      <>
        {/* <UpdateDriver /> */}
        <h2>WHAT</h2>
      </>
    )
    // console.log(driverId);
    // if(isDriverSelected) {
    // console.log(isDriverSelected);
    
    // console.log(drivers[driverId].nationality);
    //   var driverNationality = drivers[driverId].nationality;
    //   // var newDriver = drivers[driverId];
    // setSelectedDrivers(selectedDrivers[driverId]);

    // return (
    //   <>OK</>
    // )
    // }
    // else {
    //   return (
    //     <>
    //     NOT OK
    //     </>
    //   )
    // }
    // const check = this.state(selectedDrivers[driverId]);
    // console.log(check);
    // var nationality = selectedDrivers;
    // console.log(nationality);
      
     


  } 

  // useEffect(() => {
  //   HandleDriver().then(setSelectedDrivers);
  // }, []);



  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <span className="mr-2 font-semibold">Select Driver</span>
        <select className="bg-gray-200 rounded-sm border border-black" onChange={driverId => HandleDriver(driverId.target.value)} value="{this.state.value}">
          {drivers.map((driver, index) => (
            <option className="bg-gray-100" key={index} value={index}>{driver.familyName}, {driver.givenName.charAt(0)}</option>
          ))}
        </select>
      </div>
      <div id="DriverInfo">
        <HandleDriver />
      </div>
          {/* {selectedDrivers.map((selectedDriver, index) => (
            <p>{selectedDriver.familyName}, {selectedDriver.givenName.charAt(0)}</p>
          ))}       */}
    </div>
  );
}


export default SelectDrivers