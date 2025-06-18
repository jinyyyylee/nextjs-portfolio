"use client";

import { useAppSelector } from "@/lib/hook";
import React from "react";
import LoginButton from "./LoginButton";
import "@/assets/scss/guide/hbPark/index.scss";
const Container = () => {

  return (
    <div className="container">
      <section>
        <h2 className="section-title">박효빈 사원 작업 공간</h2>
        <div className="section-content">
          <div className="title">next-auth</div>
          <LoginButton />
        </div>
      </section>
    </div>
  );
};

export default Container;
