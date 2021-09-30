import React from 'react';
import ItemCard from "../ItemCard/ItemCard";

import './ItemsList.css'

const ItemsList = ({items, addToCart}) => {
    return (
        <div className={'itemsList'}>
            {
                items.map(item =>
                    <ItemCard key={item._id} item={item} addToCart={addToCart}/>
                )
            }
        </div>
    );
};

export default ItemsList;