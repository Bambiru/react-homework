/* eslint-disable react/prop-types */
export function ProductHeader({ data, floorDiscountPrice }) {
  return (
    <div className="gap-4 mb-5 flex_column">
      <span className="font-bold text-heading-large leading_140">샛별배송</span>
      <div className="product_header">
        <h2 className="font-semibold text-label-xl">
          {`${data.brand !== "" ? `${data.brand} ` : ""}${data.name}`}
        </h2>
        <p className="text-gray-400 text-paragraph-medium">{data.desc}</p>
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
  );
}
