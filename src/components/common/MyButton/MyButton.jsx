import React from "react";
import s from "./MyButton.module.scss";

const MyButton = (props) => {
    return (
        <div className={s.wrap}>
            <a href="https://dembit.github.io/socialNetwork/" target="_blank"> <button className={s.button}>Перейти в проект</button> </a>
        </div>
    )
};

export default MyButton;