import css from "styled-jsx/css"

export default css`
  article {
    padding: 10px;
    ${"" /* display: flex;
    align-items: start; */}
    border-bottom: 1px solid #d2d2d2;
  }

  div {
    width: 100%;
    margin-left: 10px;
  }
  h3 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  p {
    width: 100%;
    font-size: 15px;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  article > :global(div) {
    margin-top: 1rem;
  }
`
