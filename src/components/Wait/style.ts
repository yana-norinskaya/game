import styled from "styled-components";

export const Wrap = styled.div(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: theme.padding.xl,
}));

export const Skeleton = styled.div(({ theme }) => ({
  width: "250px",
  height: "250px",
  background: theme.colors.skeleton,
  borderRadius: "50%",
}));
