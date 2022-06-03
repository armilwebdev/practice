import React, { useState, useEffect } from "react";
import Drivers from "../functions/AllDrivers";
import SelectDrivers from "../components/SelectDrivers";
// import HandleDriver from "../handlers/HandleDriver";

async function getDrivers() {
  const response = await fetch(
    "https://ergast.com/api/f1/current/drivers.json"
  );
  const newData = await response.json();
  return newData.MRData.DriverTable.Drivers;
}

function Practice() {
  const [newDrivers, setNewDrivers] = useState([]);
  const [newDriverData, setNewDriverData] = useState('HELLo');


  useEffect(() => {
    getDrivers().then(setNewDrivers);
  }, []);

  function HandleNewDriver(newDriverId) {

    setNewDriverData(newDrivers[newDriverId]);
  //   var don = newDriverData;
  //   // var don = newDriverData.givenName;
  // console.log(don);
    // var newb = newDrivers[newDriverId].nationality;

    // console.log(newb);

    // console.log(newDrivers[newDriverId]);
  // useEffect(() => {
  //   getDrivers().then(setNewDriverData);
  // }, []);    
  // console.log(newDriverData);
    // var nation = newDrivers[newDriverId].nationality;

    return(
       <>
          {/* {newDriverData} */}
       </>
    )
  }
  
// async function fetchDrivers() {
//   const response = await fetch(
//     "https://ergast.com/api/f1/current/drivers.json"
//   );
//   const data = await response.json();
//   return data.MRData.DriverTable.Drivers;
// }
//   const [f1drivers, setDrivers] = useState([]);
//   useEffect(() => {
//     fetchDrivers().then(setDrivers);
//   }, []);

//   // var defaultDriver = f1drivers[0].familyName;



  
  // const drivers = [
  //  {
  //     id: 0,
  //     driverName: 'Lewis Hamilton',
  //     team: 'Mercedes',
  //     age: 32,
  //     image: 'https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png'
  //   },
  //   {
  //     id: 1,
  //     driverName: 'Max Verstappen',
  //     team: 'Red Bull',
  //     age: 24,
  //     image: 'https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png'
  //   },    
  //   {
  //     id: 2,
  //     driverName: 'Daniel Ricciardo',
  //     team: 'Mclaren',
  //     age: 35,
  //     image: 'https://www.formula1.com/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/2col/image.png'
  //   }
  // ];

//   const [Name, setName] = useState(drivers[0].driverName);
//   const [Team, setTeam] = useState(drivers[0].team);
//   const [Age, setAge] = useState(drivers[0].age);
//   const [Id, setId] = useState(drivers[0].id);
//   const [Image, setImage] = useState(drivers[0].image);

//   const [Checkurl, setUrl] = useState("https://ergast.com/api/f1/current/drivers/albon.json");

//   const handleChange = (e) => {
//     const selectedDriver = (e.target.value);
//     setName(drivers[selectedDriver].driverName);
//     setTeam(drivers[selectedDriver].team);
//     setAge(drivers[selectedDriver].age);
//     setId(drivers[selectedDriver].id);
//     setImage(drivers[selectedDriver].image);
//  }

//   const handleDriver = async (selectedDriver) => {
//       const response = await fetch(
//         "https://ergast.com/api/f1/current/drivers/"+selectedDriver+".json"
//       );
//       const data = await response.json();
//       var dataSum = data.MRData.DriverTable.Drivers;
//       // console.log(dataSum);
//       return dataSum;
//   }
//     const [dataSum, setChosenDriver] = useState([]);
//       useEffect(() => {
//         handleDriver().then(setChosenDriver);
//       }, []);
// console.log(dataSum);
  // function handleDriver(selectDriver) {
      
      // setDriverGivenName(selectedDriver[selectedDriver].givenName.);
      // setUrl("https://ergast.com/api/f1/current/drivers/"+selectedDriver+".json");  

      // function handleDriver(selectedDriver) {
      // // console.log(selectedDriver);
      //   const urlResponse = await fetch(
      //     "https://ergast.com/api/f1/current/drivers/"+selectedDriver+".json");
      //   const chosenData = await urlResponse.json();
      //   setChooseDriver([selectedDriver]);

      //   return chosenData.MRData.DriverTable.Drivers;
      // }      
      // const [chooseDriver, setChooseDriver] = useState([]);
      // useEffect(() => {
      //   handleDriver().then(setChooseDriver);
      // }, []);      
      // }

      // console.log(chooseDriver);

      // console.log(givenDrivers);


  //  const handleDriver = (selectDriver) => {
  //     const selectedDriver = selectDriver.target.value;
  //     // setDriverGivenName(selectedDriver[selectedDriver].givenName.);
  //         setUrl("https://ergast.com/api/f1/current/drivers/"+selectedDriver+".json");

  //  }
      // async function selectedDrivers() {
      //   const urlResponse = await fetch(
      //     "https://ergast.com/api/f1/current/drivers/+{selectedDriver}+.json"
      //   );
      //   const driverData = await urlResponse.json();
      //   return driverData.MRData.DriverTable.Drivers;
      // }
  
      // const [soloDrivers, setSelectedDrivers] = useState([]);
      // useEffect(() => {
      //   selectedDrivers().then(setSelectedDrivers);
      // }, []);

      // console.log(Checkurl);

  // function GetData(){

  //   return(
  //     <>
  //     {/* <div>
  //       <div className="select-container">
  //         <select onChange={(e) => handleChange(e)} value={Id}>
  //           {drivers.map((driver) => (
  //             <option value={driver.id} key={driver.id}>{driver.driverName}</option>
  //           ))}
  //         </select>
  //         </div>
  //     </div> */}
  //     </>
  //   );
  // }

  // function DriverInfo(){
        
  //   const selDriver = f1drivers[0];
  //   // const [DriverFamilyName, setDriverFamilyName] = useState(selDriver.familyName);
  //   // const [DriverGivenName, setDriverGivenName] = useState(selDriver.givenName);

  //   return(
  //     <>
  //       <img src={Image} className="driverImage" />
  //       <h1 className="text-gray-700 text-lg">Driver Information</h1>
  //       {/* <h1>Driver:  <span className="font-bold">{DriverGivenName} {DriverFamilyName}</span></h1> */}
  //       {/* <h1>Team:  <span className="font-bold">{selDriver.givenName}</span></h1>
  //       <h1>Age:  <span className="font-bold">{Age}</span></h1> */}
  //     </>
  //   )
  // }


  return(
    <div className="p-2">
        {/* <div>

<div>
      <div style={{ textAlign: "left" }}>
          <select  className="mb-4"  onChange={selectDriver => handleDriver(selectDriver.target.value)} >
        {f1drivers.map((driver, index) => (
            <option value={driver.familyName} key={index}>{driver.familyName}, {driver.givenName.charAt(0)}.</option>
        ))}
          </select>
      </div>
    <div>
      <div style={{ textAlign: "left" }}>
        <br></br>
        {drivers.map((driver, index) => (
          <p key={index}>
            <i>{driver.code}</i>
          </p>
        ))}
      </div>
    </div>    
    </div>

    </div> */}
      <SelectDrivers />
      <div className="p-2 mt-4 border-2">
          
        {/* <DriverInfo /> */}
        <Drivers />
        {/* <HandleDriver /> */}
      </div>
        <select className="bg-gray-200 rounded-sm border border-black" onChange={newDriverId => HandleNewDriver(newDriverId.target.value)}>
          {newDrivers.map((driver, index) => (
            <option className="bg-gray-100" key={index} value={index}>{driver.familyName}, {driver.givenName.charAt(0)}</option>
          ))}
        </select>      
        <HandleNewDriver />
    </div>
  )


}

export default Practice;