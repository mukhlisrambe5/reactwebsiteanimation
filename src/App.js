import styled from "styled-components";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layout";
import ChartSection from "./Components/ChartSection";
import MessagingSection from "./Components/MessagingSection";
function App() {
  return (
    <div className="App">
      <Header />
     <OuterLayout>
      <MainStyled>
        <CardSection />
        <ChartSection />
        <MessagingSection/>
      </MainStyled>
     </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`

`

export default App;
