import './CartList.css'
import React, {useEffect, useState} from 'react';
import CartItem from "../CartItem/CartItem";
import StyledButton from "../StyledButton/StyledButton";

const CartList = (props) => {

    const [totalCost, setTotalCost] = useState(0)

    const cartList = props.cart.map((item) => {
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
                                  prise={props.cart.find(() => item).itemPrice}
                        />
                    )
                }
                </tbody>
            </table>
           <StyledButton>Заказать {totalCost}₽</StyledButton>
            {/*<div className={'cartTitle'}>*/}
            {/*    <h2>Название</h2>*/}
            {/*    <h2>Количество</h2>*/}
            {/*    <h2>Цена</h2>*/}
            {/*    <h2>Стоимость</h2>*/}
            {/*</div>*/}
            {/*{*/}
            {/*    Object.entries(cartList).map(([item, amount], index) =>*/}
            {/*        <CartItem key={index} item={item} amount={amount} prise={props.cart.find(() => item).itemPrice}/>*/}
            {/*    )*/}
            {/*}*/}
        </div>
    );
};

export default CartList;