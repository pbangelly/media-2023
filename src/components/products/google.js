import React from "react"
import data from "../../data/data.json"

import ga from "../../images/products/google/ga.png"
import gads from "../../images/products/google/gads.png"
import gshopping from "../../images/products/google/gshopping.png"
import map from "../../images/products/google/map.png"
import merch from "../../images/products/google/merch.png"
import retarget from "../../images/products/google/retarget.png"
import video from "../../images/products/google/video.png"
import discovery from "../../images/products/google/gdiscover.png"

const GoogleProd = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="relative bg-black py-5 md:mt-20">
    <div className="text-center mx-auto max-w-lg px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-main uppercase">
        Digital Solutions
      </h2>
      <p className="mt-2 text-2xl md:text-4xl font-extrabold text-gray-600 tracking-tight">
        Products and Services
      </p>
      <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        {/* Turn people who find you on Google Search and Maps into new customers with a free Business Profile for your storefront or service area. */}
      </p>
      <div className="mt-12 px-10 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={merch} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product1.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product1.productDescrip}
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={gshopping} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product2.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product2.productDescrip}
                </p>
              </div>
            </div>
          </div> */}

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={gads} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product3.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product3.productDescrip}
                </p>
              </div>
            </div>
          </div>

          {/* <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={ga} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product4.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {/* Reach your goals with powerful digital analytics.  */}
                  {/* {data.googleproducts.product4.productDescrip} */}
                {/* </p>
              </div>
            </div>
          </div> */}

          {/* <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={map} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product5.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product5.productDescrip}
                </p>
              </div>
            </div>
          </div> */}

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={discovery} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product6.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product6.productDescrip}
                  {/* The placement of Discovery ads is determined by the topics that a user is actively interested in, based on signals */}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={video} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product7.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product7.productDescrip}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-black rounded-md shadow-lg">
                    <img src={retarget} />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                  {data.googleproducts.product8.productTitle}
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  {data.googleproducts.product8.productDescrip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default GoogleProd
