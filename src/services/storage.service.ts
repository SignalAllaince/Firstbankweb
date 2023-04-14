export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    const { localStorage } = window;
    return localStorage.getItem(key);
  }
};

export const clear = () => {
  if (typeof window !== "undefined") {
    const { localStorage } = window;
    return localStorage.clear();
  }
};

export const setItem = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    const { localStorage } = window;
    return localStorage.setItem(key, value);
  }
};

export const removeItem = (key: string) => {
  if (typeof window !== "undefined") {
    const { localStorage } = window;
    return localStorage.removeItem(key);
  }
};
