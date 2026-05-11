(pt8_infinitLoading2/page.tsx)
```
    useEffect(() => {
        if (inView) {
            loadMoreItems();  // << 해당 코드에서 에러가 발생
        }
    }, [inView, loadMoreItems]);
```

`Error: Calling setState synchronously within an effect can trigger cascading renders`


**❓ 무슨 에러일까?**

`LintError 왜 effect안에서 setState바로 써? 무한루프 걸리게 생겼잖아!`

1. `useEffect`의 **실행 흐름** 안에서 `setState`를 바로 호출하면(정확히는 동기적으로 호출하면), 
    렌더링 → Effect → setState → 리렌더링 → … 이 반복되는 **연쇄 렌더링(cascading render)**이 발생할 수 있습니다.
2. React 19는 이를 방지하기 위해 에러를 발생시킵니다.
3. 위 코드에서 `loadMoreItems()`는 `useEffect` 실행 시점에 바로 호출되고, 
    그 안의 `setIsLoading(true)`라는 setState 가 실행되면서 위 문제가 발생할 수 있다고 하는 것입니다.
4. 물론 `useCallback`으로 감싸고 dependency array가 `[]`이기 때문에 무한 루프가 발생하지는 않지만, 
    React 19는 실제 문제 발생 여부와 관계없이 **Effect 내 동기적 setState 패턴 자체를 금지**합니다.



** ✅ 해결 방법! **
1. useEffect를 안쓰면 된다.
2. useInView에 onChange라는 옵션을 사용한다. 



**❓이전 코드에서는 왜 에러가 안났냐? **

```
// (pt8_infinitLoading/page.tsx)
 useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // loadMoreItems();
            if (entries[0].isIntersecting) { // 감지를 하면, 
                loadMoreItems(); // 추가 요청
            }
        }, {
            threshold: 1, // ref가 다 보이면 실행 
        },);
        // ...
```

IntersectionObserver 안에서! 콜백 안에서 실행되었기 때문이다.
로직을 바로 `실행하는게 아니라`, 실행하기 위해 `등록` 하는 것이기 때문이다.