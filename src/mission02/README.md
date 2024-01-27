# 🦁 멋쟁이 사자처럼 \_ React mission02

<details>
  <summary>목차</summary>
  <ul>
    <li><a href='#과제 🤗'>과제 🤗</a></li>
    <li><a href='#폴더-구성-'>폴더 구성 💼</a></li>
    <li><a href='#코드-'>코드 💊</a></li>
    <li><a href='#트러블슈팅😣'>트러블슈팅😣</a></li>
    <li><a href='#결과'>결과 🎉</a></li>
    <li><a href='#아쉬운-점--과제를-하며-느낀-점'>아쉬운 점 😥 & 과제를 하며 느낀 점 😀</a></li>
  </ul>
</details>

### 과제 🤗

- [x] 바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택합니다.
- [x] 바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 로컬 드라이브에 저장합니다.
- [x] JSON 데이터를 불러와 마크업에 연결하여 UI를 구현하세요.
      필요한 경우, 리스트 렌더링을 활용해보세요.

---

### 폴더 구성 💼

<img width="180" src="/readmeImages/image-5.png"></img>

---

### 코드 💊

- mission01에서 사용되었던 것을 그대로 유지한 채로 컴포넌트 분리 및 동적 데이터만 넣어보았다.


  <img width="500" src="/readmeImages/image-4.png"></img> 

```jsx
import { ProductChoice } from "./ProductChoice";

function generateInfoSection(title, content, addContent = "") {
  return (
    <div className="info_flex">
      <dt className="min-w-32">{title}</dt>
      <dd>
        <p>{content}</p>
        {addContent}
      </dd>
    </div>
  );
}

export function InfoTable({ data }) {
  return (
    <div className="border-gray-200 border-y">
      <div className="border-b border-gray-200">
        <dl className="font-semibold text-gray-500 divide-y divide-gray-200 product_info">
          <div className="info_flex">
            <dt className="min-w-32">배송</dt>
            <dd>
              <p>샛별배송</p>
              <p className="text-gray-400">
                23시 전 주문 시 내일 아침 7시 전 도착
              </p>
              <p className="text-gray-400">
                (대구 부산 울산 샛별배송 운영시간 별도 확인)
              </p>
            </dd>
          </div>
          {generateInfoSection("판매자", "칼리")}
          {generateInfoSection(
            "포장타입",
            `${data.packaging} (종이포장)`,
            <p className="text-gray-400">
              택배배송은 에코 포장이 스티로폼으로 대체됩니다.
            </p>
          )}
          {generateInfoSection("판매단위", data.sales_unit)}
          {generateInfoSection("중량/용량", data.weight)}
          {generateInfoSection("유통기한", data.expiration_date)}
          {generateInfoSection("당도", `${data.sugar_content} Brix 이상`)}
          {generateInfoSection("안내사항", data.notification)}
        </dl>
      </div>
      <ProductChoice data={data} />
    </div>
  );
}

```

### 트러블슈팅😣
<img width="500" src="/readmeImages/image-6.png"></img>
- 줄바꿈이 적용되던 데이터를 json으로 받아오려고 하니 `<br/>`이 그대로 노출되는 현상이 발생하였다.
- 찾아보니 `\n`으로 처리 후, `split`를 이용해서 처리할 수 있다고 하여 적용하였다.
  
  ```jsx
  function generateInfoSection(title, content, addContent = "") {
  return (
    <div className="info_flex">
      <dt className="min-w-32">{title}</dt>
      <dd>
        <p>
          {content.split("\n").map((line) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
        </p>
        {addContent}
      </dd>
    </div>
  );
  }
  ```

<img width="500" src="/readmeImages/image-7.png"></img>



---

### 결과 🎉

<img width="500" src="/readmeImages/image-3.png"></img>

### 아쉬운 점 & 과제를 하며 느낀 점 😀

> 나름 컴포넌트를 나눈다고 나눠봤는데 애매하게 그냥 큰 파트로 나눈 거 같아서 조금 아쉽다. 나중에는 조금 더 디테일하게 나눠서 진짜 컴포넌트로서의 역할로 만들어보고 싶다.
> 
> 그리고 같은 props를 다른 컴포넌트에 계속해서 보냈는데, 이걸 조금 더 편리하게 할 수 있는 방법이 있을 것 같다. 이 방법에 대해 공부해봐야겠다고 느꼈다.
> 
> 또한, 바닐라에서 했던 코드를 그냥 가져와서 조금 다듬기만 하는 방식으로 가져왔는데, 제대로 작동한다니 신기했고, 이게 맞는지는.. 사실 아직도 모르겠다.