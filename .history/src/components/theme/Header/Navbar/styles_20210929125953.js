import styled from "styled-components";

export const Wrapper = styled.div`
  // padding: .2rem .2rem;height
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
width: 90px;
max-width: 90px;
height: 35px;
max-height:35px
margin: 0px 0px 0px 0px;
padding: 0.3rem;

`;