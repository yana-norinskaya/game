import { FC } from "react";

import { Button } from "./style";
import { PaddingValue, TextStyle } from "../UI/Text/style";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleWaitOpponent } from "../../store/gameSlice";
import { motion } from "framer-motion";

export const PlayAgain: FC = () => {
  const { message } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  return (
    <>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          style={{ margin: "0 30px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TextStyle paddingBottom={PaddingValue.m}>{message}</TextStyle>
          <Button onClick={() => dispatch(toggleWaitOpponent(false))}>
            Play again
          </Button>
        </motion.div>
      )}
    </>
  );
};
