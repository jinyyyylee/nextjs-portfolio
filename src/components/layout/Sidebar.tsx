"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavEnter from "@/assets/images/svgs/nav-enter.svg";
import GnbIcon from "@/assets/images/svgs/gnb-test.svg";
import NavOpen from "@/assets/images/svgs/nav-open.svg";
import NavClose from "@/assets/images/svgs/nav-close.svg";
import NavHome from "@/assets/images/svgs/nav-home.svg";
import NavSetting from "@/assets/images/svgs/nav-setting.svg";

// 메뉴 타입 정의
interface MenuItem {
  id: string;
  name: string;
  icon?: React.ReactNode;
  link?: string;
  children?: MenuItem[];
}

// 이미지 기반 구조 반영 (3뎁스)
const menuList: MenuItem[] = [
  {
    id: "edu-plan",
    name: "교육계획",
    children: [
      { id: "plan-doc", name: "시행계획서", link: "/plan/doc" },
      { id: "review", name: "심의", link: "/plan/review" },
      {
        id: "ttm-mng",
        name: "TTM관리",
        children: [
          { id: "ttm-mng-main", name: "TTM관리", link: "/plan/ttm" },
          { id: "ttm-write", name: "TTM작성 및 조회", link: "/plan/ttm/write" },
        ],
      },
    ],
  },
  {
    id: "edu-operation",
    name: "교육운영",
    children: [
      {
        id: "course-base",
        name: "과정기반",
        children: [
          { id: "operation-plan", name: "운영과정계획서관리", link: "/operation/plan" },
          { id: "operation-result", name: "운영과정결과관리", link: "/operation/result" },
          { id: "law-manage", name: "법정과정관리", link: "/operation/law" },
          { id: "server-manage", name: "서버변경관리", link: "/operation/server" },
        ],
      },
      {
        id: "course-mng",
        name: "과정관리",
        children: [
          { id: "entrants", name: "입과자관리", link: "/course/entrants" },
          { id: "eval-mng", name: "경의심사평가관리", link: "/course/eval" },
          { id: "weekly-status", name: "주간실적제출현황", link: "/course/weekly-status" },
          { id: "situation-mng", name: "상황실적제출관리", link: "/course/situation" },
          { id: "weekly-status2", name: "주간실적제출현황", link: "/course/weekly-status2" },
          { id: "situation-mng2", name: "상황실적제출관리", link: "/course/situation2" },
          { id: "time-mng", name: "시간표관리", link: "/course/time" },
          { id: "weekly-plan", name: "주간시간표현황", link: "/course/weekly-plan" },
          { id: "operation-mng", name: "운영실적관리", link: "/course/operation" },
        ],
      },
      {
        id: "course-progress",
        name: "과정진행",
        children: [
          { id: "course-progress-mng", name: "과정진행관리", link: "/progress/manage" },
          { id: "lecture-eval", name: "강의실적평가관리(평가)", link: "/progress/lecture-eval" },
          { id: "test-eval", name: "시험문제작성제출현황", link: "/progress/test-eval" },
          { id: "facility-mng", name: "시설관리", link: "/progress/facility" },
          { id: "weekly-edu", name: "주간교육현황", link: "/progress/weekly-edu" },
        ],
      },
      {
        id: "course-summary",
        name: "과정종료",
        children: [
          { id: "summary-status", name: "과정별-종료현황", link: "/summary/status" },
          { id: "summary-mng", name: "과정별성과관리", link: "/summary/manage" },
          { id: "summary-edu", name: "종강시험현황", link: "/summary/edu" },
        ],
      },
      {
        id: "cost-mng",
        name: "비용관리",
        children: [
          { id: "edu-cost", name: "교육비계산", link: "/cost/edu" },
          { id: "server-cost", name: "서버관리자계산", link: "/cost/server" },
        ],
      },
      {
        id: "incident-mng",
        name: "직원관리현황",
        children: [
          { id: "course-incident", name: "과정담당신청", link: "/incident/course" },
          { id: "incident-report", name: "훈련실적신고", link: "/incident/report" },
          { id: "law-incident", name: "법정신고", link: "/incident/law" },
          { id: "weekly-report", name: "주간보고", link: "/incident/weekly" },
        ],
      },
      {
        id: "facility-guide",
        name: "설비지도",
        children: [
          { id: "facility-guide-mng", name: "설비지도관리", link: "/facility/guide" },
          { id: "eval-guide", name: "경의심사평가관리", link: "/facility/eval" },
          { id: "weekly-guide", name: "주간실적제출현황", link: "/facility/weekly" },
        ],
      },
      {
        id: "gallery",
        name: "갤러리관리",
        children: [
          { id: "gallery-mng", name: "갤러리관리", link: "/gallery/manage" },
        ],
      },
    ],
  },
];

// 재귀 렌더링 함수
function RenderMenu({ items, depth = 1, isOpen = false }: { items: MenuItem[]; depth?: number; parentActive?: boolean; isOpen?: boolean }) {
  const pathName = usePathname();
  const [open, setOpen] = useState<string | null>(null);

  return (
    
    <ul className={depth === 1 ? "sidebar-menu" : "submenu"}>
      {items.map((item) => {
        const isActive = !!item.link && pathName === item.link;
        const hasChildren = !!item.children && item.children.length > 0;
        
        const showNavIcon = depth >= 2;
        return (
          <li key={item.id} className="menu-item">
            {hasChildren ? (
              <>
                <button
                  className={"menu-item depth-" + depth + (open === item.id ? " active" : "")}
                  type="button"
                  onClick={() => setOpen(open === item.id ? null : item.id)}
                >
                  {depth === 1 && <GnbIcon className="icon" />}
                  {showNavIcon && <NavEnter className="icon" />}
                  {isOpen && <span className="menu-name">{item.name}</span>}
                </button>
                {/* 2뎁스는 토글, 3뎁스는 항상 표시 */}
                <div className={`submenu-wrapper ${depth === 1 ? (open === item.id ? 'open' : '') : 'open'}`}>
                  <RenderMenu items={item.children!} depth={depth + 1} parentActive={isActive} isOpen={isOpen} />
                </div>
              </>
            ) : (
              isOpen && (
                <Link href={item.link || "#"} className={"menu-item depth-" + depth + (isActive ? " active" : "")}>
                  {showNavIcon && <NavEnter className="icon" />}
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="menu-name">{item.name}</span>
                </Link>
              )
            )}
          </li>
        );
      })}
    </ul>
  );
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const handleToggle = () => {
    onToggle(!isOpen);
  };

  return (
    <aside className={`${isOpen ? "is-open" : ""}`}>
      <button
        type="button"
        className="toggle-btn"
        onClick={handleToggle}
      >
        {isOpen ? <NavClose /> : <NavOpen />}
      </button>
      <nav className="nav-menu">
        <RenderMenu items={menuList} isOpen={isOpen} />
      </nav>
      <div className="sidebar-footer">
        <Link href="/" className="footer-btn">
          <NavHome className="icon" />
        </Link>
        <Link href="/guide" className="footer-btn" style={{marginTop: "1px"}}>
          <NavSetting className="icon" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar; 