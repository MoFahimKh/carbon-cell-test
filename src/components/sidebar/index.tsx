import React, { useEffect, useState } from "react";
import { Nav } from "reactstrap";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import { HamburgerIcon } from "./hamburger-icon";
import { CustomNavItem } from "./custom-nav-input";
import closeIcon from "../../public/cross-icon.svg";
import { ConnectWallet } from "../connect-wallet";
import { SearchBar } from "../search-bar";
import { navItems } from "../../utils/constants";

export const SideNavBar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: any;
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredNavItems, setFilteredNavItems] = useState<any[]>([]);

  useEffect(() => {
    const filteredItems = navItems(location).filter((item) =>
      item.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredNavItems(filteredItems);
  }, [searchTerm, location]);

  const handleNavigation = (route: string) => {
    navigate(route);
    toggle();
  };

  return (
    <React.Fragment>
      {!isOpen && <HamburgerIcon toggle={toggle} />}
      <div
        className={classNames(styles.sidebar, {
          [styles["is-open"]]: isOpen && isOpen,
        })}
      >
        {!isOpen && <HamburgerIcon toggle={toggle} />}
        <div className={styles["sidebar-header"]}>
          {isOpen && (
            <React.Fragment>
              <div
                className={styles["sidebar-title"]}
                style={{ color: "#FCFDF9" }}
              >
                Carbon Cell
              </div>
              <img
                style={{ cursor: "pointer" }}
                alt="X"
                src={closeIcon}
                onClick={toggle}
              />
            </React.Fragment>
          )}
        </div>
        <SearchBar searchTerm={searchTerm} onSearchTermChange={setSearchTerm} />
        {isOpen && (
          <div>
            <div className={styles["side-menu"]}>
              <Nav vertical className={styles["side-nav"]}>
                {filteredNavItems.map((item: any, index: any) => (
                  <CustomNavItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    onClick={() => handleNavigation(item.route)}
                    active={location.pathname === item.route}
                  />
                ))}
                <div className={styles["wallet-container"]}>
                  <ConnectWallet />
                </div>
              </Nav>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
