import { useState } from "react";

function Parent() {
  const [text, setText] = useState("");
  const [flag, toogle] = useState(false);

  return (
    <>
      <Sender setMessage={setText} toogle={toogle}></Sender>
      {flag ? <Receiver message={text}></Receiver> : <></>}
    </>
  );
}

function Sender({ setMessage, toogle }) {
  const handleChange = (event) => {
    setMessage(event.target.value);
    toogle(false);
  };
  const sendData = () => {
    toogle(true);
  };
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter text here"
      />
      <br />
      <button onClick={sendData}>Send Data</button>
    </>
  );
}
function Receiver({ message }) {
  return (
    <>
      <h1>Message Receive: {message}</h1>
    </>
  );
}

export default Parent;
