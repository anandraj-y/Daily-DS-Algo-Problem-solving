class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key.charCodeAt(i) - 96;
      total = (total * PRIME_NUMBER + value) % this.keyMap.length;
    }
    return total;
  }

  checkDuplicates = (key, index) => {
    const values = this.keyMap[index];
    for (let i = 0; i < values.length; i++) {
      if (values[i][0] === key) {
        return true;
      }
    }
  };

  set(key, value) {
    const hashIndex = this._hash(key);
    if (!(this.keyMap[hashIndex] instanceof Array)) {
      this.keyMap[hashIndex] = [];
    }
    if (!this.checkDuplicates(key, hashIndex)) {
      this.keyMap[hashIndex].push([key, value]);
    }
  }

  get(key) {
    const hashIndex = this._hash(key);
    if (this.keyMap[hashIndex] instanceof Array) {
      const hashArr = this.keyMap[hashIndex];
      for (let item of hashArr) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      let current = this.keyMap[i];
      if (current) {
        for (let item of current) {
          keys.push(item[0]);
        }
      }
    }
    return keys;
  }

  values() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      let current = this.keyMap[i];
      if (current) {
        for (let item of current) {
          keys.push(item[1]);
        }
      }
    }
    return keys;
  }
}

const Hash = new HashTable();
Hash.set("white", "#fff");
Hash.set("black", "#000");
Hash.set("gray", "#dcdcdc");
Hash.set("hey", "there");
Hash.set("tata", "Harrier");
Hash.set("cyan", "#cdff00");
Hash.set("pink", "#00ff00");
Hash.set("pink", "#00ff00");
Hash.set("pink", "#00ff00");
