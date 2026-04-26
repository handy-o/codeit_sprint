# 2일차 수업

## 다크모드

### next-theme
``` npm install next-themes ```


### 반응형 

- breakpoint 

- breakpoint 수정
```
@theme {
  --breakpoint-md: 800px;
  --breakpoint-lg: 900px;
}
```
- breakpoint 초기화 & 직접 셋팅
```
@theme {
  --breakpoint-md: initial;
  --breakpoint-tablet: 10rem;
  --breakpoint-laptop: 20rem;
  --breakpoint-desktop: 30rem;
}
```
```
 <h1 className="tablet:bg-red-500 laptop:bg-blue-500 desktop:bg-green-500">
        안녕
  </h1>
```

### clamp(최솟값, 선호값, 최댓값)
```
 <div className="w-[clamp(200px,50%,600px)] bg-amber-200">clamp 적용</div>
```


### CSS 커스텀 테마 설정 : @theme 지시어 사용
```
@theme {
  --color-mint-500: oklch(0.72 0.11 178);
  --text-big: 96px;
  --spacing-big: 65px;
}
```
```
  <>
      <div className="text-big bg-mint-500 p-big">1</div>
      <div className="mt-big bg-amber-100">2</div>
    </>
```

### tailwind 테마 변수 
[기본 테마 변수 종류 확인하기](https://tailwindcss.com/docs/theme#default-theme-variable-reference)


### CSS 변수로 테마 사용하기
var() 함수를 사용하여 테마 변수를 참조합니다.
```
@layer components {
  .typography {
    h1 {
      font-size: var(--text-3xl);
      font-weight: var(--font-weight-semibold);
      color: var(--color-gray-950);
    }

    p {
      font-size: var(--text-base);
      color: var(--color-mint-500);
    }
  }
}
```

```
<div className="typography">
      <h1>타이포그래피</h1>
      <p>타이포그래피</p>
    </div>
```


### tailwind 기본 Font
Tailwind css는 세 가지(font-sans, font-serif, font-mono) 기본 폰트 유틸리티를 제공
```
<p className="font-sans">Sans-serif 폰트로 표시됩니다.</p>
      <p className="font-serif">Serif 폰트로 표시됩니다.</p>
      <p className="font-mono">Monospace 폰트로 표시됩니다.</p>
```

### 커스텀 폰트(구글폰트) 사용하기
```
/* @import url()은 반드시 파일 최상단에 위치해야 합니다 */
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import "tailwindcss";

/* 커스텀 폰트 적용 */
@theme {
	/* 상단 폰트 url에서 family 이름을 가져와서 작성합니다 */
  --font-pacifico: "Pacifico";
}
```
```
<p className="font-pacifico">Pacifico 폰트로 표시됩니다.</p>
```


### 로컬 폰트 사용하기
다운로드 받은 폰트(.woff2)를 src/fonts 폴더에 넣기
```
/* 1. @font-face로 폰트 로드: 폰트 파일의 위치와 속성을 알려주는 역할 */
@font-face {
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url("../fonts/PretendardVariable.woff2") format("woff2");
}

/* 2. @theme에서 폰트 변수 정의 */
@theme {
  --font-pretendard: "Pretendard";
}
```
```
<p className="font-pretendard">Pretendard 폰트로 표시됩니다.</p>
```


### next.js 자체 font
- 전체 폰트에 적용 시키기 
layout.tsx 파일에 className에 `.className`

``` 
import { Pacifico } from "next/font/google"; 

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-pacifico",
});
//...
return (
    <html lang="en" className={pacifico.className}> // 여기
      <body>{children}</body>
    </html>
  );
// ...
```

- 선택 요소에 적용 시키기
동일하게 layout.tsx 파일을 보면, className에 `.varibale` 
```
 <html lang="en" className={pacifico.variable}> // 여기
    <body>{children}</body>
 </html>
```



## 실습 중 새로 알게 된 tailwind 속성
divide-y: 마지막 자식을 제외한 모든 자식 요소의 아래에 구분선 생성
divide-gray-100: 구분선 색상
rounded-full: 이미지 모서리 둥글게
truncate: 긴 텍스트를 컨테이너의 너비에 맞게 자르고, 끝부분에 말줄임표(…)를 추가하는 유틸리티 클래스