import React from 'react'
import SingleWork from './chunks/SingleWork'
const WorksSection = () => {
  const work = {
    name: 'Felix Furniture',
    cat: 'e-commerce site',
    type: 'caseStudy',
    desc_html:
      'design &#38; code with <span>ReactJS</span>, <br /> <span>Material UI</span>, <span>CommerceJS</span> and <br /> authorized payment with <span>StripJS</span>.',
    demoUrl: 'updating...',
    repoUrl: 'updating...',
    imgUrl: '/1.jpg',
  }
  return (
    <section
      id="works"
      className="flex-center-everything container min-h-screen flex-col gap-44 bg-slate-50 py-10"
    >
      <SingleWork work={work} even={false} />
      <SingleWork work={work} even={true} />
    </section>
  )
}

export default WorksSection
