import React from "react"
// import Logo from '../images/logo.png'

// const dataSubmit = () => {
//   if (typeof window !== "undefined") {
//     window.dataLayer = window.dataLayer || []
//     window.dataLayer.push({
//       event: "click",
//       eventType: "apply_button",
//       location: "bottom_landing",
//     })
//   }
// }

const Apply = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="bg-white">
    <div className="w-auto mx-auto text-center py-10 md:py-20 md:pr-10">
      <h2 className="text-3xl md:text-6xl font-extrabold text-main">
        <div className="block">Ready to get started?</div>
      </h2>
      {/* <h2 className="text-center">Hack The Ratio's is a Digital Marketing Agency.</h2> */}
      <p className="text-center mt-5 text-sm md:text-2xl leading-6 text-black mr-20 ml-20">
      We started this mission with the goal to empower people to use powerful systems that will take their businesses to the next level. 
      We specialize in integrating businesses with modern tech tools that will advance their business. 
      We believe that with the right systems in place you can give your business a competitive edge. 
      Our goal is to help businesses leverage new clients with digital marketing tools. We use analytic tools that help us understand how to improve users' experience. 
      Our Campaign Management and Optimization service focus on improving the profitability of your campaigns. 
      We do this by using historic data, testing to place intelligent bidding, and thoughtful data analysis.
      </p>
      <a
        href="https://us1.list-manage.com/contact-form?u=5df561687a006776cdd704251&form_id=6c0cba3b4d65c084b5f3f312a59ad1d2"
        // onClick={dataSubmit()}
        id="form_button"
        className="mt-8 w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-large rounded-lg text-white bg-main hover:bg-pink hover:text-white sm:w-auto"
      >
        Reach out
      </a>
    </div>
  </div>
)

export default Apply
