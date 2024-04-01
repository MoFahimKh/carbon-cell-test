export const navItems = (location: any) => {
  return [
    {
      icon: location.pathname === "/" ? "active-home.svg" : "home.svg",
      text: "Home",
      route: "/",
    },
    {
      icon:
        location.pathname === "/crypto-prices"
          ? "active-crypto-prices.svg"
          : "crypto-prices.svg",
      text: "Crypto Prices",
      route: "/crypto-prices",
    },
    {
      icon:
        location.pathname === "/population-graph"
          ? "active-population-graph.svg"
          : "population-graph.svg",
      text: "Population Graph",
      route: "/population-graph",
    },
  ];
};
