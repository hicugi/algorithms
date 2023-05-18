class TimeLimitedCache {
  data = {};

  /**
   * @param {number} key
   * @param {number} value
   * @param {number} time until expiration in ms
   * @return {boolean} if un-expired key already existed
   */
  set(key, value, duration) {
    let result = false;

    if (this.data[key]) {
      clearTimeout(this.data[key].timer);
      result = true;
    }

    this.data[key] = {
      value,
      timer: setTimeout(() => {
        delete this.data[key];
      }, duration),
    };

    return result;
  }

  /**
   * @param {number} key
   * @return {number} value associated with key
   */
  get(key) {
    const elm = this.data[key];
    return (elm && elm.value) || -1;
  }

  /**
   * @return {number} count of non-expired keys
   */
  count() {
    return Object.keys(this.data).length;
  }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

module.exports = { TimeLimitedCache };
