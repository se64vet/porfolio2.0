import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Form from './chunks/Form'
const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="py-14 flex-center-everything container flex-col "
      >
	  	<p className="text-xl my-5">thanks for scrolling this far.</p>
		<div className="text-2xl text-center">
			<span>contact me via </span>   
			<div className="relative group text-red-600 md:inline">
			  <a href="mailto:dante.mai96@gmail.com">dante.mai96@gmail.com</a>
		  <span className="absolute -bottom-px left-0 w-full h-0.5 bg-red-600 transition-all group-hover:w-0"></span>
			<span className="absolute -bottom-px left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full delay-150"></span>  
		  </div>
		</div>
        <div className="mt-5 flex justify-between gap-10 text-3xl text-gray-800">
			<a href='https://www.linkedin.com/in/dantemai/' target={'_blank'} className="hover:text-red-600"><FaLinkedin /></a>
			<a href='https://github.com/se64vet' target={'_blank'}  className="hover:text-red-600"><FaGithubSquare /></a>
        </div>
      </section>
    </>
  )
}

export default ContactSection
