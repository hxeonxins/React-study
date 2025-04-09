import { useState } from "react";

function App() {
  const [btn, setBtn] = useState("확인하기");

  const handleClick = () => {
    setBtn("확인됨");
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>{btn}</button>
      </div>
    </>
  );
}

export default App;
