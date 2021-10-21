import React from 'react';
import './CardItem.css'
import StyledButton from "../UI/StyledButton/StyledButton";

const CartItem = ({title, amount, price, remove}) => {

    return (
        <tr className={'cartItem'}>
            <td>{title}</td>
            <td>{amount}кг</td>
            <td>{price}₽</td>
            <td>{amount * price}₽</td>
            <td><StyledButton onClick={() => remove(title)}>X</StyledButton></td>
        </tr>
    );
};

export default CartItem;