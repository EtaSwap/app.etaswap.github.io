import React from "react";
import { ThreeCircles } from 'react-loader-spinner'
import './Loader.css'

export const Loader = ({isShow, children}) => {
    return (<div className={'loaderContainer'}>
        {isShow && <div className={'loader'}><ThreeCircles
            height="80"
            width="80"
            radius="9"
            color="#4acb9b"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        /></div>}
        {children}
    </div>);
}