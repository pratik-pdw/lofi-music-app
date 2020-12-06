import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <div>
      <nav>
        <h2>Lo-Fi</h2>
        <button
          onClick={() => {
            setIsLibraryOpen(!isLibraryOpen);
          }}
        >
          Library
          <FontAwesomeIcon style={{ paddingLeft: "5px" }} icon={faMusic} />
        </button>
      </nav>
    </div>
  );
};

export default Nav;
