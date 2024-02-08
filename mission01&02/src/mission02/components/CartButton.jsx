export const CartButton = () => {
  return (
    <div className="flex items-start gap-3">
      <button className="wish_list" data-wish="false">
        <svg
          className="cursor-pointer text-primary icon_box_gray h-14 w-14"
          aria-hidden="true"
        >
          <use href="/icon/_sprite.svg#Heart" className="icon_heart"></use>
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
  );
};
