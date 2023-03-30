import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type WorkProps = {
  even?: boolean
  index: number
  work: {
    name: string
    cat: string
    type?: string
    desc_html: string
    demoUrl: string
    repoUrl: string
    imgUrl: string
  }
}
const SingleWork = (props: WorkProps) => {
  return (
    <>
      <div
        className={`${
          props.even ? 'lg:flex-row-reverse ' : ''
        } p-2 !justify-evenly flex-center-everything w-max flex-col-reverse gap-12 lg:w-full lg:flex-row`}
      >
        <div
			className={`lg:self-start ${
            props.even ? 'text-right' : 'text-left'
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-600">{props.index}.{props.work.name}</h2>
          <p className="text-2xl">
            &#91;<span>{props.work.cat}</span>
            &#93; {props.work.type}
          </p>
          <div className="mt-1 leading-5">
            <Link href={props.work.demoUrl} passHref>
              <a  href={props.work.demoUrl} target={"_blank"} className="relative cursor-pointer font-bold text-red-600  mr-3 text-2xl group">
				Demo
				  <span className="absolute -bottom-px left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span> 
              </a>
            </Link>

            <Link href={props.work.repoUrl}  passHref>
			<a href={props.work.repoUrl} target={"_blank"} className="relative cursor-pointer font-bold text-gray-700 text-2xl group">
				Code
				  <span className="absolute -bottom-px right-0 w-0 h-0.5 bg-gray-700 transition-all group-hover:w-full"></span> 
			  </a>
            </Link>
            <p className="mt-1" dangerouslySetInnerHTML={{ __html: props.work.desc_html }}></p>
          </div>
        </div>

        <div>
          <div
            style={{
              width: '30em',
              position: 'relative',
			  aspectRatio: '1/1',
            }}
			  className="hover:drop-shadow-xl hover:-translate-y-1 ease-out duration-300"
          >
            <Image className="rounded-md" layout="fill" objectFit="cover" src={props.work.imgUrl} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleWork
