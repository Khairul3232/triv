import styled from "styled-components";

export const ButtonStyle = styled.button`
  margin-top: 5rem;
  text-align: center;

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;
