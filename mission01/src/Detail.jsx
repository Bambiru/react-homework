import { ContentDatils } from "./components/ContentDatils";
import { Description } from "./components/Description";
import { Inquiry } from "./components/Inquiry";
import { ProductDetail } from "./components/ProductDetail";
import { Reviews } from "./components/Reviews";
import { TabNavigation } from "./components/TabNavigation";

const productId = "6mky8e4dbh7bntd";
const URL = `${import.meta.env.VITE_PH_PL}/${productId}`;

const response = await fetch(URL, {
  headers: {
    "Content-Type": "application/json",
  },
});
if (!response.ok) throw new Error("API 호출에 실패했습니다.");
const data = await response.json();
document.title = `${data.name} | 잔디마켓`;

export const Detail = () => {
  return (
    <main className="pb-24 mt-12">
      <h1 className="sr-only">상품 디테일 페이지</h1>
      <ProductDetail data={data} />
      <TabNavigation />
      <Description />
      <ContentDatils />
      <Reviews />
      <Inquiry />
    </main>
  );
};
