import axios from "axios";

const API_URL = 'http://localhost:5000/api/items'

export default class Items {
    static async getItems() {
        const res = await axios.get(API_URL)
        return res.data
    }
}