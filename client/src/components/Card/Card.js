import React from 'react'
import './Card.css'

export const Card = () => {
    return (
        <div className={'card-container'}>
            <div className={'card'}>
                <img className="round" src="https://www.thetutuguru.com.au/wp-content/uploads/2020/10/roma-tomato.jpg"
                     alt="item" width="128px" height="128px"/>
                <h3>Tomato</h3>
                <p>Its tomato, <br/> not potato</p>
                <div className="buttons">
                    <button className="primary">
                        Buy 10$
                    </button>
                </div>
            </div>
        </div>
    )
}