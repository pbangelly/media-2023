import React from "react"
import data from "../../data/data.json"

// social icons
import fb from "../../images/products/social/facebook.png"
import ig from "../../images/products/social/insta.png"
import yt from "../../images/products/social/youtube.png"
import pin from "../../images/products/social/pin.png"
// import tiktok from "../images/products/tiktok.png"

const SocialProd = () => (
  <div className="bg-gray-900 h-full max-w-full rounded-2xl mx-3 my-10 py-10 sm:max-w-3xl sm:px-6 md:mx-10 lg:px-8 lg:max-w-full">
    <h1 className="py-5 px-5 font-extrabold text-gray-100 tracking-tight text-center text-3xl md:text-5xl ">
      We can also manage Campaign Ads.
    </h1>
    <div className="grid grid-cols-1 py-5 mx-5 gap-8 sm:grid-cols-2 lg:grid-cols-4 items-end">
      <div className="">
        <div className="flow-root bg-gray-50 rounded-lg px-6 py-4">
          <div className="-mt-10">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                <img className="h-5" src={ig} />
              </span>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">
              {data.socialproducts.product1.productTitle}
            </h3>
            <p className="mt-5 text-base text-gray-500">
              {data.socialproducts.product1.productDescrip}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-5">
          <div className="-mt-5">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                <img className="h-5" src={fb} />
              </span>
            </div>
            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
              {data.socialproducts.product2.productTitle}
            </h3>
            <p className="mt-5 text-base text-gray-500">
              {data.socialproducts.product2.productDescrip}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-5">
          <div className="-mt-5">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                <img className="h-5" src={yt} />
              </span>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">
              {data.socialproducts.product3.productTitle}
            </h3>
            <p className="mt-5 text-base text-gray-500">
              {data.socialproducts.product3.productDescrip}
            </p>
          </div>
        </div>
      </div>

      <div className="pt-6">
        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-5">
          <div className="-mt-5">
            <div>
              <span className="inline-flex items-center justify-center p-3 bg-white rounded-md shadow-lg">
                <img className="h-5" src={pin} />
              </span>
            </div>
            <h3 className="mt-5 text-lg font-medium text-gray-900 tracking-tight">
              {data.socialproducts.product4.productTitle}
            </h3>
            <p className="mt-5 text-base text-gray-500">
              {data.socialproducts.product4.productDescrip}
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <a href="https://forms.gle/KYkMR7W9NUCLh4BC8" id="gmerch_button" className="mt-8 w-auto inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-green-500 hover:text-white sm:w-auto">
                Learn More</a> */}
  </div>
)

export default SocialProd
