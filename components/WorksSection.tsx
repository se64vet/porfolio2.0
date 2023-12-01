import React from 'react'
const Fade = require('react-reveal/Fade')
import SingleWork from './chunks/SingleWork'
const WorksSection = () => {
  const works = [
    {
      name: 'Store Helper',
      cat: 'Inventory management webapp',
      isExternalLink: true,
      desc_html: 'Figma<br>NextJs | Tailwind<br>Express | MongoDB',
      demoUrl: 'https://storehelper.onrender.com/',
      repoUrl: 'https://github.com/se64vet/store-helper',
      imgUrl: '/StoreWise.webp',
    },
    {
      name: 'Felix Center',
      cat: 'E-commerce website',
      isExternalLink: true,
      desc_html: 'ReactJs | MaterialUI<br>NodeJs',
      demoUrl: 'https://felixhome.netlify.app/',
      repoUrl: 'https://github.com/se64vet/React_Ecommerce_Web_App/tree/main',
      imgUrl: '/Felix.webp',
    },
    {
      name: 'Bier Garten',
      cat: 'Night Lounge Webbapp',
      isExternalLink: true,
      desc_html: 'ReactJs | MaterialUI<br>NodeJs',
      demoUrl: 'https://bluelounges.netlify.app/',
      repoUrl:
        'https://github.com/se64vet/All-Blues-Lounge-s-Website/tree/master',
      imgUrl: '/restaurant.webp',
    },
    {
      name: 'Landing pages',
      cat: 'designs & wire frames',
      isExternalLink: false,
      desc_html: 'Figma<br>NextJs | CSS frameworks | vanilla',
      demoUrl: '/works/landing-pages',
      repoUrl: 'https://github.com/se64vet?tab=repositories',
      imgUrl: '/landingPages.webp',
    },
  ]
  return (
    <>
      <section
        id="works"
        className="flex-center-everything container min-h-screen flex-col gap-44 bg-slate-50 py-10"
      >
        {works.map((work, idx) => (
          <Fade duration={1500}>
            <SingleWork
              index={idx + 1}
              work={work}
              even={idx % 2 == 0 ? false : true}
            />
          </Fade>
        ))}

        <div className="text-center text-xl">
          <p>see more &#9662;</p>
          <p>
            projects{' '}
            <a
              target={'_blank'}
              href="https://github.com/se64vet?tab=repositories"
            >
              <span className="cursor-pointer text-red-500 hover:underline ">
                @Github
              </span>
            </a>
          </p>
          <p>
            designs{' '}
            <a target={'_blank'} href="https://dribbble.com/se64vet">
              <span className="cursor-pointer text-red-500 hover:underline ">
                @Dribble
              </span>
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default WorksSection
