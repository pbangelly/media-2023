import React from "react"

import Layout from "../components/layout/layout"
// import SEO from "../components/seo"
import Hero from "../components/hero"
import Bio from "../components/bio"
import Products from "../components/products/index"
import Faq from "../components/faq"
import Apply from "../components/apply"
import Image from "../components/Image"
// import Price from "../components/price"
import Port from "../components/port"

const IndexPage = () => (
  <Layout>
    {/* <SEO
      title="Hack The Ratio"
      alt="Hack The Ratio Digital Marketing, sell Digital Ads"
    /> */}
    <Hero />
    <Bio />
    <Products />
    <Image />
    <Port />
    <Apply />
    {/* <Price /> */}
    <Faq />
  </Layout>
)

export default IndexPage
