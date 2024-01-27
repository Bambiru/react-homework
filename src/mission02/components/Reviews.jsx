import { Pagination } from "./Pagination";

export const Reviews = () => {
  return (
    <>
      <section
        role="tabpanel"
        id="section_reviews"
        aria-labelledby="tab_reviews"
        className="w1050 flex_column gap-14 pt-14"
      >
        <div className="flex justify-between">
          <div>
            <h2 className="pb-6 font-bold text-heading-xl leading_140">
              상품후기
            </h2>
            <p className="text-content">글후기 50원 적립금 혜택이 있어요.</p>
            <ul className="ml-5 font-semibold text-gray-500 list-disc text-label-small">
              <li>
                퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시
              </li>
              <li>
                5,000원 추가 적립 후기 작성은 배송완료일로부터 30일 이내
                가능합니다.
              </li>
              <li>
                작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균
                1~2일 소요)
              </li>
            </ul>
          </div>
          <button className="review_button button_normal w-155pxr h-44pxr">
            후기 작성하기
          </button>
        </div>

        <div className="gap-4 flex_column">
          <div className="flex justify-between font-semibold">
            <span className="text-content text-label-small review_count">
              총 2개
            </span>
            <div className="flex items-center gap-2 sort">
              <button className="text-gray-300">추천순</button>
              <span className="bg-gray-300 w-1pxr h-10pxr"></span>
              <button className="text-gray-300">최근 등록순</button>
            </div>
          </div>

          <div className="border-t border-t-black">
            <div>
              <h2
                className="review_title review_table_subject"
                aria-expanded="false"
              >
                <button className="review_toggle review_table_subject_toggle">
                  <span className="notice_badge">공지</span>금주의 베스트 후기
                  안내
                </button>
              </h2>
              <div
                aria-hidden="true"
                hidden
                className="p-5 border-b review_content bg-gray-50 border-b-gray-100"
              >
                [ 금주의 Best 후기 및 상품 후기 적립금 정책 변경 안내 ] <br />
                고객님 안녕하세요. 컬리 입니다. 적립금 지급 정책을 안내드리니
                컬리 이용에 참고 부탁드립니다. <br />
                ■ 적립금 지급 정책 ■<br />
                1. 일반 후기 -글 후기 50원/건 <br />
                -사진 후기 100원/건 <br />
                *퍼플/더퍼플 러버스 고객님께는 더블 후기 적립금이 지급됩니다.
                <br />
                *지급에 영업일 기준 1~2일 소요됩니다. <br />
                → 금~일 작성 시, 월요일 지급 <br />
                2. 베스트 후기 <br />
                1) 선정 건 수 : 일주일 최대 100건 <br />
                2) 혜택 : 선정 시 적립금 5,000원 <br />
                3) 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일)
                <br />
                *당첨 ID 및 그 주의 Best 후기는 후기 게시판에서 확인하실 수
                있습니다. <br />
                3. 상품 후기 게시판(Product review) 적립금 지급 유의 사항 <br />
                컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 따라서
                후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수
                조치될 수 있습니다. <br />
                1. 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을
                작성한 경우 <br />
                2. 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등
                부적합한 내용을 작성한 경우 <br />
                3. 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한
                경우 <br />
                4. 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을
                사용한 경우 <br />
                5. 구매한 상품이 아닌 캡쳐 사진, 포장 박스 사진 등 상품과 관련
                없는 이미지, 동영상을 사용한 경우 <br />
                또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한
                경우 작성자에 법적 책임의 소지가 있음을 알려드립니다.
              </div>
            </div>

            <div>
              <h2
                className="review_title review_table_subject"
                aria-expanded="false"
              >
                <button className="review_toggle review_table_subject_toggle">
                  <span className="notice_badge">공지</span>상품 후기 적립금
                  정책 안내
                </button>
              </h2>
              <div
                aria-hidden="true"
                hidden
                className="p-5 border-b bg-gray-50 review_content border-b-gray-100"
              >
                [ 금주의 Best 후기 및 상품 후기 적립금 정책 변경 안내 ] <br />
                고객님 안녕하세요. 컬리 입니다. 적립금 지급 정책을 안내드리니
                컬리 이용에 참고 부탁드립니다. <br />
                ■ 적립금 지급 정책 ■<br />
                1. 일반 후기 -글 후기 50원/건 <br />
                -사진 후기 100원/건 <br />
                *퍼플/더퍼플 러버스 고객님께는 더블 후기 적립금이 지급됩니다.
                <br />
                *지급에 영업일 기준 1~2일 소요됩니다. <br />
                → 금~일 작성 시, 월요일 지급 <br />
                2. 베스트 후기 <br />
                1) 선정 건 수 : 일주일 최대 100건 <br />
                2) 혜택 : 선정 시 적립금 5,000원 <br />
                3) 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일)
                <br />
                *당첨 ID 및 그 주의 Best 후기는 후기 게시판에서 확인하실 수
                있습니다. <br />
                3. 상품 후기 게시판(Product review) 적립금 지급 유의 사항 <br />
                컬리는 믿을 수 있는 후기문화를 함께 만들어가고자 합니다. 따라서
                후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수
                조치될 수 있습니다. <br />
                1. 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을
                작성한 경우 <br />
                2. 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등
                부적합한 내용을 작성한 경우 <br />
                3. 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한
                경우 <br />
                4. 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을
                사용한 경우 <br />
                5. 구매한 상품이 아닌 캡쳐 사진, 포장 박스 사진 등 상품과 관련
                없는 이미지, 동영상을 사용한 경우 <br />
                또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한
                경우 작성자에 법적 책임의 소지가 있음을 알려드립니다.
              </div>
            </div>

            <div className="review_list"></div>
          </div>

          <Pagination />
        </div>
      </section>
    </>
  );
};
