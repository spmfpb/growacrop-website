(function () {
  const links = {
    bloom: 'https://growkings.com.au/products/bloom-euro-a-b?variant=42095612330037',
    nutrients: 'https://www.amazon.com.au/Hydroponic-Nutrients-Plant-Grow-Bloom/dp/B0CX4MHXDM/',
    seeds: 'https://www.happyvalleyseeds.com.au/',
    vegetableSeeds: 'https://www.theseedcollection.com.au/vegetable',
    microgreenSeeds: 'https://seedmart.com.au/product-category/sprouting-seeds-australia/',
    clay: 'https://franshydroponics.com.au/products/professors-hydro-clay-balls-10l-bag?variant=44760106696904',
    rockwool: 'https://www.amazon.com.au/BESPORTBLE-Rock-Wool-Starter-Plugs-Hydroponics/dp/B0D1GF5ZPT/',
    rockwoolLarge: 'https://www.woolworths.com.au/shop/productdetails/1127763065',
    sponge: 'https://www.amazon.com.au/Alternative-Sponges-Hydroponics-Hydroponic-Indoor/dp/B0CXNQCJRS/',
    spongeCubes: 'https://farmtek.com.au/products/hydroponic-sponge-cubes-cross-cut-25x25x25mm-100-pcs',
    coco: 'https://www.drgreenthumbs.com.au/products/coco-coir-block-4-5kg',
    trays: 'https://www.amazon.com.au/SHEING-Sprouter-Nursery-Germination-Wheatgrass/dp/B07MXZG8DV/',
    reservoir: 'https://www.officeworks.com.au/shop/officeworks/p/j-burrows-40l-heavy-duty-storage-container-black-jbh0040',
    phTest: 'https://www.ebay.com.au/itm/196876073047',
    waterMeter: 'https://bruceshark.com/en-au/products/3-in-1-digital-ph-tds-temp-waterproof-water-quality-meter-tester-test-pen-tool?variant=42881541275802',
    phAdjust: 'https://growkings.com.au/products/flairform-ph-up-down-calibration-kit-250ml?variant=42321736892469',
    timer: 'https://www.bigw.com.au/product/oznala-digital-timer-switch-socket-electric-programmable-power-240v-au-plug-clock/p/9901205333',
    led100: 'https://vivosun.com/vivosun-lumalight-led-grow-light-100w-p165790210430400513-v165790210430400512',
    led300: 'https://spiderfarmer.com.au/products/se3000-full-spectrum-led-grow-light/',
    rackLight: 'http://www.amazon.com.au/Spectrum-Growing-Lighting-Dimmable-Suitable/dp/B0D4198CDY/',
    spray: 'https://www.amazon.com.au/Hills-Chemical-Garden-Pressure-Sprayer/dp/B07XC3Z3ZV/',
    trimmers: 'https://www.hydroexperts.com.au/Precision-Pruner-For-Hydroponic-Indoor-Plantations-Curved-Blade',
    powerboard: 'https://www.bunnings.com.au/click-white-0-9m-4-outlet-powerboard_p0255490'
  };

  const item = (need, note, product, url, price, label) => ({ need, note, product, url, price, label: label || 'Suggested product' });
  const seeds = (note) => item('Seeds suited to this system', note, 'Happy Valley Seeds', links.seeds, 'Price varies', 'Suggested source');
  const microSeeds = item('Microgreen seeds', 'Choose untreated seed sold for sprouting or microgreen production.', 'Seedmart microgreen seeds', links.microgreenSeeds, 'Price varies', 'Suggested source');
  const nutrients = item('Hydroponic nutrients', 'Use a complete nutrient made for hydroponic vegetables and leafy growth.', 'Plant Grow + Bloom nutrients', links.nutrients, '$34.50');
  const bloom = item('Hydroponic nutrients', 'Use a complete A+B nutrient made for leafy growth.', 'Bloom Euro A+B Hydroponic Nutrients', links.bloom, '$35.49');
  const waterCare = (necessaryTotal, fullTotal, useBasicKit) => ({
    kicker: 'Optional add-ons',
    title: 'For more reliable results',
    intro: 'You can begin without these. Add them when you want closer control over the water and fewer nutrient problems.',
    label: 'Both add-ons = setup total',
    equation: useBasicKit ? '+$56.94 = ' + fullTotal : '+$73.50 = ' + fullTotal,
    items: [
      item('A way to test water pH', 'Confirms that nutrients remain available to the plants.', useBasicKit ? 'Basic pH test kit' : 'pH/TDS/temperature meter', useBasicKit ? links.phTest : links.waterMeter, useBasicKit ? '$19.99' : '$36.55'),
      item('pH adjustment solution', 'Only needed if testing shows that the water pH needs correcting.', 'Flairform pH Up/Down kit', links.phAdjust, '$36.95')
    ]
  });
  const indoorLight = (price, total, url, name) => ({
    kicker: 'Optional indoor lighting',
    title: 'If natural light is limited',
    intro: 'Outdoor growers can skip this. Indoors, add a grow light and timer if the system does not receive enough bright natural light.',
    label: 'Lighting = setup total',
    equation: '+' + price + ' = ' + total,
    items: [
      item('A grow light', 'Keeps growth consistent when sunlight is not strong enough.', name || '100W full-spectrum LED grow light', url || links.led100, price === '$169.90' ? '$149.95' : price === '$169.94' ? '$149.99' : price === '$439.94' ? '$419.99' : price),
      item('A light timer', 'Switches the light on and off consistently each day.', 'Programmable plug timer', links.timer, '$19.95')
    ]
  });
  const guide = (name, url, desc) => [{ source: 'System information', title: name + ' setup and specifications', desc: desc || 'Review the included components, assembly information and system controls.', url }];

  window.RECOMMENDATION_DETAILS = {
    'maxkon-12-pod': {
      title: 'Maxkon 12-Pod Benchtop Setup', name: 'Maxkon 12-Pod Hydroponic Garden', image: 'images/quiz/maxkon-12-pod-hydroponic-garden.webp',
      lead: 'A compact 12-pod indoor garden with a built-in grow light and circulating water pump. It fits on a kitchen bench, grows without soil and is best suited to herbs and leafy greens such as basil, lettuce and rocket.',
      tagline: 'Compact benchtop garden with built-in lighting.', goodFor: 'First-time indoor growers', space: 'Kitchen bench', crops: 'Herbs and leafy greens', maintenance: 'Low',
      system: item('A benchtop hydroponic garden', 'Look for a compact reservoir, circulating pump, planting pods and a built-in grow light.', 'Maxkon 12-Pod Hydroponic Garden', 'https://www.harveynorman.com.au/maxkon-12-pods-hydroponics-growing-system-indoor-herb-garden-kit.html', '$74.00'),
      start: [seeds('Choose compact herbs and leafy greens such as basil, coriander, lettuce or rocket.')], feed: [bloom], necessaryTotal: '$109.49', count: 3,
      guides: [{ source: 'PDF user guide', title: 'How to start a 12-pod indoor garden', desc: 'Assembly, filling, preparing pods, planting and light height.', url: 'https://m.media-amazon.com/images/I/91L3EyUTrvL.pdf' }, ...guide('Maxkon 12-Pod', 'https://www.harveynorman.com.au/maxkon-12-pods-hydroponics-growing-system-indoor-herb-garden-kit.html', 'Review light timing modes, reservoir size, pump and electrical details.')],
      optional: [waterCare('$109.49', '$166.43', true)],
      why: ['Built-in lighting makes indoor growing straightforward.', 'Twelve pod sites provide room for a useful mix of herbs and greens.', 'The compact reservoir and pump require little assembly.'],
      notIdeal: 'Full-sized tomatoes, cucumbers, chillies or other large fruiting crops. These need deeper root space and stronger structural support.'
    },
    'vevine-led': {
      title: 'Vevine LED Benchtop Setup', name: 'Vevine LED Hydroponics System', image: 'images/quiz/vevine-led-hydroponics-system.webp',
      lead: 'A larger self-contained indoor garden for households that want more growing sites than an entry-level benchtop model. Its built-in pump and LED light keep herbs and leafy greens growing year-round without soil.',
      tagline: 'Mid-size benchtop system with integrated LED lighting.', goodFor: 'Beginners wanting larger harvests', space: 'Kitchen bench or sideboard', crops: 'Herbs, greens and microgreens', maintenance: 'Low',
      system: item('A self-contained benchtop garden', 'Choose a system with a reservoir, pump, pod holders and integrated lighting.', 'Vevine LED Hydroponics System', 'https://www.templeandwebster.com.au/Vevine-LED-Hydroponics-Growing-System-LEVE3873.html', '$137.00'),
      start: [seeds('Choose compact herbs, lettuce and other leafy greens.')], feed: [bloom], necessaryTotal: '$172.49', count: 3,
      guides: guide('Vevine LED Hydroponics System', 'https://www.templeandwebster.com.au/Vevine-LED-Hydroponics-Growing-System-LEVE3873.html'), optional: [waterCare('$172.49', '$245.99')],
      why: ['Integrated lighting removes the need for a sunny window.', 'More pod sites support a steadier household harvest.', 'The reservoir and pump are contained in one appliance.'],
      notIdeal: 'Large fruiting plants or crops that need deep roots and structural support.'
    },
    'lanitex-microgreen': {
      title: 'LaNiTex Microgreen Setup', name: 'LaNiTex Smart Microgreen Kit', image: 'images/quiz/lanitex-smart-microgreen-kit.webp',
      lead: 'A compact tray-based kit for growing microgreens on a bench or shelf. It suits complete beginners because crops are harvested young, usually within one to two weeks, and do not need a large reservoir or complex nutrient management.',
      tagline: 'Compact microgreen kit for fast, simple harvests.', goodFor: 'First-time microgreen growers', space: 'Bench or small shelf', crops: 'Microgreens only', maintenance: 'Low',
      system: item('A microgreen growing kit', 'Choose shallow trays that make sowing, watering and harvesting easy.', 'LaNiTex Smart Microgreen Kit', 'https://amzn.asia/d/0fNl0Xl9', '$129.00'),
      start: [microSeeds], feed: [], necessaryTotal: '$129.00', count: 2,
      guides: guide('LaNiTex Smart Microgreen Kit', 'https://amzn.asia/d/0fNl0Xl9'),
      optional: [{ kicker: 'Optional convenience extras', title: 'For easier watering and harvesting', intro: 'These are useful, but you can begin with tools you already own.', label: 'Both extras', equation: '+$25.70', items: [item('A fine spray bottle', 'Waters newly sown seed without disturbing it.', 'Garden pressure sprayer', links.spray, '$15.75'), item('Harvesting scissors', 'Makes it easier to cut a clean harvest above the growing medium.', 'Precision trimmers', links.trimmers, '$9.95')] }],
      why: ['Microgreens are ready much faster than mature vegetables.', 'Shallow trays take up very little room.', 'The simple process is easy to repeat every week.'],
      notIdeal: 'Herbs or vegetables that need to mature into full-sized plants.'
    },
    'micropod-continuous': {
      title: 'MicroPod Continuous Grow Setup', name: 'MicroPod Continuous Grow Kit + LED', image: 'images/quiz/micropod-continuous-grow-kit-led.webp',
      lead: 'A compact microgreen setup designed for staggered sowing, so one tray can grow while another is ready to harvest. The optional LED makes harvest timing more predictable when natural light changes through the year.',
      tagline: 'Staggered microgreen growing with an LED option.', goodFor: 'Regular microgreen harvests', space: 'Bench or shelf', crops: 'Microgreens only', maintenance: 'Low',
      system: item('A continuous microgreen kit', 'Use multiple trays so sowing and harvesting can happen on different days.', 'MicroPod Continuous Grow Kit', 'https://micropod.com.au/products/continuous-grow-kit', '$129.00'),
      start: [microSeeds], feed: [], necessaryTotal: '$129.00', count: 2,
      guides: guide('MicroPod Continuous Grow Kit', 'https://micropod.com.au/products/continuous-grow-kit'),
      optional: [{ kicker: 'Optional indoor lighting', title: 'For dependable year-round harvests', intro: 'Use bright natural light if available, or add the matching LED for more consistent growth.', label: 'LED = setup total', equation: '+$54.99 = $183.99', items: [item('An LED grow light', 'Provides consistent light when a bright window is not available.', 'MicroPod LED grow light', 'https://micropod.com.au/products/continuous-grow-kit', '$54.99')] }],
      why: ['Staggered trays support a continuous harvest routine.', 'The small footprint suits kitchens and apartments.', 'An LED reduces seasonal variation indoors.'],
      notIdeal: 'Full-sized herbs, lettuce or fruiting plants.'
    },
    'multi-shelf-microgreens': {
      title: 'Multi-Shelf Microgreen Setup', name: 'Multi-Shelf Microgreen Rack', image: 'images/quiz/multi-shelf-microgreen-rack.webp',
      lead: 'A higher-capacity rack for cycling several microgreen trays at once. It needs more assembly and daily checking than a small kit, but it can provide frequent harvests for a household that uses a lot of microgreens.',
      tagline: 'Multiple trays for frequent, higher-volume harvests.', goodFor: 'Committed microgreen growers', space: 'Dedicated wall or floor space', crops: 'Microgreens only', maintenance: 'Medium',
      system: item('A sturdy growing rack', 'Use open wire shelves with enough room for trays and lights.', 'Four-shelf wire unit', 'https://www.amazon.com.au/AmazonBasics-SL-SUAM-7-4-Shelf-Shelving-Unit-Black/dp/B01LYBQXRH/', '$87.65'),
      start: [item('Shallow growing trays', 'Multiple trays allow crops to be staggered across the rack.', 'Microgreen growing trays', links.trays, '$25.30'), item('A moisture-holding growing medium', 'Coco coir holds water around the roots while remaining light and clean.', 'Coco coir block', links.coco, '$35.00'), microSeeds],
      feed: [], necessaryTotal: '$147.95', count: 4, guides: guide('Multi-shelf rack', 'https://www.amazon.com.au/AmazonBasics-SL-SUAM-7-4-Shelf-Shelving-Unit-Black/dp/B01LYBQXRH/', 'Check shelf dimensions and weight capacity before choosing trays and lights.'),
      optional: [{ kicker: 'Optional indoor lighting', title: 'For even growth on every shelf', intro: 'Add one light above each growing level when natural light cannot reach the full rack.', label: 'Lighting = setup total', equation: '+$51.49 = $199.44', items: [item('Shelf grow lights', 'Keep light close and even across every tray.', 'Four-pack LED grow lights', links.rackLight, '$51.49')] }, { kicker: 'Optional convenience extra', title: 'For safer cable management', intro: 'Useful when several lights share the same rack.', label: 'Powerboard = full setup', equation: '+$3.45 = $202.89', items: [item('A powerboard', 'Keeps the shelf lights connected from one accessible point.', 'Four-outlet powerboard', links.powerboard, '$3.45')] }],
      why: ['Several trays can be staggered for frequent harvests.', 'Vertical shelves use floor space efficiently.', 'Separate trays make it easy to grow several varieties.'],
      notIdeal: 'Growers who only need a small handful of microgreens each week.'
    },
    'growkings-dwc': {
      title: 'GrowKings Single-Bucket DWC Setup', name: 'GrowKings Single DWC Pot System', image: 'images/quiz/growkings-single-dwc-pot-system.webp',
      lead: 'A deep-water-culture bucket that supports one larger plant with roots suspended in oxygenated nutrient solution. It is a practical first step into hands-on hydroponics for chillies, cherry tomatoes, herbs or leafy greens.',
      tagline: 'One bucket with deep root space and active aeration.', goodFor: 'Beginners ready to monitor water', space: 'Floor, balcony or backyard', crops: 'Chillies, tomatoes, herbs and greens', maintenance: 'Medium',
      system: item('A single-bucket DWC system', 'Choose a deep bucket with an air pump, air stone and net pot.', 'GrowKings 39L Single DWC System', 'https://growkings.com.au/products/deep-water-culture-single-pot-system-with-air-pump-39l?variant=45043672285237', '$114.95'), start: [item('A reusable growing medium', 'Clay pebbles support the plant while leaving space around the roots.', 'Hydroponic clay pebbles', links.clay, '$22.00'), seeds('Choose one compact fruiting plant, herb or leafy green.')], feed: [nutrients], necessaryTotal: '$171.45', count: 4,
      guides: guide('GrowKings Single DWC System', 'https://growkings.com.au/products/deep-water-culture-single-pot-system-with-air-pump-39l?variant=45043672285237'), optional: [indoorLight('$169.90', '$341.35'), waterCare('$171.45', '$244.95')],
      why: ['The deep bucket gives larger plants room for their roots.', 'Active aeration supplies roots with oxygen continuously.', 'One plant keeps the first DWC routine manageable.'], notIdeal: 'Small benches, silent rooms or growers who do not want to monitor water levels and nutrients.'
    },
    'spider-farmer-dwc': {
      title: 'Spider Farmer Two-Bucket DWC Setup', name: 'Spider Farmer 2-Bucket DWC System', image: 'images/quiz/spider-farmer-2-bucket-dwc-system.webp',
      lead: 'A two-plant deep-water-culture kit with aeration and top feeding. It offers more output than a single bucket while remaining small enough for a home grow area, balcony or sheltered outdoor position.',
      tagline: 'Two connected growing buckets for a steadier harvest.', goodFor: 'Growers ready for two larger plants', space: 'Floor, balcony or grow tent', crops: 'Chillies, tomatoes, herbs and greens', maintenance: 'Medium',
      system: item('A two-bucket DWC system', 'Look for two buckets, an air pump, air stones and top-feed fittings.', 'Spider Farmer 2-Bucket DWC System', 'https://spiderfarmer.com.au/products/spider-farmer-dwc-hydroponics-grow-system-with-top-drip-kit-7-gallon-deep-water-culture-2-buckets/', '$149.99'), start: [item('A reusable growing medium', 'Clay pebbles support each plant in its net pot.', 'Hydroponic clay pebbles', links.clay, '$22.00'), seeds('Choose up to two plants with similar nutrient needs.')], feed: [nutrients], necessaryTotal: '$206.49', count: 4,
      guides: guide('Spider Farmer 2-Bucket DWC System', 'https://spiderfarmer.com.au/products/spider-farmer-dwc-hydroponics-grow-system-with-top-drip-kit-7-gallon-deep-water-culture-2-buckets/'), optional: [indoorLight('$169.94', '$376.43'), waterCare('$206.49', '$279.99')],
      why: ['Two buckets allow two crops to grow at once.', 'Top feeding supports young roots before they reach the solution.', 'The kit keeps the air system and plumbing together.'], notIdeal: 'Kitchen benches or growers wanting a silent, set-and-forget appliance.'
    },
    'vevor-rdwc': {
      title: 'VEVOR Four-Bucket RDWC Setup', name: 'VEVOR RDWC 4-Bucket System', image: 'images/quiz/vevor-rdwc-4-bucket-system.webp',
      lead: 'A recirculating four-bucket system for growing several larger plants from one shared reservoir. It can produce much more than a benchtop garden, but beginners should expect more plumbing, water testing and cleaning.',
      tagline: 'Four recirculating buckets with a shared reservoir.', goodFor: 'Confident growers wanting higher output', space: 'Dedicated floor or grow-tent area', crops: 'Chillies, cucumbers, tomatoes and greens', maintenance: 'High',
      system: item('A four-bucket RDWC system', 'Choose a kit with growing buckets, control reservoir, air pump and recirculating pipework.', 'VEVOR RDWC 4-Bucket System', 'https://www.vevor.com.au/dwc-hydroponic-system-c_10208/vevor-rdwc-hydroponics-system-recirculating-deep-water-culture-4-buckets-20l-p_010917500216', '$249.00'), start: [item('A reusable growing medium', 'Clay pebbles hold plants securely in the net pots.', 'Hydroponic clay pebbles', links.clay, '$22.00'), item('Seed-starting plugs', 'Start seedlings separately before moving them into the large net pots.', 'Rockwool cubes', links.rockwoolLarge, '$49.47'), seeds('Choose crops with similar feeding and light requirements.')], feed: [nutrients], necessaryTotal: '$354.97', count: 5,
      guides: guide('VEVOR RDWC 4-Bucket System', 'https://www.vevor.com.au/dwc-hydroponic-system-c_10208/vevor-rdwc-hydroponics-system-recirculating-deep-water-culture-4-buckets-20l-p_010917500216'), optional: [indoorLight('$439.94', '$794.91', links.led300, 'SE3000 full-spectrum LED grow light'), waterCare('$354.97', '$428.47')],
      why: ['One reservoir supplies four growing sites.', 'Recirculation keeps water conditions more even between buckets.', 'Four plants provide much higher output than a single DWC pot.'], notIdeal: 'Complete beginners, small apartments or spaces where leaks, pump noise or regular water testing would be difficult.'
    },
    'hydroland-5-tier': {
      title: 'Hydroland Five-Tier Tower Setup', name: 'Hydroland 5-Tier Modular Tower', image: 'images/quiz/hydroland-5-tier-modular-tower.webp',
      lead: 'A compact vertical tower that circulates nutrient solution through five growing levels. The included pump, timer and power supply reduce setup work, making it one of the more approachable ways to grow many herbs and greens in a small footprint.',
      tagline: 'Five vertical levels with pump and timer included.', goodFor: 'Beginners short on floor space', space: 'Balcony, patio or sunny floor area', crops: 'Herbs, greens and strawberries', maintenance: 'Medium',
      system: item('A modular hydroponic tower', 'Choose a stable tower with a reservoir, pump, timer and power supply.', 'Hydroland 5-Tier Modular Tower', 'https://hydroland.com.au/products/modular-hydroponic-tower-5-tier-includes-pump-timer-and-power-supply', '$128.00'), start: [item('Seed-starting plugs', 'Start seedlings before transferring them into the tower cups.', 'Rockwool cubes', links.rockwoolLarge, '$49.47'), seeds('Choose compact herbs, leafy greens or strawberries.')], feed: [nutrients], necessaryTotal: '$211.97', count: 4,
      guides: guide('Hydroland 5-Tier Modular Tower', 'https://hydroland.com.au/products/modular-hydroponic-tower-5-tier-includes-pump-timer-and-power-supply'), optional: [indoorLight('$169.90', '$381.87'), waterCare('$211.97', '$285.47')],
      why: ['Vertical planting provides several growing sites in little floor space.', 'The pump and timer are already matched to the system.', 'Leafy crops can be harvested regularly from different levels.'], notIdeal: 'Large fruiting crops, very windy positions or rooms without enough vertical clearance.'
    },
    'all-in-one-tower': {
      title: 'Mid-Size Hydroponic Tower Setup', name: 'All-in-One or HydroCulture Jumbo Tower', image: 'images/quiz/hydroponic-jumbo-tower-options.webp',
      lead: 'A mid-size vertical garden available as a lower-cost outdoor tower or a lit indoor model. Both versions suit herbs, greens and strawberries while using less floor space than rows of separate pots.',
      tagline: 'Choose an outdoor tower or a complete indoor LED model.', goodFor: 'Growers choosing between indoor and outdoor use', space: 'Small floor footprint', crops: 'Herbs, greens, strawberries and Asian greens', maintenance: 'Medium',
      system: item('A mid-size vertical tower', 'Choose the outdoor version for a sunny position or the LED-equipped model for indoor growing.', 'All-in-One Tower (Outdoor)', 'https://amzn.asia/d/0i87QrGy', '$108.90'), start: [item('Seed-starting plugs', 'Start seedlings before moving them into the tower.', 'Rockwool starter plugs', links.rockwool, 'Price varies'), item('A pump timer', 'Runs the circulation pump on a repeatable schedule.', 'Programmable plug timer', links.timer, '$19.99'), seeds('Choose compact crops that suit vertical growing.')], feed: [nutrients], necessaryTotal: '$163.39+', count: 5,
      guides: [{ source: 'Outdoor system', title: 'All-in-One Tower product information', desc: 'Review the outdoor tower components and dimensions.', url: 'https://amzn.asia/d/0i87QrGy' }, { source: 'Indoor system', title: 'HydroCulture Jumbo Tower product information', desc: 'Review the integrated LED, reservoir and indoor footprint.', url: 'https://happyhydroponics.com.au/products/hydroculture-jumbo-vertical-tower-with-led-full-spectrum-35l-reservoir' }], optional: [waterCare('$163.39+', '$236.89+')],
      why: ['Two versions let you match the tower to your location.', 'Vertical growing makes efficient use of floor space.', 'The crop capacity suits households wanting regular leafy harvests.'], notIdeal: 'Large tomatoes, cucumbers or locations where the tall tower cannot be kept level and stable.'
    },
    'pineapple-tower': {
      title: 'Pineapple Ten-Layer Tower Setup', name: 'Pineapple 10-Layer Vertical Tower', image: 'images/quiz/pineapple-10-layer-vertical-tower.webp',
      lead: 'A tall ten-layer tower designed for growers who want many planting sites in a compact footprint. Its height and capacity can deliver substantial leafy harvests, but filling, balancing and cleaning it requires more effort than a smaller tower.',
      tagline: 'Ten vertical layers for serious growing capacity.', goodFor: 'Higher-volume vertical growing', space: 'Large balcony, patio or outdoor area', crops: 'Herbs, greens, strawberries and Asian greens', maintenance: 'Medium to high',
      system: item('A high-capacity vertical tower', 'Choose a stable ten-layer tower with a reservoir and circulation pump.', 'Pineapple 10-Layer Vertical Tower', 'https://www.aliexpress.com/item/1005002007515192.html', '$315.19'), start: [item('Seed-starting plugs', 'Start seedlings before placing them into the tower cups.', 'Rockwool starter plugs', 'https://au.shein.com/goods-p-283575235.html', '$4.16'), seeds('Choose compact crops with similar water and light needs.')], feed: [nutrients], necessaryTotal: '$353.85', count: 4,
      guides: guide('Pineapple 10-Layer Tower', 'https://www.aliexpress.com/item/1005002007515192.html'), optional: [waterCare('$353.85', '$427.35')],
      why: ['Ten layers provide many sites without a wide footprint.', 'Leafy crops can be staggered for frequent harvesting.', 'One reservoir feeds the full tower.'], notIdeal: 'Very small balconies, windy areas or beginners wanting the simplest possible cleaning routine.'
    },
    'angled-pipe-nft': {
      title: 'Angled Pipe NFT Setup', name: 'Angled Pipe NFT System', image: 'images/quiz/angled-pipe-nft-system.webp',
      lead: 'A compact nutrient-film system that sends a shallow flow of water along angled growing channels. It is well suited to lettuce and herbs, but beginners need to keep the reservoir filled and make sure the pump and channels continue flowing.',
      tagline: 'Compact NFT channels for quick-growing salad crops.', goodFor: 'Beginners wanting regular salads', space: 'Balcony, patio or bright floor area', crops: 'Lettuce, leafy greens and herbs', maintenance: 'Medium',
      system: item('An angled NFT grow system', 'Choose channels with planting holes, a pump and return fittings.', 'Angled Pipe NFT System', 'https://www.amazon.com.au/DOMINFLY-Hydroponics-Gardening-Aquaculture-Vegetables/dp/B0GS85HCPW/', '$88.00'), start: [item('Seed-starting sponge cubes', 'Support seedlings in the channel openings while allowing roots to reach the nutrient film.', 'Hydroponic sponge cubes', links.spongeCubes, '$9.90'), item('A water reservoir', 'Use an opaque container large enough to keep the pump submerged.', '40L storage container', links.reservoir, '$13.00'), seeds('Choose lettuce, basil and other compact leafy crops.')], feed: [nutrients], necessaryTotal: '$145.40', count: 5,
      guides: guide('Angled Pipe NFT System', 'https://www.amazon.com.au/DOMINFLY-Hydroponics-Gardening-Aquaculture-Vegetables/dp/B0GS85HCPW/'), optional: [waterCare('$145.40', '$218.90')],
      why: ['NFT provides constant water and nutrients to fast-growing roots.', 'Angled channels fit several plants into a compact area.', 'Lettuce and herbs suit the shallow root zone.'], notIdeal: 'Large fruiting plants or locations where a pump failure could go unnoticed.'
    },
    'hydroland-wall': {
      title: 'Hydroland Wall-Mounted Setup', name: 'Hydroland 35-Hole Wall-Mounted System', image: 'images/quiz/hydroland-35-hole-wall-mounted-system.webp',
      lead: 'A 35-site vertical system that turns a sunny wall or fence into a productive growing area. It saves floor space and suits leafy crops, but installation, levelling and checking the water flow make it more involved than a benchtop garden.',
      tagline: 'Thirty-five plant sites without using bench or floor space.', goodFor: 'Growers with a suitable sunny wall', space: 'Wall, fence or sturdy frame', crops: 'Lettuce, herbs and Asian greens', maintenance: 'Medium to high',
      system: item('A wall-mounted hydroponic system', 'Choose a complete channel set with reservoir, pump and secure wall supports.', 'Hydroland 35-Hole Wall-Mounted System', 'https://hydroland.com.au/products/35-hole-wall-mounted-hydroponic-system', '$495.00'), start: [item('Seed-starting plugs', 'Support seedlings while their roots establish in the channels.', 'Rockwool starter plugs', links.rockwool, '$26.99'), seeds('Choose compact leafy crops that tolerate frequent harvesting.')], feed: [nutrients], necessaryTotal: '$556.49', count: 4,
      guides: guide('Hydroland 35-Hole Wall System', 'https://hydroland.com.au/products/35-hole-wall-mounted-hydroponic-system'), optional: [waterCare('$556.49', '$629.99')],
      why: ['Thirty-five sites provide a substantial leafy harvest.', 'Wall mounting keeps the ground and benches clear.', 'The vertical display can become a productive garden feature.'], notIdeal: 'Renters unable to mount the system, weak walls, large fruiting crops or exposed windy positions.'
    },
    'salad-table-60': {
      title: 'TheSaladTable 60-Plant Setup', name: 'TheSaladTable 60-Plant NFT System', image: 'images/quiz/salad-table-60-plant-nft-system.webp',
      lead: 'An Australian-made NFT table with 60 planting sites for households that want frequent, high-volume salad harvests. It needs a dedicated area and regular reservoir checks, but the open working height makes planting and harvesting accessible.',
      tagline: 'A high-output NFT table with 60 growing sites.', goodFor: 'Households wanting large salad harvests', space: 'Dedicated patio, greenhouse or indoor area', crops: 'Lettuce, greens, herbs and compact tomatoes', maintenance: 'Medium to high',
      system: item('A high-capacity NFT table', 'Choose a complete table with channels, reservoir, pump and sturdy support frame.', 'TheSaladTable 60-Plant NFT System', 'https://thesaladtable.com.au/products/premium-indoor-outdoor-60-plant-salad-table?variant=42548066123945', '$583.20'), start: [item('A reusable growing medium', 'Clay pebbles support plants in their net cups.', 'Hydroponic clay pebbles', links.clay, '$22.00'), seeds('Choose leafy crops for the majority of the planting sites.')], feed: [], necessaryTotal: '$605.20', count: 3,
      guides: guide('TheSaladTable 60-Plant System', 'https://thesaladtable.com.au/products/premium-indoor-outdoor-60-plant-salad-table?variant=42548066123945'), optional: [indoorLight('$439.94', '$1,045.14', links.led300, 'SE3000 full-spectrum LED grow light'), waterCare('$605.20', '$678.70')],
      why: ['Sixty sites support frequent household-scale harvesting.', 'The table height makes planting and picking comfortable.', 'NFT suits quick-growing lettuce and herbs.'], notIdeal: 'Small homes, low-consumption households or growers wanting a low-cost first experiment.'
    },
    'gathera-sun-shelf': {
      title: 'Gathera Sun Shelf Setup', name: 'Gathera Sun Shelf + Heirloom Basins', image: 'images/quiz/gathera-sun-shelf-heirloom-basins.webp',
      lead: 'A furniture-style indoor shelf with integrated lighting and three passive Kratky basins. It is quiet and visually tidy because it needs no water pump, making it approachable for indoor growers who value appearance and simplicity.',
      tagline: 'A premium lit shelf with three quiet, passive basins.', goodFor: 'Design-conscious indoor growers', space: 'Dedicated indoor wall space', crops: 'Herbs, leafy greens and microgreens', maintenance: 'Low',
      system: item('A lit grow shelf with passive basins', 'Choose a stable shelf with integrated lighting and containers sized for Kratky growing.', 'Gathera Sun Shelf 3 with Heirloom Basins', 'https://gathera.com/collections/grow-indoor-plants/products/sun-shelf-3', '$849.00'), start: [seeds('Choose compact herbs, leafy greens or microgreens for the three basins.')], feed: [], necessaryTotal: '$849.00', count: 2,
      guides: guide('Gathera Sun Shelf', 'https://gathera.com/collections/grow-indoor-plants/products/sun-shelf-3', 'Review shelf assembly, lighting and the included basin arrangement.'), optional: [waterCare('$849.00', '$922.50')],
      why: ['Built-in lighting supports year-round indoor growing.', 'Passive Kratky basins run without pumps or noise.', 'The furniture-style frame keeps the setup tidy and accessible.'], notIdeal: 'Budget-focused growers, large fruiting crops or people without permanent indoor floor space.'
    },
    'farmtek-hydrotower': {
      title: 'Farmtek HydroTower 120-Plant Setup', name: 'Farmtek HydroTower 120-Plant System', image: 'images/quiz/farmtek-hydrotower-120-plant-system.webp',
      lead: 'A large indoor vertical farm with 120 planting sites for serious household production. It uses floor space efficiently, but its crop capacity, lighting and water system demand careful planning, regular checks and a higher starting budget.',
      tagline: 'A 120-site vertical system for serious indoor production.', goodFor: 'Experienced, high-volume indoor growers', space: 'Dedicated indoor growing area', crops: 'Herbs, leafy greens and microgreens', maintenance: 'High',
      system: item('A high-capacity indoor HydroTower', 'Choose a complete tower with lighting, reservoir, circulation and secure vertical supports.', 'Farmtek HydroTower 120-Plant System', 'https://farmtek.com.au/products/hydrotower-indoor-hydroponic-growing-tower-system-kit-vertical-farming-tower-garden-120-plants', '$1,299.00'), start: [item('Replacement growing sponges', 'Keep refills ready for sowing future crop cycles.', 'Hydroponic replacement sponges', links.sponge, '$18.90'), item('A pump timer', 'Runs the irrigation cycle consistently throughout the day.', 'Programmable plug timer', links.timer, '$19.99'), seeds('Choose fast-growing leafy crops with similar nutrient needs.')], feed: [nutrients], necessaryTotal: '$1,372.39', count: 5,
      guides: guide('Farmtek HydroTower 120-Plant System', 'https://farmtek.com.au/products/hydrotower-indoor-hydroponic-growing-tower-system-kit-vertical-farming-tower-garden-120-plants'), optional: [waterCare('$1,372.39', '$1,445.89')],
      why: ['One footprint supports up to 120 planting sites.', 'Integrated indoor lighting supports year-round production.', 'Vertical growing makes large harvests possible without long rows of benches.'], notIdeal: 'First-time growers, small apartments, limited budgets or households that only need occasional herbs.'
    }
  };
})();
