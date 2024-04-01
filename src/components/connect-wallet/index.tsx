import { useContext } from "react";
import { Card } from "../card";
import wallet from "../../public/wallet.svg";
import { WalletContext } from "../../context";
import { formatAddress } from "../../utils/format-address";

export const ConnectWallet = () => {
  const { connectWallet, address, disconnectWallet } = useContext(WalletContext);
  return (
    <div>
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
  );
};
