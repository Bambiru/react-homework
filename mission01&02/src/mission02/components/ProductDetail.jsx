/* eslint-disable react/prop-types */
import { CartButton } from "./CartButton";
import { InfoTable } from "./InfoTable";
import { ProductHeader } from "./ProductHeader";
import { TotalPrice } from "./TotalPrice";

export const ProductDetail = ({ data }) => {
  const discountPrice = data.price - (data.price * data.discount) / 100;
  const floorDiscountPrice = Math.floor(discountPrice / 10) * 10;
  const imgURL = `https://jandi-market.pockethost.io/api/files/${data.collectionId}/${data.id}`;

  return (
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
          <ProductHeader data={data} floorDiscountPrice={floorDiscountPrice} />
          <InfoTable data={data} />
          <TotalPrice floorDiscountPrice={floorDiscountPrice} />
          <CartButton />
        </div>
      </div>
    </section>
  );
};
