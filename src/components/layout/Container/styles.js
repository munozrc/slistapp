import styled from "styled-components";

export const Wrapper = styled.div`
  /* Positioning */

  /* Display & Box-model */
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Typography */

  /* Visual */
  background-color: white;

  /* Misc */
`;

export const Div = styled.div`
  /* Display & Box-model */
  width: 50%;
  height: 80%;
  max-width: 375px;
  max-height: 667px;

  /* Typography */
  text-align: center;

  /* Visual */
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px 0 rgb(0 0 0 / 20%);
`;
