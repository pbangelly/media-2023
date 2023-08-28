import React from "react"

import Layout from "../components/layout/layout"
import Hero from "../components/hero"
import Products from "../components/products/index"
import Faq from "../components/faq"
import Apply from "../components/apply"
// import Image from "../components/Image"
// import Price from "../components/price"
import Port from "../components/port"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Products />
    {/* <Image /> */}
    <Port />
    {/* <Price /> */}
    <Apply />
    <Faq />
  </Layout>
)

export default IndexPage
