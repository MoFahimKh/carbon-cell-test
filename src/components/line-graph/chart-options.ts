import { ChartOptions } from "chart.js";

export const chartOptions: ChartOptions = {
  legend: { display: false },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Years",
          fontColor: "#FFFFFF",
        },
        gridLines: {  
          display: false,
        },
        ticks: {
          fontColor: "#FFFFFF",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Population (millions)",
          fontColor: "#FFFFFF",
        },
        gridLines: {
          display: false,
        },
        ticks: {
          display: false, 
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    intersect: false,
    backgroundColor: "black",
    bodyFontColor: "rgba(255, 255, 255,0.6)",
    displayColors: false,
    caretSize: 3,
    callbacks: {
      label: (tooltipItem: any, data: any) => {
        const label = data.datasets[tooltipItem.datasetIndex].label || "";
        const value = tooltipItem.yLabel ? `${tooltipItem.yLabel.toFixed(2)} million` : "";
        return ` ${label}: ${value}`;
      },
    },
  },
  elements: {
    point: {
      backgroundColor: "white",
    },
    line: {
      borderWidth: 2,
    },
  },
};
