import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Navbar = () => {
  const router = useRouter()
  const { asPath } = router

  useEffect(() => {
    console.log(router)
  }, [router])
  return (
    <div>
      <ul className="flex justify-center bg-white text-2xl font-bold">
        <a href="#works">
          <li className="m-4">works</li>
        </a>
        <a href="#about">
          <li className="m-4">about</li>
        </a>
        <a href="#contact">
          <li className="m-4">contact</li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
