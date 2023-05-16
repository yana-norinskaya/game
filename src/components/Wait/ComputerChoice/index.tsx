import { FC } from "react";

import { Flex, FlexValue } from "../../../styles/flex";
import { FontSize, PaddingValue, TextStyle } from "../../UI/Text/style";
import { Circle } from "../../UI/Circle";
import { Color, ShadowValue, SizesValue } from "../../UI/Circle/style";

import scissors from "../../../assets/icon-scissors.svg";
import paper from "../../../assets/icon-paper.svg";
import rock from "../../../assets/icon-rock.svg";

import { useAppSelector } from "../../../hooks/redux";
import { useFindResultComputer } from "../../../hooks/useFindResultComputer";
import { motion } from "framer-motion";
import { Skeleton } from "components/Skeleton";

export const ComputerChoice: FC = () => {
  const { isLoading } = useAppSelector((state) => state.game);
  const { computerChoice, message } = useAppSelector((state) => state.game);
  const isWinner = message === "You lose";

  useFindResultComputer();

  return (
    <Flex
      direction={FlexValue.column}
      justify={FlexValue.between}
      style={{ margin: "0 40px", height: "370px", width: "300px" }}
      as={motion.div}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <TextStyle paddingBottom={PaddingValue.l} size={FontSize.m}>
        The house picked
      </TextStyle>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {computerChoice === "scissor" && (
            <Circle
              size={SizesValue.big}
              src={scissors}
              color={Color.scissor}
              shadow={ShadowValue.scissor}
              imgSize={150}
              winner={isWinner}
            />
          )}

          {computerChoice === "paper" && (
            <Circle
              size={SizesValue.big}
              src={paper}
              color={Color.paper}
              shadow={ShadowValue.paper}
              imgSize={150}
              winner={isWinner}
            />
          )}

          {computerChoice === "rock" && (
            <Circle
              size={SizesValue.big}
              src={rock}
              color={Color.rock}
              shadow={ShadowValue.rock}
              imgSize={150}
              winner={isWinner}
            />
          )}
        </>
      )}
    </Flex>
  );
};
