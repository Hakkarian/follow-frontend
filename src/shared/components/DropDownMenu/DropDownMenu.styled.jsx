import styled from "@emotion/styled";

export const DropDownMenuCss = styled.div`
  position: absolute;
  top: 2%;
  right: -3%;
  .dropdown {
    position: relative;
    width: 120px;
    filter: url(#goo);

    &__text {
        font-family: 'Montserrat', sans-serif;
      color: ${({ theme }) => theme.colors.white};
    }

    &__face,
    &__items {
      background: ${({ theme }) => theme.background.purple}
        ${({ theme }) => theme.colors.hover};
      padding: 20px;
      border-radius: 25px;
    }

    &__face {
      display: block;
      position: relative;

      background: ${({ theme }) => theme.background.purple}
        ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.background.white};

      transition: background-color 250ms linear, color 250ms linear,
        border-radius 250ms linear;

      &:hover,
      &:focus {
        background-color: ${({ theme }) => theme.colors.hover};
        color: ${({ theme }) => theme.colors.black};
        border-radius: 100px 100px 40px 40px;
      }
    }

    &__items {
      margin: 0;
      position: absolute;
      right: 0;
      top: 50%;
      width: 100%;
      list-style: none;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      visibility: hidden;
      z-index: -1;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.93, 0.88, 0.1, 0.8);

      &::before {
        content: "";
        position: absolute;
        bottom: 100%;
        right: 20%;
        height: 40px;
        width: 20px;
      }
    }

    &__arrow {
      border-bottom: 2px solid #000;
      border-right: 2px solid #000;
      position: absolute;
      top: 50%;
      right: 30px;
      width: 10px;
      height: 10px;
      transform: rotate(45deg) translateY(-50%);
      transform-origin: right;
    }

    input {
      display: none;

      &:checked ~ .dropdown__items {
        top: calc(100% + 25px);
        visibility: visible;
        opacity: 1;
      }
    }
  }

  body {
    background-image: linear-gradient(140deg, #e2e2e2, #cdcdcd);
    display: grid;
    place-items: center;
    font-family: "Lato", Arial, sans-serif;
    height: 100vh;
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  svg {
    display: none;
  }

  .dropdown-button {
    padding: 5px 10px;
    border: none;
    border-radius: 20px;

    border-radius: 10px 40px;

    background: ${({ theme }) => theme.background.purple}
      ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    transition: background-color 250ms linear, color 250ms linear,
      border-radius 250ms linear;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.hover};
      border-radius: 40px 10px;
    }
  }
`;