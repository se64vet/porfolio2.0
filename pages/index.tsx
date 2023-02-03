import type { NextPage } from 'next'
import React from 'react'
import Head from 'next/head'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/chunks/Navbar'
import WorksSection from '../components/WorksSection'
import ContactSection from '../components/ContactSection'
const Home: NextPage = () => {
 return (
    <div  className="App flex-center-everything flex-col">
      <Head>
        <title>Dante | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

		{/* --------Nav bar------ */}
      <div className="container fixed top-0 z-10 bg-white py-4">
        <Navbar />
      </div>

		{/* --------Main content----- */}
      <div  className="flex-center-everything ">
	   <main className="flex-center-everything container flex-col">

          <div className="container" >
            <HomeSection />
          </div>

		   <div className="container" >
            <WorksSection />
          </div>

		  <div className="container" >
            <ContactSection />
          </div>

        </main>
      </div>
    </div>
  )
}

export default Home
