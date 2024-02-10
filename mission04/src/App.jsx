import Chatting from '@/Chatting';
import { useState } from 'react';
import { ContentContext, LoadingContext } from '@/context/Context';

function App() {
  const [loading, setLoading] = useState(true);
  const [contentArray, setContentArray] = useState([]);

  return (
    /* contextAPI사용 */
    <ContentContext.Provider value={{ contentArray, setContentArray }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <div className="flex items-center justify-center w-screen h-screen gap-3">
          <Chatting chattingRoom={'밤비네 모임'} sender="이정현" />
          <Chatting chattingRoom={'밤비네 모임'} sender="밤비" />
          <Chatting chattingRoom={'밤비네 모임'} sender="푸바오" />
        </div>
      </LoadingContext.Provider>
    </ContentContext.Provider>
  );
}

export default App;
