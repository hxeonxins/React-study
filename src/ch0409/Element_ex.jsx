// 엘리먼트 변수를 활용하여 로그인, 로그아웃 버튼 구현하기
import { useState } from "react";

function Element_ex() {
  function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>;
  }

  function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>;
  }

  function Greeting(props) {
    if (props.isLoggedIn) {
      return <h1>환영합니다!</h1>;
    }
    return <h1>로그인이 필요합니다.</h1>;
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <>
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default Element_ex;
