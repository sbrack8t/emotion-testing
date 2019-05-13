import { css } from "@emotion/core"

export const baseStyles = css`
   article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section {
    display: block;
  }

  b,
  strong {
    font-weight: inherit;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  pre,
  samp {
    $font-family: $font-family-monospace;
    font-size: 1em;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  audio,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }
  body {
    font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    line-height: 1.4;
    background: #fefefe;
    color: #333;
    margin: 0;
  }
`
