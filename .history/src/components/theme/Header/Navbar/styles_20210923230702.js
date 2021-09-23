import styled from "styled-components";

export const Wrapper = styled.div`
  // padding: 1.5rem 1.5rem;
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
width:55px;
max-width:55px;
margin:7px 0px rem;

`;