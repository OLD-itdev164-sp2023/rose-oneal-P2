import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Monitors = () => {
    const data = useStaticQuery(graphql`
        query MonitorsQuery {
       allImageSharp {
    edges {
      node {
        children {
          ... on MonitorsJson {
            id
            name
            alt
            button
          }
        }
        fluid {
          src
        }
      }
    }
  }
        }
    `)

function getMonitors(data) {
    const monitorsArray = []
    data.allMonitorsJson.edges.forEach((item, index) => {
        monitorsArray.push(
            <div>
                <Img src={item.node.childern.allMonitorsJson. } />
            </div>
        )
    })
    return monitorsArray
}



    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <PRoductsWrapper>{getMonitors(data)}</PRoductsWrapper>
        </ProductsContainer>
    )
}

export default Monitors

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: red;
    color: #fff;
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const PRoductsWrapper = styled.div``