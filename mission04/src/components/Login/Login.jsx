import { Link } from 'react-router-dom';
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  /* State */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const pb = new PocketBase('https://jandi-market.pockethost.io');

  const fetchData = async () => {
    const resultList = await pb.collection('users').getList(1, 50, {
      filter: `email='${email}' && password='${password}'`,
    });
    if (resultList.items.length > 0) {
      sessionStorage.setItem('name', resultList.items[0].name);
      navigate(`/chat/${resultList.items[0].id}`);
    } else {
      alert('아이디나 비밀번호를 확인하세요!');
    }
  };

  /* handler */
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    await fetchData();
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (isChecked) {
      localStorage.setItem('userId', e.target.value);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckedUserId = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

    if (checked) {
      localStorage.setItem('userId', email);
    } else {
      localStorage.removeItem('userId');
    }
  };

  /* Effect */
  useEffect(() => {
    const savedEmail = localStorage.getItem('userId');
    if (savedEmail) {
      setEmail(savedEmail);
      setIsChecked(true);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmitLogin}
      className="flex flex-col items-center justify-center h-full bg-gray-200 rounded-lg"
    >
      <div className="flex flex-col w-2/3">
        <div className="w-full">
          <label htmlFor="userEmail" className="sr-only">
            이메일
          </label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            placeholder="bambi@dev.io"
            className="w-full p-3 rounded-t-md"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="w-full border-t">
          <label htmlFor="userPassword" className="sr-only">
            비밀번호
          </label>
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="********"
            className="w-full p-3 rounded-b-md"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
      </div>
      <div className="flex w-2/3 gap-2 my-5">
        <input
          type="checkbox"
          name="savedUserId"
          id="savedUserId"
          checked={isChecked}
          onChange={handleCheckedUserId}
        />
        <label htmlFor="savedUserId">아이디 저장하기</label>
      </div>
      <div className="flex flex-col w-2/3 gap-2">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-slate-500 text-amber-50"
        >
          로그인
        </button>
        <Link
          to="/join"
          className="px-4 py-2 text-center rounded-md bg-slate-500 text-amber-50"
        >
          회원가입
        </Link>
      </div>
    </form>
  );
}

export default Login;
