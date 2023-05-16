import { useAppDispatch, useAppSelector } from "./redux";
import { getSelectedComputer } from "../store/gameSlice";
import { useCallback, useEffect } from "react";

export const useFindResultComputer = () => {
  const { computer } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  const setComputerValue = useCallback(() => {
    if (computer) {
      if (computer <= 0.33) {
        dispatch(getSelectedComputer("rock"));
      } else if (computer <= 0.64) {
        dispatch(getSelectedComputer("scissor"));
      } else {
        dispatch(getSelectedComputer("paper"));
      }
    }
  }, [computer, dispatch]);

  useEffect(() => {
    const time = setTimeout(setComputerValue, 3000);
    return () => clearTimeout(time);
  }, [setComputerValue]);
};
