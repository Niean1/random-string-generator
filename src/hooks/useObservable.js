import { useEffect, useState } from "react";

export const useObservable = (observable, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const sub = observable.subscribe((v) =>
      setState((prevState) => [...prevState, v])
    );
    if (state.length >= 10) {
      return () => sub.unsubscribe();
    }
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};
