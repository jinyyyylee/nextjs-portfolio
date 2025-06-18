"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  // 임시 로그인 상태 (실제로는 인증 상태 관리 라이브러리 사용)
  const [isLogin, setIsLogin] = useState<boolean>(false);
  
  const userInfo = {
    name: "사용자",
    email: "user@example.com"
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1 className="animated-logo">
            <span className="logo-letter">W</span>
            <span className="logo-letter">B</span>
            <span className="logo-letter">S</span>
            <span className="logo-letter">O</span>
            <span className="logo-letter">F</span>
            <span className="logo-letter">T</span>
            <span className="chick">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="14" r="7" fill="#FFE066"/>
                <ellipse cx="12" cy="10" rx="5" ry="4" fill="#FFE066"/>
                <circle cx="10" cy="12" r="1" fill="#333"/>
                <circle cx="14" cy="12" r="1" fill="#333"/>
                <polygon points="12,14 13,16 11,16" fill="#FFA500"/>
                <ellipse cx="17" cy="9" rx="1.5" ry="0.7" fill="#FFE066"/>
              </svg>
            </span>
          </h1>
        </div>
        
        <div className="user-info">
          {isLogin ? (
            <div className="logged-in">
              <span className="user-name">{userInfo.name}</span>
              <span className="user-email">{userInfo.email}</span>
              <button onClick={() => setIsLogin(false)} className="logout-btn">로그아웃</button>
            </div>
          ) : (
            <div className="logged-out">
              <button onClick={() => setIsLogin(true)} className="login-btn">로그인</button>
              <button className="signup-btn">회원가입</button>
            </div>
          )}
          <Link href="/" className="toggle-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
