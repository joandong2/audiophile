"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Hero from "./Hero";
import Link from "next/link";
import Cart from "./Cart";

const Header = () => {
	const pathname = usePathname();

	return (
		<>
			<div
				className={`${
					pathname === "/"
						? "bg-[url('/image-hero.jpg')] bg-cover bg-no-repeat bg-center min-h-screen"
						: "bg-black"
				} md:bg-center contain pb-[50px] items-center ${
					pathname.split("/").length === 3 ? `single-product` : ""
				}${pathname.replace("/", "") === "checkout" ? `checkout` : ""}`}
			>
				<div className="max-w-[1128px] mx-auto px-10 py-14">
					<div className="grid grid-cols-3 md:grid-cols-3 gap-4 align-middle mb-48 border-solid border-[#2d2d2d] border-b pb-4">
						<div className="dropdown md:hidden mt-[2px]">
							<label tabIndex={0}>
								<div className="bar"></div>
								<div className="bar"></div>
								<div className="bar"></div>
							</label>
							<ul
								tabIndex={0}
								className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
							>
								<li>
									<Link
										className="hover:text-[#D87D4A]"
										href={`/`}
										scroll={false}
									>
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
						<div>
							<Link href={`/`} scroll={false} replace>
								<Image
									src="/logo.svg"
									width="143"
									height="25"
									alt="Logo"
									className="h-auto"
								/>
							</Link>
						</div>
						<div>
							<ul className="font-bold text-[13px] uppercase tracking-[1px] mb-5 hidden md:flex md:gap-8 md:justify-center col-span-2">
								<li>
									<Link
										className="hover:text-[#D87D4A]"
										href={`/`}
										scroll={false}
									>
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
						<div className="text-[24px] flex justify-end text-white">
							<Cart />
						</div>
					</div>
					{pathname.split("/").length < 3 ? (
						<div className="sub-header">
							{pathname === "/" ? (
								<Hero />
							) : (
								<h1 className="text-center mb-24">{pathname.slice(1)}</h1>
							)}
						</div>
					) : null}
				</div>
			</div>
		</>
	);
};

export default Header;
