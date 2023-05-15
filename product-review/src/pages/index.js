import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Monitors from "../components/Monitors"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Monitors />
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
