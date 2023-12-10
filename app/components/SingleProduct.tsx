import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import Features from "./Features";
import Related from "./Related";
import AddToCart from "./AddToCart";
import { USDollar } from "../utils/utilities";

const SingleProduct = ({ product }: { product: Product }) => {
	console.log("prod", product.image.desktop);

	return (
		<div className="text-black">
			<div className="grid md:grid-cols-2 gap-16 mb-24">
				<div className="">
					<Image
						src={`/${product.image.desktop}`}
						width="1000"
						height="490"
						alt="Logo"
						className="w-full h-auto"
						priority
					/>
				</div>
				<div className="flex flex-col gap-6 justify-center items-center md:items-start order-2 md:order-1">
					<h2 className="text-black">{product.name}</h2>
					<p>{product.description}</p>
					<p className="font-medium text-[18px]">
						{USDollar.format(product.price)}
					</p>
					<AddToCart prod={product} />
				</div>
			</div>
			<div className="grid md:grid-cols-2 gap-16 mb-24">
				<div>
					<h3 className="mb-8">Features</h3>
					<div>{product.features}</div>
				</div>
				<div>
					<h3 className="mb-8">In The Box</h3>
					<ul>
						{product.includes.map((item: any, index: number) => (
							<li key={index}>
								<span className="text-[#D87D4A] mr-4 font-medium">
									{item.quantity}x
								</span>
								{item.item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="grid md:flex w-full gap-8 md:max-h-[535px] overflow-hidden mb-24">
				{Object.keys(product.gallery).map(
					(res: any, index) =>
						index < 1 && (
							<div className="flex gap-8" key={index}>
								<div className="flex flex-col">
									<Image
										src={`/${product.gallery.first["desktop"]}`}
										width="500"
										height="500"
										alt="Logo"
										className="mb-5 w-full h-auto"
									/>
									<Image
										src={`/${product.gallery.second["desktop"]}`}
										width="500"
										height="500"
										alt="Logo"
										className="w-full h-auto"
									/>
								</div>
								<div className="">
									<Image
										src={`/${product.gallery.third["desktop"]}`}
										width="710"
										height="200"
										alt="Logo"
										className="w-full h-auto"
									/>
								</div>
							</div>
						)
				)}
			</div>
			<Related />
			<Features />
		</div>
	);
};

export default SingleProduct;
