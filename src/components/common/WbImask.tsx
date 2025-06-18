// IMask 라이브러리
import { IMaskInput } from "react-imask";

interface CustomIMaskInputProps {
  mask: string | RegExp | Array<any>; // 마스크 형식
  value: string;                      // 입력 값 
  onAccept: (value: string) => void;  // 마스크 적용 후 실행되는 함수
  placeholder?: string;               // 플레이스홀더
}

const WbImask = ({ mask, value, onAccept, placeholder }: CustomIMaskInputProps) => {
  return (
    <IMaskInput
      mask={mask}
      value={value}
      onAccept={onAccept}
      placeholder={placeholder}
      unmask={true}
      className="wb-imask"
    />
  );
};

export default WbImask;