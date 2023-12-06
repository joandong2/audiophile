"use client";

import { useShopStore } from "@/app/utils/store/CartStore";
import { Product } from "@/types";

interface Props {
	prod: Product;
}

const AddToCart = ({ prod }: Props) => {
	const addToCart = useShopStore((state) => state.addToCart);

	async function handleSubmit(e: FormData) {
		const qty = await Number(e.get("qty"));
		addToCart(prod, qty);
		window.dispatchEvent(new Event("storage")); //This is the important part
	}

	return (
		<div>
			<div className="text-center md:text-left">
				<form action={handleSubmit}>
					<div className="flex gap-4">
						<input
							type="number"
							name="qty"
							className="bg-[#f1f1f1] w-[120px] border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
							placeholder="1"
							required
							min="1"
						/>
						<button
							type="submit"
							className="text-white hover:bg-[#fbaf85] bg-[#D87D4A] px-5 py-3 w-[160px] text-center uppercase text-[13px] bold tracking-[1px]"
						>
							Add To Cart
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddToCart;
