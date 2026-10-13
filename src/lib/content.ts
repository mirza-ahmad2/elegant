// All copy and imagery sourced from elegantwoodwork.com
const CDN = "https://cdn.sanity.io/images/y6k7qhx0/production/";

export function img(id: string, w = 1200, q = 75) {
  return `${CDN}${id}?w=${w}&fm=webp&q=${q}`;
}
export function srcSet(id: string, widths = [480, 800, 1200, 1800]) {
  return widths.map((w) => `${img(id, w)} ${w}w`).join(", ");
}

export const SITE_URL = "https://www.elegantwoodwork.com";

export const contact = {
  street: "Unit 26, 7155 - 64th Street SE",
  city: "Calgary, AB",
  phone: "+1 403-723-9450",
  tel: "+14037239450",
  email: "info@elegantwoodwork.com",
  careersEmail: "workwithus@elegantwoodwork.com",
  visits: "Customer visits by appointment only",
  hoursDays: "Monday – Friday",
  hours: "8:00am to 4:00pm",
  holidays: "Closed on all Alberta holidays.",
  maps: "https://www.google.com/maps/search/?api=1&query=Unit+26+7155+64th+Street+SE+Calgary+AB",
  instagram: "https://instagram.com/elegantwoodwork",
  facebook: "https://facebook.com/ElegantWoodwork1/",
};

export const images = {
  homeHero: "579ca76f7ee48061dbf45d7ab7162862feac5a9c-6240x4160.jpg",
  homeA: "9cfc230440374bb8f3355e676629aa09bd8b1245-1056x1056.png",
  homeB: "89353dcf58a426505125a89f0a3a3f449dff6af9-1584x1584.png",
  servicesHero: "dac3e5d1f0a332def69baca52c5230cc46214f22-3840x1092.png",
  whyHero: "4b0cbac5d8ca4338e0d936b16553ef11b9b9806f-4184x2789.jpg",
  contactHero: "bedb6f16c9a994fd416c5e11a51e0e907c7637d2-6240x4160.jpg",
  galleryHero: "f30b9a890792710f7f2e863664f831b39b68d2c9-6240x4160.jpg",
  careersHero: "782d98cf98558d6a5ebcf76e871e96ee992dd9e3-1920x546.png",
  work: [
    "70075fe09b1126702ca1a9abd3b3b4c6cb1b2a6e-878x930.png",
    "758902c4bce51bc1290648435318e82e4a31f003-878x930.png",
    "c42cbc0c26a381e7ea5f6e7a6cd93905b02a8b8a-878x930.png",
    "bd65abd0a011b50e8d70e78965750a9b4dafed6b-878x930.png",
  ],
};

export const gallery = [
  "ccb4bf5f15873c69a85fb8bd0bc55c68853af418-4202x2805.png",
  "91dae56b0742c71e8302b8208a34bcb4c652644f-6240x4160.jpg",
  "c3bb1e14550039976e504f544dd962899dffaa9e-6240x4160.jpg",
  "d9fee7ecbb01bfa3906c6f66d05a232467510e41-6240x4160.jpg",
  "579ca76f7ee48061dbf45d7ab7162862feac5a9c-6240x4160.jpg",
  "fa39c086ff5d08927357954fa402627b2f614056-6240x4160.jpg",
  "e8eb4896eebc11f0be0d8061db006fb535e428a2-641x961.jpg",
  "9468b6c6083fae7c8d86119ed044ba2e0d4f3948-6240x4160.jpg",
  "8d4ec4a1efec117680cfb83fa5c7cc97314ed038-1441x961.jpg",
  "508d2ec7d26cc13ad3fef3100d359f5d0341294e-1441x961.jpg",
  "f2ef15aa82f3a338b5d10bbe77fc6a799342438c-1441x961.jpg",
  "b2c1b96aa513e3baf34b49424efddd429f8aafbf-1441x961.jpg",
  "a99317c5ae94494ce595a5110cf7dc90c874b680-1441x961.jpg",
  "f417c2d4798c76fd51915395ce58b53df9f46405-1441x961.jpg",
];

export const why = [
  { title: "Full Customization", note: "Exact sizing", img: "9ecc983a9c2bdf17b81071e953b83f59b976ddb5-448x452.png", body: "Elegant Woodwork designs and delivers to your requirements. While many of our competitors force you to choose from standard sizes, we manufacture cabinets that are completely customized to your exact needs." },
  { title: "100% Local Manufacturing", note: "Calgary, AB", img: "aba33563ea60786cfafdc06ba02f5c8bcd74debd-448x452.png", body: "By choosing Elegant, you are supporting a local Canadian product and workers, while avoiding supply chain issues competitors cannot overcome." },
  { title: "Expert Design & Selection", note: "Materials · Finishes · Styles", img: "894fa7d1836a425c9fdc18bb0ff262a7f4ce722f-448x452.png", body: "Our knowledgeable design team will lead you through the process, helping you choose from a wide variety of materials, finishes, and styles. You can further customize hardware and accessories to create your dream space and show off your unique style." },
  { title: "Value Add Pricing", note: "In-house manufacturing", img: "db21c78e2794fdfe5b9dd9e13b9fa1a4cd1f6c1f-448x452.png", body: "In-house manufacturing combined with years of experience allows us to supply fully customized cabinets at competitive prices." },
  { title: "Outstanding Quality", note: "Finest raw materials", img: "f749efe581cac048523a20e6ab1e11cb04146dd1-448x452.png", body: "Combining the finest raw materials at our state-of-the-art manufacturing facility allows us to create products that will stand the test of time." },
  { title: "Industry Leading Service", note: "Lead times", img: "80873880e7f65c724743b338c284c392e4902515-448x452.png", body: "We strive to overachieve with our lead times and to address issues quickly and efficiently." },
];

export type SpecGroup = { label: string; items: string[] };
export type Service = {
  slug: string;
  name: string;
  lines: [string, string];
  short: string;
  intro: string;
  hero: string;
  thumb: string;
  photos: string[];
  specs: SpecGroup[];
  closing?: string;
  layout: "spec" | "feature" | "elevation" | "config" | "detail";
};

export const services: Service[] = [
  {
    slug: "kitchen-cabinets",
    name: "Kitchen Cabinets",
    lines: ["Kitchen", "Cabinets"],
    short: "Make the kitchen of your dreams a reality with custom-made cabinetry built to your specifications.",
    intro: "Make the kitchen of your dreams a reality with custom-made cabinetry built to your exact specifications. From first homes to luxury homes, new construction or renovation, Elegant Woodwork has the craftsmanship and the expertise you need to make your dream kitchen a reality.",
    hero: "67d9d4de91f65fcdccf0781432ec43456ef5ae74-2560x728.png",
    thumb: "1242f28df1fe49e0aa73623ca2b55711b97acaa0-696x840.png",
    photos: ["0ec78a4f39240bc90d4f5d38ec4de0c216c39ad7-771x771.png", "d2592689f1fb5db309a37053857bd731482ace46-771x771.png", "e55a916c53d2a6abd060a52fa518cdca6609d766-771x771.png", "4532b9cbb7b5c54f64c0e9efb88ce0ceaf59ee0c-771x771.png", "8876d3fa5038dc6b893eaace375999e9da89cc5f-771x771.png", "f5d0cd12053b08b9abbc8b82bef94039fa69f69c-514x514.png", "aff86b0648bde9f99d7a34e36558191d7ebc160c-514x514.png", "127644705995aef53f98823652e70f6f625129d3-514x514.png", "97ebf04d40f6658486f2a9825c9c3ff0017d7c3b-514x514.png", "6e3a9640221eb2f8f7172297879f1066636d2469-514x514.png", "cd148763d9d2e1040a0b4c30f2b7762127ae3f0a-514x514.png", "187c5834f48ee2493c75d24b50757d58f7c65fb7-514x514.png", "9d4f2f766860555190e43f939acbba9f0facdee0-514x514.png", "5a4e6fdee244718ef7501305b12295c19b705c4b-514x514.png", "0b1d21614900fd206fb765edab12d11b909531ee-514x514.png", "eef35b9eda76ce5d6a719383fa2d9ecc98f7a1aa-514x514.png", "ca14ff301f9fe9133d3d3cf76641bb4f08fe36c1-514x514.png"],
    specs: [
      { label: "Process", items: ["Elegant Woodwork utilizes a just-in-time manufacturing process which keeps our prices and timelines competitive."] },
      { label: "Tolerance", items: ["Our custom cabinets are produced to meet your exact specifications without the need for unattractive filler strips. You’ll take comfort in knowing your cabinets have been built to the nearest 1/8th of an inch."] },
      { label: "Finish", items: ["Nothing says beautiful and durable finishes like our state-of-the-art paint shop. Custom colours, all at your fingertips."] },
      { label: "Details", items: ["Looking for more? Personalize your kitchen with stylish hood vents and wine racks. Whatever you dream, we can build."] },
    ],
    layout: "spec",
  },
  {
    slug: "bathroom-cabinets",
    name: "Bathroom Cabinets",
    lines: ["Bathroom", "Cabinets"],
    short: "Create an oasis by selecting bathroom cabinets that are as beautiful as they are functional.",
    intro: "Create a bathroom retreat by selecting cabinetry that is as beautiful as it is functional. Don’t settle for off-the-shelf products. Get a custom-made vanity in the exact wood species, size and specifications you desire to turn your bathroom into the oasis you deserve.",
    hero: "7be41436fc7a6d37e10871701ec83730d8804ba6-2560x728.png",
    thumb: "46a53c0bb135f3deec1cda5de34f24e07a9bf5bf-696x840.png",
    photos: ["5ef657371609bb98ad15a8b8334d9a2dc1602e04-514x514.png", "7fd5d56fe9ffe969e3c59f2d43f778ca4374a3b0-514x514.png", "a846a4d9dbc2cf43a814002e60ad88501379fa0a-514x514.png", "4d868f00f6f534a8035acfda79180bdd1ec074cc-514x514.png", "838e2a8b3aed9a5e6476770fc2d5cde73a49b954-514x514.png", "91ae112a5edc40fe0969a0e199f4fd19e51b0e16-514x514.png", "9e219d35754c1bbc5aebfc5d955daaddd18ed162-514x514.png", "8c781eecd1b4d896fd9f52e57e432aa83722b46e-514x514.png", "ac6d1414f3b1c4834231a921782c982a33545974-514x514.png", "28cb8d4b227c881074ddf1700a3af5c1c91cf150-514x514.png", "6d5f213c44fb926f797186b91b0ea9f3299a0f5b-514x514.png"],
    specs: [
      { label: "Materials", items: ["Choose from a wide variety of materials and colours available in custom sizes."] },
      { label: "Function", items: ["Select elements that improve functionality including drawers, medicine cabinets, and organizers."] },
      { label: "Personalize", items: ["Personalize your bathroom with floating vanities, over-the-counter cabinets, floating shelves and more."] },
    ],
    layout: "feature",
  },
  {
    slug: "bar-cabinets",
    name: "Bar Cabinets",
    lines: ["Bar", "Cabinets"],
    short: "Create a new entertaining area with a custom wet bar, coffee station or wine area.",
    intro: "Create a new entertaining area (and maximize storage) by adding a custom wet bar, coffee station or wine area. By using custom cabinets from Elegant Woodwork, you can have that one-of-a-kind bar you have always dreamed about.",
    hero: "49d601b2bf4d480910b43e9a813982c532f3158e-2560x728.png",
    thumb: "4b7eb6d9400bd4c60ed648e008b614e41cb58a28-696x840.png",
    photos: ["636d0fd64d12eaab8bf8452f478c6a754ba8c7aa-514x514.png", "bd3bef2bb9be9b20d703258e23495b8426a250c9-514x514.png", "08b0cffb20d4af7348eefab08e894adbdc759ad8-514x514.png", "0da8995d72d01095dfe2865f7725748c0972a091-514x514.png", "3714c5e1565c33d009f0ad749b07607e04512fac-514x514.png", "05be410ab47878c4c76337cc080df4fd395e44c5-514x514.png", "15636883d00e420fc0a22448e39a3f4d7afcead3-514x514.png", "3f0bda73ec8f496cce19324f98b84e2fccaf754f-514x514.png", "c8fbca7f6769ba265628b04819b30083d405649a-514x514.png", "e1eed5427b9adb44aaff0caebdced4735ea84f7c-514x514.png", "a5e2cd3116614bd06c0f0065906f9eb63286bdef-514x514.png", "d8d07b903a66bb8134dfafee9af2f8afb218fdac-514x514.png"],
    specs: [
      { label: "Choose from", items: ["Wet Bars", "Dry Bars (no plumbing)", "Coffee Stations", "Wine Rooms"] },
      { label: "Customize your space by adding", items: ["Wine racks", "Glass doors and shelves", "Floating shelves", "Custom lighting"] },
    ],
    layout: "feature",
  },
  {
    slug: "storage-and-built-ins",
    name: "Storage & Built-Ins",
    lines: ["Storage &", "Built-Ins"],
    short: "Custom built-ins are a great addition to your home to improve functionality and add beauty.",
    intro: "Custom built-ins improve design and functionality and add visual interest to your home. Get organized by adding custom built-in furniture for your home.",
    hero: "01b2fee58b6f3e2415e50276093545cd03622ac7-2560x728.png",
    thumb: "692afc0f05ec2af8684a09505d092b5c94a9da53-696x840.png",
    photos: ["88b0e04ad1c214961f7340cc72b409b30cb25167-514x514.png", "cd209b539f820e7308aff3d02124ca44267c3502-514x514.png", "0f35ccb1a4b52e20fd67c231f2fa6e3218ef0eee-514x514.png", "7d678a432c8ae6be3f5d4b5c3805b5b66da025b2-514x514.png", "7c7d6d45d654c35083d75fa2bd368ce78a09e843-514x514.png", "c159682fd492a051f92ab70f6b61a33b5fb9a90d-514x514.png", "997d3c5e6c6781b9782c3f98570d0b88f17718de-514x514.png", "e5b953d8e0efb3bab2a230a2e4f6d53263108b6a-514x514.png", "e68a80e2722b056c7dca6e0b17d48aae007b95ea-514x514.png", "74bb6738a4678eb9aed427380295e22add54f71e-514x514.png", "a1a12339b4d35789ea8edf76567813cdccb93da8-514x514.png", "89dedc08654e897fc3a31e57d5116c369ba3759b-514x514.png"],
    specs: [
      { label: "Elegant Woodwork manufactures a wide variety of custom built-in features including", items: ["Lockers", "Desks", "Mantles", "Bookshelves", "Feature walls"] },
      { label: "Options", items: ["Prefinished", "Unfinished"] },
    ],
    closing: "Elegant Woodwork offers both prefinished and unfinished options to customize your home!",
    layout: "elevation",
  },
  {
    slug: "custom-closets",
    name: "Custom Closets",
    lines: ["Custom", "Closets"],
    short: "Maximize your storage space with a custom manufactured closet system.",
    intro: "A closet needs to maximize storage while maintaining beauty and purpose, Elegant closets do all three. Stay organized and maximize storage space with beautiful, made-to-order closets.",
    hero: "8969dcbe44dc133f23a964c396103be04e580efb-1920x1305.png",
    thumb: "f8fff272558e629b63e2564ab4908ccb7bd6b638-696x840.png",
    photos: ["bcad1d44c4075d9eacf680f8d8d14d1629c0ff92-514x514.png", "399f26da7bdbca6151b9de175fd251d75abf8ab0-514x514.png", "d438dff1db1afff7514446f17b2878d806498e7f-514x514.png", "6f8be1b964b3a842adafbb1d71bbad8411bddaed-514x514.png", "2962d402daa2c3d840dc2c6277e126ab92dda70f-514x514.png", "1948e7ff42eb5fb8da1dad91d2c578d7bcd70402-514x514.png", "31817865c949ca1b7b55e3008787de2299df5772-514x514.png", "668d8601c8fa34af2513b7b73344b66c19526cc6-514x514.png", "2acb2778b8643a7186386f440bae7b9ab4f7ca11-514x514.png", "31eb42c781cb184bf4b8d4ea989471fcd30a5e02-514x514.png"],
    specs: [
      { label: "Structure", items: ["Our closets feature back panels that promote hardware longevity."] },
      { label: "Material", items: ["Standard white melamine", "Textured melamine in a variety of colours", "Painted MDF", "Stained wood"] },
      { label: "Space", items: ["Additional drawers", "Shelving"] },
      { label: "Personalize", items: ["Risers", "Glass shelves", "Custom lighting"] },
      { label: "Organization", items: ["Pant hangers", "Tie racks", "Angled shoe shelves", "Jewelry trays", "Laundry hampers", "And more"] },
    ],
    layout: "config",
  },
  {
    slug: "finishing-carpentry",
    name: "Finishing Carpentry",
    lines: ["Finishing", "Carpentry"],
    short: "From baseboards to custom built-ins, our team will transform your home with exceptional craftsmanship.",
    intro: "From baseboards and casing to custom built-ins, our team of finishing carpenters will transform your home with exceptional care and craftsmanship.",
    hero: "b4438575925c7d5af5375bbed92db5b3fdad5894-2048x1367.jpg",
    thumb: "60d660a308d58cca99ae858111235a47ffd4f2d3-696x840.png",
    photos: ["88b0e04ad1c214961f7340cc72b409b30cb25167-514x514.png", "0cd5888b723e1aa1087365dcd0c59fe9f5b805be-514x514.png", "31e4b01ee3925986c7d6e332a8c2a60dda465933-514x514.png", "daa9211c549ce39313f7e7133956bb9c2fd7e942-514x514.png", "d3ed3300e1c48a5a9d9025c7ee98799d500f4e2d-514x514.png", "e68a80e2722b056c7dca6e0b17d48aae007b95ea-514x514.png", "0bcc3dc83d6b4b630e6372fefd40c7e60fea005b-514x514.png", "38f5d680d6cd4e9de5aaaad08c6092e281b4d462-514x514.png", "af191382446678effa114048b1e536c18980cdd2-514x514.png", "3912ec2b3b1911bf989a9eab73ffef0019f61cef-514x514.png"],
    specs: [
      { label: "Detail", items: ["Custom mantles, feature walls, wainscoting and more"] },
      { label: "On-site", items: ["On-site construction of custom shelving units, and lockers"] },
      { label: "Shelving", items: ["Custom-built MDF shelving for pantries and closets"] },
      { label: "Doors", items: ["Interior door installation"] },
      { label: "Trim", items: ["Baseboards, casings, handrails, and hardware installation"] },
    ],
    closing: "Elegant Woodwork offers on-site finishing carpentry work for new builds and renovations.",
    layout: "detail",
  },
];

export const careers = {
  intro: "At Elegant Woodwork, we take pride in crafting and installing 100% locally manufactured custom kitchen and bathroom cabinetry, finishing carpentry, and closet solutions. Whether the design is traditional or modern, our team brings dream spaces to life with precision and care. If you’re passionate about your trade and take pride in beautiful finishes, we’d love to hear from you.",
  why: [
    "Join a locally owned, steadily growing company",
    "Work alongside a tight-knit team that values precision and craftsmanship",
    "Enjoy a supportive, respectful workplace culture",
    "Access a comprehensive family benefits package after probation",
  ],
  indeed: "https://ca.indeed.com/cmp/Elegant-Woodwork-and-Construction-Ltd/jobs",
};

export const nav = [
  { to: "/gallery", label: "Work" },
  { to: "/what-we-do", label: "Services" },
  { to: "/why-choose-us", label: "Why Elegant" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const SITE_NAME = "Elegant Woodwork";
export const DEFAULT_KEYWORDS =
  "Elegant Woodwork, custom cabinets Calgary, custom closets Calgary, kitchen cabinets Alberta, bathroom vanities, built-ins, finishing carpentry, wet bars, locally manufactured cabinetry, millwork Calgary";

export function seo(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string;
}) {
  const url = SITE_URL + opts.path;
  const imageId = opts.image ?? images.homeHero;
  const imageUrl = img(imageId, 1600);
  const keywords = opts.keywords ?? DEFAULT_KEYWORDS;

  const meta: Array<Record<string, string>> = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    { name: "googlebot", content: "index, follow" },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_CA" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: opts.title },
    { property: "og:image:width", content: "1600" },
    { property: "og:image:type", content: "image/webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:image:alt", content: opts.title },
  ];

  return {
    meta,
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en-CA", href: url },
    ],
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE_URL + it.path })),
    }),
  };
}
