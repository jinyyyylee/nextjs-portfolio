"use client";

import "@/assets/scss/guide/index.scss";
import React, { useEffect, useState } from "react";

const Container = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [showError, setShowError] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".guide-section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section>
      <h2 className="section-title">next.js 프론트 가이드</h2>

      <div className="guide">
        {/* 퀵메뉴 */}
        <div className="guide-quick-menu">
          <ul>
            <li>
              <a
                href="#nextjs-basics"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("nextjs-basics");
                }}
                className={activeSection === "nextjs-basics" ? "active" : ""}
              >
                #Next.js 기초
              </a>
            </li>
            <li>
              <a
                href="#loading-error"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("loading-error");
                }}
                className={activeSection === "loading-error" ? "active" : ""}
              >
                #Loading & Error
              </a>
            </li>
            <li>
              <a
                href="#code-convention"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("code-convention");
                }}
                className={
                  activeSection === "code-convention" ? "active" : ""
                }
              >
                #코드 컨벤션
              </a>
            </li>
            <li>
              <a
                href="#style-convention"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("style-convention");
                }}
                className={
                  activeSection === "style-convention" ? "active" : ""
                }
              >
                #스타일 컨벤션
              </a>
            </li>
            <li>
              <a
                href="#common-patterns"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("common-patterns");
                }}
                className={
                  activeSection === "common-patterns" ? "active" : ""
                }
              >
                #자주 사용하는 패턴
              </a>
            </li>
            <li>
              <a
                href="#solve-error"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("solve-error");
                }}
                className={activeSection === "solve-error" ? "active" : ""}
              >
                #에러 해결 방법
              </a>
            </li>
          </ul>
        </div>

        {/* Next.js 기초 */}
        <div id="nextjs-basics" className="guide-section">
          <p className="header"># Next.js 기초</p>
          <div className="guide-section-item">
            <h3 className="subtitle text-lg font-bold text-blue-700"><strong>1. 프로젝트 구조</strong></h3>
            <pre>
              {`src/
├── app/                    # App Router 디렉토리
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   └── (routes)/          # 라우트 그룹
├── components/            # 재사용 가능한 컴포넌트
├── assets/               # 정적 자원 (이미지, 스타일 등)
└── store/                # 상태 관리 (Redux 등)`}
            </pre>
          </div>

          {/* Redux store 구조 변경 안내 */}
          <div className="guide-section-item">
            <h3 className="subtitle">[2024.06.16] Redux Store 구조 변경</h3>
            <ul>
              <li>
                <strong>기존 구조:</strong>
                <pre>{`src/store/store.ts
src/store/postcodeSearch.ts`}</pre>
              </li>
              <li>
                <strong>변경 후 구조:</strong>
                <pre>{`src/lib/store.ts
src/lib/features/postcodeSearchSlice.ts`}</pre>
              </li>
              <li>
                <strong>설명:</strong>
                <ul>
                  <li>store 및 slice 파일을 <code>lib/</code> 디렉토리로 이동하여, <code>features/</code> 하위에 slice를 기능 단위로 분리 관리합니다.</li>
                  <li>향후 <code>features/</code> 하위에 더 세분화된 기능별 디렉토리 구조로 확장할 수 있습니다.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* store.ts 역할 설명 */}
          <div className="guide-section-item">
            <h3 className="subtitle">store.ts 파일의 역할</h3>
            <ul>
              <li>Redux Toolkit의 <code>configureStore</code>를 사용하여 프로젝트 전체에서 사용할 Redux store를 생성합니다.</li>
              <li>여러 slice(예: tabMenu, postcodeSearch 등)를 <code>combineReducers</code>로 하나의 root reducer로 통합합니다.</li>
              <li>상태 타입(<code>RootState</code>)과 dispatch 타입(<code>AppDispatch</code>)을 export하여 타입 안전한 상태 관리와 dispatch를 지원합니다.</li>
              <li>Provider에서 store를 주입하여, 하위 컴포넌트 어디서든 Redux 상태를 사용할 수 있게 합니다.</li>
            </ul>
            <div className="desc" style={{ marginTop: 8 }}>
              <strong>한 줄 요약:</strong> <br />
              <span>store.ts는 여러 기능별 slice를 통합하여 Redux store를 생성하고, 타입 안전한 글로벌 상태 관리를 가능하게 하는 프로젝트의 상태 관리 핵심 파일입니다.</span>
            </div>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle text-lg font-bold text-blue-700"><strong>2. 주요 개념</strong></h3>
            <ul>
              <li>
                <strong>App Router</strong>: Next.js 13부터 도입된 새로운
                라우팅 시스템
              </li>
              <li>
                <strong>Server Components</strong>: 기본적으로 서버에서
                렌더링되는 컴포넌트
              </li>
              <li>
                <strong>Client Components</strong>: "use client" 지시문을
                사용하는 클라이언트 컴포넌트
              </li>
              <li>
                <strong>Layout</strong>: 여러 페이지에서 공유되는 UI
              </li>
              <li>
                <strong>Loading</strong>: 페이지 로딩 상태를 표시하는 UI
              </li>
              <li>
                <strong>Error</strong>: 에러 발생 시 표시되는 UI
              </li>
            </ul>
          </div>
        </div>

        {/* Loading & Error 데모 섹션 */}
        <div id="loading-error" className="guide-section">
          <p className="header"># Loading & Error</p>

          <div className="guide-section-item">
            <h3 className="subtitle">1. Loading 컴포넌트</h3>
            <p>데이터를 불러오는 동안 표시되는 로딩 UI입니다.</p>
            <div className="demo-container">{/* <Loading /> */}</div>
            <pre>
              {`// app/loading.tsx
export default function Loading() {
return (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);
}`}
            </pre>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle">2. Error 컴포넌트</h3>
            <p>
              에러가 발생했을 때 표시되는 UI입니다. 아래 버튼을 클릭하여 에러
              상태를 확인해보세요.
            </p>
            <div className="demo-container">
              <button disabled onClick={() => setShowError(!showError)}>
                {showError ? "에러 숨기기" : "에러 보기( 구현중 )"}
              </button>
            </div>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle">3. 사용 방법</h3>
            <ul>
              <li>
                Loading.tsx와 Error.tsx는 app 디렉토리나 특정 라우트
                디렉토리에 위치할 수 있습니다.
              </li>
              <li>
                Loading은 자동으로 적용되며, 데이터 페칭 중에 표시됩니다.
              </li>
              <li>
                Error는 에러가 발생했을 때 자동으로 표시되며, reset 함수로
                재시도할 수 있습니다.
              </li>
              <li>
                Error 컴포넌트는 반드시 "use client" 지시문이 필요합니다.
              </li>
            </ul>
          </div>
        </div>

        {/* 코드 컨벤션 */}
        <div id="code-convention" className="guide-section">
          <p className="header"># 코드 컨벤션</p>
          <div className="guide-section-item">
            <h3 className="subtitle">1. 명명규칙</h3>
            <ul>
              <li>
                폴더명, 파일명, 메서드명은 카멜 케이스를 사용한다. ex)
                container, loginButton
              </li>
              <li>
                컴포넌트 파일명과 클래스명은 파스칼 케이스를 사용한다. ex)
                Container, LoginButton
              </li>
              <li>페이지 컴포넌트는 page.tsx로 통일한다.</li>
              <li>레이아웃 컴포넌트는 layout.tsx로 통일한다.</li>
            </ul>

            <h3 className="subtitle">2. 깃 커밋 컨벤션</h3>
            <ul>
              <li>feat: 새로운 기능 추가</li>
              <li>fix: 버그 수정</li>
              <li>refactor: 코드 리팩토링</li>
              <li>style: 스타일 수정</li>
            </ul>

            <p
              style={{ color: "#999" }}
            >{`ex) [이진영 | feat] 로그인 페이지 추가`}</p>
          </div>
        </div>

        {/* 스타일 컨벤션 */}
        <div id="style-convention" className="guide-section">
          <p className="header"># 스타일 컨벤션</p>
          <div className="guide-section-item">
            <h3 className="subtitle">1. 전역 스타일 적용 방식</h3>
            <ul>
              <li>
                Next.js 13 이상의 App Router에서는 app/globals.scss가 전역
                스타일 파일입니다.
              </li>
              <li>
                이 파일은 app/layout.tsx에서 import되어 모든 페이지에 자동으로
                적용됩니다.
              </li>
            </ul>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle">2. 스타일 파일 구조</h3>
            <pre>
              {`src/
├── app/
│   ├── globals.scss    <- 전역 스타일 파일 (Next.js 기본)
│   └── layout.tsx      <- 여기서 globals.scss를 import
└── assets/
  └── scss/
      └── common.scss <- 공통 스타일 (globals.scss에서 import)`}
            </pre>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle">3. 스타일 적용 우선순위</h3>
            <ul>
              <li>globals.scss: 전역 스타일 (최저 우선순위)</li>
              <li>common.scss: 공통 스타일</li>
              <li>컴포넌트별 scss: 개별 스타일 (최고 우선순위)</li>
            </ul>
          </div>

          <div className="guide-section-item">
            <h3 className="subtitle">4. 주의사항</h3>
            <ul>
              <li>
                next.config.ts의 sassOptions.prependData는 사용하지 않습니다.
              </li>
              <li>
                전역 스타일은 반드시 app/globals.scss를 통해 적용합니다.
              </li>
            </ul>
          </div>
        </div>

        {/* 자주 사용하는 패턴 */}
        <div id="common-patterns" className="guide-section">
          <p className="header"># 자주 사용하는 패턴</p>
          <div className="guide-section-item">
            <h3 className="subtitle">1. 클라이언트 컴포넌트 선언</h3>
            <pre>
              {`"use client";

import React from 'react';

const ClientComponent = () => {
return <div>Client Component</div>;
};

export default ClientComponent;`}
            </pre>
          </div>
        </div>

        <div id="solve-error" className="guide-section">
          <p className="header"># 에러 해결 방법 공유</p>
          <div className="guide-section-item">
            <h3 className="subtitle">1. TypeScript JSX 타입 오류 해결하기</h3>
            <div className="error-example">
              <p className="error-message">
                JSX element implicitly has type 'any' because no interface
                'JSX.IntrinsicElements' exists.
              </p>
            </div>

            <div className="solution">
              <h4>해결 방법</h4>
              <ol>
                <li>
                  VSCode에서 <code>Ctrl + Shift + P</code> (또는{" "}
                  <code>Cmd + Shift + P</code>)를 누릅니다.
                </li>
                <li>
                  <code>TypeScript: Select TypeScript Version</code>을
                  선택합니다.
                </li>
                <li>
                  <code>Use Workspace Version</code>을 선택합니다.
                </li>
              </ol>

              <div className="explanation">
                <h4>왜 이렇게 해결되나요?</h4>
                <p>
                  이 오류는 VSCode가 프로젝트의 TypeScript 버전과 다른 버전을
                  사용하고 있을 때 발생합니다.
                  <code>Use Workspace Version</code>을 선택하면:
                </p>
                <ul>
                  <li>
                    프로젝트에 설치된 TypeScript 버전을 사용하게 됩니다.
                  </li>
                  <li>Next.js와 React의 타입 정의를 올바르게 인식합니다.</li>
                  <li>
                    프로젝트의 <code>tsconfig.json</code> 설정을 정확하게
                    적용합니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
