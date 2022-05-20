import type { NextPage } from 'next'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import useIsomorphicLayoutEffect from '../components/hooks/useIsomorphicLayoutEffect'
import Head from 'next/head'
import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/chunks/Navbar'
import WorksSection from '../components/WorksSection'
import ContactSection from '../components/ContactSection'
import useWindowSize from '../components/hooks/useWindowSize'
const Home: NextPage = () => {
  //refs
  const appRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const itemRef = useRef<HTMLDivElement>(null)

  //hook

  let size = useWindowSize()
  if (typeof window !== undefined) {
    size = useWindowSize()
  }

  //effects
  // --set the height of the body.
  useIsomorphicLayoutEffect(() => {
    if (contentRef.current !== null) {
      document.body.style.height = `${
        contentRef.current.getBoundingClientRect().height
      }px`
    }
  }, [size.height])

  // --Run scrollrender once page is loaded.
  // useEffect(() => {
  //   requestAnimationFrame(skewScrolling)
  // }, [])

  useLayoutEffect(() => {
    const animation = requestAnimationFrame(skewScrolling)
    return () => {
      cancelAnimationFrame(animation)
    }
  }, [])

  //skew scroll funtions
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    prev: 0,
    rounded: 0,
  }

  const skewScrolling = () => {
    // set current to the vertical scroll amount
    skewConfigs.current = window.scrollY
    // set prev to previous scroll postion
    skewConfigs.prev +=
      (skewConfigs.current - skewConfigs.prev) * skewConfigs.ease
    // set rounded number
    skewConfigs.rounded = Math.round(skewConfigs.prev * 100) / 100

    // vars
    const difference = skewConfigs.current - skewConfigs.prev
    const acceleration = difference / 1000
    if (size.width !== 0) {
      const acceleration = difference / size.width
    }
    const velocity = +acceleration
    const skew = velocity * 10
    console.log({ difference, acceleration, velocity, skew, size })
    if (null !== contentRef.current) {
      contentRef.current.style.transform = `translateY(-${skewConfigs.rounded}px) skewY(${skew}deg)`
    }

    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <div ref={appRef} className="App flex-center-everything flex-col">
      <Head>
        <title>Dante Mai | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* --------Nav bar------ */}
      <div className="container fixed top-0 z-10 bg-white pt-4">
        <Navbar />
      </div>
      <div ref={contentRef} className="flex-center-everything ">
        {/* --------Main content----- */}
        <main className="flex-center-everything container flex-col">
          <div className="container" ref={itemRef}>
            <HomeSection />
          </div>
          <div className="container" ref={itemRef}>
            <WorksSection />
          </div>
          <div className="container" ref={itemRef}>
            <AboutSection />
          </div>
          <div className="container" ref={itemRef}>
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home
