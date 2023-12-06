import React from "react";
import { useShopStore } from "@/app/utils/store/CartStore";
import { Product } from "@/types";
import SingleProduct from "@/app/components/SingleProduct";

const Page = ({ params }: { params: { slug: string } }) => {
	const res = useShopStore
		.getState()
		.products.filter((res) => res.slug === params.slug);

	useShopStore.setState({
		product: res[0],
	});

	const product: Product = useShopStore.getState().product;

	return <SingleProduct product={product} />;
};

export default Page;
