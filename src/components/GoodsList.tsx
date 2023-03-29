
import GoodsItem from './GoodsItem';
import { FC } from "react";
const GoodsList:FC<any> = ({ goods, setOrder }):JSX.Element => {


    return (
        <div className='goods-list col-md-8'>
            <div className='row'>
                {goods.map((item:any) => (
                    <GoodsItem key={item.id} setOrder={setOrder} {...item} />
                ))}
            </div>
        </div>
    );
};

export default GoodsList;