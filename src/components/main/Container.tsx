"use client";

import React from "react";
import { useAppSelector } from "@/lib/hook";
import Home from "@/assets/images/svgs/home.svg";
import { motion } from "framer-motion";

const Container = () => {

  const mainAnimation = {
    initial: {
      opacity: 0,
      y: 120,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="main-container">
      <div className="container">
      <section style={{ height: "100vh" }}>
        <div className="main-intro">
          <div className="icon">
            <motion.div
              className="icon-wrap"
              variants={mainAnimation}
              initial="initial"
              animate="animate"
            >
              {/* svg 컴포넌트 선언 */}
              <Home width={80} height={80} />
            </motion.div>
          </div>

          <div className="title-box">
            <motion.h2
              className="section-title"
              variants={mainAnimation}
              initial="initial"
              animate="animate"
            >
              환영합니다. nextjs 베이스 프로젝트입니다.
            </motion.h2>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Container;
