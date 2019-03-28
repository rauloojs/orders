// This is a wrapper on top of window.localStorage It's meant to handle items as
// JS objects Gets item and parse it if defined
const getItem = key => {
  const item = localStorage.getItem(key);

  if (item) {
    return JSON.parse(item);
  }

  return item;
};

// Stringify any item and set it on key
const setItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item || ''));
};

// Remove item, probably this one could be removed
const removeItem = key => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
