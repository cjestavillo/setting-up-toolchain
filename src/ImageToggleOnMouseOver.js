import React, {useRef} from 'react';

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);

    return (
        <img
            onMouseOut={() => {
                imageRef.current.src= primaryImg;
            }}
            onMouseOver={() => {
                imageRef.current.src= secondaryImg;
            }}
            src={primaryImg}
            alt=""
            ref={imageRef}
        />
    );
}

export default ImageToggleOnMouseOver;