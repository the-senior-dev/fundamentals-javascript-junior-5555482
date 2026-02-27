/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  // 2️⃣ If either is null or not an object → not equal
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  // 3️⃣ Compare number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  // 4️⃣ Recursively compare each property
  for (let key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }

    if (!compareObjects(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

module.exports = compareObjects;
