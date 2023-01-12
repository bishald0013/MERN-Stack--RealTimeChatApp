import React from 'react'
import style from "./card.module.css"

function Card({title,children}) {
  return (
    <div className='' style={{marginTop: "10rem"}}>
      <div class="card text-bg-dark">
        <div class="card-header my-2 text-center">{title}</div>
        <div class="card-body text-center">
            {children}
        </div>
      </div>
    </div>
  )
}

export default Card
