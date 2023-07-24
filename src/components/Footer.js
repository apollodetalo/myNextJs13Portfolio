import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

//Add website links later
const Footer = () => {
  return (
    <footer className="w-full border-t-2  border-solid border-dark font-medium text-lg dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center bg-nvidia justify-between dark:text-light lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Build with{' '}
          <span className="text-light dark:text-lime-500 text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target={'_blank'}
          >
            {' '}
            Apollo Detalo
          </Link>
        </div>

        <Link
          href="mailto:apollodetalo90@gmail.com"
          target={'_blank'}
          className="underline underline-offset-2 hover:text-lime-500"
        >
          apollodetalo90@gmail.com
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
