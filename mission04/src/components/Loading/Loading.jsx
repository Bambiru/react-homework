function Loading() {
  return (
    <>
      <figure className="h-[600px] flex flex-col justify-center items-center gap-2 p-5 overflow-auto scrollbar-hide bg-gray-300 rounded-lg">
        <img
          src="/bambi.webp"
          alt=""
          className="w-40 h-40 rounded-t-3xl opacity-80"
        />
        <figcaption className="text-2xl font-bold">BAMBI TALK</figcaption>
      </figure>
    </>
  );
}

export default Loading;
