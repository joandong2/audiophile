import React from "react";
import Image from "next/image";

const Features = () => {
	return (
		<>
			<div className="grid md:grid-cols-3 gap-24 md:gap-8 mb-24 mt-32">
				<div className="text-center flex flex-col align-middle justify-center items-center gap-2 w-full p-5 bg-gradient-to-r from-[#f7f7f7] via-[#ebebeb] to-[#f1f1f1] rounded-xl">
					<Image
						src="/image-category-thumbnail-headphones.png"
						alt="Image Best Gear"
						width="220"
						height="200"
						className="mt-[-5rem] w-auto h-auto"
					/>
					<h4 className="font-semibold text-black">Headphones</h4>
					<p className="text-md uppercase font-medium text-[#797979] hover:text-[#D87D4A] cursor-pointer">
						<a href="/headphones">Shop &gt;</a>
					</p>
				</div>
				<div className="text-center flex flex-col align-middle justify-center items-center gap-2 w-full p-5 bg-gradient-to-r from-[#f7f7f7] via-[#ebebeb] to-[#f1f1f1] rounded-xl">
					<Image
						src="/image-category-thumbnail-speakers.png"
						alt="Image Best Gear"
						width="220"
						height="200"
						className="mt-[-5rem] w-auto h-auto"
					/>
					<h4 className="font-semibold text-black">Speakers</h4>
					<div className="text-md uppercase font-medium text-[#797979] hover:text-[#D87D4A] cursor-pointer">
						<a href="/earphones">Shop &gt;</a>
					</div>
				</div>
				<div className="text-center flex flex-col align-middle justify-center items-center gap-2 w-full p-5 bg-gradient-to-r from-[#f7f7f7] via-[#ebebeb] to-[#f1f1f1] rounded-xl">
					<Image
						src="/image-category-thumbnail-earphones.png"
						alt="Image Best Gear"
						width="220"
						height="220"
						className="mt-[-5rem] w-auto h-auto"
					/>
					<h4 className="font-semibold text-black">Earphones</h4>
					<div className="text-md uppercase font-medium text-[#797979] hover:text-[#D87D4A] cursor-pointer">
						<a href="/earphones">Shop &gt;</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
