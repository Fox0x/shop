import './CartPage.css'
import {NavbarComponent} from "../../components/Navbar/NavbarComponent";
import {useMemo, useState} from "react";
import CartList from "../../components/CartList/CartList";

const CartPage = () => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    const removeItemFromCart = (item) => {
        setCart(cart.filter(i => i.itemTitle !== item))

    }

    useMemo(() => {
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
                    <h1>Ваша корзина пуста</h1>

            }
        </div>
    );
};

export default CartPage;