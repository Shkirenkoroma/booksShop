import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import BasketItem from "./BasketItem";
import { IMappingProps, IPropsBasket } from "../types";

const Basket: FC<IPropsBasket> = ({
	openCart,
	closeCart,
	order,
	removeFromOrder,
}): JSX.Element => {
	return (
		<Drawer anchor="right" open={openCart} onClose={closeCart}>
			<List sx={{ width: "400px" }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasketIcon />
					</ListItemIcon>
					<ListItemText primary="Корзина" />
				</ListItem>
				<Divider />
				{!order?.length ? (
					<ListItem>Корзина пуста!</ListItem>
				) : (
					order.map((item: IMappingProps) => (
						<BasketItem
						key={item.name}
						item={item}
						setOrder={removeFromOrder}
						></BasketItem>
						))
						)}
				<Divider />
				<ListItem>
					<Typography sx={{ fontWeight: 700 }}>
						Общая стоимость:
						{order.reduce((acc, item) => {
							return acc + item.price * item.quantity;
						}, 0)}
						рублей.
					</Typography>
				</ListItem>
			</List>
		</Drawer>
	);
};

export default Basket;
