import { useContext, useEffect, useRef /* useState */ } from 'react';
import PocketBase from 'pocketbase';
import { ChatContents, Form, Loading } from '@/components';
import { ContentContext, LoadingContext } from '@/context/Context';

function Chatting({ chattingRoom, sender = 'bambi' }) {
  /* contentAPI 사용 */
  const { loading, setLoading } = useContext(LoadingContext);
  const { contentArray, setContentArray } = useContext(ContentContext);

  const pb = new PocketBase('https://jandi-market.pockethost.io');

  const scrollRef = useRef();
  async function fetchData() {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // 채팅방 추가 이벤트 리스너
    return await pb.collection('chatting').getList(1, 1000, {
      /* 해당 채팅방에 해당하는 내용만 가져옵니다. */
      filter: `chattingRoom='${chattingRoom}'`,
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // 비동기 함수를 선언합니다

    // 비동기 함수 호출
    fetchData().then((response) => {
      setContentArray(response);
    });
  });

  /* contentArray가 추가될 때마다 scroll을 내려줍니다. */
  useEffect(() => {
    scrollToBottom();
  }, [contentArray]);

  const scrollToBottom = () => {
    const scroll = scrollRef.current;
    if (scroll) {
      /* 스크롤을 제일 아래로 내려줍니다. */
      scroll.scrollTop = scroll.scrollHeight;
    }
  };

  return (
    <div className="flex flex-col gap-3 w-[400px]">
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className="py-2 font-semibold text-center text-gray-300 bg-gray-700 border rounded-md">{`${chattingRoom} : ${sender}`}</h1>
          <ChatContents
            scrollRef={scrollRef}
            contentArray={contentArray}
            sender={sender}
          />
          <Form chattingRoom={chattingRoom} sender={sender} pb={pb}></Form>
        </>
      )}
    </div>
  );
}

export default Chatting;
