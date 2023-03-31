import { ShoppingBasket } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import { FC } from 'react';
import { IPropsHeader } from "../types";

const Header:FC<IPropsHeader> = ({openCart,  orderLen}):JSX.Element => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
					Books Shop
				</Typography>
				<IconButton onClick={openCart}
            color="inherit">
					<Badge color="secondary" badgeContent={orderLen} />
					<ShoppingBasket />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
