import { useState } from "react";
import "./App.css";
import CounterStateful from "./components/CounterStateful";
import MessageStateless from "./components/MessageStateLess";
import ChildToParent from "./components/ChildToParent";

function App() {
  const [parentMessage, setParentMessage] = useState("Chưa có tin nhắn");

  return (
    <div className="app-container">
      <h1 className="app-title">Bài 2 {'->'} Demo State & Data Flow trong React</h1>

      <div className="section-content">
        <h2 className="section-title">1. Stateful Component (Có state)</h2>
        <CounterStateful />
      </div>

      <hr className="divider" />

      <div className="section-content">
        <h2 className="section-title">2. Stateless Component (Nhận props)</h2>
        <MessageStateless text="Tôi chỉ nhận props, không có state." />
      </div>

      <hr className="divider" />

      <div className="section-content">
        <h2 className="section-title">3. Giao tiếp giữa component (Child {'->'} Parent)</h2>
        <ChildToParent onSendMessage={setParentMessage} />
        <div className="message-box">
          <span className="message-label">Tin nhắn nhận từ con: </span>
          {parentMessage}
        </div>
      </div>

      <hr className="divider" />

      <div className="section-content">
        <h2 className="section-title">4. Luồng dữ liệu một chiều</h2>
        <p className="info-text">
          Dữ liệu luôn đi từ <strong className="highlight">Cha ➔ Con</strong> thông qua props.
          <br />
          Khi cần gửi ngược lên, ta dùng <strong className="highlight">callback function</strong>.
        </p>
      </div>
    </div>
  );
}

export default App;