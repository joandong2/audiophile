"use client";

import { Product } from "@/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { USDollar } from "../utils/utilities";
import useLocalStorage from "../utils/localstorage";
import { FaCheckCircle } from "react-icons/fa";
import { useShopStore } from "../utils/store/CartStore";

const Checkout = () => {
	const [radioChecked, setRadioChecked] = useState<boolean>(false);
	const [initialCart, setInitialCart, isMounted] = useLocalStorage();

	const handleChange = (e: any) => {
		const { value } = e.target;

		value === "e-money" ? setRadioChecked(true) : setRadioChecked(false);
	};

	const submitForm = (e: FormData) => {
		//ts error for html elements
		if (document) {
			(document.getElementById("checkout_form") as HTMLFormElement).showModal();
		}

		// useShopStore.getState().reset();
		// setInitialCart("");
	};

	return (
		<>
			<form action={submitForm}>
				<div className="grid md:grid-cols-3 gap-6 text-black">
					<div className="col-span-2 bg-white p-10">
						<h4 className="mb-6">Checkout</h4>

						{/* Billing details */}
						<div className="font-medium text-[#D87D4A] uppercase mb-4">
							Billing Details
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							<span>
								<label className="text-black text-sm font-medium">Name</label>
								<br />
								<input
									type="text"
									name="name"
									placeholder="Name"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
							<span>
								<label className="text-black text-sm font-medium">
									Email Address
								</label>
								<br />
								<input
									type="text"
									name="email-address"
									placeholder="johnoblenda@gmail.com"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
							<span>
								<label className="text-black text-sm font-medium">
									Phone Number
								</label>
								<br />
								<input
									type="text"
									name="phone-number"
									placeholder="+1 202 202 2020"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
						</div>
						{/* Shipping info */}
						<div className="font-medium text-[#D87D4A] uppercase mb-4 mt-12">
							Shipping Info
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							<span className="col-span-2">
								<label className="text-black text-sm font-medium">
									Address
								</label>
								<br />
								<input
									type="text"
									name="address"
									placeholder="1137 Williams Avenue"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
							<span>
								<label className="text-black text-sm font-medium">
									Zipcode
								</label>
								<br />
								<input
									type="text"
									name="zip"
									placeholder="10001"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
							<span>
								<label className="text-black text-sm font-medium">City</label>
								<br />
								<input
									type="text"
									name="city"
									placeholder="New Jersey"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
							<span>
								<label className="text-black text-sm font-medium">
									Country
								</label>
								<br />
								<input
									type="text"
									name="country"
									placeholder="United States"
									className="rounded border py-2 px-3 w-full"
									required
								/>
							</span>
						</div>
						{/* Payment section */}

						<div className="font-medium text-[#D87D4A] uppercase mb-4 mt-12">
							Shipping Info
						</div>
						<div className="grid md:grid-cols-2 gap-4">
							<span className="col-span-2 grid grid-cols-2 gap-4">
								<span className="rounded border py-2 px-3 w-full">
									<input
										type="radio"
										name="payment"
										value="e-money"
										className="mr-2"
										onClick={handleChange}
										required
									/>
									<label className="text-black text-sm font-medium">
										e-Money
									</label>
								</span>
								<span className="rounded border py-2 px-3 w-full">
									<input
										type="radio"
										name="payment"
										value="cod"
										className="mr-2"
										onClick={handleChange}
										required
									/>
									<label className="text-black text-sm font-medium">
										Cash on Delivery
									</label>
								</span>
							</span>
							{radioChecked ? (
								<>
									<span>
										<label className="text-black text-sm font-medium">
											Zipcode
										</label>
										<br />
										<input
											type="text"
											name="e-money-number"
											placeholder="1000123123"
											className="rounded border py-2 px-3 w-full"
										/>
									</span>
									<span>
										<label className="text-black text-sm font-medium">
											City
										</label>
										<br />
										<input
											type="text"
											name="e-money-pin"
											placeholder="0892"
											className="rounded border py-2 px-3 w-full"
										/>
									</span>
								</>
							) : null}
						</div>
					</div>
					<div>
						<div className="bg-white p-8">
							<h4 className="mb-8">Summary</h4>
							{isMounted && initialCart && initialCart.cart.length !== 0 ? (
								<>
									{initialCart.cart.map((res: Product, index: number) => (
										<span key={index} className="grid grid-cols-3">
											<span className="col-span-2 flex gap-2 mb-4">
												<span>
													<Image
														src={`/${res.image.desktop}`}
														width="54"
														height="54"
														alt="Logo"
														className="w-full h-auto rounded"
													/>
												</span>
												<span className="flex flex-col justify-start">
													<p className="font-medium">
														{res.slug.split("-")[0].toUpperCase()}
													</p>
													<p className="text-[#808080] font-medium">
														{USDollar.format(res.price)}
													</p>
												</span>
											</span>
											<span className="justify-end flex text-[#808080] font-medium">
												x{res.qty}
											</span>
										</span>
									))}
									<span className="grid grid-cols-2 mt-6 text-[18px] font-medium">
										<span className="uppercase text-[#808080] text-sm">
											Total
										</span>
										<span className="flex justify-end">
											{USDollar.format(initialCart.totalPrice)}
										</span>
									</span>
									<span className="grid grid-cols-2 mt-1 text-[18px] font-medium">
										<span className="uppercase text-[#808080] text-sm">
											Shipping
										</span>
										<span className="flex justify-end">
											{USDollar.format(50)}
										</span>
									</span>
									<span className="grid grid-cols-2 mt-1 text-[18px] font-medium">
										<span className="uppercase text-[#808080] text-sm">
											VAT(included)
										</span>
										<span className="flex justify-end">
											{USDollar.format(initialCart.totalPrice * 0.2)}
										</span>
									</span>

									<span className="grid grid-cols-2 mt-4 mb-8 text-[18px] font-medium">
										<span className="uppercase text-[#808080] text-sm">
											Grand Total
										</span>
										<span className="flex justify-end text-[#D87D4A]">
											{USDollar.format(
												initialCart.totalPrice +
													50 +
													initialCart.totalPrice * 0.2
											)}
										</span>
									</span>
									<span className="mt-8">
										<input
											type="submit"
											value="Continue & Pay"
											className="bg-[#D87D4A] text-white uppercase flex justify-center font-medium text-sm rounded-none py-2 px-4 w-full cursor-pointer"
										/>
									</span>
								</>
							) : (
								<p>Cart is empty!</p>
							)}
						</div>
					</div>
				</div>
			</form>

			<dialog id="checkout_form" className="modal">
				<div className="modal-box p-12 w-[540px]">
					<FaCheckCircle className="text-[#D87D4A] text-[48px] mb-4" />
					<h3 className="font-medium uppercase text-black">
						Thank you for your order
					</h3>
					<p className="py-4">
						You will receive an email confirmation shortly.
					</p>
					{isMounted && initialCart && initialCart.cart.length !== 0 ? (
						<span className="grid grid-cols-2">
							<span className="bg-[#FAFAFA] p-4">
								{initialCart.cart.map((res: Product, index: number) => (
									<span key={index} className="grid grid-cols-3 gap-2 mb-3">
										<span>
											<Image
												src={`/${res.image.mobile}`}
												width="100"
												height="100"
												alt="Logo"
												className="w-full h-auto rounded"
											/>
										</span>
										<span className="flex flex-col justify-center">
											<p className="font-medium">
												{res.slug.split("-")[0].toUpperCase()}
											</p>
											<p className="text-[#808080] font-medium">
												{USDollar.format(res.price)}
											</p>
										</span>
										<span className="justify-end flex text-[#808080] font-medium">
											x{res.qty}
										</span>
									</span>
								))}
							</span>
							<span className="bg-black text-white p-6 flex justify-start align-middle flex-col gap-2">
								<p className="text-[#7f7f7f] font-medium text-[16px] uppercase">
									Grand Total
								</p>
								<p className="text-[24px] text-white">
									{USDollar.format(initialCart.totalPrice)}
								</p>
							</span>
						</span>
					) : null}
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default Checkout;
