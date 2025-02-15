import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(10);
  const increaseBy = (value: number) => {
    // setCount(count + value);
    // setCount((current) => current + value );
    setCount(Math.max(0, count + value));
  };

  return {
    // Properties
    count,
    // Actions
    increaseBy,
  };
};
