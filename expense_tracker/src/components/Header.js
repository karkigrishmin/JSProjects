import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h2`
  margin-bottom: 1rem;
`;

export function Header() {
  return <StyledHeader>Expense Tracker</StyledHeader>;
}
