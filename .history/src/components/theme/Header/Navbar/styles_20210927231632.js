import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  


  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
    theme === "light" ? "unset" : "difference"};
  }
`;

export const LogoStyle = styled.div`
width: 50px;
max-width: 50px;
margin: 5px 0px 0px 0px;
padding: 0.3rem;

`;