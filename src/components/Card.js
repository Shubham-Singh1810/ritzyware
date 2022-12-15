import React from 'react'

function Card(props) {
  return (
    <div className="Card">
    <h6><img src={props.v.image} alt="" />  {props.v.title}</h6>
       <p>{props.v.discription}</p>
       <b>Read More... </b>
    </div>
  )
}

export default Card