import { useContext } from "react";
import { LineGraph } from "../../components/line-graph/index.";
import styles from "./style.module.scss";
import { SidebarContext } from "../../context";

export const PopulationGraph = () => {
  const { sidebarIsOpen } = useContext(SidebarContext);
  return (
    <div
      className={styles["container"]}
      style={!sidebarIsOpen ? { left: "70px" } : {left: "260px" }}
    >
      <div className={styles["heading"]}> United States Population Data</div>
      <div className={styles["graph-container"]}>
        <LineGraph />
      </div>
    </div>
  );
};
