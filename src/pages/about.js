import React from "react"

import Nav from "../components/layout/nav"
import Footer from "../components/layout/footer"

const About = () => (
  <div className="grid md:px-5 text-center place-content-center">
    <Nav />
    <div className="relative font-sans">
      <div className="relative max-w-7xl mx-auto py-10 px-4 sm:py-22 sm:px-6 lg:px-8">
        {/* <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Who Are We
        </h1> */}
        <p className="mt-6 text-2xl max-w-3xl leading-10">
          Hack The Ratio's is a Digital Marketing Agency. We started this
          mission with the goal to empower people to use powerful systems that
          will take their businesses to the next level. We specialize in
          integrating businesses with modern tech, marketing, and analytics
          tools. We believe that with the right systems in place you can give
          your business a competitive edge. Our goal is to help businesses
          leverage new clients with digital marketing tools, as well as use
          analytic tools that help us understand how to improve user experience.
          Our Campaign Management and Optimization service focus on improving
          the profitability of your campaigns. We do this by using historic data
          and testing to place intelligent bidding and thoughtful data analysis.
        </p>
      </div>
    </div>
    <Footer />
  </div>
)

export default About
