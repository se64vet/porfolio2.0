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
        } flex-center-everything w-max flex-col-reverse !justify-evenly gap-12 p-2 lg:w-full lg:flex-row`}
      >
        <div
          className={`lg:self-start ${props.even ? 'text-right' : 'text-left'}`}
        >
          <h2 className="text-5xl font-bold text-gray-600">
            {props.index}.{props.work.name}
          </h2>
          <p className="text-2xl">
            &#91;<span>{props.work.cat}</span>
            &#93; {props.work.type}
          </p>
          <div className="mt-1 leading-5">
            <Link href={props.work.demoUrl} passHref>
              <a
                href={props.work.demoUrl}
                target={'_blank'}
                className="group relative mr-3 cursor-pointer  text-2xl font-bold text-red-600"
              >
                Demo
                <span className="absolute -bottom-px left-0 h-0.5 w-0 bg-red-500 transition-all group-hover:w-full"></span>
              </a>
            </Link>

            <Link href={props.work.repoUrl} passHref>
              <a
                href={props.work.repoUrl}
                target={'_blank'}
                className="group relative cursor-pointer text-2xl font-bold text-gray-700"
              >
                Code
                <span className="absolute -bottom-px right-0 h-0.5 w-0 bg-gray-700 transition-all group-hover:w-full"></span>
              </a>
            </Link>
            <p
              className="mt-1"
              dangerouslySetInnerHTML={{ __html: props.work.desc_html }}
            ></p>
          </div>
        </div>

        <div>
          <div
            style={{
              width: '30em',
              position: 'relative',
              aspectRatio: '1/1',
            }}
            className="duration-300 ease-out hover:-translate-y-1 hover:drop-shadow-xl"
          >
            <Image
              className="rounded-md"
              layout="fill"
              objectFit="cover"
              src={props.work.imgUrl}
              alt="thumbnail"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleWork
