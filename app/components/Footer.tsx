import {
	AiFillFacebook,
	AiFillInstagram,
	AiOutlineTwitter,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<div className="max-w-[1128px] mx-auto p-6">
				<div className="grid md:grid-cols-2 gap-12 md:gap-24 text-[#000] mb-16">
					<div className="order-2 md:order-1 md:mt-24">
						<h2 className="text-center md:text-left mb-12">
							Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
							audio gear
						</h2>
						<p className="text-center md:text-left">
							Located at the heart of New York City, Audiophile is the premier
							store for high end headphones, earphones, speakers, and audio
							accessories. We have a large showroom and luxury demonstration
							rooms available for you to browse and experience a wide range of
							our products. Stop by our store to meet some of the fantastic
							people who make Audiophile the best place to buy your portable
							audio equipment.
						</p>
					</div>
					<div className="order-1 md:order-2">
						<Image
							src="/image-best-gear.jpg"
							width="540"
							height="588"
							alt="Image Best Gear"
							className="w-full h-auto"
						/>
					</div>
				</div>
			</div>
			<div className="bg-[#101010] pt-[75px] pb-[50px]">
				<div className="max-w-[1128px] mx-auto p-6">
					<div className="grid md:grid-cols-2">
						<p className="mb-5">
							<a href="/">
								<Image
									src="/logo.svg"
									width="143"
									height="25"
									alt="Logo"
									className="h-auto"
								/>
							</a>
						</p>
						<ul className="font-bold text-[13px] uppercase tracking-[1px] mb-5 md:flex md:gap-8 md:justify-end">
							<li>
								<Link className="hover:text-[#D87D4A]" href={`/`}>
									Home
								</Link>
							</li>
							<li>
								<Link className="hover:text-[#D87D4A]" href={`/headphones`}>
									Headphones
								</Link>
							</li>
							<li>
								<Link className="hover:text-[#D87D4A]" href={`/speakers`}>
									Speakers
								</Link>
							</li>
							<li>
								<Link className="hover:text-[#D87D4A]" href={`/earphones`}>
									Earphones
								</Link>
							</li>
						</ul>
					</div>
					<div className="md:w-[45%]">
						<p className="text-[15px] font-medium mb-[47px] text-[#878787]">
							Audiophile is an all in one stop to fulfill your audio needs.
							We're a small team of music lovers and sound specialists who are
							devoted to helping you get the most out of personal audio. Come
							and visit our demo facility - we're open 7 days a week.
						</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-[15px] font-bold text-[#878787]">
							Copyright 2021. All Rights Reserved
						</p>

						<ul className="text-[24px] flex justify-end gap-3">
							<li>
								<a href="#">
									<AiFillFacebook />
								</a>
							</li>
							<li>
								<a href="#">
									<AiOutlineTwitter />
								</a>
							</li>
							<li>
								<a href="#">
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
