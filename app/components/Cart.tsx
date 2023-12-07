"use client";

import { Product } from "@/types";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { useShopStore } from "../utils/store/CartStore";
import { USDollar } from "../utils/utilities";
import useLocalStorage from "../utils/localstorage";

const Cart = () => {
	const updateCart = useShopStore((state) => state.updateCart);
	const [initialCart, setInitialCart, isMounted] = useLocalStorage();

	const resetCart = () => {
		useShopStore.getState().reset();
		setInitialCart("");
	};

	const handleOnChange = (e: any) => {
		updateCart(Number(e.target.id), Number(e.target.value));
		window.dispatchEvent(new Event("storage"));
	};

	return (
		<>
			<div className="cart dropdown dropdown-bottom dropdown-end">
				<label tabIndex={0} className="cursor-pointer">
					<AiOutlineShoppingCart />
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-[320px] text-black p-6"
				>
					{isMounted && initialCart && initialCart.cart.length !== 0 ? (
						<>
							<li className="grid grid-cols-2 mb-4">
								<span>
									<p className="font-medium uppercase text-[18px]">
										Cart({isMounted ? initialCart.cart.length : 0})
									</p>
								</span>
								<span className="flex justify-end">
									<a onClick={resetCart} className="text-[#888888] underline ">
										Remove All
									</a>
								</span>
							</li>
							{initialCart.cart.map((res: Product, index: number) => (
								<li key={index} className="grid grid-cols-3">
									<span className="col-span-2 gap-4">
										<span className="w-[100%]">
											<Image
												src={`/${res.image.desktop}`}
												width="54"
												height="54"
												alt="Logo"
												className="w-full h-auto rounded"
											/>
										</span>
										<span className="flex flex-col justify-start w-[100%]">
											<p className="font-medium">
												{res.slug.split("-")[0].toUpperCase()}
											</p>
											<p className="text-[#808080] font-medium">
												{USDollar.format(res.price)}
											</p>
										</span>
									</span>
									<span className="justify-center align-middle flex">
										<input
											id={res.id.toString()}
											type="number"
											name="qty"
											// defaultValue={res.qty}
											onChange={handleOnChange}
											value={res.qty}
											className="input border-none border-r-0 borderinput-sm w-full max-w-xs bg-[#f1f1f1] rounded-none"
											min="1"
										/>
									</span>
								</li>
							))}
							<li className="grid grid-cols-2 mt-6 text-[18px] font-medium">
								<span className="uppercase text-[#808080] text-sm">Total</span>
								<span className="flex justify-end">
									{USDollar.format(initialCart.totalPrice)}
								</span>
							</li>
							<li className="mt-6">
								<Link
									className="bg-[#D87D4A] text-white uppercase flex justify-center font-medium rounded-none"
									href={`/checkout`}
									scroll={false}
								>
									Checkout
								</Link>
							</li>
						</>
					) : (
						<p>Cart is empty!</p>
					)}
				</ul>
			</div>
		</>
	);
};

export default Cart;
