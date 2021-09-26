import React from 'react';
import './ItemCard.css'

const ItemCard = ({item}) => {
    console.log(item)
    return (
        <div className={'card'}>
            <img className="round" src={item.itemImage}
                 alt="item" width="128px" height="128px"/>
            <h3>{item.itemTitle}</h3>
            <p>{item.itemDescription}</p>
            <div className="buttons">
                <button className="primary">
                    Buy {item.itemPrice} ₽
                </button>
            </div>
        </div>
    );
};

export default ItemCard;