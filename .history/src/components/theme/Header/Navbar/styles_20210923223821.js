import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1.5rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const Brand = styled.div`
  color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  height: 65px;
  max-height:65px;

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) =>
      theme === "light" ? "unset" : "difference"};
  }
`;