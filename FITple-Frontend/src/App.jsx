import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothmainPage from "./pages/ClothmainPage/ClothmainPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log("Current path:", location.pathname);
  // Navbar를 제외할 경로 목록
  const excludeNavbarPaths = ["/", "/SignUp", "/user"];
  return (
    <>
      {/* 특정 경로에서만 Navbar 렌더링 */}
      {!excludeNavbarPaths.includes(location.pathname) && <Navbar />}
      {/* 각자 route 설정하기 */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user" element={<UserInfoPage />} />
        <Route path="/cloth" element={<ClothmainPage />} />
        <Route path="/detail" element={<ClothdetailPage />} />
      </Routes>
    </>
  );
}

export default App;
