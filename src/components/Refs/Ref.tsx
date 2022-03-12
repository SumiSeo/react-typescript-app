import { useRef, useEffect } from "react";

// const users = [
//   { name: "Sarah", age: 20 },
//   { name: "Jack", age: 20 },
//   { name: "Michael", age: 20 },
// ];

const UserSearch = (): JSX.Element => {
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <p>hi</p>
      <span>hi</span>
      <span>hi</span>
      <input ref={inputRef} />
    </div>
  );
};

export default UserSearch;
