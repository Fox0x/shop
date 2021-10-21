import React, {useEffect, useState} from 'react';
import './ShopPage.css'
import {NavbarComponent} from '../../components/Navbar/NavbarComponent'
import Items from "../../http/items";
import {useFetching} from "../../hooks/useFetching";
import ItemsList from "../../components/ItemsList/ItemsList";
import SearchComponent from "../../components/Search/SearchComponent";
import {useSearch} from "../../hooks/useSearch";
import {Spinner} from "../../components/UI/Spinner/Spinner";


export const ShopPage = () => {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const [items, setItems] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [fetchItems] = useFetching(async () => {
        const response = await Items.getItems()
        setItems(response)
    })
    const searchedItems = useSearch(searchQuery, items);

    const addItemToCart = (item) => {
        const itemInCart = cart.find(i => i._id === item._id)
        if (itemInCart) {
            itemInCart.amount++
        } else {
            item.amount = 1
            cart = [...cart, item]
        }
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    useEffect(() => {
        fetchItems().then(() => console.info('Items has been loaded'))
    }, [])


    return (
        <div className={'shop-page'}>
            <NavbarComponent/>
            {!items.length && <Spinner/>}
            <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ItemsList items={searchedItems} addItemToCart={addItemToCart}/>
        </div>
    )
}

