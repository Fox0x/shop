import React from 'react';
import './CardItem.css'
import StyledButton from "../UI/StyledButton/StyledButton";

const CartItem = ({item, amount, prise, remove}) => {

    return (
        <tr className={'cartItem'}>
            <td className={'cartItemName'}>{item}</td>
            <td className={'cartItemAmount'}>{amount}кг</td>
            <td className={'cartItemPrise'}>{prise}₽</td>
            <td className={'cartItemTotal'}>{amount * prise}₽</td>
            <td><StyledButton onClick={() => remove(item)}>X</StyledButton></td>
        </tr>
    );
};

export default CartItem;