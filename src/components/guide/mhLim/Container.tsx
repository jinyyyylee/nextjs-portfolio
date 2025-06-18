"use client";

import { useAppSelector } from "@/lib/hook";
import React, { useEffect, useState } from "react";
import "@/assets/scss/guide/mhLim/index.scss";
import UseToast from "@/utils/hooks/useToast";

const Container = () => {
  const [toastMessage, setToastMessage] = useState<string>("");

  const toastMessageOpen = (type: string) => {
    if (type === "message") {
      setToastMessage("작성한 메시지가 없습니다.");
    } else {
      setToastMessage("프로필 열람 권한이 없습니다.");
    }
  };

  useEffect(() => {
    setToastMessage("");
  }, [toastMessage]);

  return (
    <div className="container">
      <section>
        <h2 className="section-title">구현 기능 및 라이브러리</h2>
        <ul className="function-list">
          <li className="function-list-item">
            <div className="info">
              <p className="title">토스트 메시지 커스텀 훅</p>
              <span className="path">@/utils/hooks/useToast.tsx</span>
            </div>

            <div className="desc">
              <span className="desc-title"></span>
              <span className="desc-content">
                nuxt.js에서 기본적으로 컴포넌트 렌더링 시 transition 효과
                애니메이션을 제공하는 transition 컴포넌트를 대체하는
                framer-motion 라이브러리를 활용하여 토스트 메시지가 렌더링될 때
                fade-in 효과를 추가했습니다.
              </span>
            </div>

            <div className="test-code">
              <span className="sample-title">예시 샘플</span>

              <div className="btn-wrap">
                <button
                  type="button"
                  className="message-btn"
                  onClick={() => toastMessageOpen("message")}
                >
                  메시지 열기
                </button>

                <button
                  type="button"
                  className="message-btn"
                  onClick={() => toastMessageOpen("admin")}
                >
                  관리자 프로필 보기
                </button>
              </div>
            </div>

            <UseToast message={toastMessage} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Container;
