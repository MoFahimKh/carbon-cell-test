import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { chartOptions } from "./chart-options";
import style from "./style.module.scss";
import { chartData } from "./chart-data";
import { fetchPopulationData } from "../../utils/fetch-population-data";

export const LineGraph: React.FC = () => {
  const [populationData, setPopulationData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchPopulationData(setPopulationData, setLoading);
  }, []);

  return (
    <div className={style["line-graph-container"]}>
      {isLoading ? (
        <div>
          Loading Chart data <i className="fa fa-spinner fa-spin fa-fw" />
        </div>
      ) : (
        <div style={{ width: "450px", height: "270px" }}>
          <Line
            data={chartData(populationData)}
            options={{ ...chartOptions, maintainAspectRatio: false }}
          />
        </div>
      )}
    </div>
  );
};
