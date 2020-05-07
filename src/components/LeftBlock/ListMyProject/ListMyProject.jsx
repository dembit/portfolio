import React from "react";
import { Button } from 'antd';
import s from "./ListMyProject.model.scss"
import MyButton from "../../common/MyButton/MyButton";

const ListMyProject = (props) => {
   let onChange = (e) => {
        console.log(`radio checked:${e.target.value}`);
    }
    return (
        <div>


            <h2> Мои навыки и умения: </h2>
            <Button>HTML</Button>
            <Button>CSS</Button>
            <Button>JAVASCRIPT</Button>
            <Button>REACT</Button>
            <Button>TYPESCRIPT</Button>
            <br/>
            <br/>

            <h2>Какие знания я применил в Проекте:</h2>
            <Button>SCSS</Button>
            <Button>AXIOS</Button>
            <Button>REDUX</Button>
            <Button>THUNK</Button>
            <Button>REDUX-FORM</Button>
            <Button>COMPOUSE()</Button>
            <Button>CONNECT()</Button>
            <Button>Routing("ROUTE")</Button>
            <Button>withRouter</Button>
            <Button>HOC</Button>
            <Button>REST API</Button>
            <Button>GRID</Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <MyButton/>

        </div>
    )
};

export default ListMyProject;