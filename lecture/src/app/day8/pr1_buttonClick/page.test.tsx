import { fireEvent, render, screen } from "@testing-library/react"
import { LikeButton } from "./page"


test("'좋아요' 버튼을 누르기 전에는 버튼에 '좋아요'가 표시되어야 하며, bg-gray-400 클래스가 적용되어야 한다.", () => {
    render(<LikeButton />);

    const likeBtn = screen.getByRole("button", { name: "좋아요" });
    expect(likeBtn).toBeInTheDocument();

    expect(likeBtn).toHaveClass("bg-gray-400");
})

test("'좋아요' 버튼을 클릭하면 '좋아요 취소'로 텍스트가 변경되어야 하며, bg-red-400 클래스가 적용되어야 한다.", () => {
    render(<LikeButton />)

    const likeBtn = screen.getByRole("button", { name: "좋아요" });
    fireEvent.click(likeBtn);

    // 방법1
    expect(likeBtn.textContent).toBe("좋아요 취소");
    // 방법2 - 포함이라.. '좋아요'도 통과되어버림 => 정규식을 써줘야함;
    // expect(likeBtn).toHaveTextContent(/^좋아요 취소$/); 
    // 방법3 - "좋아요 취소" 인 버튼을 찾아서 toBeInTheDocument 해보기
    // 생략

    expect(likeBtn).toHaveClass("bg-red-400");

})

test("'좋아요' 버튼을 한 번 클릭 후 다시 클릭하면 '좋아요' 버튼으로 되돌아와야 한다.", () => {
    render(<LikeButton />)

    const likeBtn = screen.getByRole("button", { name: "좋아요" });

    // 한 번
    fireEvent.click(likeBtn);
    expect(likeBtn.textContent).toBe("좋아요 취소");

    // 두 번
    fireEvent.click(likeBtn);
    expect(likeBtn.textContent).toBe("좋아요");
})