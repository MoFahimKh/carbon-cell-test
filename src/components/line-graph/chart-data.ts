export const chartData = (populationData: any) => {
  return {
    labels: populationData.map((entry: any) => entry.year),
    datasets: populationData[0]?.populations.map((pop: any, index: number) => ({
      label: pop.nation,
      backgroundColor: "transparent",
      data: populationData.map(
        (entry: any) => entry.populations[index]?.population || 0
      ),
      fill: false,
      borderColor: `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      }, 1)`,
      tension: 0.9,
      pointRadius: 0,
    })),
  };
};
