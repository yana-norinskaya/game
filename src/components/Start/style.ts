import styled from "styled-components";

export const Grid = styled.div(({ theme }) => ({
  width: "1000px",
  marginTop: theme.padding.m,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  position: "relative",
}));
export const Width = styled.div(() => ({
  width: "600px",
  display: "flex",
  margin: "40px auto",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const Triangle = styled.img({
  position: "absolute",
  top: 150,
  left: 340,
  zIndex: -1,
});
