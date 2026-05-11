import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./page"
import useCounterStore from "@/stores/useCounterStore";

describe("Home 페이지 테스트", () => {
    afterEach(() => {
        useCounterStore.setState({ count: 0 })
    })
    test("첫 렌더링 시 초기값은 0이다.", () => {
        render(<Home />);
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    })

    test("증가 버튼 클릭 시 카운트가 증가해야 한다.", () => {
        render(<Home />);
        const incrementBtn = screen.getByText("증가");
        fireEvent.click(incrementBtn);
        expect(screen.getByText("Count: 1")).toBeInTheDocument();
    })

    test("감소 버튼 클릭 시 카운트가 감소해야 한다.", () => {
        render(<Home />);
        const decrementBtn = screen.getByText("감소");
        fireEvent.click(decrementBtn);
        expect(screen.getByText("Count: -1")).toBeInTheDocument();
    })
})