import React from "react";
import ListMyProject from "./ListMyProject/ListMyProject";
import PortfolioTitle from "./PortfolioTitle/PortfolioTitle";

const LeftBlock = (props) => {
    return (
        <div>
            <PortfolioTitle/>
            <ListMyProject/>
        </div>
    )
};

export default LeftBlock;