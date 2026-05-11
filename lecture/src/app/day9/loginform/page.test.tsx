// src/components/LoginForm/index.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./page";
import userEvent from "@testing-library/user-event";


test("로그인 폼의 이메일과 비밀번호 미입력 시 로그인 버튼 비활성화되는지 확인", () => {
    render(<LoginForm />);

    // 로그인 버튼과 입력 필드 가져오기
    const loginButton = screen.getByRole("button", { name: "로그인" });
    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    // 입력 필드 값이 비어있는지 확인
    expect(emailInput).toHaveValue("");
    expect(passwordInput).toHaveValue("");

    // 로그인 버튼이 비활성화되어 있는지 확인
    expect(loginButton).toBeDisabled();
});

test("이메일, 비밀번호 입력 시 로그인 버튼 활성화되는지 확인", () => {
    render(<LoginForm />);
    const loginButton = screen.getByRole("button", { name: "로그인" });
    const emailInput = screen.getByLabelText("이메일");
    const passwordInput = screen.getByLabelText("비밀번호");

    // 이메일과 비밀번호 입력
    fireEvent.change(emailInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "test" } });

    // 로그인 버튼이 활성화되었는지 확인
    expect(loginButton).toBeEnabled();
});

test("이메일 잘못 입력 시 '올바른 이메일 형식이 아닙니다.'라는 에러 메시지가 표시되는지 확인", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("이메일");

    // 잘못된 이메일 입력
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    // 에러 메시지 확인
    const errorMessage = screen.getByText("올바른 이메일 형식이 아닙니다.");
    expect(errorMessage).toBeInTheDocument();
});

test("비밀번호 6자 미만 입력 시 '비밀번호는 6자 이상이어야 합니다.'라는 에러 메시지가 표시되는지 확인", () => {
    render(<LoginForm />);

    const passwordInput = screen.getByLabelText("비밀번호");

    // 잘못된 비밀번호 입력
    fireEvent.change(passwordInput, { target: { value: "12345" } });

    // 에러 메시지 확인
    const errorMessage = screen.getByText("비밀번호는 6자 이상이어야 합니다.");
    expect(errorMessage).toBeInTheDocument();
});


test("제대로 된 이메일 입력 시 에러 메세지가 사라지는지 확인", () => {
    render(<LoginForm />);

    const emailInput = screen.getByLabelText("이메일");

    // 1. 잘못된 이메일 입력 후 에러 메세지 나오는지 확인
    fireEvent.change(emailInput, { target: { value: "test" } });
    const errorMessage = screen.getByText("올바른 이메일 형식이 아닙니다.");
    expect(errorMessage).toBeInTheDocument();

    // 2. 올바른 이메일 입력 후 에러 메세지 사라지는지 확인 
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(errorMessage).not.toBeInTheDocument();
});

test("이메일, 비밀번호, 확인 비밀번호 입력 후 제출 이벤트 테스트", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => { });

    const emailInput = screen.getByLabelText("이메일");
    await user.type(emailInput, "test@example.com");
    // 탭키를 누른다면
    await user.tab();
    await user.tab();

    // 비밀번호 입력 인풋에 포커스 간 것이 확인
    const passwordInput = screen.getByLabelText("비밀번호");
    expect(passwordInput).toHaveFocus();


    // 비밀 번호 입력 후 탭키 눌러 포커스 이동
    await user.type(passwordInput, "password123")
    await user.tab();
    await user.tab();
    const passwordConfirmInput = screen.getByLabelText("비밀번호 확인");
    expect(passwordConfirmInput).toHaveFocus();

    await user.tab();
    await user.tab();

    // 제출 버튼 이벤트 발생
    const signupButton = screen.getByRole("button", { name: "회원가입" });
    expect(signupButton).toHaveFocus();
    await user.keyboard("{Enter}")

    // 콘솔 로그 확인
    expect(alertSpy).toHaveBeenCalledWith("test@example.com님 반갑습니다.");

})