import React from "react"

// const submitData = () => {
//   // cta button in the middle
//   if (typeof window !== 'undefined') {
//   window.dataLayer = window.dataLayer || [];
//   window.dataLayer.push ({
//     event: 'click',
//     eventType: 'apply_starter',
//     location: 'price_button_bottom',
//     })
//   }
// }

const Price = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="bg-gray-100">
    <div className="pt-12 sm:pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-6xl">
            Start selling your products on Google Shopping Network.
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-gray-600">
            Promote your products to over 50 countries around the world. <br />
            {/* <a href="" className="underline text-gray-400 text-sm md:text-lg hover:text-main">Learn More</a> */}
          </p>
        </div>
      </div>
    </div>
    <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
            <div className="flex-1 bg-white px-6 py-8 lg:p-12">
              {/* <h3 className="text-3xl font-extrabold text-gray-900 sm:text-2xl">
                Sell your products on Google Shopping Network
              </h3> */}
              <p className="mt-6 text-base text-gray-500">
                This product is for you if you currently have an online shop
                selling physical products and want to start hosting your
                products on Google shop.
              </p>
              <div className="mt-8">
                <div className="flex items-center">
                  <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-main-600">
                    What's included
                  </h4>
                  <div className="flex-1 border-t-2 border-gray-200"></div>
                </div>
                <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      {/* <!-- Heroicon name: solid/check-circle --> */}
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Setup Google Merchant Center
                    </p>
                  </li>

                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      {/* <!-- Heroicon name: solid/check-circle --> */}
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Connect your online shop to Google Merchant Center.
                    </p>
                  </li>

                  {/* <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                    1 Campaign, 2 Ads - 1 Brand awarness and 1 Promtional for 30 days.
                    </p>
                  </li> */}

                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      {/* <!-- Heroicon name: solid/check-circle --> */}
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Connect your online shop to Google Merchant Center.
                    </p>
                  </li>

                  <li className="flex items-start lg:col-span-1">
                    <div className="flex-shrink-0">
                      {/* <!-- Heroicon name: solid/check-circle --> */}
                      <svg
                        className="h-5 w-5 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-sm text-gray-700">
                      Product Listing - Upload products to Google Shopping.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
              <p className="text-lg leading-6 font-medium text-gray-900">
                For the first 3 months
              </p>
              <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                <span>$595</span>
                <span className="ml-3 text-xl font-medium text-gray-500">
                  USD
                </span>
              </div>
              {/* <p className="mt-4 text-sm">
                <a href="#" className="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p> */}
              <div className="mt-6">
                <div className="rounded-md shadow" id="second_section_button">
                  <a
                    href=""
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-green-500"
                  >
                    Start Application
                  </a>
                </div>
              </div>
              {/* <div className="mt-4 text-sm">
                <a href="/contact" id="learn-more" className="font-medium text-gray-900">
                Have questions? 
                <span className="font-normal text-gray-500"> contact us
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Price
