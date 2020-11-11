import React, { useState } from 'react'
import { MainPage, Header } from './components';

function App() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <>
            <Header />
            <MainPage />
        </>
    )
}
export default App;

