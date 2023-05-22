import React from "react"

const Faq = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="bg-main">
    <div className="text-white max-w-7xl mx-auto py-5 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white">
        Frequently asked questions
      </h2>
      <div className="mt-6 border-t border-main border-opacity-25 pt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
          {/* <!-- QA 1... --> */}
          <div>
            <dt className="text-lg leading-6 font-medium text-white">
              Is this service offemain in my country?
            </dt>
            <dd className="mt-2 text-base text-main-200">
              Google shopping is currently avaliable in over 30 countries. Some
              of these countries include Australia, Austria, Belgium, Brazil,
              Canada, the Czech Republic, Denmark, France, Germany, India,
              Ireland, Italy, Japan, Mexico, Norway, Poland, New Zealand, the
              Netherlands, Russia, Singapore, South Africa, Spain, Sweden,
              Switzerland, Turkey, the UK, and the USA, with more to come in the
              future!
              {/* <a href="https://support.google.com/merchants/answer/7101265?hl=en"> open link to learn more</a> */}
            </dd>
          </div>

          {/* <!-- QA 2... --> */}
          <div>
            <dt className="text-lg leading-6 font-medium text-white">
              Is Google shopping network free?
            </dt>
            <dd className="mt-2 text-base text-main-100">
              As of 2020, Google has made it free to list your products on
              Google shopping network. All you need to do is submit your
              products through the Google Merchant Center and get approved.
              Google Shopping Ads are not free. Google Shopping Ads use a "PPC",
              or "price-per-click" bidding model. This means you only pay if
              someone clicks on your ad.
            </dd>
          </div>
          {/* <!-- QA 3... --> */}
          <div>
            <dt className="text-lg leading-6 font-medium text-white">
              Are there any seller requirements?
            </dt>
            <dd className="mt-2 text-base text-main-100">
              Yes, there are a few requirements. Your site must have a working
              shopping cart, a footer with return policy, Terms of Service, and
              contact information. Your Shipping fees and return policies must
              be visible on your site or it can be denied by google. You must
              also have clear product images with no fonts or logo on the
              images. Adult content in not permitted.
            </dd>
          </div>

          {/* <!-- QA 4... --> */}
          <div>
            <dt className="text-lg leading-6 font-medium text-white">
              How long does this process take?
            </dt>
            <dd className="mt-2 text-base text-main-100">
              The project time and price depends on the size of the project and
              the time it takes for Google to approve your listing. We will do
              everything in our power to make sure everything is setup correctly
              to best eliminate chances of being disapproved, suspensed, or
              banned from the platform.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
)

export default Faq
