const Item = require('../item.js');

class Increase extends Item {
constructor(name,sellIn,quality,expirable = false) {
  super(name,sellIn,quality)
  this.expirable = expirable;
}

   updateQuality(){
    this.sellIn--;

    if (this.sellIn < 0 && this.expirable) {
      this.quality = 0;
      this.limitQuality();
      return this;
    }
    if (this.sellIn <= 5 && this.expirable) {
      this.quality += 3;
      this.limitQuality();
      return this;
    }
    if (this.sellIn <= 10 && this.expirable) {
      this.quality += 2;
      this.limitQuality();
      return this;
    }

    this.quality++;
    this.limitQuality();
    return this;
   }

}

module.exports = Increase

// let increase1 = new Increase("Aged Brie",50,20);
// let increase2 = new Increase("Backstage passes",50,20,true);
// console.log(increase1);
// console.log(increase2);