import { FC } from "react";

import { Wrap } from "./style";

import { YourChoice } from "./YourChoice";
import { ComputerChoice } from "./ComputerChoice";

import { PlayAgain } from "../PlayAgain";
import { motion } from "framer-motion";

export const Wait: FC = () => {
  return (
    <Wrap
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <YourChoice />
      <PlayAgain />
      <ComputerChoice />
    </Wrap>
  );
};
