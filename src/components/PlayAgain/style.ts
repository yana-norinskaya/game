import styled, {css} from "styled-components";

export const Button = styled.div(({theme}) => ({
    width: "200px",
    background: theme.colors.white,
    padding: theme.padding.m,
    color: theme.colors.warning,
    textAlign: "center",
    fontSize: theme.fontSizes.m,
    borderRadius: theme.borders.s,
    cursor: "pointer",
    transition: "all 300ms ease"
}), css`
    &:hover{
      transform: scale(1.1);
    }
`)