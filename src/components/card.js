import React from "react"
import styled from "@emotion/styled"
import theme from "../theme/theme"

const CardHeader = styled.div`
  text-align: right;
`
const CardTitle = styled.div`
  font-size: 250%;
  font-weight: bold;
`

const CardMeta = styled.div`
  span {
    display: block;
  }
`

const CardContainer = styled.a`
  background-color: ${props => {
    const category = props.category.replace(" ", "_")

    return theme.card_types.hasOwnProperty(category)
      ? theme.card_types[category]
      : theme.card_types["unknown"]
  }};
  display: block;
  outline: 0.1em solid #000;
  color: #000;
  cursor: pointer;
  text-decoration: none;
  padding: 0.5em 0.75em;

  :hover {
    outline: 0.1em solid #000;
  }
`

const Card = ({ symbol, number, name, atomic_mass, category = "unknown" }) => (
  <CardContainer href="#" category={category}>
    <CardHeader>{number}</CardHeader>
    <CardTitle>{symbol}</CardTitle>
    <CardMeta>
      <span>{name}</span>
      <span>{atomic_mass}</span>
    </CardMeta>
  </CardContainer>
)

export default Card
