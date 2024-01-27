# 🦁 멋쟁이 사자처럼 \_ React mission02

<details>
  <summary>목차</summary>
  <ul>
    <li><a href='#과제 🤗'>과제 🤗</a></li>
    <li><a href='#폴더-구성-'>폴더 구성 💼</a></li>
    <li><a href='#코드-수정-'>코드 수정 💊</a></li>
    <li><a href='#결과'>결과 🎉</a></li>
    <li><a href='#아쉬운-점--과제를-하며-느낀-점'>아쉬운 점 😥 & 과제를 하며 느낀 점 😀</a></li>
  </ul>
</details>

### 과제 🤗

- [ ] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [ ] 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [ ] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
      필요한 경우, 리스트 렌더링을 활용해보세요.

---

### 폴더 구성 💼

<img width="180" src="/readmeImages/image.png"></img>

---

### 코드 수정 💊

<img width="500" src="/readmeImages/image-1.png"></img>

- 중복되는 코드가 많아 코드량이 길어지며, 가독성이 떨어졌습니다.
- 리액트로 넘어오면서 `content`를 객체,배열에 담아 `map`을 이용하여 중복되는 코드를 반복문을 통해 줄여주었습니다.

```jsx
const whyKarly = [
  {
    svgImg: "/icon/_sprite.svg#Committee",
    title: "깐깐한 상품위원회",
    content: (
      <>
        나와 내 가족이 먹고 쓸 상품을 고르는
        <br />
        마음으로 매주 상품을 직접 먹어보고,
        <br />
        경험해보고 성분, 맛 안정성 등 다각도의
        <br />
        기준을 통과한 상품만을 판매합니다.
      </>
    ),
  },
  {
    svgImg: "/icon/_sprite.svg#Different",
    title: "차별화된 Karly Only 상품",
    content: (
      ...
//////////////////////////////////////////////////////////////
{
  whyKarly.map((card, index) => (
    <article className="why_article" key={index}>
      <svg className="why_article_img_size" aria-hidden="true">
        <use href={card.svgImg}></use>
      </svg>
      <h4 className="why_article_title">{card.title}</h4>
      <p className="text-center">{card.content}</p>
    </article>
  ));
}
```

---

### 결과 🎉

<img width="500" src="/readmeImages/image-2.png"></img>

### 아쉬운 점 & 과제를 하며 느낀 점 😀
