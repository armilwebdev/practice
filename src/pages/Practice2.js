import React, { useState, useEffect } from "react";

  async function getDrivers() {
    const response = await fetch(
      "https://ergast.com/api/f1/current/drivers.json"
    );
    const data = await response.json();
    return data.MRData.DriverTable.Drivers;
  }

function DriversList() {
  const [Drivers, setDrivers] = useState([]);
  const [Nationality, setNationality] = useState('');
  const [GivenName, setGivenName] = useState('');
  const [FamilyName, setFamilyName] = useState('');
  const [DateOfBirth, setDateOfBirth] = useState('');
  const [CarNumber, setCarNumber] = useState('');
  const [DriverCode, setDriverCode] = useState('');
  const [DriverAge, setDriverAge] = useState('');

  useEffect(() => {
    getDrivers().then(setDrivers);
  }, []);

  function HandleDrivers(DriverId) {
    const driverNationality = Drivers[DriverId].nationality;
    const driverGivenName = Drivers[DriverId].givenName;
    const driverFamilyName = Drivers[DriverId].familyName;
    const driverDateOfBirth = Drivers[DriverId].dateOfBirth;
    const driverCarNumber = Drivers[DriverId].permanentNumber;
    const driverCode = Drivers[DriverId].code;

    setNationality(driverNationality);
    setGivenName(driverGivenName);
    setFamilyName(driverFamilyName);
    setDateOfBirth(driverDateOfBirth);
    setCarNumber(driverCarNumber);
    setDriverCode(driverCode);

    var today = new Date();
    var birthDate = new Date(driverDateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }    
    setDriverAge(age);

  }
  

  return (
    <div className="p-2 mt-4 border-2 bg-stone-200 m-8">
      <div className="text-center text-2xl">
        <h1>F1 Drivers List</h1>
      </div>
      <div className="flex justify-center">
        <select className="bg-gray-200 rounded-sm border border-black my-4" onChange={DriverId => HandleDrivers(DriverId.target.value)}>
          {Drivers.map((driver, index) => (
            <option className="bg-gray-100" key={index} value={index}>{driver.familyName}, {driver.givenName.charAt(0)}</option>
          ))}
        </select> 
        </div>

      <div className="p-2 mt-6">
        <div className="bg-gray-800 text-stone-100 p-2 rounded-md">
        <h1 className="font-semibold mb-4 italic">DRIVER DATA</h1>
        <p><span className="font-bold bg-blue-700 px-1 py-0.5 mr-1 text-xl rounded-md text-white italic">{CarNumber}</span><span className="font-bold mb-2 text-lg">{GivenName} {FamilyName}</span><span className="font-bold"> - {DriverCode}</span></p>
        <div className="pl-7">
          <p><span className="text-md">Age:</span>  <span className="font-semibold italic text-lg">{DriverAge}</span></p>
          <p><span className="text-md">Nationality:</span> <span className="font-semibold italic text-lg">{Nationality}</span></p>
        </div>
        </div>
      </div>

      {/* <table className="border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {Drivers.map((driver, index) => (
        <tr key={index} className="border">
            <td className="border p-3">{driver.familyName}, {driver.givenName.charAt(0)}</td>
            <td className="border p-3">{driver.nationality}</td>
        </tr>
          ))}   
        </tbody>
      </table>    */}
    </div>
  )
}


export default DriversList;