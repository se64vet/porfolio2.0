import Link from 'next/link'
import React from 'react'

const HomeSection = () => {
  const content = {
    title: 'Dante Mai.',
    lead: 'React | Node | MongoDB | Express',
    action: 'resumé',
    url: '/',
  }
  return (
    <>
      <section
        id="home"
        className="flex-center-everything min-h-screen flex-col"
      >
        <div className="flex-center-everything flex-col ">
		  <h1 className="text-6xl font-bold">{content.title}</h1>
		  <p
            className="leading-2 text-2xl"
            dangerouslySetInnerHTML={{ __html: content.lead }}
          ></p>
		  <div className="relative group">
          <Link href={content.url}>
			  <a className="mt-1 text-2xl text-red-600 group-hover:text-red-500 transition-all ">
              {content.action}
            </a>
          </Link>
			<span className="absolute -bottom-px left-0 w-full h-0.5 bg-red-600 transition-all group-hover:w-0"></span>
			<span className="absolute -bottom-px left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full delay-150"></span>
	      </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
