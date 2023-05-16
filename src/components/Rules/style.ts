import styled, { css } from "styled-components";

export const Button = styled.div(
  ({ theme }) => ({
    border: `3px solid ${theme.colors.white}`,
    width: "100px",
    padding: theme.padding.s,
    color: theme.colors.white,
    textTransform: "uppercase",
    borderRadius: theme.borderRadius.s,
    textAlign: "center",
    cursor: "pointer",
    display: "flex",
    alignSelf: "end",
    justifyContent: "center",
    transition: "all 300ms ease",
  }),
  css`
    &:hover {
      transform: scale(1.1);
    }
  `
);

export const ModalStyle = styled.div(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  background: theme.colors.bgModal,
  width: "100%",
  height: "100%",
  display: "flex",
}));

export const Wrap = styled.div(({ theme }) => ({
  width: "400px",
  height: "420px",
  background: theme.colors.white,
  padding: theme.padding.l,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "center",
  margin: "0 auto",
  borderRadius: theme.borderRadius.s,
}));

export const Close = styled.img`
  cursor: pointer;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.1);
  }
`;
