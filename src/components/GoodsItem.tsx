import React from 'react';
import { FC } from "react";

const GoodsItem:FC<any> = ({ name, price, setOrder, id }):JSX.Element => {

    return (
        <div className='col-12 col-md-6 px-md-2'>
            <div className='card'>
                <img
                    src={`https://via.placeholder.com/300x150.png?text=${name.slice(
                        0,
                        12
                    )}`}
                    className='card-img-top'
                    alt={name}
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Цена: {price} руб.</p>
                    <button
                        className='btn btn-primary'
                        onClick={() =>
                            setOrder({
                                id: id,
                                name: name,
                                price: price,
                            })
                        }
                    >
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoodsItem;