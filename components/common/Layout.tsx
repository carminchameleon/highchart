import React from "react";
import styled from "styled-components";

const Layout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  max-width: 880px;
  margin: 0 auto;
  text-align: start;
  border: 1px solid red;
`;

export default Layout;
