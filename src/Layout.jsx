import React from "react";
import { Outlet } from "react-router-dom";
import CodxNavbar from "./Navbar/navbar";
import Footer from "./Home/Footer";

export default function Layout() {
  return (
    <>
      <CodxNavbar />
      <Outlet />
      <Footer />
    </>
  );
}