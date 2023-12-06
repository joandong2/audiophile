import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2">
				<div className="flex flex-col justify-center text-center md:text-left gap-8">
					<h6 className="text-[#888888] tracking-[1em]">New Product</h6>
					<h1>XX99 Mark II HeadphoneS</h1>
					<p className="text-[#c6c6c6]">
						Experience natural, lifelike audio and exceptional build quality
						made for the passionate music enthusiast.
					</p>
					<p className="text-center md:text-left">
						<Link
							className="text-white hover:bg-[#fbaf85] bg-[#D87D4A] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px]"
							href={`/headphones/xx99-mark-one-headphones`}
						>
							See Product
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default Hero;
