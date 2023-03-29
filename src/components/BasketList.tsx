import BasketItem from './BasketItem';
import { FC } from "react";

const BasketList:FC<any> = ({ order, setOrder }):JSX.Element => {

    if (!order.length) {
        return (
            <ul className='basket list-group col-md-4'>
                <li className='list-group-item active'>Корзина</li>
                <li className='list-group-item'>Товаров нет</li>
            </ul>
        );
    }

    return (
        <ul className='basket list-group col-md-4'>
            <li className='list-group-item active'>Корзина</li>
            {order.map((item:any, index:any) => (
                <BasketItem key={index} setOrder={setOrder} {...item} />
            ))}
            <li className='list-group-item active'>
                Общая стоимость:
                {order.reduce((acc:any, item:any) => {
                    return acc + item.price * item.quantity;
                }, 0)}
                рублей.
            </li>
        </ul>
    );
};

export default BasketList;
