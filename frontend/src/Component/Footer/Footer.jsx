import style from './Footer.module.css'
import React, {useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


function Footer() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <footer className={`${style.footer} ${theme === "dark" ? style.dark : ""}`}>
            <p className={theme === "dark" ? "dark" : ""}>
                © 2019-2023 MyOtakuWorld
            </p>
            <p className={theme === "dark" ? "dark" : ""}>
                All other assets and trademarks are property of their original owners.
            </p>
            <p className={theme === "dark" ? "dark" : ""}>
                MyOtakuWorld is neither affiliated with nor endorsed by any brands and
                trademarks on this site unless explicitly stated.
            </p>
        </footer>
    )
}

export default Footer