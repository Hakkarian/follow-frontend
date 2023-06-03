import styled from "@emotion/styled";

export const AppBarCss = styled.header`
  padding: 20px 0 20px 30px;

  display: flex;
  align-items: center;
  gap: 30px;

  background: ${({ theme }) => theme.background.purple}
    ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.background.white};

  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
    color: #000;
  }
`;