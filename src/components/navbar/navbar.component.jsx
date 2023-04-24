import { Outlet } from "react-router-dom";

import { NavBarContainer, NavBarItem } from "./navbar.styles";

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <NavBarItem>Tushar Mehta </NavBarItem>
      </NavBarContainer>
      <Outlet />
    </>
  );
};

export default NavBar;
