import React from 'react';
import ItemCard from "../ItemCard/ItemCard";
import {Spinner} from "../Spinner/Spinner";
import './ItemsList.css'

const ItemsList = ({items}) => {
    if (!items.length) {
        return <Spinner/>
    }
    return (
        <div className={'itemsList'}>
            {
                items.map(item =>
                    <ItemCard key={item._id} item={item}/>
                )
            }
        </div>
    );
};

export default ItemsList;