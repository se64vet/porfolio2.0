import React from 'react'

const HomeSection = () => {
  const content = {
    title: 'Lukas vmai.',
    lead: 'React | Node | MongoDB | Express',
    action: 'resumé',
    url: '/data/lukas_resume.pdf',
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
          <div className="group relative">
            <a
              href={content.url}
              target={'_blank'}
              className="mt-1 text-2xl text-red-600 transition-all group-hover:text-red-500 "
            >
              {content.action}
            </a>
            <span className="absolute -bottom-px left-0 h-0.5 w-full bg-red-600 transition-all group-hover:w-0"></span>
            <span className="absolute -bottom-px left-0 h-0.5 w-0 bg-red-500 transition-all delay-150 group-hover:w-full"></span>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSection
