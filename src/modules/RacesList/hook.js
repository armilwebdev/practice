import React, { useEffect, useState } from "react";
import { getRaces } from "./api";

const useGetRaces = () => {
  const [races, setRaces] = useState([]);

  const fetchStuffs = async () => {
    const data = await getRaces();
    setRaces(data);
  };
  useEffect(() => {
    fetchStuffs();
  }, []);

  return [races];
};

export default useGetRaces;
