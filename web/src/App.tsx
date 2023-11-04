import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { Applications } from "./components/Applications";

export function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <Applications />
        <ToastContainer position="bottom-center" />
    </>
  );
}
