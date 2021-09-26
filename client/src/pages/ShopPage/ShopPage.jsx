import React, {useEffect, useState} from 'react';
import './ShopPage.css'
import {NavbarComponent} from '../../components/Navbar/NavbarComponent'
import Items from "../../http/items";
import {useFetching} from "../../hooks/useFetching";
import {Spinner} from "../../components/Spinner/Spinner";
import ItemsList from "../../components/ItemsList/ItemsList";


export const ShopPage = () => {
    const [items, setItems] = useState([])

    const [fetchItems, isItemsLoading, itemsError] = useFetching(async () => {
        const response = await Items.getItems()
        setItems(response)
    })

    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className={'shop-page'}>
            <NavbarComponent/>
            {
                isItemsLoading
                    ? <Spinner/>
                    : <ItemsList items={items}/>
            }
        </div>
    )
}

