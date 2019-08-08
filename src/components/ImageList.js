import React from 'react'

const ImageList = props => {
    console.log(props.images)
    const images = props.images.map(({description, id, urls}) => {
        return <img art={description} key={id} src={urls.regular} />
    })
    return (
        <div>{images}</div>
    )
}

export default ImageList