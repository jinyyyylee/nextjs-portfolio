"use client";

import { useState } from "react";
import "@/assets/scss/layout/default.scss";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function GuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = (isOpen: boolean) => {
    setIsSidebarOpen(isOpen);
  };

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <div 
        className="main-container"
        style={{ 
          paddingLeft: isSidebarOpen ? '280px' : '90px',
          transition: 'padding-left 0.3s ease'
        }}
      >
        <Header />
        {children}
      </div>
    </div>
  );
}