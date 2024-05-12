import styled from "styled-components";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import { OuterLayout } from "./styles/Layout";
import ChartSection from "./Components/ChartSection";
import MessagingSection from "./Components/MessagingSection";
import PaymentSection from "./Components/PaymentSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
     <OuterLayout>
      <MainStyled>
        <CardSection />
        <ChartSection />
        <MessagingSection/>
        <PaymentSection />
        <FAQSection/>
      </MainStyled>
     </OuterLayout>
     <Footer/>
    </div>
  );
}

const MainStyled = styled.main`

`

export default App;
