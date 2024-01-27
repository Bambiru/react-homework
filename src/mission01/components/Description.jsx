export const Description = () => {
  return (
    <>
      <section
        role="tabpanel"
        id="section_description"
        aria-labelledby="tab_description"
        className="w-[1050px] mt-0 mx-auto flex_column gap-24 mb-24 pt-14"
      >
        <h2 className="sr-only">상품설명</h2>
        <div className="product_description"></div>

        <div className="flex_column gap-68pxr">
          <div className="flex items-center gap-4">
            <div className="flex-grow h-px bg-gray-100"></div>
            <h3 className="font-bold text-heading-xxxl leading_140">
              Karly`s Check Point
            </h3>
            <div className="flex-grow h-px bg-gray-100"></div>
          </div>
          <div className="check_point"></div>
        </div>
      </section>
    </>
  );
};
