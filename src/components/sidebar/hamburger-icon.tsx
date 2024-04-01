import styles from "./style.module.scss";
export const HamburgerIcon = ({
  toggle,
}: {
  toggle: any;
}) => {
  return (
    <div className={styles["hamburger-icon"]} onClick={toggle}>
      &#9776;
    </div>
  );
};
