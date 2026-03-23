import { useState } from "react";

function ChildToParent({ onSendMessage }) {
  const [msg, setMsg] = useState("");

  const sendToParent = () => {
    onSendMessage(msg);
    setMsg("");
  };

  return (
    <div>
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Nhập tin nhắn gửi cho cha"
      />
      <button onClick={sendToParent} style={{ marginLeft: "10px" }}>
        Gửi
      </button>
    </div>
  );
}

export default ChildToParent;