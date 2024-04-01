import { useContext } from "react";
import { LineGraph } from "../../components/line-graph/index.";
import { WalletContext } from "../../context";
import styles from "./style.module.scss";
import { formatAddress } from "../../utils/format-address";
import { SidebarContext } from "../../context";
import { Card } from "../../components/card";
import wallet from "../../public/wallet.svg";
import { AssetCard } from "../../components/asset-card";

export const Home = () => {
  const { address, connectWallet, disconnectWallet } =
    useContext(WalletContext);
  const { sidebarIsOpen } = useContext(SidebarContext);

  return (
    <div
      className={styles["container"]}
      style={!sidebarIsOpen ? { left: "70px" } : {}}
    >
      {address && (
        <div>
          <div  className={styles["hello-text"]}>Hello, {formatAddress(address)} 👋</div>
          <div>
            Welcome to <span className={styles["green"]}>Spot Trading!</span>
          </div>
        </div>
      )}
      <div>
        <LineGraph />
      </div>

      <div className={styles["connect-container"]}>
        {address ? (
          <Card
            style={{ width: "200px" }}
            leftImage={wallet}
            heading={`${formatAddress(address)}`}
            onClick={disconnectWallet}
            subheading={"Disconnect Wallet"}
          />
        ) : (
          <Card
            style={{ width: "200px" }}
            leftImage={wallet}
            heading={"Connect wallet"}
            onClick={connectWallet}
          />
        )}
      </div>
      <div  className={styles["asset-container"]}>
      <h2>Assets</h2>
        <AssetCard  showCaution={false}/>
      </div>
    </div>
  );
};
