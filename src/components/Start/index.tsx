import React, { FC } from "react";

import { Grid, Triangle, Width } from "./style";
import { Circle } from "../UI/Circle";
import { Color, ShadowValue } from "../UI/Circle/style";

import scissors from "../../assets/icon-scissors.svg";
import rock from "../../assets/icon-rock.svg";
import paper from "../../assets/icon-paper.svg";
import { motion } from "framer-motion";

import { useAppDispatch } from "../../hooks/redux";
import { getSelectedElement, toggleWaitOpponent } from "../../store/gameSlice";
import triangle from "../../assets/bg-triangle.svg";

export const Start: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = (value: string) => {
    dispatch(getSelectedElement(value));
    dispatch(toggleWaitOpponent(true));
  };
  return (
    <Grid
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <Width>
        <Circle
          onClick={() => handleClick("scissor")}
          src={scissors}
          color={Color.scissor}
          shadow={ShadowValue.scissor}
        />
        <Circle
          onClick={() => handleClick("rock")}
          src={rock}
          color={Color.rock}
          shadow={ShadowValue.rock}
        />
      </Width>
      <Circle
        onClick={() => handleClick("paper")}
        src={paper}
        color={Color.paper}
        shadow={ShadowValue.paper}
      />
      <Triangle src={triangle} />
    </Grid>
  );
};
