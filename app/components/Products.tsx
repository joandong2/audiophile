"use client";

import { Product } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Products = ({ products }: { products: Product[] }) => {
	const pathname = usePathname();

	return (
		<div className="mb-40">
			{products
				? products
						.filter(
							(product: Product) => product.category === pathname?.slice(1)
						)
						.map((res: Product, index) =>
							index % 2 === 0 ? (
								<div className="mb-16" key={index}>
									<div className="grid md:grid-cols-2 gap-16">
										<div className="flex flex-col gap-6 justify-center items-center md:items-start order-2 md:order-1">
											<h2 className="text-black ">{res.name}</h2>
											<p>{res.description}</p>
											<p className="text-center md:text-left">
												<Link
													href={`/${pathname?.slice(1)}/${res.slug}`}
													className="text-white hover:bg-[#fbaf85] bg-[#D87D4A] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px]"
												>
													See Product
												</Link>
											</p>
										</div>
										<div className="order-1 md:order-2">
											<Image
												//src="/${``}"
												//className={`${manRope.variable} ${dancing_script.variable} text-white`}
												src={`/${res.image.desktop}`}
												width="1000"
												height="490"
												alt="Logo"
												className="w-full h-auto"
											/>
										</div>
									</div>
								</div>
							) : (
								<div className="mb-16" key={index}>
									<div className="grid md:grid-cols-2 gap-16">
										<div className="">
											<Image
												//src="/${``}"
												//className={`${manRope.variable} ${dancing_script.variable} text-white`}
												src={`/${res.image.desktop}`}
												width="1000"
												height="490"
												alt="Logo"
												className="w-full h-auto"
											/>
										</div>
										<div className="flex flex-col gap-6 justify-center items-center md:items-start order-2 md:order-1">
											<h2 className="text-black">{res.name}</h2>
											<p>{res.description}</p>
											<p className="text-center md:text-left">
												<Link
													href={`/${pathname?.slice(1)}/${res.slug}`}
													className="text-white hover:bg-[#fbaf85] bg-[#D87D4A] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px]"
												>
													See Product
												</Link>
											</p>
										</div>
									</div>
								</div>
							)
						)
				: "No Products"}
		</div>
	);
};

export default Products;
