import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ClothmainPage from "./pages//ClothmainPage/ClothmainPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothregisterPage from "./pages/ClothregisterPage/ClothregisterPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ClothupdatePage from "./pages/ClothupdatePage/ClothupdatePage";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* 각자 route 설정하기 */}
      <Routes>
        <Route path="/" element={<ClothmainPage />} />
        <Route path="/clothregister" element={<ClothregisterPage />} />
        <Route path="/clothdetail" element={<ClothdetailPage />} />
        <Route path="/clothupdate" element={<ClothupdatePage />} />
      </Routes>
    </>
  );
}

export default App;
