import { FC } from "react";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { IMappingBasketItem } from "../types";

const BasketItem: FC<IMappingBasketItem> = ({
	item,
	setOrder,
}): JSX.Element => {
	const { name, price, quantity, id } = item;
	const deleteBook = (): void => {
		setOrder(id);
	};

	return (
		<ListItem>
			<Typography variant="body1">
				{name} {price} руб x {quantity}
			</Typography>
			<IconButton onClick={deleteBook}>
				<ClearOutlinedIcon />
			</IconButton>
		</ListItem>
	);
};

export default BasketItem;
