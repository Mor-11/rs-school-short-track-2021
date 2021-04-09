/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 *function encodeLine(str) {
 *  const arr = str.split('');
 * const newstr = [];
 *  const odjStr = {};0
 *  for (let i = 0; i < arr.length; i++) {
 *   if (odjStr[arr[i]]) {
 *     odjStr[arr[i]] += 1;
 *   } else {
 *     odjStr[arr[i]] = 1;
 *   }
 * }
 * for (const [key, value] of Object.entries(odjStr)) {
 *   if (value === 1) {
 *     newstr.push(key);
 *   } else {
 *      newstr.push(value);
 *      newstr.push(key);
 *    }
 *  }
 * return newstr.join('');
 *}
 */

function encodeLine(str) {
  const arrstr = [];
  let j = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      j += 1;
    } else if (str[i] !== str[i + 1]) {
      if (j !== 1) {
        arrstr.push(j);
      }
      arrstr.push(str[i]);
      j = 1;
    }
  }
  return arrstr.join('');
}
module.exports = encodeLine;
