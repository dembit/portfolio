import React from 'react'
import styled from './Portfolio.module.css'
import Project from './Project/Project'
import porfolioPng from '../../img/potfolio.png'
import journalPng from '../../img/journal.png'
import chessPng from '../../img/chess.png'
import canvasPng from '../../img/canvas.png'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { PathEnum } from '../../variable'
type Props = {}

const Portfolio = (props: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className={[styled.portfolio, 'container'].join(' ')}>
      <h1>{t('menu_portfolio')}</h1>
      <div className={styled.portfolio_projects}>
        <Project
          title={t('menu_portfolio')}
          tools={['HTML', 'CSS', 'React', 'Motion', 'Canvas', 'i18next']}
          src={porfolioPng}
          callback={() => navigate(PathEnum.PORTFOLIO_PROJECT)}
        />
        <Project
          title={t('portfolio_chess')}
          tools={['HTML', 'CSS', 'React', 'OOP']}
          src={chessPng}
          callback={() => navigate(PathEnum.CHESS_PROJECT)}
        />
        <Project
          title={t('portfolio_points')}
          tools={['CANVAS', 'REACT', 'OOP']}
          src={canvasPng}
          callback={() => navigate(PathEnum.CANVAS)}
        />
        <Project
          title={t('portfolio_journal')}
          tools={['Typescript', 'Mobx', 'Uikit', 'React']}
          src={journalPng}
          callback={() => navigate(PathEnum.JOURNAL_PROJECT)}
        />
      </div>
    </div>
  )
}

export default Portfolio
