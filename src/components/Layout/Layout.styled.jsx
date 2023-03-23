import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 2px solid orangered;
`;
export const Nav = styled.nav`
  display: flex;
`;
export const NavLinks = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 5px;
  :hover {
    opacity: 0.7;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;
