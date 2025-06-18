import type { Metadata } from "next";
import "./globals.scss";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import Provider from "../components/layout/Provider";

export const metadata: Metadata = {
  title: "윌비 Next 프로젝트",
  description:
    "react 기반 nextjs 프레임워크 환경으로 제작한 베이스 프로젝트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
