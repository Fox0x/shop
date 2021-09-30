import {BrowserRouter} from 'react-router-dom'
import AppRouter from "./components/AppRouter/AppRouter";
import {GlobalContext} from "./context";
import {useEffect, useState} from "react";



function App() {

    const [isAuth, setIsAuth] = useState(true)

    useEffect(() => {
        localStorage.getItem('token') ? setIsAuth(true) : setIsAuth(false)
    }, [])

    return (
        <GlobalContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </GlobalContext.Provider>
    )
}

export default App
