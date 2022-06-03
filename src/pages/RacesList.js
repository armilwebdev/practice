import React, { useState, useEffect } from "react";
import moment from 'moment';

  async function getRaces() {
    const response = await fetch(
      "https://ergast.com/api/f1/current.json"
    );
    const data = await response.json();
    return data.MRData.RaceTable.Races;
  }

  async function CountryCode() {
    const countryResponse = await fetch(
      "https://flagcdn.com/en/codes.json"
    );
    const countryData = await countryResponse.json();
    return countryData;
  }  

function RacesList() {
  const [Races, setRaces] = useState([]);
  const [Countries, setCountryCode] = useState([]);

  // console.log(Countries);

  useEffect(() => {
    getRaces().then(setRaces);
  }, []);

  useEffect(() => {
    CountryCode().then(setCountryCode);
  }, []);  

// console.log(Object.values(Countries));

  // console.log(Races[0].Circuit.Location.country);
  // Races.forEach(function(race){
  //   let country = race.Circuit.Location.country;
  //   let countries = Countries;

  //   // if(Object.values(countries) === country){
  //   //   console.log(countries.value);
  //   // } else {
  //   //   console.log("FAIL")
  //   // }
    



  // })

// const output = Object.values(Countries).filter((obj) => Races.Circuit.Location.country.indexOf(obj) !== -1);

// console.log(output);

  var updatedRaceDate = [];
  var updatedRaceTime = [];
  var stringRaceDate  = []

  Races.forEach(function(race){
    var time = race.time.slice(0, -1);
    var date = race.date;
    let result = date.concat(" ", time);
    var newDate = moment(result).add(8, 'hours').format('MMMM D');
    var newTime = moment(result).add(8, 'hours').format('h:mm a');    
    var newRaceDateString = new Date(date).toLocaleDateString();
    var raceDateString = Date.parse(newRaceDateString);

    stringRaceDate.push(raceDateString);
    updatedRaceDate.push(newDate);
    updatedRaceTime.push(newTime);
  })



// var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');

var nowDate = new Date().toLocaleDateString();
var currentDate = Date.parse(nowDate);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold pl-2">Formula 1 Circuits 2022</h1>
      <h2 className="mb-2 pl-2 text-gray-600 font-semibold">Schedule is accordance with Philippine Time (+8)</h2>

      <table className="table-auto border w-full racesTable rounded-lg tracking-wide" id="racesTable">
        <thead>
          <tr className ="text-left bg-gray-800 text-stone-50 text-sm">
            <th className="pb-3 px-2 pt-4 uppercase">Rd</th>
            <th className="pb-3 px-2 pt-4 uppercase">Race Name</th>
            <th className="pb-3 px-2 pt-4 uppercase">Date</th>
            <th className="pb-3 px-2 pt-4 uppercase">Time</th>
            <th className="pb-3 px-2 pt-4 uppercase">Location</th>                  
          </tr>
        </thead>
        <tbody>
        
        {Races.map((race, index) => (
        
          <tr key={index} 
                className={(stringRaceDate[index] < currentDate  ?   'bg-gray-800 text-gray-500' : 'bg-gray-800 text-stone-100 font-normal')}>
            <td className="p-2">{index+1}</td>                        
            <td className="p-2 py-2 font-semibold uppercase italic">
              <p className="font-bold italic uppercase">{race.raceName}</p>
              <p className={(stringRaceDate[index] < currentDate  ?   'text-gray-600 flex' : 'text-rose-500 flex font-bold')}>
                {/* <img src="https://www.countryflagicons.com/FLAT/16/DE.png" className="mr-2"/> */}
                {race.Circuit.circuitName}
              </p>
            </td>            
            <td className="p-2">{updatedRaceDate[index]}</td>        
            <td className="p-2">{updatedRaceTime[index]}</td>                      
            <td className="p-2">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</td>
          </tr>



        ))}
        </tbody>
        
      </table>

    </div>
  )
}

export default RacesList;