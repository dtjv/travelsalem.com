import Link from 'next/link'

import { ContainerX } from './Container'

export const Nav = ({ onClick }) => {
  return (
    <nav>
      <div className="py-3">
        <ContainerX className="flex items-center justify-between">
          <div className="flex">
            <Link href="/">
              <a aria-label="link to home page">
                <p className="text-3xl font-bold md:text-5xl font-display">
                  Travel Salem
                </p>
              </a>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="md:hidden"
              aria-label="link to display menu items"
              onClick={() => onClick((prevState) => !prevState)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="items-center hidden md:flex space-x-4">
            <Link href="/">
              <a aria-label="button to search">
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem services"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                Services
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem blog"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                Blog
              </a>
            </Link>
            <Link href="/">
              <a
                aria-label="link to travelsalem about page"
                className="font-medium text-gray-500 hover:text-gray-800"
              >
                About
              </a>
            </Link>
          </div>
        </ContainerX>
      </div>
    </nav>
  )
}
