import styled from 'styled-components';

export const Btn = styled.button`
  background-color: #3f51b5;
  color: white;
  padding: 8px 20px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;

  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: orangered;
  }
`;
export const ContainerList = styled.div`
  display: 'block';
  gap: 50px;
  padding-bottom: 30px;
  border-bottom: 2px solid orangered;
  @media (min-width: 600px) {
    display: flex;
    max-width: 1200;
  }
`;
