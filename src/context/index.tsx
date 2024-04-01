import { createContext, useEffect, useState, ReactNode } from "react";
import { getSignerAddress } from "../utils/web3-utils";
import { toast } from "react-toastify";
import { WalletContextType, SidebarContextType } from "../types";

export const WalletContext = createContext<WalletContextType>({
  address: null,
  connectWallet: () => {},
  disconnectWallet: () => {},
});

export const SidebarContext = createContext<SidebarContextType>({
  sidebarIsOpen: false,
  setSidebarOpen: () => {},
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [sidebarIsOpen, setSidebarOpen] = useState<boolean>(true);

  const connectWallet = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const addr = await getSignerAddress();
        setAddress(addr);
        toast.success("Wallet connected!");
      }
    } catch (err) {
      console.error("Error connecting wallet:", err);
      toast.error("Failed to connect wallet");
    }
  };

  const disconnectWallet = async () => {
    try {
      setAddress(null);
      toast.info("Wallet disconnected");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        if (window.ethereum && window.ethereum.isMetaMask) {
          const addr = await getSignerAddress();
          setAddress(addr);
          toast.success("Wallet connected!");
        }
      } catch (err) {
        console.log(err);
        toast.error("Failed to connect wallet");
      }

      if (window.ethereum) {
        window.ethereum.on("accountsChanged", connectWallet);
      }
    };

    init();

    return () => {
      if (window.ethereum) {
        window.ethereum.off("accountsChanged", connectWallet);
      }
    };
  }, []);

  return (
    <WalletContext.Provider
      value={{
        address,
        connectWallet,
        disconnectWallet,
      }}
    >
      <SidebarContext.Provider
        value={{
          sidebarIsOpen,
          setSidebarOpen,
        }}
      >
        {children}
      </SidebarContext.Provider>
    </WalletContext.Provider>
  );
};
