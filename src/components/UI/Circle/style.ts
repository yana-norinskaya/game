import styled, {css} from "styled-components";

export enum ShadowValue{
    scissor = "scissor",
    rock = "rock",
    paper = "paper"
}
export enum Color {
    scissor = "scissor",
    rock = "rock",
    paper = "paper"

}
export enum Border{
    s = "s",
    m = "m"
}

export enum SizesValue{
    small = "small",
    big = "big",
}

interface ICircleStyled{
    border?: Border,
    size?: SizesValue,
    shadow?: ShadowValue,
    color?: Color
}

export const CircleWrap = styled.div<ICircleStyled>(({
  theme,
  border = Border.s,
  size = SizesValue.small,
  shadow = ShadowValue.scissor,
  color = Color.scissor
}) =>
    ({
    border: `${theme.borders[border]} solid ${theme.colors[color]}`,
    height: theme.sizes[size],
    width: theme.sizes[size],
    borderRadius: theme.borderRadius.radius,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    boxShadow: theme.boxShadow[shadow],
    cursor: "pointer",
    transition: "all 300ms ease",
    alignSelf: "center"
}),
    css`
      &:hover{
        transform: scale(1.1);
        }
      &:focus-visible{
        background: black;
      }
`)