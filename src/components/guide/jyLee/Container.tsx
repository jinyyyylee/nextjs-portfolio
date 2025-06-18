"use client";

import { useAppSelector } from "@/lib/hook";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from "react";

interface Content {
  greeting: string;
  description: string;
}

function getBrowserLang(): string {
  if (typeof window === "undefined") return "ko";
  // "en-US" → "en"만 추출
  return navigator.language.split("-")[0];
}

const Container = () => {
  const [content, setContent] = useState<Content | null>(null);
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>("ko");

  useEffect(() => {
    const browserLang = getBrowserLang();
    setLang(browserLang);

    fetch(`/api/i18n?lang=${browserLang}`)
      .then((res) => {
        if (!res.ok) throw new Error("API 응답 오류");
        return res.json();
      })
      .then((data) => setContent(data))
      .catch((err) => {
        setContent({ greeting: "에러", description: err.message });
      });
  }, []);

  if (!content) return <div>로딩중...</div>;

  return (
    <div className="container">
      <section>
        <h2 className="section-title">구현 기능 및 라이브러리</h2>
        <ul className="function-list">
          <li className="function-list-item">
            <div className="info">
              <p className="title">i18n 구현</p>
            </div>

            <div className="desc">
              <span className="desc-title"></span>
              <span className="desc-content">
                {t('안녕하세요')}
              </span>
            </div>

            <p>{content.greeting}</p>
            <p>{content.description}</p>
            <div className="mt-2 text-xs text-gray-400">현재 언어: {lang}</div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Container;
