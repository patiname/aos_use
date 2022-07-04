import { Header } from "./components/Header";
import { MainBanner } from "./components/MainBanner";
import { Section } from "./components/Section";
import { GlobalStyled } from "./styles/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <MainBanner />
      <Section />
    </>
  );
}

export default App;
