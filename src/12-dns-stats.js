/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSStats = {};
  for (let i = 0; i < domains.length; i++) {
    const arrDonains = domains[i].split('.').reverse();
    for (let j = 0; j < arrDonains.length; j++) {
      if (arrDonains[j - 1]) {
        arrDonains[j] = `${arrDonains[j - 1]}.${arrDonains[j]}`;
      } else {
        arrDonains[j] = `.${arrDonains[j]}`;
      }
    }
    for (let j = 0; j < arrDonains.length; j++) {
      if (DNSStats[arrDonains[j]]) {
        DNSStats[arrDonains[j]] += 1;
      } else {
        DNSStats[arrDonains[j]] = 1;
      }
    }
  }
  return DNSStats;
}

module.exports = getDNSStats;
