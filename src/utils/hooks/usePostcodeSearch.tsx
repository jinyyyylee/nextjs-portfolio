// 주소 검색 컴포넌트(카카오맵)
import DaumPostcode from 'react-daum-postcode';

interface PostcodeSearchProps {
  onComplete: (data: any) => void;
  onClose: () => void;
}

const PostcodeSearch = ({ onComplete, onClose  }: PostcodeSearchProps) => {
  return (
    <div className="address-search">
      <button className="address-search-btn" type="button" onClick={onClose}></button>
      
      <div className="address-search-content">
        <DaumPostcode onComplete={onComplete} />
      </div>
    </div>
  );
};

export default PostcodeSearch;