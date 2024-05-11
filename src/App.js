import styled from "styled-components";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layout";
import ChartSection from "./Components/ChartSection";
function App() {
  return (
    <div className="App">
      <Header />
     <OuterLayout>
      <MainStyled>
        <CardSection />
        <ChartSection />
      </MainStyled>
     </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`

export default App;
