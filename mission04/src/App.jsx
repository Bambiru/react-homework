import Chatting from '@/Chatting';
import { ChattingList, Join, Loading, Login } from './components';
import { useState } from 'react';
import { ChattingListContext, ContentContext } from '@/context/Context';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  const [contentArray, setContentArray] = useState([]);
  const [chattingList, setChattingList] = useState(null);

  const name = sessionStorage?.getItem('name');

  return (
    /* contextAPI사용 */
    <ContentContext.Provider value={{ contentArray, setContentArray }}>
      <ChattingListContext.Provider value={{ chattingList, setChattingList }}>
        <div className="flex items-center justify-center w-screen h-screen gap-3">
          <div className="h-[600px] flex flex-col gap-3 w-[400px] ">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Loading />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route
                  path="/chat/:id"
                  element={<ChattingList name={name} />}
                />
                <Route
                  path="/chat/:id/:chattingRoom"
                  element={<Chatting sender={name} />}
                />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </ChattingListContext.Provider>
    </ContentContext.Provider>
  );
}

export default App;
