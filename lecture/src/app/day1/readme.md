# 1일차 수업


## 오리엔테이션 및 행정 안내

## tailwind CSS 
- [강사님 notion](https://daffy-slime-268.notion.site/1bea9b43a2b380ceacdbdfda017904c0?v=1bea9b43a2b380d99d06000c7691aa97)

### 기본 utility 클래스를 활용한 실습
1. 다양한 버튼 만들기
2. 카드 만들기
3. 폼 만들기 

위 실습에서 새로 알게 된 tailwind className

- h-screen: 높이를 가득
- tracking-tight: 글자 간격을 좁게 (letter-spacing)
- w-full: 부모너비 만큼 100% 차지

### CSS in JS
서버 컴포넌트는 브라우저 환경 없이 서버에서 실행되는 문제 때문에,
빌드 타임에 처리되는 스타일링 방식을 사용하는 해결책으로 tailwindcss를 채택


### @apply
apply 지시어를 활용하여 커스텀 클래스명 만들기
```
@import "tailwindcss";

.input {
  @apply w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none;
}
```
```
export default function Input({ placeholder }: { placeholder: string }) {
  return <input className="input" placeholder={placeholder} />;
}
```

### layer
layer 지시어를 사용해서 우선순위를 설정한다.
    일반 css는 나중에 작성된 속성이 덮어 씌어지는데 구조화를 통해 우선순위를 설정할 수 있습니다.
    - 우선순위: base < components

```
@import "tailwindcss";

/* 재사용할 클래스 지정 */
@layer components { 
  h1 {
    @apply text-7xl;
  }
}
/* 기본 스타일 지정 */
@layer base { 
  h1 {
    @apply text-2xl;
  }
}
```

```
export default function Home() {
  return <h1 className="title">안녕</h1>;
}
```

h1 태그에는 먼저 적혔지만 components 로 정의된 h1의 스타일이 적용됩니다.


### utility (feat. hover, focus)
utility 지시어로 커스텀 유틸리티 클래스 만들기  
그냥 apply로 정의한 클래스는 focus, hover에 적용이 되지 않는다.
```
@utility btn {
  @apply cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white;
}
```
```
export default function Home() {
  // hover:btn 동작 🟢
  return <button className="hover:btn">버튼</button>;
}
```

### clsx 라이브러리로 조건부 클래스 관리하기 
``` npm install clsx ```
- falsy 값 자동 필터링
- 문자 Array 자동으로 className 형태로 변경


### tailwind merge로 오버라이딩 가능하게 하기
``` npm install tailwind-merge ```

사용법
```
import { twMerge } from "tailwind-merge";
const Button = ({
  children,
  variant = "primary",
  size = "md",
  isDisabled = false,
  className,
}: ButtonProps) => {
  const buttonClasses = twMerge(
    clsx(
      // 기본 스타일
      "rounded font-medium focus:outline-none transition-colors focus:ring-2 focus:ring-offset-2",
 // ...
    ))}
```


### cva로 가독성 높게 구조화 하기

``` npm install class-variance-authority ```
사용법
```
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
	// 1. 항상 적용하는 스타일
	"rounded font-medium focus:outline-none transition-colors focus:ring-2 focus:ring-offset-2",
	// 2. 변형할 옵션들 - variants
	{
		variants: {
			// 3. 적용할 props들 
			variant: {
				primary: "~",
				secondary: "~",
				outline: "~",
			},
			size: {
				sm: "~",
				md: "~",
				lg: "~",
			},
			disabled: {
				true: "~",
				false: "~",
			}
		},
		// 4. 기본값 설정
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
	}
)

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isDisabled = false,
  className,
}: ButtonProps) => {
  const buttonClasses = twMerge(
	  // className은 속성을 특별하게 처리하여, variants에 정의되지 않아도 자동으로 클래스로 변환함
    clsx(buttonVariants({ variant, size, disabled: isDisabled, className }))
  );

// ...
}
```




