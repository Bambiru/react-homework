import { useContext } from 'react';
import Recipient from '../Recipient/Recipient';
import Sender from '../Sender/Sender';
import { ContentContext } from '@/context/Context';

function ChatContents({ scrollRef, sender }) {
  const { contentArray } = useContext(ContentContext);
  return (
    <>
      <div
        ref={scrollRef}
        className=" h-[500px] flex flex-col  gap-2 p-5 overflow-auto scrollbar-hide bg-gray-300 rounded-md"
      >
        {contentArray.items?.map((content) => {
          const createdDate = new Date(content.created);
          const koreanTime = createdDate.toLocaleString('ko-KR', {
            timeZone: 'Asia/Seoul',
          });

          const dateParts = koreanTime.split(' ');
          const timeParts = dateParts[dateParts.length - 1].split(':');

          const hours = String(timeParts[0]).padStart(2, '0');
          const minutes = String(timeParts[1]).padStart(2, '0');

          const formattedTime = `${dateParts[3]} ${hours}:${minutes}`;

          if (content.sender === sender) {
            return (
              <Sender
                key={content.id}
                data={content}
                formattedTime={formattedTime}
              />
            );
          } else {
            return (
              <Recipient
                key={content.id}
                data={content}
                formattedTime={formattedTime}
              />
            );
          }
        })}
      </div>
    </>
  );
}

export default ChatContents;
