export const Pagination = () => {
  return (
    <>
      <div className="flex items-start gap-4 mx-auto">
        <button className="w-14 h-14 icon_box_gray" disabled>
          <svg
            className="text-gray-100 cursor-pointer"
            width="36"
            height="36"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <use href="/icon/_sprite.svg#Left"></use>
          </svg>
          <span className="sr-only">이전 페이지</span>
        </button>
        <button className="w-14 h-14 icon_box_gray" disabled>
          <svg
            className="text-gray-100 cursor-pointer"
            width="36"
            height="36"
            viewBox="0 0 18 18"
            aria-hidden="true"
          >
            <use href="/icon/_sprite.svg#Right"></use>
          </svg>
          <span className="sr-only">다음 페이지</span>
        </button>
      </div>
    </>
  );
};
