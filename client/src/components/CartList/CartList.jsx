import './CartList.css'
import React, {useEffect, useState} from 'react';
import CartItem from "../CartItem/CartItem";
import StyledButton from "../UI/StyledButton/StyledButton";

const CartList = ({cart, remove}) => {

    const [totalCost, setTotalCost] = useState(0)

    const cartList = cart.map((item) => {
        return {count: 1, name: item.itemTitle}
    }).reduce((list, item) => {
        list[item.name] = (list[item.name] || 0) + item.count
        return list
    }, {})




   useEffect(() => {
       let totalCostValue = 0
       Array.from(document.getElementsByClassName('cartItemTotal')).map(item => (totalCostValue += parseInt(item.textContent)))
       setTotalCost(totalCostValue)
   }, [cartList])


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
                    Object.entries(cartList).map(([item, amount], index) =>
                        <CartItem key={index}
                                  item={item}
                                  amount={amount}
                                  prise={cart.find(() => item).itemPrice}
                                  remove={remove}
                        />
                    )
                }
                </tbody>
            </table>
           <StyledButton>Заказать {totalCost}₽</StyledButton>
        </div>
    );
};

export default CartList;