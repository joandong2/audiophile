export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	qty?: number;
	category: string;
	image?: any;
	slug: string;
	features: string;
	includes?: any;
	gallery?: any;
}

export interface ProductStore {
	product: Product;
	products: Product[];
	cart: Product[];
	totalPrice: number;
	addToCart: (product: Product, qty: number) => void;
	updateCart: (product_id: number, qty: number) => void;
	reset: () => void;
}
