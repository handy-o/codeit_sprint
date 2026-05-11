import { render, screen } from "@testing-library/react"
import ProductItem from "."

describe("품절이 아닐 때", () => {

})
test("현재 상품의 `title`과 `description`에 입력한 내용이 제대로 렌더링이 되는지 확인", () => {
    render(<ProductItem title="상품1" description="상품1의 설명글" />)

    const titlePd1 = screen.getByText("상품1");
    expect(titlePd1).toBeInTheDocument();

    const descPd1 = screen.getByText("상품1의 설명글");
    expect(descPd1).toBeInTheDocument();
})

test("증가 버튼과 감소 버튼, 초기 숫자인 1이 존재하는지 확인", () => {
    render(<ProductItem title="상품1" description="상품1의 설명글" />)

    const plusBtn = screen.getByRole("button", { name: "+" })
    const minusBtn = screen.getByRole("button", { name: "-" })
    const cnt = screen.getByText("1")

    expect(plusBtn).toBeInTheDocument();
    expect(minusBtn).toBeInTheDocument();
    expect(cnt).toBeInTheDocument();
})

test("구매하기 버튼이 존재하는지 확인", () => {
    render(<ProductItem title="상품1" description="상품1의 설명글" />)
    const buyBtn = screen.getByRole("button", { name: "구매하기" })
    expect(buyBtn).toBeInTheDocument();
})

test(`상품이 품절 상태(isSoldOut={true})일 때 “품절” 텍스트가 렌더링되는지 확인`, () => {
    render(<ProductItem title="품절 상품" description="품절된 상품의 설명글" isSoldOut={true} />)

    const soldOutText = screen.getByText("품절")
    expect(soldOutText).toBeInTheDocument();
})

test("상품이 품절 상태(`isSoldOut={true}`)일 때 버튼이 비활성화(`disabled`)되고, CSS 클래스명에 `opacity-50`과 `cursor-not-allowed`가 포함되는지 확인", () => {
    render(<ProductItem title="품절 상품" description="품절된 상품의 설명글" isSoldOut={true} />)

    const buyBtn = screen.getByRole("button", { name: "구매하기" });
    expect(buyBtn).toBeDisabled();
    expect(buyBtn).toHaveClass("opacity-50 cursor-not-allowed");
})