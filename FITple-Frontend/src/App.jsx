import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* 각자 route 설정하기 */}
      <Routes>
        {/* 로그인페이지 */}
        <Route path="/login" element={<LoginPage />} />
        {/* 회원가입페이지 */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
