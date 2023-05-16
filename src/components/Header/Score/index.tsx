import { FC } from "react";

import { Box } from "./style";
import { Colors, FontSize, TextStyle } from "../../UI/Text/style";

import { useAppSelector } from "../../../hooks/redux";
import { useFindResult } from "../../../hooks/useFindResult";

export const Score: FC = () => {
  const { score, computerScore } = useAppSelector((state) => state.game);
  useFindResult();
  return (
    <Box>
      <TextStyle size={FontSize.m} color={Colors.blue}>
        Score
      </TextStyle>
      <TextStyle size={FontSize.xl} color={Colors.dark}>
        {score}: {computerScore}
      </TextStyle>
    </Box>
  );
};
