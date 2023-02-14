import React, {FC} from "react";

import {Flex, FlexValue} from "../../../styles/flex";
import {FontSize, PaddingValue, TextStyle} from "../../UI/Text/style";
import {Circle} from "../../UI/Circle";
import {Color, ShadowValue, SizesValue} from "../../UI/Circle/style";

import scissors from "../../../assets/icon-scissors.svg";
import paper from "../../../assets/icon-paper.svg";
import rock from "../../../assets/icon-rock.svg";

import {useAppSelector} from "../../../hooks/redux";

export const YourChoice: FC = () => {
    const {userChoice} = useAppSelector(state => state.game);
    return(
        <>
        <Flex direction={FlexValue.column} justify={FlexValue.between}>
            <TextStyle
                paddingBottom={PaddingValue.l}
                size={FontSize.m}>
                You picked
            </TextStyle>
            {userChoice === "scissor" &&
                <Circle
                    size={SizesValue.big}
                    src={scissors}
                    color={Color.scissor}
                    shadow={ShadowValue.scissor}
                    imgSize={150}/>
            }

            {userChoice === "paper" &&
                <Circle
                    size={SizesValue.big}
                    src={paper}
                    color={Color.paper}
                    shadow={ShadowValue.paper}
                    imgSize={150}/>}

            {userChoice === "rock" &&
                <Circle
                    size={SizesValue.big}
                    src={rock}
                    color={Color.rock}
                    shadow={ShadowValue.rock}
                    imgSize={150}/>}
        </Flex>
        </>
    )
}