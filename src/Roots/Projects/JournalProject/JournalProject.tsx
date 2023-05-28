import React from 'react'
import styled from './JournalProject.module.css'
import journalPng from '../../../img/journal.png'
import { NavLink } from 'react-router-dom'

type Props = {}

const JournalProject = (props: Props) => {
  return (
    <div className={[styled.journalProject, 'container'].join(' ')}>
      <h1>Мой личный дневник</h1>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to={'https://dembit.github.io/myjournal/'}
        >
          <img src={journalPng} alt="canvas project" />
        </NavLink>
      </div>
      <div>Component: React</div>
      <div>Мобильная версия: no</div>
      <div>Mobx: yes</div>
      <div>Typescript: yes</div>
      <div>EsLint: yes</div>
      <div>
        Он состоит из приветствия, авторизации(Пользователей можно создать
        сколько угодно.Смотрит из localStorage по уникальности name и email), а
        также работа с записями (добавление, редактирование, отображение,
        фильтрация.)
      </div>
      <h3>Для чего этот проект</h3>
      <ul>
        <li>
          Продемонтрировать знания в создании собственного сборщика(webpack).
        </li>
        <li>Cоздание небольшого uikit (переиспользоввание компонент).</li>
        <li>Построение архитектуры.</li>
        <li>Работа с React, Localstorage и показ уровня кода.</li>
      </ul>
      <h3>Авторизация состоит из несколько этапов.</h3>
      <ul>
        <li>
          При первоначальном входе мы проверяем авторизован пользователь или нет
          и в зависимости от этого устанавливаем начальные данные из
          localStorage или данные по дефолту. (В компоненте ModalLoginForm
          функция getInitListNotes())
        </li>
        <li>
          При создании store(class observer Mobx) в файле store.js также
          используется функция getInitListNotes(), чтобы инициализировать
          данные.
        </li>
        <li>
          Custom HOOK AddNotesToThelocalStorage для отслеживания изменений
          данных и добaвления текущего состояния в localstorage. Т.е он
          постоянно следит заизменениями из mobx state и добавляет их в
          localstorage
        </li>
        <li>
          Создан HOC WithCheckAuth для проверки авторизации и отображении
          компонент в зависимости от состояния авторизации
        </li>
      </ul>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to={'https://dembit.github.io/myjournal/'}
        >
          Link Website
        </NavLink>
      </div>
      <div>
        <NavLink
          rel="noreferrer"
          target="_blank"
          to="https://github.com/dembit/myjournal"
        >
          Git Code
        </NavLink>
      </div>
    </div>
  )
}

export default JournalProject
