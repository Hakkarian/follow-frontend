import styled from "@emotion/styled";

export const HomePageSheet = styled.section`
  .home-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 10px 20px;

    font-size: 12px;

    border-radius: 10px 40px;

    background: ${({ theme }) => theme.background.purple}
      ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.background.white};

    transition: background-color 250ms linear, color 250ms linear,
      border-radius 250ms linear;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.hover};
      color: ${({ theme }) => theme.colors.black};
      border-radius: 40px 10px;
    }

    @media screen and (min-width: 768px) {
      padding: 15px 15px;
      font-size: 16px;
    }

    @media screen and (min-width: 1280px) {
      padding: 20px 20px;
      font-size: 20px;
    }
  }
`;