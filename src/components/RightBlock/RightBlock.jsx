import React from "react";
import photoProfile from "../../images/redMen.png";
import s from "./Right.module.scss"

const RightBlock = () => {
    return(
        <div className={s.rightBlock}>
            <img src={photoProfile} />
        </div>
    )
};

export default RightBlock;