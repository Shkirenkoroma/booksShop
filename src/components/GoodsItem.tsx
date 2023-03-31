import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import { FC } from "react";
import { IProps } from "../types";

const GoodsItem: FC<IProps> = ({
	name,
	price,
	setOrder,
	id,
	poster,
}): JSX.Element => {
    
	const handleItem = () => {
		setOrder({
			id: id,
			name: name,
			price: price,
		});
	};

	return (
		<Grid item xs={12} md={4}>
			<Card sx={{ height: "100%" }}>
				<CardMedia
					src={poster}
					alt={name}
					title={name}
					sx={{ height: 140 }}
					component="img"
				/>
				<CardContent>
					<Typography variant="h6" component="h3">
						{name}
					</Typography>
					<Typography variant="body1">Цена: {price} руб.</Typography>
				</CardContent>
				<CardActions>
					<Button variant="contained" onClick={handleItem}>
						Купить
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default GoodsItem;
