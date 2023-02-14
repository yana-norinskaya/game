import {FC} from "react";

import {Wrap} from "./style";

import {YourChoice} from "./YourChoice";
import {ComputerChoice} from "./ComputerChoice";

import {PlayAgain} from "../PlayAgain";

export const Wait: FC = () => {
    return(
        <Wrap>
           <YourChoice/>
                <PlayAgain/>
           <ComputerChoice/>
        </Wrap>
    )
}