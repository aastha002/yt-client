"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";



export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="app">
      <Header onMenuClick={handleMenuClick} />
      <div className="app-body">
        <Sidebar isOpen={isSidebarOpen} onMenuClick={handleMenuClick} />
        <div className="main-content">
          <MainContent />
        </div>
      </div>
    </div>
  );
}
