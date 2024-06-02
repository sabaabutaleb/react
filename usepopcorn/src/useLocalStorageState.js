import { useEffect, useState } from "react";
export function useLocalStorageState(initialState, nameOfValue) {
  // function () {
  //   const storageValue = localStorage.getItem(valueName);
  //   return JSON.parse(storageValue);
  // }
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(nameOfValue);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(nameOfValue, JSON.stringify(value));
    },
    [value, nameOfValue]
  );
  return [value, setValue];
}
