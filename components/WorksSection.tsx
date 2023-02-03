import React from 'react'
import Link from 'next/link'
const Fade = require("react-reveal/Fade")
import SingleWork from './chunks/SingleWork'
const WorksSection = () => {
  const works = [{
    name: 'StoreWise',
    cat: 'Inventory management webapp',
    type: '',
	desc_html:'Figma<br>NextJs | Tailwind<br>NodeJs | MongoDB',
    demoUrl: 'updating...',
    repoUrl: 'updating...',
    imgUrl: '/StoreWise.webp',
  	},
	{
    name: 'Felix Center',
    cat: 'E-commerce website',
    type: '',
	desc_html:'ReactJs | Bootstrap<br>NodeJs',
    demoUrl: 'updating...',
    repoUrl: 'updating...',
    imgUrl: '/Felix.webp',
  	},
	{
    name: 'Bier Garten',
    cat: 'Restaurant management webapp',
    type: '',
	desc_html:'ReactJs | Bootstrap<br>NodeJs',
    demoUrl: 'updating...',
    repoUrl: 'updating...',
    imgUrl: '/restaurant.webp',
  	},
	{
    name: 'Micro Dash',
    cat: 'advance todo-app',
    type: '',
	desc_html:'ReactJs | Tailwind<br>NodeJs',
    demoUrl: 'updating...',
    repoUrl: 'updating...',
    imgUrl: '/Dash.webp',
  	},

	{
    name: 'Landing pages',
    cat: 'designs & wire frames',
    type: '',
	desc_html:'Figma<br>NextJs | ReactBootstrap',
    demoUrl: '/works/landing-pages',
    repoUrl: 'updating...',
    imgUrl: '/landingPages.webp',
  	},
   
  ]
  return (
	<>
    <section
      id="works"
      className="flex-center-everything container min-h-screen flex-col gap-44 bg-slate-50 py-10"
    >
		{works.map((work, idx) => <Fade duration={1500}><SingleWork index={idx+1} work={work} even={idx%2==0? false : true} /></Fade>)}

	<div className='text-center text-xl'>
	<p>see more &#9662;</p>
		<p>projects <a target={'_blank'} href='https://github.com/se64vet?tab=repositories'><span className='cursor-pointer text-red-500 hover:underline '>@Github</span></a></p>
	<p>designs <a target={'_blank'} href='https://dribbble.com/se64vet'><span className='cursor-pointer text-red-500 hover:underline '>@Dribble</span></a></p>
	</div>
    </section>
	</>
  )
}

export default WorksSection
