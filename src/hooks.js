import { useEffect } from "react";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const useOnClick = callback => {
  useEffect(() => {
    window.addEventListener("mouseup", callback);
    return () => window.removeEventListener("mouseup", callback);
  }, ["mouseup", callback]);
};
