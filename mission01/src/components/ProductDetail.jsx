export const ProductDetail = () => {
  return (
    <>
      <section className="w-[1050px] mx-auto mt-0 mb-12">
        <h2 className="sr-only">상품 정보</h2>
        <div className="product">
          <div className="text-label-small w-560pxr">
            <div className="gap-4 mb-5 flex_column">
              <span className="font-bold text-heading-large leading_140">
                샛별배송
              </span>
              <div className="product_header"></div>
              <div className="font-semibold product_price"></div>
              <div className="product_origin"></div>
              <p className="font-semibold text-primary text-label-medium login_point">
                로그인 후, 적립 혜택이 제공됩니다.
              </p>
            </div>
            <div className="border-gray-200 border-y">
              <div className="border-b border-gray-200">
                <dl className="font-semibold text-gray-500 divide-y divide-gray-200 product_info"></dl>
              </div>
              <div className="font-semibold info_flex">
                <p className="min-w-32">상품선택</p>
                <div className="p-3 border border-gray-200 w-432pxr product_select_name">
                  <div className="flex items-end justify-between">
                    <div className="flex items-center gap-2 border border-gray-200">
                      <button>
                        <img
                          src="/input/minus-disabled.svg"
                          alt="수량 감소 비활성화"
                          className="cursor-pointer quantity_decrease"
                        />
                      </button>
                      <span className="w-3 text-center product_quantity">
                        1
                      </span>
                      <button>
                        <img
                          src="/input/plus.svg"
                          alt="수량 증가"
                          className="cursor-pointer quantity_increase"
                        />
                      </button>
                    </div>
                    <div className="product_select_price"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-end justify-end gap-2 my-7 flex_column">
              <p className="flex items-center justify-end font-semibold text-heading-medium">
                총 상품 금액 :
                <strong className="pl-6 pr-1 total_price text-label-xl"></strong>
                <span className="pl-2 ml-2 font-bold">원</span>
              </p>
              <p className="flex gap-1.5 items-center">
                <span className="px-2 text-white border-accent-yellow bg-accent-yellow">
                  적립
                </span>
                <span className="text-label-medium login_point">
                  로그인 후, 적립 혜택 제공
                </span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <button className="wish_list" data-wish="false">
                <svg
                  className="cursor-pointer text-primary icon_box_gray h-14 w-14"
                  aria-hidden="true"
                >
                  <use
                    href="/icon/_sprite.svg#Heart"
                    className="icon_heart"
                  ></use>
                </svg>
                <span className="sr-only">찜하기</span>
              </button>
              <button disabled>
                <svg
                  className="text-gray-100 icon_box_gray h-14 w-14 cursor-no-drop"
                  aria-hidden="true"
                >
                  <use href="/icon/_sprite.svg#Bell"></use>
                </svg>
                <span className="sr-only">재입고 알림 신청</span>
              </button>
              <button className="font-semibold cart_button button_normal h-54pxr w-424pxr text-label-medium">
                장바구니 담기
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
