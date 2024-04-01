import usdIcon from "../public/dollar.svg";
import euroIcon from "../public/euro.svg";
import poundIcon from "../public/pound.svg";

export const assetImage = (fiat: string) => {
  switch (fiat) {
    case "USD":
      return usdIcon;
    case "EUR":
      return euroIcon;
    case "GBP":
      return poundIcon;
    default:
      return "";
  }
};
