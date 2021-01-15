import Link from 'next/link'

import { ContainerX, ContainerY } from './Container'

export const Footer = ({ sections }) => {
  const renderSections = [
    sections.food,
    sections.activities,
    sections.stay,
    sections.services,
    sections.company,
    sections.support,
  ].map((section, i) => {
    const categories = section.categories.map((category, j) => (
      <li key={j}>
        <Link href="/">
          <a className="hover:text-gray-600"> {category.name} </a>
        </Link>
      </li>
    ))
    return (
      <li key={i} className="space-y-5">
        <h4 className="font-semibold text-gray-800 uppercase">
          {section.name}
        </h4>
        <ul className="text-gray-500 space-y-4"> {categories} </ul>
      </li>
    )
  })

  return (
    <footer className="text-sm border-t sm:text-base bg-gray-50">
      <ContainerX>
        <ContainerY className="divide-y divide-gray-200 space-y-8">
          <ul className="grid gap-x-2 gap-y-10 sm:gap-x-4 md:gap-x-6 grid-cols-2 sm:grid-cols-3 xl:grid-cols-6">
            {renderSections}
          </ul>
          <div className="pt-8 sm:flex sm:items-center sm:justify-between">
            <div className="mr-4">
              <p className="font-semibold text-gray-800 uppercase">
                Subscribe to our newsletter
              </p>
              <p className="pt-2 text-gray-600">
                The latest news, articles, and resources, sent to your inbox
                monthly.
              </p>
            </div>
            <div className="items-center mt-4 sm:flex sm:mt-0">
              <input
                type="text"
                className="block mr-2 bg-gray-100 border border-black rounded-md focus:border-gray-500 focus:bg-white"
                placeholder="Enter your email"
              />
              <button className="mt-4 sm:mt-0 flex items-center px-4 py-2.5 text-white bg-black rounded-md">
                Subscribe
              </button>
            </div>
          </div>
          <div className="items-center justify-between pt-8 sm:flex">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Rounded"
                    transform="translate(-408.000000, -244.000000)"
                  >
                    <g
                      id="Action"
                      transform="translate(100.000000, 100.000000)"
                    >
                      <g
                        id="-Round-/-Action-/-copyright"
                        transform="translate(306.000000, 142.000000)"
                      >
                        <g transform="translate(0.000000, 0.000000)">
                          <polygon
                            id="Path"
                            points="0 0 24 0 24 24 0 24"
                          ></polygon>
                          <path
                            d="M10.08,10.86 C10.13,10.53 10.24,10.24 10.38,9.99 C10.52,9.74 10.72,9.53 10.97,9.37 C11.21,9.22 11.51,9.15 11.88,9.14 C12.11,9.15 12.32,9.19 12.51,9.27 C12.71,9.36 12.89,9.48 13.03,9.63 C13.17,9.78 13.28,9.96 13.37,10.16 C13.46,10.36 13.5,10.58 13.51,10.8 L15.3,10.8 C15.28,10.33 15.19,9.9 15.02,9.51 C14.85,9.12 14.62,8.78 14.32,8.5 C14.02,8.22 13.66,8 13.24,7.84 C12.82,7.68 12.36,7.61 11.85,7.61 C11.2,7.61 10.63,7.72 10.15,7.95 C9.67,8.18 9.27,8.48 8.95,8.87 C8.63,9.26 8.39,9.71 8.24,10.23 C8.09,10.75 8,11.29 8,11.87 L8,12.14 C8,12.72 8.08,13.26 8.23,13.78 C8.38,14.3 8.62,14.75 8.94,15.13 C9.26,15.51 9.66,15.82 10.14,16.04 C10.62,16.26 11.19,16.38 11.84,16.38 C12.31,16.38 12.75,16.3 13.16,16.15 C13.57,16 13.93,15.79 14.24,15.52 C14.55,15.25 14.8,14.94 14.98,14.58 C15.16,14.22 15.27,13.84 15.28,13.43 L13.49,13.43 C13.48,13.64 13.43,13.83 13.34,14.01 C13.25,14.19 13.13,14.34 12.98,14.47 C12.83,14.6 12.66,14.7 12.46,14.77 C12.27,14.84 12.07,14.86 11.86,14.87 C11.5,14.86 11.2,14.79 10.97,14.64 C10.72,14.48 10.52,14.27 10.38,14.02 C10.24,13.77 10.13,13.47 10.08,13.14 C10.03,12.81 10,12.47 10,12.14 L10,11.87 C10,11.52 10.03,11.19 10.08,10.86 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
                            id="🔹Icon-Color"
                            fill="#1D1D1D"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="">2021 Travel Salem</p>
            </div>
            <div className="flex items-center mt-4 sm:mt-0 space-x-3 sm:space-x-6">
              <svg
                className="w-6 h-6"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
              <svg
                className="w-6 h-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Twitter icon</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <svg
                className="w-6 h-6"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Pinterest icon</title>
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
              </svg>
              <svg
                className="w-6 h-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>YouTube icon</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <svg
                className="w-6 h-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>Facebook icon</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          </div>
        </ContainerY>
      </ContainerX>
      <div className="p-4 text-center text-white bg-black">
        <p className="font-medium tracking-wide">
          Made with ☕️ ☕️ ☕️ by{' '}
          <a href="https://dtjv.io" className="font-semibold underline">
            David Valles
          </a>
        </p>
      </div>
    </footer>
  )
}
