import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Outings from "./pages/Outings";
import { LinksEnum } from "./lib/LinksEnum";
import AppCup from "./pages/App-Cup";
import CPACalculator from "./pages/CPA-Calculator";
import AIDetector from "./pages/AI-Detector";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LinksEnum.HOME} element={<Home />} />
        <Route path={LinksEnum.OUTINGS} element={<Outings />} />
        <Route path={LinksEnum.APP_CUP} element={<AppCup />} />
        <Route path={LinksEnum.CPA_CALCULATOR} element={<CPACalculator />} />
        <Route path={LinksEnum.AI_DETECTOR} element={<AIDetector />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App
