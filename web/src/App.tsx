import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { Applications } from "./components/Applications";

export function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <Applications />
    </>
  );
}
