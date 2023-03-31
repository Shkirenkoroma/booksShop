import { TextField } from "@mui/material";
import { FC } from "react";
import { IPropsSearch } from "../types";

const Search: FC<IPropsSearch> = ({ onChange, value }): JSX.Element => {
	
	return (
		<TextField
			type="search"
			value={value}
			onChange={onChange}
			label="search"
			variant="standard"
			fullWidth
			sx={{
				mb: "1.5rem",
			}}
		/>
	);
};

export default Search;
