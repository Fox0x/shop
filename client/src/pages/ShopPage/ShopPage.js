import React from 'react';
import './ShopPage.css'
import {NavbarComponent} from '../../components/Navbar/NavbarComponent'
import {ItemCardContainer} from "../../components/ItemCardContainer/ItemCardContainer";


export const ShopPage = () => {
    return (
        <div className={'shop-page'}>
            <NavbarComponent/>
            <ItemCardContainer/>
        </div>
    )
}

