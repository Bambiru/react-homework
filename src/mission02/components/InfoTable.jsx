/* eslint-disable react/prop-types */
import { ProductChoice } from "./ProductChoice";

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

export function InfoTable({ data }) {
  return (
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
          {generateInfoSection("당도", `${data.sugar_content} Brix 이상`)}
          {generateInfoSection("안내사항", data.notification)}
        </dl>
      </div>
      <ProductChoice data={data} />
    </div>
  );
}
