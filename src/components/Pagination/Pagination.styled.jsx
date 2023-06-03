import styled from "@emotion/styled";

export const PaginationCss = styled.nav`
  width: 100%;
  margin-top: 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pagi-list {
    display: flex;
    gap: 30px;
  }

  .pagi-item {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 50%;

    transition: background-color 250ms linear, color 250ms linear,
      border-radius 250ms linear;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
    }

    .page-active {
      background-color: ${({ theme }) => theme.colors.hover};
      color: ${({ theme }) => theme.colors.purple};
      border-radius: 15px 40px;

      transition: background-color 250ms linear, color 250ms linear,
        border-radius 250ms linear;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.purple};
        color: ${({ theme }) => theme.colors.hover};
      }
    }
  }

  .pagi-link {
    display: flex;
    justify-content: center;
    width: 20px;
    padding: 15px;
  }
`;