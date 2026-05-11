import { render, screen } from "@testing-library/react"
import SignupForm from "."

// 1. 이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링되는지 확인하는 테스트 코드
//      getByLabelText를 사용하여 각 입력 필드를 찾아보고
//      toBeInTheDocument를 활용하여 존재 여부를 확인
test("이메일, 비밀번호, 비밀번호 확인 입력 필드가 제대로 렌더링 되는지 확인하는 테스트", () => {
  render(<SignupForm />);

  // 이메일
  const emailInput = screen.getByLabelText("이메일")
  expect(emailInput).toBeInTheDocument();

  const PasswordInput = screen.getByLabelText("비밀번호")
  expect(PasswordInput).toBeInTheDocument();

  const PasswordConfirmInput = screen.getByLabelText("비밀번호 확인")
  expect(PasswordConfirmInput).toBeInTheDocument();
})

// 2. 비밀번호, 비밀번호 확인 입력 필드의 type이 "password"인지 확인하는 테스트 코드
// 매쳐는 toHaveAttribute를 활용
// getByPlaceholderText를 활용하여 입력 필드를 가져와보기
test("비밀번호, 비밀번호 확인 입력 필드의 type이 password인지 확인", () => {
  render(<SignupForm />);

  const passwordInput = screen.getByPlaceholderText("비밀번호");
  expect(passwordInput).toHaveAttribute("type", "password");

  const passwordConfirmInput = screen.getByPlaceholderText("비밀번호 확인")
  expect(passwordConfirmInput).toHaveAttribute("type", "password");
})


// 3. 회원가입 버튼이 렌더링되는지 확인
//  회원가입 버튼은 getByRole을 활용하여 가져와보기
test("회원가입 버튼이 렌더링되는지 확인", () => {
  render(<SignupForm />);

  const button = screen.getByRole("button", { name: "회원가입" })
  expect(button).toBeInTheDocument();
})