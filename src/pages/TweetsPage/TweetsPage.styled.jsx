import styled from "@emotion/styled";

export const TweetsPageCss = styled.section`
  padding-top: 40px;


    position: relative;

  .tweet-link {
    position: absolute;
    top: 2.5%;
    left: 29%;

    padding: 20px 30px;
    background: ${({ theme }) => theme.background.purple}
      ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.white};

    border-radius: 10px;

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out, border-radius 250ms ease-in-out;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
      color: #000;
      border-radius: 10px 30px;
    }
  }
  .tweets-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;

    row-gap: 20px;

    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: 20px;
    }

    @media screen and (min-width: 1280px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      row-gap: 20px;
    }
  }

  .card {
    position: relative;
    width: 290px;
    height: 460px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: inherit;

    @media screen and (min-width: 768px) {
      width: 330px;
      height: 460px;
    }

    @media screen and (min-width: 1280px) {
      width: 380px;
      height: 460px;
    }
  }

  .card-follow {
    background: ${({ theme }) => theme.background.red}
      ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.background.black};
    border-radius: 20px;

    transition: background-color 250ms linear, color 250ms linear;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
  .card-following {
    background: ${({ theme }) => theme.background.purple}
      ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.background.white};
    border-radius: 20px;

    transition: background-color 250ms linear, color 250ms linear;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.hover};
      color: #000;
    }
  }

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .message {
    padding: 28px 36px 18px 36px;
  }

  .image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -170%);

    transition: border 250ms linear, border-radius 250ms linear;
  }

  .image-follow {
    border: 13.1749px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }

  .image-following {
    border: 13.1749px solid ${({ theme }) => theme.colors.black};
    border-radius: 10px;
  }

  .tweet-wrap {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: border-top 250ms linear;

    border-top: 13.1749px solid ${({ theme }) => theme.colors.white};
  }

  .tweet-follow {
    border-top: 13.1749px solid ${({ theme }) => theme.colors.white};
  }

  .tweet-following {
    border-top: 13.1749px solid ${({ theme }) => theme.colors.black};
  }
  .text-wrap {
    padding: 62px 36px 0 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 26px;
  }

  button {
    padding: 14px 56px;

    font-family: inherit;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.03em;
    text-transform: inherit;
  }
  .follow {
    background: ${({ theme }) => theme.background.red}
      ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.purple};
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .following {
    background: ${({ theme }) => theme.background.purple}
      ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.white};

    transition: background-color 250ms ease-in-out, color 250ms ease-in-out;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.white};
      color: #000;
    }
  }
`;