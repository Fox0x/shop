import axios from "axios";

const API_URL = 'http://localhost:5000/auth/'

export const registration = async (name, phone, email, password) => {
    try {
        const res = await axios.post(API_URL + "registration", {
            name, phone, email, password
        })
        console.log(res.data)
        document.location.replace("/auth/login")

    } catch (e) {
        console.log(e)
    }
}

export const login = async (email, password) => {
    try {
        const res = await axios.post(API_URL + "login", {email, password})
        localStorage.setItem('token', res.data.refreshToken)
        document.location.replace("/shop")
    } catch (e) {
        console.log(e)
    }
}

