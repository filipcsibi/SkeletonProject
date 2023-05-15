export const fetchSeries = async (limit: number, page: number) => {
  const response = await fetch(
    `https://646228d5185dd9877e4c9c5b.mockapi.io/series?limit=${limit}&page=${page}`,
  );
  const data = await response.json();
  return data;
};
