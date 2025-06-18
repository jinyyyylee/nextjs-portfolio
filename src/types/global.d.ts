// 2025.05.28 [mhlim]: 전역 타입 정의 파일 추가

declare global {
  // 토스트 메시지 타입
  interface toastMessage {
    message: string;
    toastActive: boolean;
    toastActive: Dispatch<SetStateAction<boolean>>;
  }

  // 실시간 뷰포트 크기 추출 커스텀 훅 타입
  interface windowSize {
    width: number;
    height: number;
  }
}

declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}

export {};
