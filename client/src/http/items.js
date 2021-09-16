import axios from "axios";
import {ItemCardContainer} from "../components/ItemCardContainer/ItemCardContainer";

const API_URL = 'http://localhost:5000/api/items'

export const getItems = async () => {
    try {
        const res = await axios.get(API_URL)
        // console.log(res.data)
        return res.data
    } catch (e) {
        console.log(e)
    }
}

getItems()