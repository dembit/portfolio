import React from "react";
import {Modal, Button} from 'antd';
import s from "./popUp.module.scss";
import Texty from 'rc-texty';


class PopUp extends React.Component {
    state = {visible: true};

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };



    test = e => {
       debugger
    }

    render() {

        return (
            <div>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    centered={true}
                    className={s.popUp}
                    width="600px"
                >
                    <Texty
                        className={s.textModal}
                        interval='15'
                    >
                        Здравствуйте меня зовут Дмитрий.
                        Мне 28 лет. Последние пять лет жил в городе Краснодар.
                        Я тот человек который любит путешествовать и познавать мир.
                        На данный момент как 4 месяца живу во Вьетнаме.
                        Сейчас я в поиске интересной работы "Frontend developer React".
                        Чтобы не быть многословыным я создал это портфолио, чтобы вы увидели мои навыки в деле!

                    </Texty>

                </Modal>

            </div>
        );
    }
}

export default PopUp;