import { useState } from "react";

function CounterStateful() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  return (
    <div>
      <p>Giá trị count hiện tại: {count}</p>
      <button onClick={increase}>Tăng</button>
    </div>
  );
}

export default CounterStateful;