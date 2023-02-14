import React, {FC} from "react";
import {CircleWrap, Color, ShadowValue, SizesValue} from "./style";

interface ICircle{
    src?: string,
    color?: Color,
    size?: SizesValue,
    shadow?: ShadowValue,
    onClick?: () => void;
    imgSize?: number
}

export const Circle: FC<ICircle> = ({
         src ,
         color,
         size,
         shadow ,
         onClick,
         imgSize= 80
}) => {
    return(
        <CircleWrap color={color} size={size} shadow={shadow} onClick={onClick}>
            <img src={src} alt="image" width={imgSize}/>
        </CircleWrap>
    )
}