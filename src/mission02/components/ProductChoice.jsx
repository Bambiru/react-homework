/* eslint-disable react/prop-types */
export const ProductChoice = ({ data }) => {
  return (
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
            <span className="w-3 text-center product_quantity">1</span>
            <button>
              <img
                src="/input/plus.svg"
                alt="수량 증가"
                className="cursor-pointer quantity_increase"
              />
            </button>
          </div>
          <div className="product_select_price">
            <span className="text-content">
              {data.price.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
