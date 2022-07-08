import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import Header from "./components/Header";
import Add from "./components/Add";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
