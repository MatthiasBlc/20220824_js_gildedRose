## Items (name,sellIn,quality)

## Increase 
(case 1 => sellIn -1 quality +1) // Aged Brie
(case 2 => sellIn =< 10 quality +2 // Backstage passes (expirable)
           sellIn =< 5 quality +3
           sellIn =< 0 quality = 0 )
## Decrease 
(case 1 => sellIn -1 quality -1) // Standard
(case 2 => quality -2 / if sellIn < 0 quality -4) // Conjured
## Legendary

## Quality ( 0 - 50 )

-------------------------------------------------------------------------------

# 1 - un test qual baisse bien de 1
# 2- un test qual augmente bien de 1 if needed ? 
# 3 - Tester si la qualité augmente par 3 quand il reste 5 jours ou moins (Aged Brie et Backstage passes)
# 4 - test backstage j-10
# 5 - test backstage <0
# 6 - Tester si la qualité de Sulfuras ne se modifie pas
# 7 - Backstage: quality += 3 if sellIn =< 5
# 8 - Backstage: quality += 2 if sellIn =< 10
# 9 - Backstage: quality = 0 if sellIn = 0

périme deux fois plus vite une fois la qual passée