import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-decoration: none;
  list-style: none;
`;
export const Links = styled(Link)`
  font-size: 600;
  text-decoration: none;
  color: black;

  :hover {
    color: orangered;
    background: gray;
    opacity: 0.7;
  }
  &.active {
    color: orangered;
    border: 1px solid red;
  }
`;
