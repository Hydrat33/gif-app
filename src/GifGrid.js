import React from 'react'

export const GifGrid = ({title,imageUrl}) => {
    
    console.log('GifGrid function')
    return (
        <div className="imgCont">
            <img src={imageUrl} alt={title}/>
            <figcaption>{title}</figcaption>
        </div>
    )
}
