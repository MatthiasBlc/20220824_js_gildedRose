const Item = require('../item.js');

class Decrease extends Item {
constructor(name,sellIn,quality) {
  super(name,sellIn,quality)
}

   updateQuality(){
    this.sellIn--;
    if (this.name.includes("Conjured")) {
      this.sellIn >= 0 ? this.quality -= 2 : this.quality -= 4
      this.limitQuality();
      return this;
    }
    this.sellIn >= 0 ? this.quality -= 1 : this.quality -= 2
    this.limitQuality();
    return this;
   }

}

module.exports = Decrease

// let decrease1 = new Decrease("Decrease1",0,10);
// let decrease2 = new Decrease("Conjured Decrease",0,20);
// decrease1.updateQuality();
// decrease2.updateQuality();
// console.log(decrease1);
// console.log(decrease2);