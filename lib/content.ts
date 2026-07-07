// Single source of truth for all site copy.
// Facts, figures, and names are kept faithful to the WaterBrooks content brief.
// Voice: warm, plain, spoken. No em dashes. No clipped fragments.

export const site = {
  name: "WaterBrooks Technologies",
  shortName: "WaterBrooks",
  tagline: "Solar-powered food preservation for African farms",
  email: "waterbrookstechnologies@gmail.com",
  phones: ["07072925705", "07061048743"],
  address:
    "Road 10b, House 7, Aho-Estate, Ajibode, Ibadan, Oyo State, Nigeria",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Aho-Estate+Ajibode+Ibadan+Oyo+State+Nigeria",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact", href: "/contact" },
];

export const home = {
  eyebrow: "Agritech built for African farms",
  headline: "Revolutionizing Food Preservation with Solar-Powered Innovation.",
  subheadline:
    "We help farmers and agribusinesses reduce post-harvest losses through sustainable, technology-driven food preservation solutions.",
  primaryCta: { label: "Partner With Us", href: "/contact" },
  secondaryCta: { label: "See our solution", href: "/solutions" },

  bannerHeading: "Keep more of what you grow.",
  bannerBody:
    "Produce that used to spoil in about five days can now stay fresh for up to twenty-one. Our off-grid solar units cut spoilage by as much as 60 to 65 percent, while IoT and AI sensors keep watch over your harvest around the clock.",

  features: [
    {
      icon: "Sun",
      title: "Off-grid solar power",
      body: "The units run on the sun, so they work even where the grid does not reach.",
    },
    {
      icon: "Snowflake",
      title: "5 to 21 days of shelf life",
      body: "Hold produce fresh more than four times longer than it lasts today.",
    },
    {
      icon: "TrendingDown",
      title: "60 to 65% less spoilage",
      body: "Sell far more of your harvest and throw away far less of it.",
    },
    {
      icon: "Activity",
      title: "Real-time IoT and AI",
      body: "Track storage conditions and get simple, smart alerts from your phone.",
    },
  ],

  metrics: [
    {
      value: "200+",
      label: "Farmers impacted",
      sub: "across farming communities in Oyo State",
    },
    {
      value: "18 plots",
      label: "Of land secured",
      sub: "valued at roughly $20,000",
    },
    {
      value: "₦1.5M",
      label: "Favoured Fund Pitch",
      sub: "winner in Lagos",
    },
    {
      value: "2",
      label: "Accelerators backing us",
      sub: "Clean Tech Hub and Shecluded",
    },
  ],

  why: {
    heading: "Why farmers choose WaterBrooks",
    points: [
      {
        icon: "Leaf",
        title: "Clean, renewable energy",
        body: "Solar keeps running costs down and keeps the air clean.",
      },
      {
        icon: "Tractor",
        title: "Made for smallholder farms",
        body: "Affordable systems built for real farms, not just large estates.",
      },
      {
        icon: "LineChart",
        title: "Data-driven insights",
        body: "Decisions guided by what your produce actually needs.",
      },
      {
        icon: "HeartHandshake",
        title: "Real social and green impact",
        body: "Less waste, better income, and healthier communities.",
      },
    ],
  },

  closingCta: {
    heading: "Let us build stronger food systems together.",
    body: "Whether you grow, trade, fund, or organize, there is a way for you to be part of this work.",
    cta: { label: "Partner With Us", href: "/contact" },
  },
};

export const about = {
  hero: {
    eyebrow: "About us",
    heading: "We keep good food from going to waste.",
    body: "WaterBrooks Technologies is an agritech company taking on one of Africa's hardest farming problems, which is the food that spoils before it ever reaches a plate.",
  },

  mission:
    "To transform agriculture in Africa by reducing post-harvest losses through sustainable and intelligent cold storage solutions.",
  vision:
    "A future where farmers preserve their harvest effectively and communities have reliable access to nutritious food.",

  values: [
    { icon: "Lightbulb", title: "Innovation" },
    { icon: "ShieldCheck", title: "Integrity" },
    { icon: "Award", title: "Excellence" },
    { icon: "Shuffle", title: "Adaptability" },
    { icon: "Users", title: "Teamwork and collaboration" },
  ],

  story: [
    "We build solar-powered cold storage units with IoT sensors built in, so farmers can keep their produce fresh far longer than they can today. That means less waste, a steadier food supply, and better income for the families who grow our food.",
    "We do not stop at the hardware. Every unit we set up comes with training and hands-on support, so farmers know exactly how to get the most out of it. When you pair good tools with real know-how, the whole system gets stronger, and that helps growers, buyers, and the land they farm.",
  ],

  ten: {
    heading: "Our approach: the TEN model",
    intro:
      "We combine smart technology, farmer training, and nutrition awareness into one approach that lasts.",
    pillars: [
      {
        icon: "Cpu",
        title: "Technology",
        body: "Solar-powered cold storage and IoT sensors that keep produce fresh and give farmers real information to act on.",
      },
      {
        icon: "GraduationCap",
        title: "Education",
        body: "Workshops and hands-on training that teach farmers preservation methods they can keep using long after we leave.",
      },
      {
        icon: "Apple",
        title: "Nutrition",
        body: "Community work that raises awareness about food waste and why fresher, better food matters for everyone.",
      },
    ],
  },

  problem: {
    heading: "The problem we set out to solve",
    paragraphs: [
      "Nigeria loses as much as 10 billion dollars every year to post-harvest losses, according to the FAO and the WHO. Close to half of all fruits and vegetables spoil before they ever reach a buyer.",
      "Behind those numbers are real farmers. Many have no cold storage, poor roads to market, and no access to modern ways of keeping food fresh. So they sell fast and cheap under bad conditions, or they watch their harvest rot.",
      "Climate change is making it worse. Hotter days spoil produce faster, and the old fixes, like diesel-powered coolers, are expensive, dirty, and out of reach for most smallholder farmers.",
      "This is the gap we set out to close, with solutions that are sustainable, affordable, and built to grow.",
    ],
    stats: [
      { value: "$10B", label: "lost in Nigeria each year to post-harvest losses" },
      { value: "~50%", label: "of fruits and vegetables spoil before reaching buyers" },
    ],
  },

  team: {
    heading: "The team behind the work",
    paragraphs: [
      "WaterBrooks is built by a team that pulls from a lot of different fields. We bring together people who know agriculture, nutrition, technology, public health, and climate science.",
      "That mix matters. It lets us look at a problem from several sides at once and design solutions that hold up in the real world, not just on paper.",
      "Our leadership includes specialists in IoT systems and renewable energy, so the technology stays sharp. Around them sits a network of advisors and partners with deep experience in farming, sustainability, and development. Together we are here to improve livelihoods, strengthen food systems, and look after the environment.",
    ],
    disciplines: [
      "Agriculture",
      "Nutrition",
      "Technology",
      "Public health",
      "Climate science",
      "Renewable energy",
    ],
  },

  partnerships: {
    heading: "Who we partner with",
    body: "We work best alongside others who share the goal of stronger, fairer food systems.",
    partners: [
      { icon: "HandHeart", label: "NGOs" },
      { icon: "Landmark", label: "Government agencies" },
      { icon: "Wheat", label: "Agricultural cooperatives" },
      { icon: "Recycle", label: "Sustainability-focused organizations" },
    ],
  },
};

export const solutions = {
  hero: {
    eyebrow: "Our solutions",
    heading: "Solar cold storage, made smart.",
    body: "Reliable, off-grid preservation for perishable produce, paired with sensors that tell you exactly what your harvest needs.",
  },

  solution: {
    heading: "Our solar-powered cold storage",
    paragraphs: [
      "Our cold storage keeps perishable produce fresh without needing the grid. It is designed for both rural villages and busy city markets.",
      "Inside, the temperature stays right where it needs to be, so produce that once lasted about five days can now hold for up to twenty-one. That is more than four times longer, and it cuts spoilage by as much as 60 to 65 percent.",
      "We built IoT and AI into the system, so you always know what is happening with your produce. You can check storage conditions in real time and get simple suggestions on how to store, handle, and move your harvest. Less guesswork, better quality, fewer surprises.",
      "Because good tools work best in good hands, every rollout comes with training and community support. Clean energy, smart sensors, and people-first design come together into something farmers can actually rely on.",
    ],
    highlights: [
      { icon: "Sun", title: "Off-grid solar", body: "Runs on clean energy, anywhere." },
      { icon: "Thermometer", title: "Right temperature, always", body: "Optimal conditions held steady." },
      { icon: "Radio", title: "Real-time monitoring", body: "See your storage from your phone." },
      { icon: "Brain", title: "AI guidance", body: "Smart tips on handling and storage." },
    ],
  },

  education: {
    heading: "Education and community programs",
    paragraphs: [
      "Technology on its own does not change much. People do.",
      "That is why training and community work sit right at the heart of what we do. Through workshops and outreach, we help farmers learn preservation methods that stick.",
      "We also talk about nutrition and why cutting food waste matters for everyone. When a community learns together, the change lasts long after we leave.",
    ],
  },

  impact: {
    heading: "Our impact so far",
    intro:
      "We have worked hand in hand with farming communities, and the results are already showing.",
    items: [
      { icon: "Users", text: "Reached about 200 farmers across farming communities in Oyo State." },
      { icon: "ClipboardCheck", text: "Ran a feasibility study at Akinyele Market, the largest market in southwest Nigeria." },
      { icon: "MapPinned", text: "Secured 18 plots of land worth roughly $20,000." },
      { icon: "Trophy", text: "Winner, Favoured Fund Pitch, Lagos, worth 1.5 million Naira." },
      { icon: "Medal", text: "Winner, Nigerians in Diaspora Summit, Aso Villa, Abuja, named Top 20 Startups in Nigeria." },
      { icon: "Sparkles", text: "Selected for the Shecluded Accelerator." },
      { icon: "Sparkles", text: "Selected for the Clean Tech Hub Accelerator." },
      { icon: "Satellite", text: "Top finalists, Nigerian Communications Satellite technology initiative." },
      { icon: "Handshake", text: "Engaged key stakeholders across government, the private sector, and NGOs." },
      { icon: "Wind", text: "Replaced fossil-fuel coolers with solar, cutting carbon emissions on the farms we serve." },
    ],
  },

  why: {
    heading: "Why WaterBrooks",
    points: [
      { icon: "Leaf", text: "Clean, renewable energy solutions" },
      { icon: "Sprout", text: "Accessible systems for smallholder farmers" },
      { icon: "LineChart", text: "Data-driven agricultural insights" },
      { icon: "Globe2", text: "A real focus on environmental and social impact" },
    ],
    cta: { label: "Partner With Us", href: "/contact" },
  },
};

export const contact = {
  hero: {
    eyebrow: "Get involved",
    heading: "Let us grow this together.",
    body: "There is a place for you in this work. Reach out, and let us find the best way to build alongside you.",
  },

  ways: {
    heading: "Ways to engage",
    items: [
      { icon: "Handshake", title: "Partner with us", body: "Bring your reach, land, or resources and help us scale." },
      { icon: "Sprout", title: "Support farmer programs", body: "Back the training and storage that farmers rely on." },
      { icon: "Lightbulb", title: "Collaborate on innovation", body: "Work with us on technology, research, and new ideas." },
      { icon: "Users", title: "Join community initiatives", body: "Be part of the outreach that keeps good food from going to waste." },
    ],
  },

  audiences: {
    heading: "Who we serve",
    items: [
      { icon: "Wheat", title: "Farmer cooperatives" },
      { icon: "Store", title: "Local markets and traders" },
      { icon: "Building2", title: "Agricultural organizations" },
      { icon: "HandHeart", title: "Development partners and NGOs" },
    ],
  },

  formHeading: "Send us a message",
  formIntro:
    "Tell us a little about you and how you would like to work together. Your message will open in your email app, ready to send.",

  orgTypes: ["Cooperative", "NGO", "Trader", "Investor", "Other"],
};
