class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  CestLeJourDesSoldes() {
    this.items.map((item) => {
      item.updateQuality()
    })
    return this.items;
  }
}

module.exports = Shop