import { FC } from "react";

import { Score } from "./Score";

import { Border } from "./style";
import { TextAlign, TextStyle } from "../UI/Text/style";

export const Header: FC = () => {
  return (
    <Border>
      <TextStyle align={TextAlign.left}>Rock paper scissors</TextStyle>
      <Score />
    </Border>
  );
};
