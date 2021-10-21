import './CartPage.css'
import {NavbarComponent} from "../../components/Navbar/NavbarComponent";
import CartList from "../../components/CartList/CartList";
import {useEffect, useState} from "react";


const CartPage = () => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const removeItemFromCart = (item) => {
        item.amount > 1
            ?
            item.amount--
            :
            setCart(cart.filter(i => i.title !== item))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <div>
            <NavbarComponent/>
            {
                cart.length
                    ?
                    <CartList remove={removeItemFromCart} cart={cart}/>
                    :
                    <div className={'cartPlaceholder'}>
                        <h1>Ваша корзина пустая</h1>
                    </div>

            }
        </div>
    );
};

export default CartPage;