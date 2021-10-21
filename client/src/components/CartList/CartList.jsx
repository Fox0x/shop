import './CartList.css'
import React, {useState} from 'react';
import StyledButton from "../UI/StyledButton/StyledButton";
import CartItem from "../CartItem/CartItem";

const CartList = ({cart, remove}) => {
    const [totalCost, setTotalCost] = useState(0)


    return (
        <div className={'cartList'}>
            <h1>Корзина</h1>

            <table>
                <tbody>
                <tr>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>Стоимость</th>
                    <th/>
                </tr>
                {
                    cart.map((item, index) =>
                        <CartItem key={index} title={item.title} amount={item.amount} price={item.price}
                                  remove={remove}/>
                    )
                }
                </tbody>
            </table>
            <StyledButton>Заказать {totalCost}₽</StyledButton>
        </div>
    );
};

export default CartList;