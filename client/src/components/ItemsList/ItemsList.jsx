import React from 'react';
import ItemCard from "../ItemCard/ItemCard";

import './ItemsList.css'

const ItemsList = ({items, addItemToCart}) => {
    return (
        <div className={'itemsList'}>
            {
                items.map(item =>
                    <ItemCard key={item._id} item={item} addItemToCart={addItemToCart}/>
                )
            }
        </div>
    );
};

export default ItemsList;