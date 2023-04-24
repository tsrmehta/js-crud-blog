import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapper = styled.div`
    max-width: 1400px;
    margin: auto;
`;

export const NavBarContainer = styled.ul`
  display: flex;
  padding: 5px 10px;
  margin: 0;
  border-bottom: 1px solid #e9ecef;
  margin: 0 10px;
`;

export const NavBarItem = styled.li`
  display: block;
`;

export const Logo = styled(NavBarItem)`
  font-family: "Damion";
  font-size: 26px;
  /* font-weight: 500; */
  color: var(--text);
  cursor: default;
`;

export const NavBarItemsContainer = styled(NavBarItem)`
margin-left: auto;
    align-self: center;
`;

export const NavBarLinkItem = styled(Link)`
    text-decoration: none;
    color: var(--secondary-text);
    margin: 0 5px;
`;