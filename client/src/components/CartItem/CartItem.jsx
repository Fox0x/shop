import React from 'react';
import './CardItem.css'
import StyledButton from "../StyledButton/StyledButton";

const CartItem = ({item, amount, prise, totalCost}) => {

    return (
        <tr className={'cartItem'}>
            <td className={'cartItemName'}>{item}</td>
            <td className={'cartItemAmount'}>{amount}кг</td>
            <td className={'cartItemPrise'}>{prise}₽</td>
            <td className={'cartItemTotal'}>{amount * prise}₽</td>
            <td><StyledButton>X</StyledButton></td>
        </tr>
    );
};

export default CartItem;