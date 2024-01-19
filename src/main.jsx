import "./styles/tailwind.css";
import { useState } from "react";
import { createRoot } from "react-dom/client";

const root = document.querySelector("#root");

const iconHeart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.9269 8.89295C28.3269 8.29261 27.6146 7.81636 26.8305 7.49144C26.0465 7.16651 25.2061 6.99927 24.3574 6.99927C23.5086 6.99927 22.6682 7.16651 21.8842 7.49144C21.1001 7.81636 20.3878 8.29261 19.7879 8.89295L17.9589 10.7209L16.1319 8.89295C14.9201 7.68091 13.2765 6.99989 11.5626 6.9997C9.84867 6.99951 8.2049 7.68017 6.99286 8.89195C5.78082 10.1037 5.0998 11.7473 5.09961 13.4612C5.09942 15.1751 5.78008 16.8189 6.99186 18.0309L8.81986 19.8599L17.2519 28.2939C17.4394 28.4814 17.6937 28.5867 17.9589 28.5867C18.224 28.5867 18.4783 28.4814 18.6659 28.2939L27.0989 19.8599L28.9269 18.0319C29.5271 17.432 30.0032 16.7198 30.328 15.9358C30.6528 15.1518 30.82 14.3115 30.82 13.4629C30.82 12.6144 30.6528 11.7741 30.328 10.9901C30.0032 10.2061 29.5271 9.49386 28.9269 8.89395V8.89295Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const wishList = (
  <button
    type="button"
    className="flex items-center justify-center gap-1 p-1 text-white border border-gray-100 rounded w-14 h-14"
  >
    {iconHeart}
  </button>
);

const button = document.querySelector("button");

createRoot(root).render(wishList);
button.addEventListener("click", () => {
  const [state, setState] = useState(false);
  setState((state = true));
});
