import React from "react"

import Img1 from "../images/ads/hacktheratio-ad1.png"
import Img2 from "../images/ads/hacktheratio-ad2.png"
import Img3 from "../images/ads/hacktheratio-ad3.png"
import Img4 from "../images/ads/hacktheratio-ad4.png"

const Port = () => (
  <section className="bg-main py-20 2xl:py-40">
    <div className="container px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="w-full text-center mb-14 lg:mb-28">
          {/* <span className="text-lg text-blue-400 font-semibold">Our Works</span> */}
          <h2 className="mt-8 text-5xl text-white font-sans font-heading capitalize">
            Clean and clear designs
          </h2>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="w-full lg:w-1/2 p-4">
            <img className="w-full h-96 object-cover" src={Img1} alt="" />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img className="w-full h-96 object-cover" src={Img2} alt="" />
          </div>
          <div className="w-full h-96 lg:w-1/2 p-4">
            <img className="w-auto h-96 object-contain" src={Img3} alt="" />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            <img className="w-full h-96 object-contain" src={Img4} alt="" />
          </div>
          {/* <div className="w-full lg:w-1/3 p-4">
          <img className="w-full h-96 object-cover" src="https://images.unsplash.com/photo-1618005198920-f0cb6201c115?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80" alt=""/>
        </div> */}
        </div>
        {/* <div className="mt-20 text-center">
        <a className="inline-block py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full" href="#">See all</a>
      </div> */}
      </div>
    </div>
  </section>
)

export default Port
