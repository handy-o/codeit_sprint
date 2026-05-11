// src/components/Input/index.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./Input";

test("Input 컴포넌트 미입력 시 X 버튼이 보이지 않아야 한다.", () => {
    render(<Input />);

    const input = screen.getByRole("textbox"); // input type="text"
    // 없을 때 에러 발생하는 문제를 방지하기 위해 queryByRole을 사용합니다.
    const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" });

    // 입력값이 없고,
    expect(input).toHaveValue("");
    // X 버튼이 보이지 않아야 한다.
    expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트에 입력값이 있을 때 X 버튼이 보이는지 확인한다.", () => {
    // 1. defaultValue props를 통해 값을 넣어줍니다.
    render(<Input defaultValue="입력값" />);

    const input = screen.getByRole("textbox");
    const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

    // 2. 입력값이 있는지 정확히 확인하고,
    expect(input).toHaveValue("입력값");
    // 3. X 버튼이 보이는지 확인합니다.
    expect(deleteButton).toBeInTheDocument();
});

test("X 버튼 클릭 시 입력값이 지워지는지 확인한다", () => {
    render(<Input defaultValue="입력값" />);

    const input = screen.getByRole("textbox");
    const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

    // 2. 테스트 상에서 클릭을 구현합니다. 
    fireEvent.click(deleteButton);

    // 3. 입력값이 지워지는지 확인하고,
    expect(input).toHaveValue("");
    // 4. X 버튼이 사라지는지 확인합니다.
    expect(deleteButton).not.toBeInTheDocument();
});

// TDD로 에러메세지 나오게 하는 기능 추가 개발하기
test("Input 컴포넌트 에러 발생 시 에러 메세지가 보이는지 확인", () => {
    render(<Input isError={true} errorMessage="입력값에 문제가 있습니다" />);

    const errorMessage = screen.getByText("입력값에 문제가 있습니다");

    // 에러 메세지가 보인다.
    expect(errorMessage).toBeInTheDocument();
})