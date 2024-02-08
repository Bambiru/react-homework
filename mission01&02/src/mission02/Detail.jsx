import { ContentDatils } from "./components/ContentDatils";
import { Description } from "./components/Description";
import { Inquiry } from "./components/Inquiry";
import { ProductDetail } from "./components/ProductDetail";
import { Reviews } from "./components/Reviews";
import { TabNavigation } from "./components/TabNavigation";
import contentData from "./data.json";

document.title = `${contentData.name} | 잔디마켓`;

export const Detail = () => {
  return (
    <main className="pb-24 mt-12">
      <h1 className="sr-only">상품 디테일 페이지</h1>
      <ProductDetail data={contentData} />
      <TabNavigation />
      <Description />
      <ContentDatils />
      <Reviews />
      <Inquiry />
    </main>
  );
};
