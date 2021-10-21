import axios from "axios";

const API_URL = 'http://localhost:5000/auth/' //TODO Поменять вот это вот

export const registration = async (name, phone, email, password) => {
    try {
        const res = await axios.post(API_URL + "registration", {
            name, phone, email, password
        })

        if (res.status === 200) {
            window.alert('На вашу почту отправлено письмо для подтверждения данных')
        }
        console.log(res)

    } catch (e) {
        console.log(e)
    }
}

export const login = async (email, password) => {
    try {
        const res = await axios.post(API_URL + "login", {email, password})
        if (res.status === 200) {
            const user = res.data.user
            if (user.isActivated) {
                localStorage.setItem('token', res.data.refreshToken)
                localStorage.setItem('user', JSON.stringify(user))
                document.location.replace("/shop")
            } else {
                window.alert('Подтвердите адрес вашей почты по ссылке в письме')
            }


        } else console.log(res.message)

    } catch (e) {
        console.log(e)
    }
}

