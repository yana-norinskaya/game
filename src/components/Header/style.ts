import styled from "styled-components";

export const Border = styled.div(({ theme }) => ({
  width: "800px",
  height: "170px",
  padding: theme.padding.m,
  border: `2px solid ${theme.colors.white}`,
  borderRadius: theme.borderRadius.s,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
