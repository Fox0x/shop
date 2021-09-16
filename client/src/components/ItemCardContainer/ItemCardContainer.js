import './ItemCardContainer.css'
import React from 'react';
import {ItemCard} from "../ItemCard/ItemCard";
import {getItems} from "../../http/items";

export const ItemCardContainer = (props) => {
    console.log(props)
    return (
        <div className={'card-container'}>
            {
                <ItemCard key={props.item._id}
                          itemImage={props.item.itemImage}
                          itemTitle={props.item.itemTitle}
                          itemDescription={props.item.itemDescription}
                          itemPrice={props.item.itemPrice}/>
            }
        </div>
    );
}

