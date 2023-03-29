import { useState } from 'react';

import BasketList from './components/BasketList';
import GoodsList from './components/GoodsList';
import Search from './components/Search';

import { goods } from './jsondata/goods';

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }

        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };

    const addToOrder = (goodsItem:any):void => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item:any) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            //@ts-ignore
            quantity = order[indexInOrder].quantity + 1;
            
            //@ts-ignore
            setOrder(order.map((item:any) => {
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
                //@ts-ignore
                ...order,
                //@ts-ignore
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        price: goodsItem.price,
                        quantity,
                    },
                ],
            );
        }
    };

    const removeFromOrder = (goodsItem:any):void => {
        setOrder(order.filter((item:any) => item.id !== goodsItem));
    };

    return (
        <div className='App'>
            <div className='container'>
                <Search
                    value={search}
                    onChange={handleChange}
                />
                <GoodsList
                    goods={products}
                    setOrder={addToOrder}
                />
                <BasketList
                    order={order}
                    setOrder={removeFromOrder}
                />
            </div>
        </div>
    );
}

export default App;
