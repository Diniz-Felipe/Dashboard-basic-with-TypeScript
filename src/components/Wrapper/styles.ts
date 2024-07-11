import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: .7fr 1fr 1fr .7fr;
  grid-template-rows: .7fr .8fr .8fr 1fr;
  grid-template-areas: 
    "sidebar header header header"
    "sidebar cardOne cardTwo box"
    "sidebar cardThree cardFour box"
    "sidebar charts charts box"
  ;
  height: 100vh;
  background-color: #fff;
  border: none;
  gap: .7rem;
  padding: .7rem;
`;