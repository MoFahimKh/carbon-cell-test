import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavItem } from "reactstrap";
import classNames from "classnames";
import styles from "./style.module.scss";
import { CustomNavItemProps } from "../../types";

export const CustomNavItem: React.FC<CustomNavItemProps> = ({
  icon,
  text,
  onClick,
  active,
  customStyle,
}) => {
  return (
    <NavItem>
      <div
        className={classNames(styles["nav-link"], { [styles.active]: active })}
        onClick={onClick}
        style={{ ...customStyle, color: active ? "#00ff00" : undefined }}
      >
        <FontAwesomeIcon icon={icon} className="mr-2" />
        <img src={require(`../../public/${icon}`)} alt="icon" />
        {text}
      </div>
    </NavItem>
  );
};
