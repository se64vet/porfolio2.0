import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitter } from 'react-icons/fa'
const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="flex-center-everything container flex-col py-14 "
      >
        <p className="my-5 text-xl">thanks for scrolling this far.</p>
        <div className="text-center text-2xl">
          <span>contact me via </span>
          <div className="group relative text-red-600 md:inline">
            <a href="mailto:dante.mai96@gmail.com">lukasvm53@gmail.com</a>
            <span className="absolute -bottom-px left-0 h-0.5 w-full bg-red-600 transition-all group-hover:w-0"></span>
            <span className="absolute -bottom-px left-0 h-0.5 w-0 bg-red-500 transition-all delay-150 group-hover:w-full"></span>
          </div>
        </div>
        <div className="mt-5 flex justify-between gap-10 text-3xl text-gray-800">
          <a
            href="https://www.linkedin.com/in/lukasvm/"
            target={'_blank'}
            className="hover:text-red-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/se64vet"
            target={'_blank'}
            className="hover:text-red-600"
          >
            <FaGithubSquare />
          </a>
        </div>
      </section>
    </>
  )
}

export default ContactSection
