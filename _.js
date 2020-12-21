const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }

    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  words(str) {
    return str.split(" ");
  },
  pad(str, len) {
    if (len <= str.length) return str;

    const leftPaddingAmount = Math.floor((len - str.length) / 2);
    const rightPaddingAmount = len - (str.length + leftPaddingAmount);
    const leftPadding = Array(leftPaddingAmount).fill(" ").join("");
    const rightPadding = Array(rightPaddingAmount).fill(" ").join("");
    return leftPadding + str + rightPadding;
  },
  has(obj, key) {
    if (obj[key] === undefined) {
      return false;
    }

    return true;
  },
  invert(object) {
    const keys = Object.keys(object);
    const values = Object.values(object);

    const newObject = {};
    values.forEach((value, index) => (newObject[value] = keys[index]));
    return newObject;
  },
  findKey(object, predicate) {
    for (let item in object) {
      if (predicate(object[item])) return item;
    }

    return undefined;
  },
  drop(arr, n = 1) {
    if (n > arr.length)
      return new Error("Cannot drop more elements than existing");

    return arr.slice(n);
  },
  dropWhile(arr, predicate) {
    const dropIndex = arr.findIndex((item, index) => {
      return !predicate(item, index, arr);
    });
    return this.drop(arr, dropIndex);
  },
  chunk(arr, n = 1) {
    const chunkArray = [];
    for (let i = 0; i < arr.length; i += n) {
      chunkArray.push(arr.slice(i, i + 2));
    }

    return chunkArray;
  },
};

module.exports = _;
