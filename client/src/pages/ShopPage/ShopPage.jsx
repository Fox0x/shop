import React, {useEffect, useMemo, useState} from 'react';
import './ShopPage.css'
import {NavbarComponent} from '../../components/Navbar/NavbarComponent'
import Items from "../../http/items";
import {useFetching} from "../../hooks/useFetching";
import {Spinner} from "../../components/Spinner/Spinner";
import ItemsList from "../../components/ItemsList/ItemsList";
import SearchComponent from "../../components/Search/SearchComponent";
import {useSearch} from "../../hooks/useSearch";


export const ShopPage = () => {

    const [cartItems, setCartItems] = useState([])
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [fetchItems] = useFetching(async () => {
        const response = await Items.getItems()
        setItems(response)
    })
    const searchedItems = useSearch(searchQuery, items);

    useEffect(() => {
        fetchItems()
        localStorage.getItem('cart') && setCartItems(JSON.parse(localStorage.getItem('cart')))
    }, [])

    useMemo(() => {
        console.log(cartItems)
        cartItems.length && localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (item) => {
        setCartItems([...cartItems, item])
    }

    return (
        <div className={'shop-page'}>
            <NavbarComponent/>
            {!items.length && <Spinner/>}
            <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ItemsList items={searchedItems} addToCart={addToCart}/>
        </div>
    )
}

