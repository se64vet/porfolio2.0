import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import Form from './chunks/Form'
const ContactSection = () => {
  return (
    <>
      <section
        id="contact"
        className="flex-center-everything container min-h-screen flex-col bg-slate-50"
      >
        <Form formTitle="Let's Talk, or Chat, or..." />
        <div className="mt-20 flex justify-between gap-10 text-3xl text-gray-800">
          <FaLinkedin />
          <FaGithubSquare />
          <FaTwitter />
          <GrMail />
        </div>
      </section>
    </>
  )
}

export default ContactSection
