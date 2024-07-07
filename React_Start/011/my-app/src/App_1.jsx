import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example";

const GlobalStyle = createGlobalStyle`
  span{
    color:red;
    font-size:12px,
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Hello world</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
