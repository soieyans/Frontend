import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothmainPage from "./pages/ClothmainPage/ClothmainPage";
import TosPage from "./pages/TosPage/TosPage";
import FindIdPage from "./pages/FindIdPage/FindIdPage";
import FindPwPage from "./pages/FindPwPage/FindPwPage";
import RePwPage from "./pages/RePwPage/RePwPage";
import IdPage from "./pages/IdPage/IdPage";

function App() {
  return (
    <>
      {/* Navbar */}
      {/* <Navbar /> */}
      {/* 각자 route 설정하기 */}
      <Routes>
        {/* 로그인페이지 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 회원가입페이지 */}
        <Route path="/tos" element={<TosPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/findid" element={<FindIdPage/>} />
        <Route path="/findid/showid" element={<IdPage/>} />
        <Route path="/findpw" element={<FindPwPage/>} />
        <Route path="/repw" element={<RePwPage/>} />
        {/* 상품디테일 */}
        <Route path="/product" element={<ClothdetailPage />} />
        {/* 이게 메인페이지? */}
        <Route path="/" element={<ClothmainPage />} />
      </Routes>
    </>
  );
}

export default App;
