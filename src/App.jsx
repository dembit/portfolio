import React from 'react';
import s from './App.module.scss';
import LeftBlock from "./components/LeftBlock/LeftBlock";
import RightBlock from "./components/RightBlock/RightBlock";
import PopUp from "./components/PopUp/PopUp";


class App extends React.Component {

    render() {
        return (
            <div className={s.portfolio}>
                <LeftBlock/>
                <RightBlock/>
                <PopUp/>
            </div>
        )
    }
};





export default App;
