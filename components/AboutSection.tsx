import React from 'react'
import { FaLinkedin, FaGithubSquare, FaTwitter } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
const AboutSection = () => {
  return (
    <>
      <section
        id="about"
        className="flex-center-everything relative min-h-screen flex-col"
      >
        {/* main content */}
        <div className="self-center text-left">
          <h2 className="text-5xl font-bold">Dante &#8226; M</h2>
          <p className="text-3xl">
            &#91;<span className="italic">{'developer/ designer'}</span> &#93;
          </p>
          <div className="mt-3 leading-5">
            <p>
              A person with desire to be a <br /> full-stack developer.
            </p>
            <p className="mt-2">
              My working process including <br />
              designing with <span className="font-bold">
                Figma/ inDesign
              </span>, <br />
              building with <span>ReactJS</span> and then <br />
              adding features with <span>NodeJs.</span>
            </p>
          </div>
        </div>

        {/* social contact */}
        <div className="absolute bottom-12 flex justify-between gap-10 text-3xl text-orange-500 lg:relative lg:bottom-0 lg:mt-10 lg:justify-start">
          <FaLinkedin />
          <FaGithubSquare />
          <FaTwitter />
          <GrMail />
        </div>
      </section>
    </>
  )
}

export default AboutSection
