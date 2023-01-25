const validateKey = key => {
  if (!key || typeof key !== "string") {
    throw new Error("storage.js : INVALID KEY PROVIDED");
  }
};

//function to save storagekey
export const storageSave = (key, value) => {
  validateKey(key);
  localStorage.setItem(key, JSON.stringify(value));
};
//to read storagekey
export const storageRead = key => {
  validateKey(key);
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }

  return null;
};
//to delete key
export const storageDelete = key => {
  validateKey(key);
  localStorage.removeItem(key);
};
