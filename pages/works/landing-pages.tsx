import type { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
const Fade = require('react-reveal/Fade')

const LandingPages: NextPage = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setLoading(true)
    fetch('/data/works.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data['landingPages'])
        setLoading(false)
      })
      .catch((e) => {
        setLoading(false)
      })
  }, [])

  return (
    <Fade>
      <div className="flex-center-everything justify-enter flex-col py-10">
        <Head>
          <title>Dante | Landing pages</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href="/">
          <span className="fixed left-5 top-5 cursor-pointer text-3xl font-bold hover:underline ">
            &#9666; back
          </span>
        </Link>

        <h1 className="my-10 text-7xl font-bold">projects</h1>
        <p className="text-center text-xl italic">
          figma designs, landing page for small bussiness & works of study
        </p>
        <div className="container grid  gap-y-20 py-20 sm:grid-cols-2 lg:grid-cols-3 ">
          {loading ? (
            <p className="text-3xl italic">loading...</p>
          ) : !data ? (
            <p className="text-3xl italic">no data found</p>
          ) : (
            data.map((page) => (
              <div className="relative">
                <div
                  className="m-auto w-1/2"
                  style={{ aspectRatio: '1/1', position: 'relative' }}
                >
                  <Image
                    className="rounded-xl"
                    layout="fill"
                    objectFit="contain"
                    src={page.thumbnail}
                    alt="thumbnail"
                  />
                </div>
                <p className="text-center text-3xl font-bold">{page.name}</p>
                <p className="text-center text-2xl">[{page.desc}]</p>
                <div className="text-center text-2xl font-bold">
                  <a
                    target={'_blank'}
                    href={page.demoLink}
                    className="cursor-pointer"
                  >
                    <span className="mx-2 px-2 text-red-600 hover:underline ">
                      #demo
                    </span>
                  </a>
                  <a
                    target={'_blank'}
                    href={page.gitLink}
                    className="cursor-pointer"
                  >
                    <span className="mx-2 text-gray-700 hover:underline">
                      .code
                    </span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Fade>
  )
}
export default LandingPages
