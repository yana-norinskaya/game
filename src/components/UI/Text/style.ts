import styled from "styled-components";

export enum Colors {
  dark = "dark",
  white = "white",
  blue = "blue",
  warning = "warning",
}

export enum WeightText {
  s = "s",
  m = "m",
}

export enum FontSize {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
}

export enum PaddingValue {
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  none = "none",
}

export enum TextAlign {
  center = "center",
  left = "left",
}

export enum Width {
  none = 0,
  middle = "200px",
}

export interface IText {
  weight?: WeightText;
  size?: FontSize;
  paddingBottom?: PaddingValue;
  paddingRight?: PaddingValue;
  paddingLeft?: PaddingValue;
  color?: Colors;
  align?: TextAlign;
  width?: Width;
}

export const TextStyle = styled.div<IText>(
  ({
    theme,
    weight = WeightText.m,
    size = FontSize.l,
    color = Colors.white,
    paddingBottom = PaddingValue.none,
    paddingRight = PaddingValue.none,
    paddingLeft = PaddingValue.none,
    align = TextAlign.center,
    width = Width.middle,
  }) => ({
    width: width,
    textTransform: "uppercase",
    fontWeight: theme.fontWeight[weight],
    fontSize: theme.fontSizes[size],
    color: theme.colors[color],
    paddingBottom: theme.padding[paddingBottom],
    paddingRight: theme.padding[paddingRight],
    paddingLeft: theme.padding[paddingLeft],
    textAlign: align,
  })
);
