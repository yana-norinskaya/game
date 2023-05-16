import { FC, useCallback } from "react";
import { CircleWrap, Color, ShadowValue, SizesValue } from "./style";
import { motion } from "framer-motion";

interface ICircle {
  src?: string;
  color?: Color;
  size?: SizesValue;
  shadow?: ShadowValue;
  onClick?: () => void;
  imgSize?: number;
  winner?: boolean;
}

export const Circle: FC<ICircle> = ({
  src,
  color,
  size,
  shadow,
  onClick,
  imgSize = 80,
  winner,
}) => {
  const isAnimate = useCallback(() => {
    const initial = {
      opacity: 1,
      boxShadow:
        "0px 0px 0px 10px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 30px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 40px hsl(0, 0%, 40%, 10% )",
    };
    const animated = {
      opacity: 1,
      boxShadow:
        "0px 0px 0px 30px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 60px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 100px hsl(0, 0%, 40%, 10% )",
    };

    return {
      initial,
      animated,
    };
  }, []);

  const nonAnimate = {
    opacity: 1,
    boxShadow:
      "0px 0px 0px 0px hsl(0, 0%, 50%, 20% ), 0px 0px 0px 0px hsl(0, 0%, 40%, 20% ),  0px 0px 0px 0px hsl(0, 0%, 40%, 10% )",
  };
  return (
    <>
      {size === "big" ? (
        <motion.div
          initial={winner ? isAnimate()?.initial : nonAnimate}
          animate={winner ? isAnimate()?.animated : nonAnimate}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          style={{ borderRadius: "50%" }}
        >
          <CircleWrap
            color={color}
            size={size}
            shadow={shadow}
            onClick={onClick}
          >
            <img src={src} alt="image" width={imgSize} />
          </CircleWrap>
        </motion.div>
      ) : (
        <CircleWrap color={color} size={size} shadow={shadow} onClick={onClick}>
          <img src={src} alt="image" width={imgSize} />
        </CircleWrap>
      )}
    </>
  );
};
