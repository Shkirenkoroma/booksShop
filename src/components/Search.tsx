import { FC } from "react";

const Search:FC<any> = ({ onChange, value }):JSX.Element => {

    return <input type='search' value={value} onChange={onChange} />;
};

export default Search;