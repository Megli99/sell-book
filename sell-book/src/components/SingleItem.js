import React from "react";
import TextWrap from "../UI/TextWrap";
import Data from './Data.js'

import './css/SingleItem.css'

function SingleItem(props){
return (
        <TextWrap className='single-item'>
            <Data date = {props.date} />
            <div className='single-item__description'>
                <h2>{props.title}</h2>
                <div className='single-item__price'>{props.amount} €</div>
            </div>
        </TextWrap>
)
}

export default SingleItem;