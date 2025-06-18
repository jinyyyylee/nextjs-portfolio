"use client";

import { motion } from "framer-motion";
import Home from "@/assets/images/svgs/home.svg";
import Link from "next/link";
import styles from "./page.module.scss";

const Page = () => {
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

            <motion.div
              className={styles['button-wrap']}
              variants={mainAnimation}
              initial="initial" 
              animate="animate"
            >
              <Link href="/auth" className={styles['enter-btn']}>
                Auth 입장하기
              </Link>
              <Link href="/guide" className={styles['enter-btn']}>
                Guide 입장하기
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
