import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { darken, fluidRange } from "polished"

const underline = css`
  text-decoration: underline;
`

const Excerpt = styled.div`
  color: hotpink;
  margin: 0;
`
const colorBase = "hotpink"

const range = {
  ...fluidRange(
    {
      prop: "padding",
      fromSize: "20px",
      toSize: "100px",
    },
    "400px",
    "1000px"
  ),
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 css={[underline, range]}>Hi from the second page</h1>
    <div
      css={{
        backgroundColor: colorBase,
        range,
        "&:hover": {
          color: "blue",
          backgroundColor: darken(0.2, colorBase),
        },
      }}
    >
      Object Style example
    </div>
    <p>Welcome to page 2</p>
    <Excerpt>Hello World</Excerpt>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
