import React from "react";
import s from "./MyButton.module.scss";

const MyButton = (props) => {
    return (
        <div className={s.wrap}>
            <button className={s.button}>Перейти в проект</button>
        </div>
    )
};

export default MyButton;