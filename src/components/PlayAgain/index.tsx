import {FC} from "react";

import {Button} from "./style";
import {PaddingValue, TextStyle} from "../UI/Text/style";

import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {toggleWaitOpponent} from "../../store/gameSlice";

export const PlayAgain: FC = () => {
    const {message} = useAppSelector(state => state.game)
    const dispatch = useAppDispatch();
    return (
        <>
          {message &&
             <div>
                <TextStyle paddingBottom={PaddingValue.m}>{message}</TextStyle>
                  <Button onClick={() => dispatch(toggleWaitOpponent(false))}>
                     Play again
                  </Button>
             </div>
            }

        </>

    )
}