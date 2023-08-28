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
  <div className="bg-white m-10">
    <div className="grid m-10 leading-5 mx-auto text-center md:pr-10 justify-items-center">
      <h2 className="w-[50%] text-3xl md:text-6xl font-extrabold text-main">
        <div className="block">Find your next customers whether they are next door or across the globe.</div>
      </h2>
      {/* <h2 className="text-center">Hack The Ratio's is a Digital Marketing Agency.</h2> */}
      <p className="w-[75%] text-center m-10 text-md md:text-2xl leading-[5rem] text-main">
      Most people believe that having a website alone is enough to make their business on the web successful but that is the furthest thing from the truth.
      There are many pieces involved in building a business system online. The first stack is your website. Your website is like your shop but digital. 
      It’s a site on the web that is much like a dessert.<blockquote>If you build a business in the desert does it exist if no one knows it’s there?</blockquote>
      If you do not let people know your business exists, they will not know it exists. The internet is an abundance of potential real estate. The last time I checked 30% of the world has access to the internet. 
      That doesn’t mean the internet is good, nor does it mean they know how to use it or do use it. <blockquote>It just means it’s available to 30% of the world.</blockquote>
      That’s why we started this mission to empower people to use powerful systems that will take their businesses to the next level. We specialize in integrating businesses with modern tech, marketing, and analytics tools. <br/>
      We help businesses leverage new clients with digital marketing and analytics tools that will help us make educated decisions when it comes to planning and launching campaigns. If you are looking to generate more leads for your business but don't know where to go next. We can help you figure that out
      <br/> We believe that with the right systems in place, you can give your business a competitive edge. Whatever your business needs may be, we can make it happen. While you continue to focus on connecting with your audience, we will ensure that the best technologies are in place to deliver a quality experience.
      </p>
      <a
        href=""
        // onClick={dataSubmit()}
        id="form_button"
        className="mt-8 w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-large rounded-lg text-white bg-main hover:bg-red hover:text-black sm:w-auto"
      >
        Reach out
      </a>
    </div>
  </div>
)

export default Apply
