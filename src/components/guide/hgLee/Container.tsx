"use client";

import { useAppSelector } from "@/lib/hook";
import React from "react";
import { useLottie } from "@/utils/hooks/useLottie";

import "@/assets/scss/guide/hgLee/index.scss";
import loadingAnimation from "@/assets/js/lottie/loading.json";
import { useCircularProgressbar } from "@/utils/hooks/useCircularProgressBar";

const Container = () => {
  // 로딩
  const loadingLottie = useLottie({
    animationData: loadingAnimation,
    style: { width: 300, height: 300, margin: "0 auto" },
  });

  // 프로그레스바
  const progressBar = useCircularProgressbar({
    value: 75,
    text: "75%",
    styles: {
      path: { stroke: "#4caf50" },
      text: { fill: "#4caf50", fontSize: "16px" },
    },
  });

  return (
    <div className="container">
      <section>
        <h2 className="section-title">흥규 사원 작업 공간</h2>
        <article>
          <div className="article-title">
            <h3 className="title">lottie-react</h3>
            <p className="desc">
              Lottie는 After Effects에서 만든 애니메이션을 JSON 파일로 변환해서
              웹, 앱 등에서 가볍게 재생할 수 있게 해주는 기술입니다.
            </p>
          </div>
          <div className="article-content">
            <ul className="content-list">
              <li className="content-list-item">yarn add lottie-react</li>
              <li className="content-list-item">
                assets/js/lottie 경로의 json형식 애니메이션 사용
              </li>
            </ul>
            <div className="lottie-container">
              <p className="lottie-title">예시 ) Loading</p>
              {loadingLottie}
            </div>
          </div>
        </article>
        <article>
          <div className="article-title">
            <h3 className="title">progress-bar</h3>
            <p className="desc">
              react-circular-progressbar는 웹 애플리케이션에서 프로그레스바를
              쉽게 구현할 수 있는 라이브러리입니다.
            </p>
          </div>
          <div className="article-content">
            <div className="progress-bar-container">
              <p className="progress-bar-title">예시 ) 원형 프로그레스바</p>
              {progressBar}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Container;
