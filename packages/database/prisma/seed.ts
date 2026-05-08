import { ProductType, prisma } from "../src/index";

const products = [
  // ─── Perfumes ────────────────────────────────────────────────────────────────
  {
    name: "Noir Absolu",
    description:
      "A brooding, resinous oriental built around aged oud and smoked leather. Worn by those who consider fragrance a statement rather than an accessory. Projects heavily for the first two hours before drying down to an intimate skin scent.",
    brand: "Veloria Maison",
    type: ProductType.PERFUME,
    priceAmount: 220.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Black pepper", "Cardamom", "Bergamot"],
      heart: ["Oud", "Smoked leather", "Vetiver"],
      base: ["Labdanum", "Musk", "Sandalwood"],
    },
  },
  {
    name: "Sel Marin",
    description:
      "An austere, mineral-edged marine fragrance that recalls the Breton coast at low tide. Avoids the synthetic aquatic tropes of the 1990s entirely — this is salt-crusted driftwood and cold air, not swimming pools.",
    brand: "Veloria Maison",
    type: ProductType.PERFUME,
    priceAmount: 175.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Sea salt", "Lemon verbena", "Aldehydes"],
      heart: ["Driftwood", "Iris", "Marine accord"],
      base: ["Ambergris", "Cedarwood", "White musk"],
    },
  },
  {
    name: "Rose Dystopique",
    description:
      "A deconstructed rose that strips away every romantic connotation. The flower is here, but cold — metallic and slightly overripe, surrounded by industrial concrete and bitter green stems. Unsettling in the best possible way.",
    brand: "Atelier Cendres",
    type: ProductType.PERFUME,
    priceAmount: 195.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Green stem", "Aldehydes", "Galbanum"],
      heart: ["Rose absolute", "Metallic accord", "Violet leaf"],
      base: ["Concrete accord", "Iso E Super", "Vetiver"],
    },
  },
  {
    name: "Encens Perpétuel",
    description:
      "Church incense without the church. Dense, resinous smoke softened by sweet benzoin and grounded in patchouli. A meditative fragrance that grows warmer and more animalic against skin heat over time.",
    brand: "Atelier Cendres",
    type: ProductType.PERFUME,
    priceAmount: 210.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Frankincense", "Smoke", "Elemi"],
      heart: ["Myrrh", "Olibanum", "Rose"],
      base: ["Benzoin", "Patchouli", "Oud"],
    },
  },
  {
    name: "Yuzu & Hinoki",
    description:
      "A spare, Japanese-influenced composition built on the clean tension between sharp citrus and cool cypress wood. Intentionally linear — what you smell in the first minute is what you wear all day. Exceptional for warm weather.",
    brand: "Forêt Blanche",
    type: ProductType.PERFUME,
    priceAmount: 145.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Yuzu", "Grapefruit", "Green tea"],
      heart: ["Hinoki cypress", "Bamboo", "Shiso"],
      base: ["Cedarwood", "White musk", "Moss"],
    },
  },
  {
    name: "Ambre Nomade",
    description:
      "A warm, spiced amber built for cold weather. Rich without being cloying — the saffron prevents the sweetness from tipping over, and the dry labdanum base keeps it grounded. Long-lasting on skin and on clothes.",
    brand: "Veloria Maison",
    type: ProductType.PERFUME,
    priceAmount: 185.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Saffron", "Cinnamon", "Pink pepper"],
      heart: ["Amber", "Benzoin", "Jasmine"],
      base: ["Labdanum", "Vanilla", "Sandalwood"],
    },
  },

  // ─── Candles ─────────────────────────────────────────────────────────────────
  {
    name: "Forêt Après Pluie",
    description:
      "The specific smell of a pine forest in the hour after heavy rain — petrichor, wet bark, cold earth, and resin. Poured in a matte concrete vessel with a single cotton wick. Burns clean for approximately 55 hours.",
    brand: "Veloria Maison",
    type: ProductType.CANDLE,
    priceAmount: 68.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Petrichor", "Ozone", "Pine needle"],
      heart: ["Wet bark", "Fern", "Black soil"],
      base: ["Pine resin", "Cedarwood", "Moss"],
    },
  },
  {
    name: "Bibliothèque",
    description:
      "Aged paper, leather binding, and a faint trail of pipe tobacco from three rooms away. An olfactory reconstruction of a private library that no longer exists. Soy wax, double-wick, 70-hour burn time.",
    brand: "Atelier Cendres",
    type: ProductType.CANDLE,
    priceAmount: 75.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Cardamom", "Black tea", "Aldehydes"],
      heart: ["Aged paper", "Tobacco", "Leather"],
      base: ["Oakmoss", "Vanilla", "Sandalwood"],
    },
  },
  {
    name: "Nuit de Cire",
    description:
      "Warm beeswax with nothing added — just the natural honey-sweet depth of pure wax allowed to fill a room. Minimal by design. Hand-poured in a smoked glass vessel, single wick, 45-hour burn time.",
    brand: "Forêt Blanche",
    type: ProductType.CANDLE,
    priceAmount: 58.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Honey", "Beeswax", "Propolis"],
      heart: ["Beeswax", "Warm milk", "Chamomile"],
      base: ["Musk", "Amber", "Cedarwood"],
    },
  },
  {
    name: "Cuisine d'Hiver",
    description:
      "Candied orange peel, warm spice, and butter pastry from a cold-weather kitchen. Indulgent and deeply comforting without crossing into synthetic sweetness. Coconut-soy blend, 60-hour burn time.",
    brand: "Veloria Maison",
    type: ProductType.CANDLE,
    priceAmount: 65.0,
    priceCurrency: "EUR",
    scentProfile: {
      top: ["Candied orange", "Clove", "Cinnamon"],
      heart: ["Butter pastry", "Almond", "Nutmeg"],
      base: ["Vanilla", "Tonka bean", "Musk"],
    },
  },
];

async function seed() {
  console.log("Seeding Veloria catalog...\n");

  // Wipe existing products so the seed is idempotent and re-runnable
  await prisma.product.deleteMany();
  console.log("Cleared existing products");

  for (const data of products) {
    const product = await prisma.product.create({ data });
    console.log(
      `  ✓  ${product.type.padEnd(8)}  ${product.name}  (${product.priceCurrency} ${product.priceAmount})`,
    );
  }

  const total = await prisma.product.count();
  const perfumes = await prisma.product.count({
    where: { type: ProductType.PERFUME },
  });
  const candles = await prisma.product.count({
    where: { type: ProductType.CANDLE },
  });

  console.log(
    `\nDone. ${total} products seeded — ${perfumes} perfumes, ${candles} candles.`,
  );
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
