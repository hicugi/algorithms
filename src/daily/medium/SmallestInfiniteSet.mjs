/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
class SmallestInfiniteSet {
  state = {
    min: 1,
    missing: {},
  };

  /**
   * @return {number}
   */
  popSmallest() {
    const { min, missing } = this.state;

    missing[min] = true;

    let nextMin = min + 1;
    while (missing[nextMin]) {
      nextMin++;
    }

    this.state.min = nextMin;
    return min;
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addBack(num) {
    const { min, missing } = this.state;

    delete missing[num];

    this.state.min = Math.min(min, num);
    return null;
  }
}

module.exports = { SmallestInfiniteSet };
