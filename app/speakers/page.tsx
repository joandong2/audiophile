import { useShopStore } from "@/app/utils/store/CartStore";
import Features from "../components/Features";
import Products from "../components/Products";

const Page = () => {
	const products = useShopStore.getState().products;

	return (
		<>
			<Products products={products} />
			<Features />
		</>
	);
};

export default Page;
