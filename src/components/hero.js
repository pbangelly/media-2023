import React from "react"
import Img from "../images/digital-marketing.png"
// import Logo from "../images/logo.png"

// const dataSubmit = () => {
//   if (typeof window !== "undefined") {
//     window.dataLayer = window.dataLayer || []
//     window.dataLayer.push({
//       event: "click",
//       eventType: "apply_now",
//       location: "hero_landing",
//     })
//   }
// }

const Hero = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="relative bg-white">
    <main className="h-auto py-10 w-auto lg:relative">
      <div className="min-h-70 w-auto px-5 max-w-8xl md:ml-10 md:ml-5 lg:text-left">
        <div className="md:py-10 md:px-10 lg:ml-10 lg:w-1/2">
          <h1 className="font-sans text-gray-800 text-5xl md:text-8xl tracking-tight">
            <span className="block capitalize text-main md:pt-5 xl:inline">
              Boost your sales with Digital Marketing
            </span>
          </h1>
          <p className="w-auto font-sans py-3 md:py-5 text-md md:text-2xl text-gray-600">
            Outrank your competitors and reach more people with digital
            marketing products. We will set up everything requimain to get you
            started with selling your products on platforms like Google Shopping
            and more.
          </p>
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow" id="hero-button">
              <a
                href=""
                // onClick={dataSubmit()}
                className="w-full flex items-center justify-center py-3 px-3 md:px-5 md:py-5 md:pb-5 border border-transparent font-sans md:font-medium rounded-md text-white bg-main hover:bg-pink md:text-2xl"
              >
                Reach Out
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-62 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img
          className="absolute md:p-10 inset-0 w-a h-full h-58 object-contain"
          src={Img}
          alt="image of Google shopping cart"
        />
      </div>
    </main>
  </div>
)

export default Hero
