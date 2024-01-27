const productNav = ["신상품", "베스트", "알뜰쇼핑", "특가/혜택"];
const category = [
  {
    category: "선물하기",
    imgSrc: "/menu/Gift.png",
  },
  {
    category: "채소",
    imgSrc: "/menu/Vegetable.png",
  },
  {
    category: "과일 · 견과 · 쌀",
    imgSrc: "/menu/Fruit.png",
  },
  {
    category: "수산 · 해산 · 건어물",
    imgSrc: "/menu/SeaFood.png",
  },
  {
    category: "정육 · 계란",
    imgSrc: "/menu/Meet.png",
  },
  {
    category: "국 · 반찬 · 메인요리",
    imgSrc: "/menu/Cook.png",
  },
  {
    category: "샐러드 · 간편식",
    imgSrc: "/menu/Salad.png",
  },
  {
    category: "면 · 양념 · 오일",
    imgSrc: "/menu/Oil.png",
  },
  {
    category: "생수 · 음료 · 우유 · 커피",
    imgSrc: "/menu/Coffee.png",
  },
  {
    category: "간식 · 과자 · 떡",
    imgSrc: "/menu/Snack.png",
  },
  {
    category: "베이커리 · 치즈 · 델리",
    imgSrc: "/menu/Bread.png",
  },
  {
    category: "건강식품",
    imgSrc: "/menu/Health.png",
  },
  {
    category: "와인",
    imgSrc: "/menu/Wine.png",
  },
  {
    category: "전통주",
    imgSrc: "/menu/Traditional_Liquor.png",
  },
  {
    category: "생활용품 · 리빙 · 캠핑",
    imgSrc: "/menu/Detergent.png",
  },
  {
    category: "스킨케어 · 메이크업",
    imgSrc: "/menu/Cosmetics.png",
  },
  {
    category: "헤어 · 바디 · 구강",
    imgSrc: "/menu/shampoo.png",
  },
  {
    category: "주방용품",
    imgSrc: "/menu/Food.png",
  },
  {
    category: "가전제품",
    imgSrc: "/menu/HomeAppliances.png",
  },
  {
    category: "반려동물",
    imgSrc: "/menu/Dog.png",
  },
  {
    category: "베이비 · 키즈 · 완구",
    imgSrc: "/menu/Baby.png",
  },
  {
    category: "여행 · 티켓",
    imgSrc: "/menu/Travel.png",
  },
];
const topBanner = document.querySelector(".top_banner");
const closeBanner = (e) => {
  e.preventDefault();

  const closeButton = e.target.closest("button");

  if (closeButton) {
    topBanner.style.transform = "translateY(-100%)";
    topBanner.style.transition = "transform .2s ease-out";
    topBanner.addEventListener("transitionend", () => {
      topBanner.style.display = "none";
      // saveBannerStatus();
    });
  }
};

export const Header = () => {
  return (
    <header>
      <div className="w-full bg-white shadow-md z_index">
        <div className="flex top_banner bg-primary" onClick={closeBanner}>
          <div className="text-white w-[1050px] mx-auto flex_center py-1">
            <span className="font-light w-[63rem] text-center">
              지금 가입하고 인기상품{" "}
              <strong className="font-medium">100원</strong>에 받아가세요!
            </span>
            <button type="button">
              <img
                src="/icon/close_banner.png"
                alt="배너 쿠폰 닫기 버튼"
                className="w-42pxr h-42pxr"
              />
            </button>
          </div>
        </div>

        <div className="header_box w-[1050px] mx-auto mt-3">
          <ul id="sign" className="relative flex justify-end leading-8"></ul>

          <div className="flex items-center self-stretch justify-between my-7">
            <div className="flex items-center gap-3">
              <h1 className="w-82pxr h-42pxr">
                <a href="/">
                  <img src="/jandi_logo.svg" alt="잔디마켓" />
                </a>
              </h1>
              <a
                className="font-semibold text-heading-large text-primary"
                href="/"
              >
                잔디마켓
              </a>
              <div className="before:content-['|'] before:w-1pxr before:text-gray-200"></div>
              <a
                className="relative font-semibold text-gray-400 text-heading-large"
                href=""
              >
                잔디뷰티
                <svg
                  className="absolute top-[-3px] right-[-13px]"
                  role="img"
                  width="7"
                  height="7"
                  viewBox="0 0 7 7"
                >
                  <use href="/icon/new.svg#new 1" />
                </svg>
              </a>
            </div>

            <div className="relative">
              <div
                id="searchBar"
                className="absolute flex items-center justify-between px-5 py-3 border rounded-md top-[-30px] right-[-100px] w-400pxr border-primary"
              >
                <label htmlFor="search" className="sr-only">
                  검색어를 입력해주세요.
                </label>
                <input
                  id="search"
                  className="tracking-tight outline-none"
                  type="text"
                  placeholder="검색어를 입력해주세요"
                />
                <button
                  type="button"
                  className="absolute right-4"
                  aria-label="검색"
                >
                  <svg role="img" width="36" height="36" viewBox="0 0 36 36">
                    <use href="/icon/_sprite.svg#Search" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative">
              <ul
                id="icons"
                className="absolute right-[-5px] top-[-15px] flex items-center gap-5"
              >
                <li>
                  <button>
                    <svg
                      role="button"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <use href="/icon/_sprite.svg#Location" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button>
                    <svg
                      role="button"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <use href="/icon/_sprite.svg#Heart" />
                    </svg>
                  </button>
                </li>
                <li className="relative">
                  <button className="cart">
                    <svg
                      role="button"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <use href="/icon/_sprite.svg#Cart_header" />
                    </svg>
                  </button>
                  <div id="addBubble" className="hidden bubble"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="header_scroll"
          className="z-50 flex items-center justify-center w-full scroll"
        >
          <div
            id="categoryBox"
            className="flex items-center justify-between h-56pxr w-[1050px]"
          >
            <div id="menu_list_box" className="h-full">
              <button
                type="button"
                id="menu_button"
                className="flex items-center h-full gap-3 hover:text-primary"
              >
                <svg role="button" width="16" height="14" viewBox="0 0 16 14">
                  <use href="/icon/_sprite.svg#Hamburger" />
                </svg>
                카테고리
              </button>
              <ul
                className="absolute bg-white border z_index list_hidden w-247pxr"
                id="menu_list"
              >
                {category.map((item, index) => (
                  <li className="focus_menu" key={index}>
                    <a href="#" className="flex gap-2">
                      <img
                        className="w-6 h-6"
                        src={item.imgSrc}
                        alt={item.category}
                        aria-hidden="true"
                      />
                      {item.category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex ml-20">
              {productNav.map((item) => (
                <li key={item} className="product_nav nav_li">
                  <a href="/src/pages/productList/">{item}</a>
                </li>
              ))}
            </ul>

            <a
              id="delivery"
              className="px-2 py-1 text-sm font-normal text-gray-500 border border-gray-300 rounded-xl"
              href="#"
            >
              <span className="text-primary">샛별·낮</span>
              배송안내
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
