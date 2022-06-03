import React from "react";
import useGetRaces from "./hook";
import { format, compareAsc } from "date-fns";

const RacesList = () => {
  const [races] = useGetRaces();

  const tbody = (
    <>
      {races.map((race, index) => (
        <tr
          key={index}
          className={
            compareAsc(
              new Date(`${race.date} ${race.time.slice(0, -1)}`),
              new Date()
            ) === -1
              ? "bg-gray-800 text-gray-500"
              : "bg-gray-800 text-stone-100 font-normal"
          }
        >
          <td className="p-2">{index + 1}</td>
          <td className="p-2 py-2 font-semibold uppercase italic">
            <p className="font-bold italic uppercase">{race.raceName}</p>
            <p
              className={
                compareAsc(
                  new Date(`${race.date} ${race.time.slice(0, -1)}`),
                  new Date()
                ) === -1
                  ? "text-gray-600 flex"
                  : "text-rose-500 flex font-bold"
              }
            >
              {race.Circuit.circuitName}
            </p>
          </td>
          <td className="p-2">{format(new Date(race.date), "MMMM d")}</td>

          <td className="p-2">
            {format(
              new Date(`${race.date} ${race.time.slice(0, -1)}`),
              "h:mm a"
            )}
          </td>
          <td className="p-2">
            {race.Circuit.Location.locality}, {race.Circuit.Location.country}
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold pl-2">Formula 1 Circuits 2022</h1>
      <h2 className="mb-2 pl-2 text-gray-600 font-semibold">
        Schedule is accordance with Philippine Time (+8)
      </h2>

      <table
        className="table-auto border w-full racesTable rounded-lg tracking-wide"
        id="racesTable"
      >
        <thead>
          <tr className="text-left bg-gray-800 text-stone-50 text-sm">
            <th className="pb-3 px-2 pt-4 uppercase">Rd</th>
            <th className="pb-3 px-2 pt-4 uppercase">Race Name</th>
            <th className="pb-3 px-2 pt-4 uppercase">Date</th>
            <th className="pb-3 px-2 pt-4 uppercase">Time</th>
            <th className="pb-3 px-2 pt-4 uppercase">Location</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </div>
  );
};

export default RacesList;
