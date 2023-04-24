import { Outlet } from "react-router-dom";

import {
  NavBarContainer,
  Logo,
  NavBarItemsContainer,
  NavBarLinkItem,
  NavBarWrapper,
} from "./navbar.styles";

const NavBar = () => {
  return (
    <>
      <NavBarWrapper>
        <NavBarContainer>
          <Logo>Tushar Mehta Blogs</Logo>
          <NavBarItemsContainer>
            <NavBarLinkItem to="/">All Post</NavBarLinkItem>
            <NavBarLinkItem to="/post-blog">Post Blog</NavBarLinkItem>
          </NavBarItemsContainer>
        </NavBarContainer>
      </NavBarWrapper>
      <Outlet />
    </>
  );
};

export default NavBar;
