import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const ChildDiv = styled.div`
  width: 50%;
  height: 80%;
  max-width: 375px;
  max-height: 667px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px 0 rgb(0 0 0 / 20%);
  overflow: hidden;
`;

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function ParentContainer({ children }: Props) {
  return (
    <Wrapper>
      <ChildDiv>{children}</ChildDiv>
    </Wrapper>
  );
}
