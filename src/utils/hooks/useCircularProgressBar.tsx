"use client";

import { useMemo } from "react";
import {
  CircularProgressbar,
  CircularProgressbarProps,
  buildStyles,
} from "react-circular-progressbar";

interface UseCircularProgressbarProps extends CircularProgressbarProps {
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

export function useCircularProgressbar({
  width = 120,
  height = 120,
  style = {},
  ...restProps
}: UseCircularProgressbarProps) {
  const ProgressbarComponent = useMemo(
    () => (
      <div style={{ width, height, ...style }}>
        <CircularProgressbar {...restProps} />
      </div>
    ),
    [width, height, style, ...Object.values(restProps)]
  );

  return ProgressbarComponent;
}
