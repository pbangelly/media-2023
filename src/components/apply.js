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

      <p className="mt-2 text-sm font-extrabold md:text-2xl leading-6 text-black">
        Fill out the application below to get started.
      </p>
      <a
        href="https://us1.list-manage.com/contact-form?u=5df561687a006776cdd704251&form_id=6c0cba3b4d65c084b5f3f312a59ad1d2"
        // onClick={dataSubmit()}
        id="form_button"
        className="mt-8 w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-2xl font-large rounded-lg text-white bg-main hover:bg-pink hover:text-white sm:w-auto"
      >
        Reach Out
      </a>
    </div>
  </div>
)

export default Apply
