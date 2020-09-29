import React from 'react'

export const Alert = ({type,text}) => {

    console.log("12",type,text);

    return (
        <div className={`alert alert-${type}`}>
            {text}
        </div>
    )
}

export default Alert