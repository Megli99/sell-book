import React from 'react'
import './TextWrap.css'

function TextWrap(props) {
    const classes = 'card ' + props.className

    return <div className={classes}>{props.children}</div>
}

export default TextWrap;