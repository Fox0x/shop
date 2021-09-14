import React from 'react';
import './ShopPage.css'
import {NavbarComponent} from '../../components/Navbar/NavbarComponent'
import {Card} from "../../components/Card/Card";


export const ShopPage = () => {
    return (
        <div className={'shop-page'}>
            <NavbarComponent/>
            <Card/>
        </div>
    )
}