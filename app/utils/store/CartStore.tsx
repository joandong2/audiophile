import { create } from "zustand";
import { Product, ProductStore } from "@/types";
import data from "@/app/api/data.json";
import { persist, createJSONStorage } from "zustand/middleware";
import { devtools } from "zustand/middleware";

export const useShopStore = create<ProductStore>()(
	devtools(
		persist(
			(set) => ({
				product: {
					id: 0,
					name: "",
					price: 0,
					description: "",
					category: "",
					slug: "",
					features: "",
				},
				products: data,
				cart: [],
				totalPrice: 0,
				addToCart: (product: Product, qty: number) => {
					set((state) => {
						// check if product id is already in cart
						const existingItem = state.cart.find(
							(item: Product) => item.id === product.id
						);
						if (existingItem) {
							const updatedCart = state.cart.map((item: Product) => {
								if (item.id === product.id) {
									return {
										...item,
										qty: item.qty! + qty,
									};
								}
								return item;
							});
							return {
								cart: updatedCart,
								totalPrice: updatedCart.reduce(
									(acc, item) => acc + item.qty! * item.price,
									0
								),
							};
						} else {
							return {
								cart: [...state.cart, { ...product, qty: qty }],
								totalPrice: state.totalPrice + product.price * qty,
							};
						}
					});
				},
				updateCart: (product_id, qty) => {
					set((state) => {
						const updatedCart = state.cart.map((item: Product) => {
							if (item.id === product_id) {
								return {
									...item,
									qty: qty,
								};
							}
							return item;
						});
						return {
							cart: updatedCart,
							totalPrice: updatedCart.reduce(
								(acc, item) => acc + item.qty! * item.price,
								0
							),
						};
					});
				},
				reset: () => {
					set(() => {
						return {
							cart: [],
							totalPrice: 0,
						};
					});
				},
			}),
			{
				name: "audiophile-cart", // name of the item in the storage (must be unique)
				//storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
				//skipHydration: false,
			}
		)
	)
);
