import React from "react"

const Bio = () => (
  <div className="relative bg-main-400 font-sans">
    <div className="absolute inset-0">
      {/* <img
        className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
        alt=""
      /> */}
      <div
        className="absolute inset-0 bg-main mix-blend-multiply"
        aria-hidden="true"
      ></div>
    </div>
    <div className="relative text-white max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-4xl">
        {" "}
        Hack The Ratio's is a Digital Marketing Agency.
      </h1>
      <p className="mt-6 text-xl text-main-100 max-w-3xl">
        We started this mission with the goal to empower people to use powerful
        systems that will take their businesses to the next level. We specialize
        in integrating businesses with modern tech tools that will advance their
        business. We believe that with the right systems in place you can give
        your business a competitive edge. Our goal is to help businesses
        leverage new clients with digital marketing tools. We use analytic tools
        that help us understand how to improve users' experience. Our Campaign
        Management and Optimization service focus on improving the profitability
        of your campaigns. We do this by using historic data, testing to place
        intelligent bidding, and thoughtful data analysis.
      </p>
    </div>
  </div>
)

export default Bio
