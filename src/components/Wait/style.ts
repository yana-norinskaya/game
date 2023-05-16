import styled from "styled-components";

export const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.padding.xl,
}));
