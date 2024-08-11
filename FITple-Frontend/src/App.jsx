import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClothdetailPage from "./pages/ClothdetailPage/ClothdetailPage";
import ClothregisterPage from "./pages/ClothregisterPage/ClothregisterPage";
import ClothmainPage from "./pages/ClothmainPage/ClothmainPage";
import UserInfoPage from "./pages/UserInfoPage/UserInfoPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RecomMainPage from "./pages/RecomMainPage/RecomMainPage";
import RecomAllPage from "./pages/RecomAllPage/RecomAllPage";
import RecomUserCloInfomPage from "./pages/RecomUserCloInfomPage/RecomUserCloInfomPage";
import RecomUserFeedPage from "./pages/RecomUserFeedPage/RecomUserFeedPage";
import ClothupdatePage from "./pages/ClothupdatePage/ClothupdatePage";
import LayoutNonNav from "./layout/LayoutNonNav";
import Layout from "./layout/Layout";
import LayoutNavBlue from "./layout/LayoutNavBlue";
import SearchMainPage from "./pages/SearchMainPage/SearchMainPage";
function App() {
  return (
    <>
      <Routes>
        {/* Navbar 없는 layout */}
        <Route element={<LayoutNonNav />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user" element={<UserInfoPage />} />
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
