import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type WorkProps = {
  even?: boolean
  work: {
    name: string
    cat: string
    type: string
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
        } flex-center-everything w-max flex-col-reverse gap-12 lg:w-full lg:flex-row`}
      >
        <div
          className={`${
            props.even ? 'self-end text-right' : 'self-start text-left'
          }`}
        >
          <h2 className="text-5xl font-bold">{props.work.name}</h2>
          <p className="text-2xl">
            &#91;<span className="italic">{props.work.cat}</span>
            &#93; {props.work.type}
          </p>
          <div className="mt-3 leading-5">
            <p dangerouslySetInnerHTML={{ __html: props.work.desc_html }}></p>
          </div>
        </div>

        <div>
          <div
            style={{
              width: '30em',
              height: '20em',
              position: 'relative',
            }}
          >
            <Image layout="fill" objectFit="cover" src={'/1.jpg'} />
          </div>
          <div className="flex w-full flex-col justify-end text-right text-xl lg:flex-row lg:justify-between">
            <Link href={props.work.demoUrl}>
              <span className="font-bold text-orange-500 underline">
                view site
              </span>
            </Link>

            <Link href={props.work.repoUrl}>
              <span>view code</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleWork
