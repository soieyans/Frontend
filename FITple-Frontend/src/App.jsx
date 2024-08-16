import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothregisterPage from "./pages/ClothregisterPage/ClothregisterPage";
import ClothmainPage from "./pages/ClothmainPage/ClothmainPage";

import TosPage from "./pages/TosPage/TosPage";
import FindIdPage from "./pages/FindIdPage/FindIdPage";
import FindPwPage from "./pages/FindPwPage/FindPwPage";
import RePwPage from "./pages/RePwPage/RePwPage";
import IdPage from "./pages/IdPage/IdPage";
import PwPage from "./pages/PwPage/PwPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RecomMainPage from "./pages/RecomMainPage/RecomMainPage";
import RecomAllPage from "./pages/RecomAllPage/RecomAllPage";
import RecomUserCloInfomPage from "./pages/RecomUserCloInfomPage/RecomUserCloInfomPage";
import RecomUserFeedPage from "./pages/RecomUserFeedPage/RecomUserFeedPage";
import ClothupdatePage from "./pages/ClothupdatePage/ClothupdatePage";
import RecomUserSearchPage from "./pages/RecomUserSearchPage/RecomUserSearchPage";
import LayoutNonNav from "./layout/LayoutNonNav";
import Layout from "./layout/Layout";
import LayoutNavBlue from "./layout/LayoutNavBlue";
import SearchMainPage from "./pages/SearchMainPage/SearchMainPage";
import BrandPage from "./pages/BrandPage/BrandPage";

function App() {
  return (
    <>
      <Routes>
        {/* Navbar 없는 layout */}
        <Route element={<LayoutNonNav />}>
          {/* 로그인페이지 */}
          <Route path="/login" element={<LoginPage />} />
          {/* 회원가입페이지 */}
          <Route path="/tos" element={<TosPage/>}/>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/userinfo" element={<UserInfoPage/>} />
          <Route path="/findid" element={<FindIdPage/>} />
          <Route path="/findid/showid" element={<IdPage/>} />
          <Route path="/findpw" element={<FindPwPage/>} />
          <Route path="/findpw/showpw" element={<PwPage/>} />
          <Route path="/repw" element={<RePwPage/>} />
          <Route path="/clothregister" element={<ClothregisterPage />} />
        </Route>
        {/* Navbar 있는 layout */}
        <Route element={<Layout />}>
          <Route path="/cloth" element={<ClothmainPage />} />
          <Route path="/clothdetail" element={<ClothdetailPage />} />
          <Route path="/clothupdate" element={<ClothupdatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recommend" element={<RecomMainPage />} />
          <Route path="/recommendall" element={<RecomAllPage />} />
          <Route path="/recommendFeed" element={<RecomUserFeedPage />} />
          <Route path="/recommenduser" element={<RecomUserCloInfomPage />} />
          <Route path="/brand" element={<BrandPage />} />
          <Route
            path="/recommendUserSearch"
            element={<RecomUserSearchPage />}
          />
        </Route>
        {/* 파란색 Navbar 있는 layout */}
        <Route element={<LayoutNavBlue />}>
          <Route path="/search" element={<SearchMainPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
