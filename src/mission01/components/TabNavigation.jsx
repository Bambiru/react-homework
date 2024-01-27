const tabButton = [
  {
    "aria-controls": "section_description",
    id: "tab_description",
    title: "상품설명",
  },
  {
    "aria-controls": "section_details",
    id: "tab_details",
    title: "상세정보",
  },
  {
    "aria-controls": "section_reviews",
    id: "tab_reviews",
    title: "후기 ( 0 )",
  },
  {
    "aria-controls": "section_inquiry",
    id: "tab_inquiry",
    title: "문의",
  },
];

export const TabNavigation = () => {
  return (
    <>
      <div
        role="tablist"
        className="tabs flex justify-between w-[1050px] mx-auto mt-0 sticky top-0"
      >
        {tabButton.map((tab) => (
          <button
            role="tab"
            className="tab"
            aria-selected="false"
            key={tab.id}
            aria-controls={tab["aria-controls"]}
            id={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </>
  );
};
