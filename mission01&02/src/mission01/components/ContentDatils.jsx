const whyKarly = [
  {
    svgImg: "/icon/_sprite.svg#Committee",
    title: "깐깐한 상품위원회",
    content: (
      <>
        나와 내 가족이 먹고 쓸 상품을 고르는
        <br />
        마음으로 매주 상품을 직접 먹어보고,
        <br />
        경험해보고 성분, 맛 안정성 등 다각도의
        <br />
        기준을 통과한 상품만을 판매합니다.
      </>
    ),
  },
  {
    svgImg: "/icon/_sprite.svg#Different",
    title: "차별화된 Karly Only 상품",
    content: (
      <>
        전국 각지와 해외의 훌륭한 생산자가
        <br />
        믿고 선택하는 파트너, 마켓칼리.
        <br />
        3천여 개가 넘는 칼리 단독 브랜드, 스펙의
        <br />
        Karly Only 상품을 믿고 만나보세요.
      </>
    ),
  },
  {
    svgImg: "/icon/_sprite.svg#Delivery",
    title: "신선한 풀콜드체인 배송",
    content: (
      <>
        온라인 업계 최초로 산지에서 문 앞까지
        <br />
        상온, 냉장, 냉동 상품을 분리 포장 후<br />
        최적의 온도를 유지하는 냉장 배송 시스템,
        <br />
        풀콜드체인으로 상품을 신선하게 전해드립니다.
      </>
    ),
  },
  {
    svgImg: "/icon/_sprite.svg#Price",
    title: "고객, 생산자를 위한 최선의 가격",
    content: (
      <>
        매주 대형 마트와 주요 온라인 마트의 가격
        <br />
        변동 상황을 확인해 신선식품은 품질을
        <br />
        타협하지 않는 선에서 최선의 가격으로,
        <br />
        가공식품은 언제나 합리적인 가격으로
        <br />
        정기 조정합니다.
      </>
    ),
  },
  {
    svgImg: "/icon/_sprite.svg#Enviroment",
    title: "환경을 생각하는 지속 가능한 유통",
    content: (
      <>
        친환경 포장재부터 생산자가 상품에만
        <br />
        집중할 수 있는 직매입 유통구조까지,
        <br />
        지속 가능한 유통을 고민하며 컬리를 있게
        <br />
        하는 모든 환경(생산자,커뮤니티,직원)이
        <br />더 나아질 수 있도록 노력합니다.
      </>
    ),
  },
];

export const ContentDatils = () => {
  return (
    <>
      <section
        role="tabpanel"
        id="section_details"
        aria-labelledby="tab_details"
        className="w1050 pt-14"
      >
        <h2 className="sr-only">상세정보</h2>

        <div className="product_detail_img"></div>

        <article className="items-center border-t border-t-gray-100 pt-72pxr pb-84pxr flex_column gap-35pxr">
          <h3 className="font-bold text-heading-xl leading_140">WHY KARLY</h3>

          <div className="flex_column">
            <div className="flex flex-wrap justify-center">
              {whyKarly.map((card, index) => (
                <article className="why_article" key={index}>
                  <svg className="why_article_img_size" aria-hidden="true">
                    <use href={card.svgImg}></use>
                  </svg>
                  <h4 className="why_article_title">{card.title}</h4>
                  <p className="text-center">{card.content}</p>
                </article>
              ))}
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
