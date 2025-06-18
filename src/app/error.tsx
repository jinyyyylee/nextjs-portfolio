"use client";

import { useEffect } from "react";
import "@/assets/scss/error.scss";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅 (개발 환경에서만)
    if (process.env.NODE_ENV === 'development') {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        digest: error.digest,
        timestamp: new Date().toISOString()
      });
    }
  }, [error]);

  const getErrorSummary = () => {
    const errorMessage = error.message;
    const errorStack = error.stack;
    
    // 스택 트레이스에서 파일 정보 추출
    if (errorStack) {
      const stackLines = errorStack.split('\n');
      const relevantLines = stackLines
        .filter(line => line.includes('.tsx') || line.includes('.ts') || line.includes('.js'))
        .slice(0, 3); // 상위 3개만 표시
      
      return {
        message: errorMessage,
        files: relevantLines.map(line => {
          const match = line.match(/at\s+(.+?)\s+\((.+?):(\d+):(\d+)\)/);
          if (match) {
            return {
              function: match[1],
              file: match[2].split('/').pop(), // 파일명만 추출
              line: match[3],
              column: match[4]
            };
          }
          return null;
        }).filter(Boolean)
      };
    }
    
    return { message: errorMessage, files: [] };
  };

  const errorInfo = getErrorSummary();

  return (
    <div className="error-container">
      <div className="error-header">
        <h1>🚨 오류가 발생했습니다</h1>
        <p className="error-subtitle">예상치 못한 문제가 발생했습니다. 아래 정보를 확인해주세요.</p>
      </div>

      <div className="error-content">
        <div className="error-message">
          <h3>오류 메시지</h3>
          <p className="error-text">{errorInfo.message}</p>
        </div>

        {errorInfo.files.length > 0 && (
          <div className="error-location">
            <h3>오류 발생 위치</h3>
            <div className="file-list">
              {errorInfo.files.map((file, index) => (
                <div key={index} className="file-item">
                  <span className="file-name">{file?.file}</span>
                  <span className="file-location">
                    {file?.function} (라인 {file?.line})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {error.digest && (
          <div className="error-digest">
            <h3>오류 ID</h3>
            <p className="digest-text">{error.digest}</p>
          </div>
        )}
      </div>

      <div className="error-actions">
        <button onClick={reset} className="retry-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
            <path d="M21 3v5h-5"/>
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
            <path d="M3 21v-5h5"/>
          </svg>
          다시 시도
        </button>
        <button 
          onClick={() => window.location.href = '/'} 
          className="home-button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
          </svg>
          홈으로 이동
        </button>
      </div>
    </div>
  );
} 