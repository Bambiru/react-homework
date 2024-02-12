import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      /* 지정한 경로로 이동하게 된다. */
      navigate('/login');
    }, 3000);
  }, [navigate]);

  return (
    <figure className="bg-gray-200 rounded-lg h-[600px] flex flex-col justify-center items-center gap-2 p-5 overflow-auto scrollbar-hide ">
      <img
        src="/bambi.webp"
        alt="메인 로딩화면"
        className="w-40 h-40 rounded-t-3xl opacity-80"
      />
      <figcaption className="text-2xl font-bold">BAMBI TALK</figcaption>
    </figure>
  );
}

export default Loading;
