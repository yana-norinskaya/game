import styled from "styled-components";

export const Box = styled.div(({ theme }) => ({
  minWidth: "150px",
  background: theme.colors.white,
  height: "100%",
  borderRadius: theme.borderRadius.s,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.padding.m,
}));
