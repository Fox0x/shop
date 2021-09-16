import React from 'react'
import './ItemCard.css'

export const ItemCard = ({itemImage, itemTitle, itemDescription, itemPrice}) => {

    return (
        <div className={'card'}>
            <img className="round" src={itemImage}
                 alt="item" width="128px" height="128px"/>
            <h3>{itemTitle}</h3>
            <p>{itemDescription}</p>
            <div className="buttons">
                <button className="primary">
                    Buy {itemPrice}$
                </button>
            </div>
        </div>
    )
}