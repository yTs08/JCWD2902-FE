/** @format */

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home.page";
import AboutPage from "./pages/about.page";
import ProfilePage from "./pages/profile.page";

export default function App(): React.ReactNode {
  return (
    <>
      <Navbar logo="Purwadhika" menu1="Home" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
      </Routes>
    </>
  );
}
