import React, { FC } from "react";

import { Flex, FlexValue } from "../../../styles/flex";
import { FontSize, PaddingValue, TextStyle } from "../../UI/Text/style";
import { Circle } from "../../UI/Circle";
import { Color, ShadowValue, SizesValue } from "../../UI/Circle/style";

import scissors from "../../../assets/icon-scissors.svg";
import paper from "../../../assets/icon-paper.svg";
import rock from "../../../assets/icon-rock.svg";

import { useAppSelector } from "../../../hooks/redux";
import { motion } from "framer-motion";

export const YourChoice: FC = () => {
  const { userChoice, message } = useAppSelector((state) => state.game);
  const isWinner = message === "You win";
  return (
    <>
      <Flex
        direction={FlexValue.column}
        justify={FlexValue.between}
        style={{ margin: "0 40px", height: "370px", width: "300px" }}
        as={motion.div}
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <TextStyle paddingBottom={PaddingValue.l} size={FontSize.m}>
          You picked
        </TextStyle>
        {userChoice === "scissor" && (
          <Circle
            size={SizesValue.big}
            src={scissors}
            color={Color.scissor}
            shadow={ShadowValue.scissor}
            imgSize={150}
            winner={isWinner}
          />
        )}

        {userChoice === "paper" && (
          <Circle
            size={SizesValue.big}
            src={paper}
            color={Color.paper}
            shadow={ShadowValue.paper}
            imgSize={150}
            winner={isWinner}
          />
        )}

        {userChoice === "rock" && (
          <Circle
            size={SizesValue.big}
            src={rock}
            color={Color.rock}
            shadow={ShadowValue.rock}
            imgSize={150}
            winner={isWinner}
          />
        )}
      </Flex>
    </>
  );
};
