import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
// import data from "../../data/data.json"

const Nav = () => (
  <div className="bg-black text-center pt-10 mx-5 w-auto">
    <Link to="/">
      <div className="flex inline-flex items-center justify-center h-auto w-full">
        <img
          className="flex h-10 md:h-20 w-auto"
          src={Logo}
          alt="Hack The Ratio logo digital marketing agency"
        />
      </div>
      <h1 className="text-2xl text-main">Hack The Ratio</h1>
      {/* <div className="py-0.5 text-4xl md:text-5xl text-black font-subtitle tracking-wide">{data.title}</div> */}
      {/* <div className="py-1 text-md md:text-2xl text-gray-900 font-subtitle font-extrabold tracking-wide">{data.description}</div> */}
    </Link>
  </div>
)

export default Nav
