import { useCallback, useEffect } from "react";
import { setMessage, setScore, setScoreComputer } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "./redux";

export const useFindResult = () => {
  const { computerChoice, userChoice } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();
  const defineResult = useCallback(() => {
    if (
      (computerChoice === "rock" && userChoice === "paper") ||
      (computerChoice === "scissor" && userChoice === "rock") ||
      (computerChoice === "paper" && userChoice === "scissor")
    ) {
      dispatch(setScore());
      dispatch(setMessage("You win"));
    } else if (
      (computerChoice === "rock" && userChoice === "scissor") ||
      (computerChoice === "scissor" && userChoice === "paper") ||
      (computerChoice === "paper" && userChoice === "rock")
    ) {
      dispatch(setScoreComputer());
      dispatch(setMessage("You lose"));
    } else if (
      (computerChoice === "rock" && userChoice === "rock") ||
      (computerChoice === "scissor" && userChoice === "scissor") ||
      (computerChoice === "paper" && userChoice === "paper")
    ) {
      dispatch(setMessage("draw"));
    }
  }, [computerChoice, userChoice, dispatch]);

  useEffect(() => {
    const time = setTimeout(() => {
      defineResult();
    }, 1000);
    return () => clearTimeout(time);
  }, [defineResult]);
};
