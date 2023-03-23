import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinks = styled(NavLink)`
  display: flex;
  gap: 30px;
  font-size: 600;
  text-decoration: none;
  margin: 10px;
  outline: black solid 2px;
  border-radius: 4px;
  color: black;
  padding: 10px;
  text-decoration: none;

  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;

  width: 80px;
  :hover {
    color: white;
    background: orangered;
    opacity: 0.7;
  }
  &.active {
    color: white;
    border: 1px solid orangered;
    background: orangered;
  }
`;
export const List = styled.ul`
  list-style: none;
`;
