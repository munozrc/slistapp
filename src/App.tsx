import styled from "styled-components";
import MainView from "./views/MainView";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e4e4e4;
`;

export default function App() {
  return (
    <Container>
      <MainView />
    </Container>
  );
}
