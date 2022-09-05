import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/" className="italic">
          Carter Sheppard: 
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About Me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Experience
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Education
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
            Projects
            </span>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              Contact Me
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;