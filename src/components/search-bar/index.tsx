import React from "react";
import style from "./style.module.scss";
import { Card } from "../card";
import searchIcon from "../../public/search.svg";
interface Props {
  searchTerm: string;
  onSearchTermChange: (term: string) => void;
}

export const SearchBar: React.FC<Props> = ({
  searchTerm,
  onSearchTermChange,
}) => {
  return (
    <div>
      <Card
        leftImageStyle={{ width: "15px", background: "transparent" }}
        leftImage={searchIcon}
        style={{
          background: "rgba(255,255,255,0.1)",
          width: "200px",
          margin: "10px 25px 10px 25px",
        }}
        heading={
          <input
            className={style["searchInput"]}
            type="text"
            id="searchInput"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        }
      />
    </div>
  );
};
