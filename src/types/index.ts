import { Dispatch, SetStateAction } from "react";

export interface Asset {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

export interface AssetData {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    [key: string]: Asset;
  };
}

export interface CardProps {
  leftImage?: any;
  leftImageStyle?: React.CSSProperties;
  heading: any;
  subheading?: any;
  rightContent?: any;
  isActive?: boolean;
  style?: any;
  subheadingStyle?: any;
  onClick?: any;
  rightContentOnClick?: any;
  rightContentStyle?: any;
}
export interface CustomNavItemProps {
  icon: any;
  text: any;
  onClick: any;
  active: any;
  customStyle?: React.CSSProperties;
}

export interface WalletContextType {
    address: string | null;
    connectWallet: () => void;
    disconnectWallet: () => void;
  }
  
  export interface SidebarContextType {
    sidebarIsOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
  }