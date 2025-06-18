"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import {
  openPostcode,
  closePostcode,
  setSelectedAddress,
  resetSelectedAddress
} from "@/lib/features/postcodeSearchSlice";
import "@/assets/scss/guide/yjPark/index.scss";
import dynamic from "next/dynamic";
import WbImask from "@/components/common/WbImask";
const PostcodeSearch = dynamic(() => import("@/utils/hooks/usePostcodeSearch"), {
  ssr: false,
});

const Container = () => {
  const dispatch = useAppDispatch();
  const postcodeState = useAppSelector((state) => state.postcodeSearch);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="container">
      <section>
        <h2 className="section-title">[박용진]구현 기능 및 라이브러리</h2>

        <ul className="function-list">
          {/* 주소 검색 커스텀 훅 */}
          <li className="function-list-item">
            <div className="info">
              <p className="title">
                react-daum-postcode
                <span>(카카오맵 주소 검색 라이브러리)</span>
              </p>
              <span className="path">@/utils/hooks/usePostcodeSearch.tsx</span>
            </div>

            <div className="desc">
              <span className="desc-content">
                기존 'vue-daum-postcode'를 'react-daum-postcode' 라이브러리로 변경하여 주소 검색 기능을 구현했습니다.
              </span>
            </div>

            <div className="test-code">
              <span className="sample-title">예시 샘플</span>

              <div className="btn-wrap">
                <button
                  type="button"
                  className="message-btn"
                  onClick={() => dispatch(openPostcode())}
                >
                  주소 검색 열기
                </button>
              </div>

              <p className="selected-address">
                <strong>선택된 주소:&nbsp;</strong>
                {postcodeState.selectedAddress ? (
                  <>
                    <span>
                      {postcodeState.selectedAddress}
                    </span>

                    <button
                      type="button"
                      className="selected-address-btn"
                      onClick={() => dispatch(resetSelectedAddress())}
                    >
                      초기화
                    </button>
                  </>
                ) : (
                  <span className="selected-address-placeholder">
                    주소를 선택해주세요.
                  </span>
                )}
              </p>
            </div>

            {postcodeState.isOpen && (
              <div className="address-search-modal">
                <PostcodeSearch
                  onComplete={(data) => {
                      dispatch(setSelectedAddress(data.roadAddress));
                      dispatch(closePostcode());
                  }}
                  onClose={() => dispatch(closePostcode())}
                />
              </div>
            )}
          </li>
          {/* //주소 검색 커스텀 훅 */}

          {/* imask 커스텀 훅 */}
          <li className="function-list-item">
            <div className="info">
              <p className="title">react-imask</p>

              <span className="path">@/components/common/WbImask.tsx</span>
            </div>

            <div className="desc">
              <span className="desc-content">
                vue-imask는 input에 :imask 속성만 추가하면 간단하게 마스킹이 적용되고, v-model로 값 관리가 가능합니다.
                <br />
                반면, react-imask는 mask, value, onAccept 등 여러 props를 명확히 지정해야 하며, 입력값 상태도 직접 useState 등으로 관리해야 합니다.
              </span>
            </div>

            <div className="test-code">
              <span className="sample-title">예시 샘플</span>

              <div className="input-wrap">
                {/* 전화번호 */}
                <div className="wb-input">
                  <p className="wb-input-title">
                    전화번호
                  </p>

                  <div className="wb-input-cont">
                    <WbImask
                      value={phoneNumber}
                      onAccept={setPhoneNumber}
                      type="tel"
                      mask="000-0000-0000"
                      placeholder="전화번호를 입력하세요."
                    />
                  </div>
                </div>
                {/* //전화번호 */}

                {/* 날짜 */}
                <div className="wb-input">
                  <p className="wb-input-title">
                    날짜
                  </p>

                  <div className="wb-input-cont">
                    <WbImask
                      value={date}
                      onAccept={setDate}
                      type="number"
                      mask="0000-00-00"
                      placeholder="날짜를 입력하세요. (YYYY-MM-DD)"
                    />
                  </div>
                </div>
                {/* //날짜 */}

                {/* 시간 */}
                <div className="wb-input">
                  <p className="wb-input-title">
                    시간
                  </p>

                  <div className="wb-input-cont">
                    <WbImask
                      value={time}
                      onAccept={setTime}
                      type="number"
                      mask="00:00"
                      placeholder="시간을 입력하세요. (HH:MM)"
                    />
                  </div>
                </div>
                {/* //시간 */}
              </div>
            </div>
          </li>
          {/* //imask 커스텀 훅 */}
        </ul>
      </section>
    </div>
  );
};

export default Container;
