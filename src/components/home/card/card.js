import React from 'react'
import "./styles/card.scss";
import { Link } from 'react-router-dom';

export default function Card({cover, title, id}) {
  return (
    <div className='card' key={id}>
        <Link className='link' to={`/logement/${id}`} aria-label={title}></Link>
        <img src={cover} alt='' loading='lazy' width='600' height='600' key={id + '-img'}/>
        <h2 key={id + '-h2'}>{title}</h2>
    </div>
  )
}
