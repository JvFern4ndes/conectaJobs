import { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/Header";
import { Applications } from "./components/Applications";
import { LoginModal } from "./components/LoginModal";

export function App() {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(true);

  useEffect(() => {
    const isModalDisabled = localStorage.getItem("isModalDisabled");
    if (isModalDisabled === "true") {
      setIsLoginModalVisible(false);
    }
  }, []);

  function handleCloseLoginModal() {
    setIsLoginModalVisible(false);

    localStorage.setItem("isModalDisabled", "true");
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Applications />
      <ToastContainer position="bottom-center" />

      {isLoginModalVisible && (
        <LoginModal onPress={handleCloseLoginModal} />
      )}
    </>
  );
}
