const KEY = "redux";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warning("Your browser doesn't support Local Storage.");

    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    console.warning("Your browser doesn't support Local Storage.");
  }
};
