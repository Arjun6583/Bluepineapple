import { useEffect, useRef } from "react";
function Focus() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Click to Focus</button>
    </>
  );
}
export default Focus;
