import { FC } from "react";
import GoodsItem from './GoodsItem';
import Grid from '@mui/material/Grid';
import { IPropsGoodsList } from '../types';

const GoodsList:FC<IPropsGoodsList> = ({ goods, addOrder }):JSX.Element => {


    return (
        <Grid container spacing={2}>
                {goods.map((item) => (
                    <GoodsItem key={item.id} setOrder={addOrder} {...item} />
                ))}
          </Grid>
    );
};

export default GoodsList;