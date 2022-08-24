var {Shop, Item, Increase, Decrease, Legendary} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  let listItems;

  beforeEach(function () {
    listItems = [];
  });

  it("1/ Item standard => sellIn -1 / quality -1", function() {
    listItems.push(new Decrease("+5 Dexterity Vest",10,20))
    listItems.push(new Decrease("Elixir of the Mongoose",5,7))

    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();

    let expected = [
      { sellIn: 9, quality: 19 },
      { sellIn: 4, quality: 6 }
    ];

    expected.forEach(function (testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    });
  });

  it("2/ Increase item => selln -1 / quality +1", function() {
    listItems.push(new Increase("Aged Brie", 2,0))
    listItems.push(new Increase("Backstage", 15,30,true))

    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();

    let expected = [
      { sellIn : 1, quality: 1},
      { sellIn: 14, quality: 31}
    ];

    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("3/ la qualité ne peut être supérieure à 50", function() {
    listItems.push(new Increase("Aged Brie", 12,50))
    listItems.push(new Increase("Backstage", 3,49,true))
    listItems.push(new Increase("Backstage", 8,49,true))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : 11, quality: 50},
      { sellIn: 2, quality: 50},
      { sellIn: 7, quality: 50}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("4/ la qualité ne peut être inférieure à 0", function() {
    listItems.push(new Decrease("la litière du chat", 12,0))
    listItems.push(new Decrease("Conjured bretelles de michel", 8,1))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : 11, quality: 0},
      { sellIn: 7, quality: 0}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("5/ conjured diminue bien deux fois plus vite", function() {
    listItems.push(new Decrease("Conjured chaussettes qui puent", 0,15))
    listItems.push(new Decrease("Conjured bretelles de michel", 8,34))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : -1, quality: 11},
      { sellIn: 7, quality: 32}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("6/ les légendaires ne bougent pas en qual", function() {
    listItems.push(new Legendary("Sulfuras"))
    listItems.push(new Legendary("l'unique beret en peau de mouton moche de michel"))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : Infinity, quality: 80},
      { sellIn : Infinity, quality: 80}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("7/ Backstage: quality += 3 if sellIn =< 5", function() {
    listItems.push(new Increase("Backstage de Jul",5,10,true))
    listItems.push(new Increase("Backstage moche de michel",2,45,true))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : 4, quality: 13},
      { sellIn : 1, quality: 48}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("8/ Backstage: quality += 2 if sellIn =< 10", function() {
    listItems.push(new Increase("Backstage de Jul",10,10,true))
    listItems.push(new Increase("Backstage moche de michel",8,45,true))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : 9, quality: 12},
      { sellIn : 7, quality: 47}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });

  it("9/ Backstage: quality = 0 if sellIn = 0", function() {
    listItems.push(new Increase("Backstage de Jul",0,10,true))
    listItems.push(new Increase("Backstage moche de michel",-2,45,true))
  
    const gildedRose = new Shop(listItems);
    const items = gildedRose.CestLeJourDesSoldes();
  
    let expected = [
      { sellIn : -1, quality: 0},
      { sellIn : -3, quality: 0}
    ];
  
    expected.forEach(function(testCase, idx) {
      expect(items[idx].quality).toBe(testCase.quality);
      expect(items[idx].sellIn).toBe(testCase.sellIn);
    })
  });
});
