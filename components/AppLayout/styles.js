import css from "styled-jsx/css"
import { breackpoint, fonts, colors } from "../../styles/theme"
import { addOpacityToColor } from "../../styles/utils"

const backgroundColor = addOpacityToColor(colors.primary, 0.3)

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 25px 25px;
    background-size: 50px 50px;
    font-family: ${fonts.base};
  }
`

export default css`
  div {
    display: grid;
    place-items: center;
    min-height: 100vh;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    min-height: 100vh;
    width: 100%;
    position: relative;
  }

  @media (min-width: ${breackpoint.movil}) {
    main {
      min-height: 100vh;
      max-width: ${breackpoint.movil};
    }
  }
`
