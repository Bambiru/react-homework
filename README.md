# 🦁 멋쟁이 사자처럼 \_ React 과제

<br/>

- [1주차 보러가기](./mission01/)
- [2주차 보러가기](./mission02/)

### 프로그램 초기 세팅 :wrench:

**:sparkles: vite 설치**

```bash
pnpm create vite@latest react-homework
react => JavaScript 선택

cd react-homework
```

**🌫 tailwind 설치 및 세팅**

```bash
pnpm add -D tailwindcss postcss autoprefixer postcss-import
pnpm tailwindcss init -p
```

```css
/* 📂 tailwind.css */
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

```js
/* 📂 최상위 mai.jsx */
/* tailwind.css 파일 생성 후 최상위 main.jsx 파일에서 import */
import "./styles/tailwind.css";
```

```js
/* 📂tailwind.config.js */
content: ["./index.html", "./src/**/*.jsx"];
```
