import styled from "styled-components";

export const Header = styled.header`
  grid-area: header;
  min-height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: #eee;
  border-radius: 1rem;
  padding: 10px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-right: 10px;
`;