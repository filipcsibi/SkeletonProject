export const fetchSeries = async (page: number) => {
  const response = await fetch(
    `https://run.mocky.io/v3/f571b31b-8087-45aa-9f93-5e77e48673d2?limit=3&page=${page}`,
  );
  const data = await response.json();
  // console.log(data);
  return data;
};
