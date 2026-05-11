// src/components/PasswordInput/index.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { PasswordInput } from "./PasswordInput";


test("초기 상태에서 비밀번호가 숨겨져 있고(type='password'), '보기' 버튼이 보이는지 확인한다.", () => {
    render(<PasswordInput />)
    const pwInput = screen.getByPlaceholderText("비밀번호를 입력하세요.")
    expect(pwInput).toHaveAttribute("type", "password");

    const viewBtn = screen.getByRole("button", { name: "보기" })
    expect(viewBtn).toBeInTheDocument();
});

test("'보기' 버튼을 클릭하면 비밀번호가 보이고(type='text'), 버튼 텍스트가 '숨기기'로 변경되는지 확인한다.", () => {
    render(<PasswordInput />)

    const viewBtn = screen.getByRole("button", { name: "보기" })
    fireEvent.click(viewBtn)

    const pwInput = screen.getByPlaceholderText("비밀번호를 입력하세요.")
    expect(pwInput).toHaveAttribute("type", "text");
    expect(viewBtn.textContent).toBe("숨기기")
});

test("'숨기기' 버튼을 클릭하면 다시 비밀번호가 숨겨지고(type='password'), 버튼 텍스트가 '보기'로 변경되는지 확인한다.", () => {
    render(<PasswordInput />)

    const viewBtn = screen.getByRole("button", { name: "보기" })
    fireEvent.click(viewBtn)

    const hideBtn = screen.getByRole("button", { name: "숨기기" })
    fireEvent.click(hideBtn)

    const pwInput = screen.getByPlaceholderText("비밀번호를 입력하세요.")
    expect(pwInput).toHaveAttribute("type", "password");

    //const viewBtn2 = screen.getByRole("button", { name: "보기" })
    expect(viewBtn.textContent).toBe("보기")
    // 이거 노드 자체가 교체되면 (새로 그리면) viewBtn2 로 새롭게 선언해줘야하는데,
    // 텍스트만 교체되는거면 let으로 한 다음 재선언해서 쓴다고
    // 근데 나는 다시 선언 안했는데 왜 통과되는거지? 
    // 강사님 해설 중에 viewBtn 써도 된다고 하시네
});
