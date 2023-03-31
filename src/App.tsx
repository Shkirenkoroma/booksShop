import { useState } from "react";
import GoodsList from "./components/GoodsList";
import Search from "./components/Search";
import { goods } from "./api/json";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import Basket from "./components/Basket";
import Snack from "./components/Snack";
import { IMappingProps, inlineBoolean, inlineString, IOrder } from "./types";

const App = () => {
	const [order, setOrder] = useState<IMappingProps[]>([]);
	const [search, setSearch] = useState<inlineString>("");
	const [products, setProducts] = useState(goods);
	const [isCartOpen, setCartOpen] = useState<inlineBoolean>(false);
	const [isSnackOpen, setSnackOpen] = useState<inlineBoolean>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.value) {
			setProducts(goods);
			setSearch("");
			return;
		}
		setSearch(e.target.value);
		setProducts(
			products.filter((good) =>
				good.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		);
	};

	const closeCartFunc = (): void => {
		setCartOpen(false);
	};
	const openCartFunc = (): void => {
		setCartOpen(true);
	};

	const addToOrder = (goodsItem: IOrder): void => {
		let quantity = 1;

		const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

		if (indexInOrder > -1) {
			quantity = order[indexInOrder].quantity + 1;

			setOrder(
				order.map((item: IMappingProps) => {
					if (item.id !== goodsItem.id) return item;

					return {
						id: item.id,
						name: item.name,
						price: item.price,
						quantity,
					};
				}),
			);
		} else {
			setOrder([
				...order,
				{
					id: goodsItem.id,
					name: goodsItem.name,
					price: goodsItem.price,
					quantity,
				},
			]);
		}

		setSnackOpen(true);
	};

	const removeFromOrder = (goodsItem: inlineString): void => {
		setOrder(order.filter((item) => item.id !== goodsItem));
	};

	const handleSnackClose = () => {
		setSnackOpen(false);
	};

	return (
		<>
			<Header openCart={openCartFunc} orderLen={order.length} />
			<Container>
				<Search value={search} onChange={handleChange} />
				<GoodsList goods={products} addOrder={addToOrder} />
			</Container>
			<Basket
				openCart={isCartOpen}
				closeCart={closeCartFunc}
				order={order}
				removeFromOrder={removeFromOrder}
			/>
			<Snack isOpen={isSnackOpen} handleClose={handleSnackClose} />
		</>
	);
};

export default App;
