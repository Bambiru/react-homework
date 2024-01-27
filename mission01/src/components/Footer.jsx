export const Footer = () => {
  return (
    <>
      <div className="border text-content border-t-gray-100">
        <section className="flex justify-between pb-8 border-b w1050 pt-7 border-b-gray-100">
          <h3 className="sr-only">푸터 정보 영역</h3>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-heading-large">고객행복센터</h2>

            <div className="flex items-center gap-2">
              <strong className="font-bold text-heading-xxl">1644-1107</strong>
              <span className="font-bold text-label-medium">
                월~토요일 오전 7시 - 오후 6시
              </span>
            </div>

            <div className="flex flex-col gap-4 text-paragraph-medium">
              <div className="flex items-center gap-4">
                <button className="inquiry_btn">카카오톡 문의</button>
                <div>
                  월~토요일 | 오전 7시 - 오후 6시
                  <br />
                  일/공휴일 | 오전 7시 - 오후 1시
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="inquiry_btn">1:1 문의</button>
                <div>
                  365일
                  <br />
                  고객센터 운영시간에 순차적으로 답변드리겠습니다.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScWcjRuN6eWJK-G8x3NwBfE8IyKZIOq7jhD3fUXuKSWwPqzJw/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="inquiry_btn"
                >
                  대량주문 문의
                </a>
                <div>
                  월~금요일 | 오전 9시 - 오후 6시
                  <br />
                  점심시간 | 낮 12시 - 오후 1시
                </div>
              </div>
            </div>

            <ul className="text-label-small leadng-19pxr">
              <li>
                비회원 문의 :
                <a href="mailto:help@jandicorp.com" className="text-primary">
                  help@jandicorp.com
                </a>
              </li>
              <li>
                비회원 대량주문 문의 :
                <a href="mailto:help@jandicorp.com" className="text-primary">
                  help@jandicorp.com
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <ul className="flex justify-between gap-10pxr">
              <li>
                <a href="#" className="text-14pxr">
                  잔디소개
                </a>
              </li>
              <li>
                <a href="#" className="text-14pxr">
                  잔디소개영상
                </a>
              </li>
              <li>
                <a href="#" className="text-14pxr">
                  인재채용
                </a>
              </li>
              <li>
                <a href="#" className="text-14pxr">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="text-14pxr">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="text-14pxr">
                  이용안내
                </a>
              </li>
            </ul>
            <div className="flex flex-col items-start text-label-small leading-[160%]">
              <p>
                법인명 (상호) : 주식회사 잔디 | 사업자등록번호 : 261-81-23567 |
                <a
                  href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2618123567&apv_perm_no="
                  className="text-primary"
                >
                  사업자정보 확인
                </a>
              </p>
              <p>
                통신판매업 : 제 2018-서울강남-01646 | 개인정보보호책임자 :
                금잔디
              </p>
              <p>
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 :
                구준표
              </p>
              <p>
                입점문의 : 입점문의하기 | 제휴문의 :
                <a
                  href="mailto:business@jandicorp.com"
                  className="text-primary"
                >
                  business@jandicorp.com
                </a>
              </p>
              <p>
                채용문의 :
                <a href="mailto:recruit@jandicorp.com" className="text-primary">
                  recruit@jandicorp.com
                </a>
              </p>
              <p>팩스 : 070-7500-6098</p>
            </div>
            <ul className="flex justify-start gap-5">
              <li className="w-30pxr h-30pxr">
                <a
                  href="https://blog.naver.com/marketkurly"
                  className="sns_icon"
                  aria-label="마켓컬리 네이버 블로그 방문하기"
                ></a>
              </li>
              <li className="w-30pxr h-30pxr">
                <a
                  href="https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg"
                  className="sns_icon"
                  style="background-position: 30px 0"
                  aria-label="마켓컬리 유튜브 채널 방문하기"
                ></a>
              </li>
              <li className="w-30pxr h-30pxr">
                <a
                  href="https://m.post.naver.com/marketkurly"
                  className="sns_icon"
                  style="background-position: 60px 0"
                  aria-label="마켓컬리 네이버 포스트 방문하기"
                ></a>
              </li>
              <li className="w-30pxr h-30pxr">
                <a
                  href="https://www.instagram.com/marketkurly/"
                  className="sns_icon"
                  style="background-position: 90px 0"
                  aria-label="마켓컬리 인스타그램 방문하기"
                ></a>
              </li>
              <li className="w-30pxr h-30pxr">
                <a
                  href="https://www.facebook.com/Marketkurly/"
                  className="sns_icon"
                  style="background-position: 120px 0"
                  aria-label="마켓컬리 페이스북 방문하기"
                ></a>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex justify-between gap-2 pt-6 pb-8 w1050 text-10pxr">
          <h3 className="sr-only">인증 정보</h3>
          <button className="flex flex-row flex-wrap gap-2">
            <img
              className="w-34pxr"
              src="/icon/isms.png"
              alt="ISMS 인증 마크"
            />
            <span className="text-left">
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영
              <br />
              (심사받지 않은 물리적 인프라 제외)
              <br />
              [유효기간] 2022.01.19 ~2025.01.18
              <br />
            </span>
          </button>
          <button className="flex flex-row flex-wrap gap-2">
            <img
              className="w-34pxr"
              src="/icon/privacy.png"
              alt="개인정보보호 우수 웹사이트 인증 마크"
            />
            <span className="text-left">
              개인정보보호 우수 웹사이트
              <br />
              개인정보처리시스템 인증 (ePRIVACY PLUS)
            </span>
          </button>
          <button className="flex flex-row flex-wrap gap-2">
            <img
              className="w-102pxr"
              src="/icon/tosspayments.png"
              alt="토스페이먼츠 구매안전 서비스 로고"
            />
            <span className="text-left">
              토스페이먼츠 구매안전(에스크로)
              <br />
              서비스를 이용하실 수 있습니다.
            </span>
          </button>
          <button className="flex flex-row flex-wrap gap-2">
            <img
              className="w-34pxr"
              src="/icon/wooriBank.png"
              alt="우리은행 채무지급보증 로고"
            />
            <span className="text-left">
              고객님이 현금으로 결제한 금액에 대해 우리은행과
              <br />
              채무지급보증 계약을 체결하여 안전거래를 보장하고
              <br />
              있습니다.
            </span>
          </button>
        </section>

        <section className="pt-5 pb-8 text-center bg-gray-50">
          <h3 className="sr-only">저작권</h3>
          <div className="leading-4 text-gray-400 text-10pxr w1050">
            <p className="pb-2">
              마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가
              판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
              <br />
              마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
              통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질,
              교환/환불 등 의무와 책임을 부담하지 않습니다.
            </p>
            <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
          </div>
        </section>
      </div>
    </>
  );
};
