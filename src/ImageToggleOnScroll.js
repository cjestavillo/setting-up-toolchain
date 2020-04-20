import React, {useEffect, useRef, useState} from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {

    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // did mount
        window.addEventListener("scroll", scrollHandler);
        setInView(isInView());
        setIsLoading(false);

        // will unmount
        return(() => {
            window.addEventListener("scroll", scrollHandler);
        });
    }, [isLoading]);

    const [inView, setInView] = useState(false);

    const isInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }

        return false;
    }

    const scrollHandler = () => {
        setInView(() => {
            return isInView();
        })
    }
 
    return (isLoading ? null: (
        <img

            src={inView ? secondaryImg : primaryImg}
            alt=""
            ref={imageRef}
            height="200"
            width="200"
        />
    ));
}

export default ImageToggleOnScroll;