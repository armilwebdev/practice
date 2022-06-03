export const getRaces = async () => {
  const response = await fetch("https://ergast.com/api/f1/current.json");
  const data = await response.json();
  return data.MRData.RaceTable.Races;
};

export const CountryCode = async () => {
  const countryResponse = await fetch("https://flagcdn.com/en/codes.json");
  const countryData = await countryResponse.json();
  return countryData;
};
