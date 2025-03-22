function getKeyByValue(obj, value) {
  // Option 2: using Object.keys()
  return Object.keys(obj).find((key) => obj[key] === value);
}

export default getKeyByValue;
