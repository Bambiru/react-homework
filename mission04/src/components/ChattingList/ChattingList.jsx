import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ChattingList() {
  const pb = new PocketBase('https://jandi-market.pockethost.io');

  const [data, setData] = useState(null);
  const { pathname } = useLocation();
  const userId = pathname.split('/')[2];

  const name = sessionStorage.getItem('name');

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      const chattingList = await pb.collection('chattingList').getList(1, 50);

      const filteredRooms = chattingList.items.filter((room) => {
        const users = JSON.parse(room.users); // users 필드를 배열로 변환
        return users.includes(name);
      });

      if (!isCancelled) {
        setData(filteredRooms);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [name]);

  useEffect(() => {
    pb.collection('chatting').subscribe('*', function (e) {
      console.log(e.record.content);
      return e.record.content;
    });
  }, []);

  return (
    <div className="h-full p-4 bg-gray-200 rounded-lg">
      <h2 className="mt-6 mb-10 text-2xl text-center">{name}의 채팅 목록</h2>
      <ul className="flex flex-col gap-4">
        {data?.map((list) => {
          const createdDate = new Date(list.updated);
          const koreanTime = createdDate.toLocaleString('ko-KR', {
            timeZone: 'Asia/Seoul',
          });

          const dateParts = koreanTime.split(' ');
          const timeParts = dateParts[dateParts.length - 1].split(':');

          const hours = String(timeParts[0]).padStart(2, '0');
          const minutes = String(timeParts[1]).padStart(2, '0');

          const formattedTime = `${dateParts[3]} ${hours}:${minutes}`;
          return (
            <li key={list.id} className="p-4 bg-white rounded-md">
              <Link
                to={`/chat/${userId}/${list.id}`}
                className="flex justify-between cursor-pointer"
              >
                <h3 className="text-lg font-semibold">{list.roomTitle}</h3>
                <time className="text-gray-300" dateTime={formattedTime}>
                  {formattedTime}
                </time>
              </Link>
              <p>{/* 마지막 채팅 */}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChattingList;
