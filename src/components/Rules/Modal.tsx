import { Dispatch, FC, SetStateAction } from "react";

import { Close, ModalStyle, Wrap } from "./style";
import { Flex, FlexValue } from "../../styles/flex";
import { Colors, FontSize, TextStyle, Width } from "../UI/Text/style";

import close from "../../assets/icon-close.svg";
import rules from "../../assets/image-rules.svg";
import { motion } from "framer-motion";

interface IModal {
  setIsModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<IModal> = ({ setIsModal }) => {
  return (
    <ModalStyle>
      <Wrap
        as={motion.div}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Flex justify={FlexValue.between}>
          <TextStyle color={Colors.dark} size={FontSize.m} width={Width.none}>
            Rules
          </TextStyle>
          <Close src={close} alt="close" onClick={() => setIsModal(false)} />
        </Flex>
        <img src={rules} alt="rules" />
      </Wrap>
    </ModalStyle>
  );
};
