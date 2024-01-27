/* eslint-disable react/prop-types */

function generateInfoSection(title, content, addContent = "") {
  return (
    <div className="info_flex">
      <dt className="min-w-32">{title}</dt>
      <dd>
        <p>{content}</p>
        {addContent}
      </dd>
    </div>
  );
}

export const ProductDetail = ({ data }) => {
  const imgURL = `https://jandi-market.pockethost.io/api/files/${data.collectionId}/${data.id}`;
  const discountPrice = data.price - (data.price * data.discount) / 100;
  const floorDiscountPrice = Math.floor(discountPrice / 10) * 10;

  return (
    <>
      <section className="w-[1050px] mx-auto mt-0 mb-12">
        <h2 className="sr-only">상품 정보</h2>
        <div className="product">
          <img
            src={`${imgURL}/${data.main_image}`}
            alt={data.name}
            width="400"
            height="514"
          />
          <div className="text-label-small w-560pxr">
            <div className="gap-4 mb-5 flex_column">
              <span className="font-bold text-heading-large leading_140">
                샛별배송
              </span>
              <div className="product_header">
                <h2 className="font-semibold text-label-xl">
                  {`${data.brand !== "" ? `${data.brand} ` : ""}${data.name}`}
                </h2>
                <p className="text-gray-400 text-paragraph-medium">
                  {data.desc}
                </p>
              </div>
              <div className="font-semibold product_price">
                <strong className="text-label-xl">
                  <span className="text-red-500">
                    {`${data.discount > 0 ? `${data.discount}% ` : ""}`}
                  </span>
                  <span>{floorDiscountPrice.toLocaleString()}</span>
                  <span className="font-bold text-heading-medium">원</span>
                </strong>
                <p className="text-gray-400 text-heading-medium">
                  <s>{data.price.toLocaleString()}원</s>
                </p>
              </div>
              <div className="product_origin">
                <p className="font-semibold text-24pxr text-content">
                  원산지 : {data.origin}
                </p>
              </div>
              <p className="font-semibold text-primary text-label-medium login_point">
                로그인 후, 적립 혜택이 제공됩니다.
              </p>
            </div>
            <div className="border-gray-200 border-y">
              <div className="border-b border-gray-200">
                <dl className="font-semibold text-gray-500 divide-y divide-gray-200 product_info">
                  <div className="info_flex">
                    <dt className="min-w-32">배송</dt>
                    <dd>
                      <p>샛별배송</p>
                      <p className="text-gray-400">
                        23시 전 주문 시 내일 아침 7시 전 도착
                      </p>
                      <p className="text-gray-400">
                        (대구 부산 울산 샛별배송 운영시간 별도 확인)
                      </p>
                    </dd>
                  </div>
                  {generateInfoSection("판매자", "칼리")}
                  {generateInfoSection(
                    "포장타입",
                    `${data.packaging} (종이포장)`,
                    <p className="text-gray-400">
                      택배배송은 에코 포장이 스티로폼으로 대체됩니다.
                    </p>
                  )}
                  {generateInfoSection("판매단위", data.sales_unit)}
                  {generateInfoSection("중량/용량", data.weight)}
                  {generateInfoSection("유통기한", data.expiration_date)}
                  {generateInfoSection(
                    "당도",
                    `${data.sugar_content} Brix 이상`
                  )}
                  {generateInfoSection("안내사항", data.notification)}
                  {console.log(data.notification)}
                </dl>
              </div>
              <div className="font-semibold info_flex">
                <p className="min-w-32">상품선택</p>
                <div className="p-3 border border-gray-200 w-432pxr product_select_name">
                  <p className="mb-3">{data.name}</p>
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
                <strong className="pl-6 pr-1 total_price text-label-xl">
                  {floorDiscountPrice.toLocaleString()}
                </strong>
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
