import "./App.css";
import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import { useState } from "react";
import { ContextClick } from "./contexts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import GamePage from "./pages/GamePage";
import ConstructorPage from "./pages/ConstructorPage";

const App = () => {
  const [amountClicks, setAmountClicks] = useState(0);

  return (
    <BrowserRouter>
      <ContextClick.Provider value={{ amountClicks, setAmountClicks }}>
        <TextSizeWrapper>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/constructor" element={<ConstructorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </TextSizeWrapper>
      </ContextClick.Provider>
    </BrowserRouter>
  );
};

export default App;
