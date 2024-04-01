export const fetchPopulationData = async (
  setPopulationData: (populationData: any[]) => void,
  setLoading: (loading: boolean) => void
) => {
  setLoading(true);
  try {
    const response = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const data = await response.json();

    if (data && data.data) {
      const populationByYear = data.data.reduce((acc: any, entry: any) => {
        const year = entry["Year"];
        if (!acc[year]) {
          acc[year] = {
            year: year,
            populations: [],
          };
        }
        acc[year].populations.push({
          nation: entry["Nation"],
          population: entry["Population"] / 1000000,
        });
        return acc;
      }, {});

      const populationArray = Object.values(populationByYear);
      populationArray.sort((a: any, b: any) => a.year - b.year);
      setPopulationData(populationArray);
    } else {
      console.error("No population data found.");
    }
  } catch (error) {
    console.error("Error fetching population data:", error);
  } finally {
    setLoading(false);
  }
};
