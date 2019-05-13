import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import { darken, fluidRange } from "polished"

import { ELEMENTS } from "../data/elements"

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

const GRID_COLUMNS_MED = 10
const GRID_COLUMNS_LG = 18

const RowWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 8em));
  padding: 0;
  color: #000;
  margin: 2rem 0;
  @media all and (min-width: 40em) {
    grid-template-columns: repeat(${GRID_COLUMNS_MED}, 8em);
    font-size: 1.18vw;
  }

  @media all and (min-width: 60em) {
    grid-template-columns: repeat(${GRID_COLUMNS_LG}, 8em);
    font-size: 0.67vw;
  }
`

const Row = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 8em;

  @media all and (min-width: 40em) {
    grid-column: ${props => props.row + "/" + (parseInt(props.row) + 1)};
    grid-row: ${props => {
      let gridCols = GRID_COLUMNS_LG
      return gridCols - props.column + 1
    }};
  }

  @media all and (min-width: 60em) {
    grid-column: ${props => props.column + "/" + (parseInt(props.column) + 1)};
    grid-row: ${props => props.row + "/" + (parseInt(props.row) + 1)};
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Periodic Table" />
    <h1 css={[underline, range]}>Hi from the second page</h1>

    <RowWrapper>
      {ELEMENTS.map(
        ({ name, number, symbol, atomic_mass, category, xpos, ypos }) => (
          <Row key={number} column={xpos} row={ypos}>
            <Card
              name={name}
              symbol={symbol}
              number={number}
              atomic_mass={atomic_mass}
              category={category}
            />
          </Row>
        )
      )}
    </RowWrapper>

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
