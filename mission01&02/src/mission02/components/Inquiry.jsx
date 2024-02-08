import { Pagination } from "./Pagination";

export const Inquiry = () => {
  return (
    <>
      <section
        role="tabpanel"
        id="section_inquiry"
        aria-labelledby="tab_inquiry"
        className="w1050 pt-14"
      >
        <div className="gap-4 flex_column">
          <div className="flex justify-between mt-72pxr">
            <div>
              <h2 className="pb-6 font-bold text-heading-xl leading_140">
                상품문의
              </h2>
              <ul className="ml-5 font-semibold text-gray-500 list-disc text-label-small">
                <li>
                  상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과
                  다른 글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
                </li>
                <li>
                  배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리
                  내 1:1 문의에 남겨주세요.
                </li>
              </ul>
            </div>
            <button className="inquiry_button button_normal w-155pxr h-44pxr">
              문의하기
            </button>
          </div>

          <div className="border-t-2 border-t-black">
            <header className="flex justify-between border-b border-b-black">
              <h2 className="inquiry_table_group_title w-742pxr">제목</h2>
              <h3 className="inquiry_table_group_title w-100pxr">작성자</h3>
              <h3 className="inquiry_table_group_title w-100pxr">작성일</h3>
              <h3 className="inquiry_table_group_title w-100pxr">답변상태</h3>
            </header>

            <div>
              <h2
                className="inquiry_title"
                aria-expanded="false"
                data-secret="false"
              >
                <button className="flex font-semibold border-b border-b-gray-100">
                  <span className="inquiry_table_subject">
                    <span className="notice_badge"> 공지 </span>
                    판매(일시)중단 제품 안내 (22.11.10 업데이트)
                  </span>
                  <span className="table_width100">칼리</span>
                  <time dateTime="2017-02-01" className="table_width100">
                    2017.02.01
                  </time>
                  <span className="table_width100">-</span>
                </button>
              </h2>
              <div className="inquiry_content" aria-hidden="true" hidden>
                <div className="question inquiry_contents_layout">
                  <span>
                    <svg width="24" height="24" aria-hidden="true">
                      <use href="/icon/_sprite.svg#Question"></use>
                    </svg>
                  </span>
                  <p className="inquiry_contents_question">
                    스티로폼 박스도 손상되어 있어 포장이 터져 엉망이네요
                    <br />
                    환불 요청합니다.
                  </p>
                </div>
                <div className="answer inquiry_contents_layout">
                  <span>
                    <svg width="24" height="24" aria-hidden="true">
                      <use href="/icon/_sprite.svg#Answer"></use>
                    </svg>
                  </span>
                  <div className="inquiry_contents_answer">
                    <p className="text-content">
                      안녕하세요. 칼리입니다.
                      <br />
                      믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다.
                      <br />
                      <br />
                      더불어, 해당 게시판은 실시간으로 상담이 어려워 순차적으로
                      답변드리고 있는 관계로 신속하게 답변 드리지 못하여 대단히
                      죄송합니다.
                      <br />
                      <br />
                      다행히도 고객님의 불편하셨던 사항은 고객행복센터를 통해
                      안내 받으신 점 확인하였습니다.
                      <br />
                      <br />
                      불편을 드려 정말 죄송할 따름이며, 고객님께 늘 신선하고
                      최상의 상품을 불편 없이 전달드리기 위해 최선을 다하는
                      칼리가 되겠습니다.
                      <br />
                      <br />
                      칼리 드림.
                      <br />
                    </p>
                    <time className="text-gray-400" dateTime="2022-11-11">
                      2022.11.11
                    </time>
                  </div>
                </div>
              </div>
            </div>

            <div className="inquiry_list"></div>
          </div>

          <Pagination />
        </div>
      </section>
    </>
  );
};
