import { useRef } from 'react';

function Form({ chattingRoom, sender, pb }) {
  const contentRef = useRef();

  const handleSubmitContents = async (e) => {
    /* form이 제출되어 리렌더링 되는 것을 막아줍니다. */
    e.preventDefault();

    /* input에 작성된 value값을 가져옵니다. */
    const content = contentRef.current.value;

    const data = {
      chattingRoom,
      sender,
      content,
    };

    /* 내용이 없는 경우 전송되지 않습니다. */
    if (content !== '') {
      /* 작성된 후에는 빈 값으로 돌아갑니다. */
      contentRef.current.value = null;
      /* pb의 chatting에 data를 보내줍니다. */
      await pb.collection('chatting').create(data);
    }
  };

  return (
    <form
      className="flex justify-between gap-2"
      onSubmit={handleSubmitContents}
    >
      <label htmlFor="chatContents" className="sr-only">
        채팅 작성
      </label>
      <input
        autoComplete="off"
        ref={contentRef}
        className="px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200 grow focus:ring-inset"
        type="text"
        id="chatContents"
        name="chatContents"
        placeholder="내용을 입력해주세요."
      />

      <button
        type="submit"
        className="h-full px-6 py-2 bg-blue-300 border rounded-md grow-0 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-inset"
      >
        전송
      </button>
    </form>
  );
}
export default Form;
