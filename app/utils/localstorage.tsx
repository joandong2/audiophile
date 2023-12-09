import React, { useEffect, useLayoutEffect, useState } from "react";
import { useShopStore } from "./store/CartStore";
import toast from "react-hot-toast";

const useLocalStorage = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const [initialCart, setInitialCart] = useState<any>();

	useLayoutEffect(() => {
		if (typeof window !== "undefined") {
			setInitialCart(useShopStore.getState());
			setIsMounted(true);
		}
	}, []);

	useEffect(() => {
		// setInitialCart(useShopStore.getState());
		// setIsMounted(true);
		// Updating a state causes a re-render, used zustand state here because its not rendering the items in cart which the localstorage get won't
		setInitialCart(useShopStore.getState());

		// cart instance, render after new event "storage"
		const cartInstance = () => {
			const res = JSON.parse(localStorage.getItem("audiophile-cart") || "");
			if (res) {
				setInitialCart(res.state);
			}
			toast.success("Cart updated", {});
		};

		// // fire listener,
		window.addEventListener("storage", cartInstance);

		// cleanup, if some subscription is made, its logical to unsubscribe before moving to next condition,
		return () => {
			window.removeEventListener("storage", cartInstance);
		};
	}, []);
	return [initialCart, setInitialCart, isMounted];
};

export default useLocalStorage;
