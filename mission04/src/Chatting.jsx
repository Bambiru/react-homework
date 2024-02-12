import { useContext, useEffect, useRef } from 'react';
import PocketBase from 'pocketbase';
import { ChatContents, Form } from '@/components';
import { ContentContext } from '@/context/Context';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Chatting({ sender = 'bambi' }) {
  const pb = new PocketBase('https://jandi-market.pockethost.io');
  const { contentArray, setContentArray } = useContext(ContentContext);
  const [room, setRoom] = useState(null);
  const { pathname } = useLocation();
  const chattingRoom = pathname.split('/')[3];
  const scrollRef = useRef(null); // useRef 초기화
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await pb.collection('chatting').getList(1, 1000, {
      filter: `chattingRoom='${chattingRoom}'`,
    });
    // const response = pb.collection('chatting').subscribe('*', function (e) {
    //   console.log(e.record);

    //   setContentArray(e.record);
    // });
    setContentArray(response);
  };

  const record = async () => {
    const response = await pb.collection('chattingList').getOne(chattingRoom);
    setRoom(response);
  };

  useEffect(() => {
    record();
  }, []); // 의존성 배열 명시

  useEffect(() => {
    const scroll = scrollRef.current;
    fetchData();

    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight;
    }
  }, [contentArray]);

  return (
    <>
      <div className="flex justify-start p-2 font-semibold text-center text-gray-300 bg-gray-700 border rounded-md gap-28">
        <button
          onClick={() => navigate(-1)}
          type="button"
          aria-label="뒤로 가기"
        >
          ←
        </button>
        <h1>{`${room?.roomTitle} : ${sender}`}</h1>
      </div>

      <ChatContents scrollRef={scrollRef} sender={sender} />
      <Form chattingRoom={chattingRoom} sender={sender} pb={pb}></Form>
    </>
  );
}

export default Chatting;
