class Item {
  constructor(name,sellIn,quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  limitQuality(){
    if(this.quality < 0){this.quality = 0}
    if(this.quality > 50){this.quality = 50}
  }

}

module.exports = Item