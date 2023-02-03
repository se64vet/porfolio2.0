import type { NextPage } from "next";
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
const Fade = require("react-reveal/Fade")


const LandingPages:NextPage = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		setLoading(true);
		fetch('/data/works.json')
			.then((res)=> res.json())
			.then((data)=> {
				setData(data["landingPages"])
				setLoading(false)
			})
			.catch((e)=>{setLoading(false)})
	},[])


	return(
		<Fade right>
		<div className="flex-center-everything py-10 flex-col justify-enter" >
			<Head>
			<title>Dante | Landing pages</title>
			<link rel="icon" href="/favicon.ico" />
			</Head>

			<Link href="/">
				<span className="fixed left-5 top-5 text-3xl font-bold cursor-pointer hover:underline ">&#9666; back</span>
			</Link>	

			<h1 className="my-10 font-bold text-7xl">projects</h1>
			<p className="italic text-xl text-center">figma designs, landing page for small bussiness & works of study</p>
			<div className="py-20 container  grid gap-y-20 sm:grid-cols-2 lg:grid-cols-3 ">
				{loading
					? <p className="text-3xl italic">loading...</p>
					: !data
						? <p className="text-3xl italic">no data found</p>
						: data.map((page)=>(

					<div className="relative hover:scale-110 hover:z-10 duration-200">
					<div className="m-auto w-1/2" style={{ aspectRatio: '1/1', position: 'relative'}}>
						<Image className="rounded-xl" layout="fill" objectFit="contain" src={page.thumbnail}></Image>
					</div>
					<p className="text-3xl font-bold text-center">{page.name}</p>
					<p className="text-2xl text-center">[{page.desc}]</p>
				</div>

				))}
			</div>
		</div>
		</Fade>
	)
}
export default LandingPages
