import './CartPage.css'
import {NavbarComponent} from "../../components/Navbar/NavbarComponent";
import {useEffect, useState} from "react";
import CartList from "../../components/CartList/CartList";

const CartPage = () => {

    const [cart, setCart] = useState([])

    useEffect(() => {
        localStorage.getItem('cart') && setCart(JSON.parse(localStorage.getItem('cart')))

    }, [])

    return (
        <div>
            <NavbarComponent/>
            {
                cart.length
                    ?
                    <CartList cart={cart}/>
                    :
                    <h1>Ваша корзина пуста</h1>

            }
        </div>
    );
};

export default CartPage;