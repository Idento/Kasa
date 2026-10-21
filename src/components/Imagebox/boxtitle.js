import React from 'react'
import { useLocation } from 'react-router-dom'
import "./styles/boxtitle.scss"

export default function Boxtitle({text}) {
    const { pathname } = useLocation()
    const data = pathname === '/' ? 'box__title' : 'box__about'

  return (
    <div className={data}>
        <h1 className='Title__homepage'>{text}</h1>
    </div>
  )
}
