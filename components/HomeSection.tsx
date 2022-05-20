import Link from 'next/link'
import React from 'react'

const HomeSection = () => {
  const content = {
    title: 'Dante M.',
    lead: 'developer/ designer who turns <br/> client ideas to finished product.',
    action: 'see resumé',
    url: '/',
  }
  return (
    <>
      <section
        id="home"
        className="flex-center-everything min-h-screen flex-col"
      >
        <div className="flex-center-everything flex-col">
          <h1 className="text-6xl font-bold">{content.title}</h1>
          <p
            className="leading-5"
            dangerouslySetInnerHTML={{ __html: content.lead }}
          ></p>
          <Link href={content.url}>
            <a className="mt-1 text-xl underline sm:text-base">
              {content.action}
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomeSection
