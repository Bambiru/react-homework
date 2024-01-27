/* eslint-disable react/prop-types */
export const TotalPrice = ({ floorDiscountPrice }) => {
  return (
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
  );
};
