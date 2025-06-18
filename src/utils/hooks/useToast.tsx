"use client";

import { useEffect, useState } from "react";
import InfoCircle from "@/assets/images/svgs/info-circle.svg";
import { motion } from "framer-motion";

const UseToast = ({ message }: { message: string }) => {
  const [toastActive, setToastActive] =
    useState<toastMessage["toastActive"]>(false);
  const [toastMessage, setToastMessage] = useState<toastMessage["message"]>("");

  let timer: NodeJS.Timeout;
  useEffect(() => {
    if (message.length > 0 && !toastActive) {
      setToastMessage(message);
      setToastActive(true);

      clearTimeout(timer);
      // 1.5초 후 토스트 메시지 비활성화 처리
      timer = setTimeout(() => {
        setToastActive(false);
      }, 1500);
    }
  }, [message]);

  return (
    <>
      {toastActive ? (
        <motion.div
          className="form-toast"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoCircle className="toast-icon" />
          <p className="txt">{toastMessage}</p>
        </motion.div>
      ) : null}
    </>
  );
};

export default UseToast;
