import { useContext } from "react";
import { AssetCard } from "../../components/asset-card";
import { SidebarContext } from "../../context";
import style from "./style.module.scss";

export const CryptoPrices = () => {
  const { sidebarIsOpen } = useContext(SidebarContext);

  return (
    <div
      className={style["container"]}
      style={!sidebarIsOpen ? { left: "70px" } : {}}
    >
      <h2>Assets</h2>
      <AssetCard showCaution={true} styleProps={{ width: "1000px" }} />
    </div>
  );
};
