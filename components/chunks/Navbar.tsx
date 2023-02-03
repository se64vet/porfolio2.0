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
		  <a href="#works" className="group" >
			<li className="mx-4 text-red-600 ">works<span className="font-bold invisible group-hover:visible">.</span></li>
        </a>
        <a href="#contact" className="group">
          <li className="mx-4">contact<span className="font-bold invisible group-hover:visible">.</span></li>
        </a>
      </ul>
    </div>
  )
}

export default Navbar
