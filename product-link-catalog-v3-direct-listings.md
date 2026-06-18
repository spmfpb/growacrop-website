# GrowACrop Product Link Catalogue v3 - Direct Listings

This version fixes the two big issues in v2:

1. Links must go to specific product listings wherever possible, not category/search pages.
2. Larger retailers should be preferred for commodity products to keep customer cost down. Hydro shops are reserved for products that are actually specialist hydroponic parts.

## Retailer Priority

| Product Type | Preferred Retailer Type | Reason |
|---|---|---|
| Plant pots, self-watering planters, seed trays, shelves, spray bottles, measuring jugs, timers, basic tools | Bunnings / Kmart / IKEA / Big W | Cheaper, familiar, easy click-and-collect |
| Air pumps, air stones, net pots, hydro reservoirs, water pumps, pH/EC meters, hydro nutrients | Hydro shops or aquarium/hydro specialists | Product must match hydro use and specs |
| Smart countertop gardens | Larger online retailers first, brand direct second | Customer expects a complete consumer product |
| Grow tents and serious fruiting equipment | Hydro shops | Large retailers rarely stock suitable complete setups |

## Direct Product Listings Found

### Low-Cost / Large Retailer Products

| Product ID | Product | Use | Direct Listing | Retailer | Listed Price Seen | Fit |
|---|---|---|---|---|---:|---|
| `bunnings_eden_oslo_30cm` | Eden 30cm Charcoal Oslo Self Watering Planter | Low-cost herbs, leafy greens, houseplants | [Eden 30cm Charcoal Oslo Self Watering Planter](https://www.bunnings.com.au/eden-30cm-charcoal-oslo-self-watering-planter_p0086708) | Bunnings | $14 | Good low-cost non-hydro self-watering option |
| `bunnings_holman_large_rect_planter` | Holman 770 x 370 x 325mm Large Self-Watering Modern Planter | Fruiting balcony alternative, larger herbs, leafy greens | [Holman 770 x 370 x 325mm Black Large Self-Watering Modern Planter](https://www.bunnings.com.au/holman-770-x-370-x-325mm-black-large-self-watering-modern-planter_p0708202) | Bunnings | $31.49 | Good for budget fruiting alternatives, not DWC |
| `bunnings_holman_large_square_pot` | Holman 500 x 500 x 420mm Large Square Self-Watering Pot | Fruiting crops, houseplants, large-space users | [Holman 500 x 500 x 420mm Charcoal Large Square Self-Watering Pot](https://www.bunnings.com.au/holman-500-x-500-x-420mm-charcoal-large-square-self-watering-pot_p0659662) | Bunnings | $47.99 | Good large planter; better than tiny countertop kits for large-space users |
| `bunnings_holman_medium_rect_planter` | Holman 670 x 310 x 250mm Medium Self-Watering Planter | Herbs, greens, balcony crops | [Holman 670 x 310 x 250mm Charcoal Medium Self-Watering Planter](https://www.bunnings.com.au/holman-670-x-310-x-250mm-charcoal-medium-self-watering-planter-medium_p0659664) | Bunnings | $26.99 | Good inexpensive planter |

### Specialist Hydroponic Products

| Product ID | Product | Use | Direct Listing | Retailer | Listed Price Seen | Fit |
|---|---|---|---|---|---:|---|
| `hydro_tank_39l_solid` | Hydro Tank & Solid Lid - 39L | Kratky reservoir, greens/herbs project builds | [Hydro Tank & Solid Lid - 39L](https://www.hydroexperts.com.au/Hydro-Tank-Solid-Lid-39L) | Hydro Experts | $54.95 sale | Ideal hydro reservoir, visually correct |
| `hydro_tank_39l_200mm` | Hydro Tank & Lid with 200MM Hole - 39L | Single-site DWC, larger Kratky, fruiting trial | [Hydro Tank & Lid with 200MM Hole - 39L](https://www.hydroexperts.com.au/Hydro-Tank-Lid-with-200MM-Hole-39L) | Hydro Experts | $54.95 sale | Ideal; far better than storage-container imagery |
| `mesh_net_pot_2in_40` | 40 x Mesh Net Pot - 2 Inch | Kratky herbs, leafy greens, NFT seedlings | [40 x Mesh Net Pot - 2 Inch](https://www.hydroexperts.com.au/40-x-Mesh-Net-Pot-Size-2-Inch) | Hydro Experts | $19.95 | Ideal |
| `aqua_one_precision_2500` | Aqua One Precision 2500 Adjustable Air Pump | Small single-site DWC | [Aqua One Precision 2500 Air Pump](https://www.hydroexperts.com.au/Aqua-One-Precision-2500-Adjustable-Aquarium-Air-Pump-1-x-160L/H-with-Single-Outlet) | Hydro Experts | $14.95 | Good low-cost DWC pump |
| `aqua_one_precision_9500` | Aqua One Precision 9500 Twin Outlet Air Pump | Multi-site DWC | [Aqua One Precision 9500 Air Pump](https://www.hydroexperts.com.au/aqua-one-precision-9500-aquarium-air-pump-2-x-200l) | Hydro Experts | $34.95 | Good upgrade pump |
| `micropod_mini_starter` | Micropod Mini Starter Kit | Microgreens plug-and-play, low/mid budget | [Micropod Mini Starter Kit](https://www.hydroexperts.com.au/Micropod-Mini-Starter-Kit-Seafoam-Stone-Avocado) | Hydro Experts | From $42.95 | Ideal small microgreens kit |

## Products To Replace From Earlier Catalogues

These should be removed or downgraded before we connect product data to the quiz.

| Old Product / Link Type | Problem | Replace With |
|---|---|---|
| Generic Amazon search for Kratky reservoir | Search page, weak customer experience, often shows storage tubs | `hydro_tank_39l_solid` or `hydro_tank_39l_200mm` |
| Kmart storage tub as primary Kratky reservoir | Visually wrong for a hydroponics recommendation | Use only as “ultra-budget DIY fallback”, not main product |
| Mars Hydro as default grow light/system | Too narrow; makes catalogue look biased and expensive | Use no default brand; choose by product type and price |
| Hydro shop category pages | Customer still has to hunt | Replace with direct product URLs only |
| Tiny countertop gardens for large spare-room users | Bad match for the space answer | Use large planters, shelving/rack systems, or multi-site builds |

## Current Product Gaps To Research Next

These still need proper direct product links. I have not filled them with generic searches because that would repeat the same mistake.

| Needed Product | Preferred Source | Notes |
|---|---|---|
| Cheap LED grow bar / grow strip | Bunnings, Kmart, IKEA, Amazon AU exact listing | Needed for herbs, greens, microgreens, houseplants |
| Wire shelving / rack | Bunnings, Kmart, IKEA exact listing | Needed for large-space recommendations |
| Timer plug | Bunnings exact listing | Commodity item, no hydro shop needed |
| Spray bottle | Bunnings/Kmart exact listing | Commodity item |
| Measuring jug | Kmart/Bunnings exact listing | Commodity item |
| pH test drops / pH pen | Bunnings first, hydro shop if needed | Need exact, credible product |
| EC meter | Hydro shop direct listing | Specialist item |
| Hydro nutrients for beginners | Bunnings if PowerFeed Pro Hydroponic has direct listing; otherwise hydro shop | Needs easy wording for customers |
| LECA / clay balls | Bunnings if exact listing exists; hydro shop backup | Houseplants and semi-hydro |
| Coco coir / perlite | Bunnings exact listings | Commodity growing media |
| Smart countertop herb garden | Amazon AU / Kogan / Catch / brand direct exact product | Need live exact listing, not a search |
| NFT channel kit | Hydro shop direct listing | Specialist product |
| Grow tent kit under sensible budget | Hydro shop direct listing, avoid Mars-only bias | Needed for fruiting crops |

## Recommended Next Step

Before wiring links into the quiz, build a structured `PRODUCT_CATALOG` with:

- `id`
- `name`
- `category`
- `primaryRetailer`
- `primaryUrl`
- `priceBand`
- `isSpecificProductPage`
- `isHydroponicSpecific`
- `imageFit`
- `useCases`
- `avoidFor`

This prevents the quiz from linking a “Kratky reservoir” to a storage box, or sending a large-space user to a tiny countertop system.

