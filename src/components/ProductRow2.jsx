import React from 'react'

import '../styles/ProductRow.css'

function ProductRow2(props) {
    const name = props.name
    const type = props.type
    const dimension = props.dimension
    
    return (
        <div className='product-row'>
            <span>{dimension}</span>
            <span>{name}</span>
            <span>{`${type}`} </span>
        </div>
    )
}

export { ProductRow2 }