export const appStorage = {
  getItem: (key: "context" | "isLoggedIn") => {
    const stringifiedData = localStorage.getItem(`${key}`);
    if (!stringifiedData) return "";
    return JSON.parse(stringifiedData || "");
  },
  setItem: (key: "context" | "isLoggedIn", data: any) => {
    if (!data) return;
    localStorage.setItem(key, JSON.stringify(data));
  },
  removeItem: (key: "context" | "isLoggedIn") => {
    localStorage.removeItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
};
