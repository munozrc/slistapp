import React from "react";

import { Wrapper, Div } from "./styles";

const Container = ({ children }) => {
  return (
    <Wrapper>
      <Div>{children}</Div>
    </Wrapper>
  );
};

export default Container;
