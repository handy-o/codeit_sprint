## TransitionEvent 객체 활용하기

`onTransitionEnd`의 콜백은 `TransitionEvent 객체`를 받습니다.

```
onTransitionEnd={(e) => {
  console.log(e.propertyName); // 어떤 CSS 속성의 transition이 끝났는지
  console.log(e.elapsedTime);  // 몇 초 걸렸는지
}}
```

⚠️ **문제 상황)**

1. `transition`으로 변하는 속성(`background-color`, `width`)이 **2가지**인데, 애니메이션 **진행 시간이 다름**
2. `background-color`는 `0.8`초 동안 변한다. 
3. `width`는 `3`초 동안 변한다.
4. transition이 끝났을 때 실행되는 `onTransitionEnd` 이벤트 발생 시 `"다운로드 완료!"` 텍스트 표시가 너무 빨리 되는 문제 
5. **Q)** 이때 `onTransitionEnd`는 구체적으로 언제 실행될까?
    
    > `background-color`가 끝나면 실행? vs `width`가 끝나면 실행?
    > if (e.propertyName === 'width') { ~~}