import React from "react";
import { useShopStore } from "../utils/store/CartStore";
import { Product } from "@/types";
import Link from "next/link";
import Image from "next/image";

const Related = () => {
	const products = useShopStore.getState().products;

	return (
		<div className="mb-24">
			<h3 className="font-medium text-center mb-16">You May Also Like</h3>
			<div className="grid md:grid-cols-3 gap-8">
				{products &&
					products
						.sort(() => Math.random() - 0.5)
						.map(
							(product: Product, index) =>
								index > 2 && (
									<div
										className="flex flex-col align-center text-center items-center gap-4"
										key={index}
									>
										<Image
											src={`/${product.image.desktop}`}
											width="1000"
											height="400"
											alt="Logo"
											className="w-full h-auto"
										/>
										<h5 className="font-medium ">{product.name}</h5>
										<Link
											href={`/${product.category}/${product.slug}`}
											className="text-white hover:bg-[#fbaf85] bg-[#D87D4A] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px]"
										>
											See Product
										</Link>
									</div>
								)
						)}
			</div>
		</div>
	);
};

export default Related;
