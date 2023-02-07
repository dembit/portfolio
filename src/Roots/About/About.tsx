import React from "react";
import styled from "./About.module.css";
import avatarImg from "../../img/avatar.jpg";
type Props = {};

const About = (props: Props) => {
  return (
    <div className={[styled.about, "container"].join(" ")}>
      <h1>Обо мне</h1>
      <div className={styled.about_content}>
        <div className={styled.about_content__img}>
          <img src={avatarImg} alt="" />
        </div>
        <div>
          На протяжении 3 лет живу во Вьетнаме. Также путешествовал автостопом
          Грузия, Китай.
          <div>
            Любовь к путешествиям открыло для меня увлекательный мир
            программирования.
          </div>
          <div>
            Помимо путешествий для поддержания формы занимаюсь спортом(люблю
            бегать)
          </div>
          <div>
            Последние три года активно развиваюсь как фронтенд разработчик.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
