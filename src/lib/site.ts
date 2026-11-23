/*
  Single source of truth for business info. Every value here was read off
  Tam's Vagaro profile (vagaro.com/girlontherun) on 2026-11-23: address,
  phone, hours, amenities, the full service menu, and the reviews. Service
  names and descriptions are Tam's own wording and house style
  ("HairCut & BlowOut", "ForTheFellas"), so keep them verbatim. Nothing on
  the site should hard-code a price, hour, or phone number.
*/

export const site = {
  name: "GirlOnTheRun",
  /* Display form of the name for headings and the logo lockup. */
  displayName: "Girl On The Run",
  owner: "tam.i.am",
  ownerShort: "Tam",
  tagline: "Girls run the world.",
  since: 2001,
  phone: "(732) 947-9941",
  phoneHref: "tel:+17329479941",
  address: {
    line1: "1026 Broad Street",
    unit: "Unit 10, Suite 13",
    city: "Shrewsbury",
    state: "NJ",
    zip: "07702",
  },
  /* No public email on Vagaro yet. Legal pages fall back to phone only. */
  email: null as string | null,
  /* Vagaro's aggregate as shown on the profile, 2026-11-23. */
  rating: { value: "5.0", count: 15, source: "Vagaro" },
  /*
    Booking runs on Tam's Vagaro account. Vagaro needs the client signed in,
    and its login cookies are blocked in cross-site iframes on Safari/iOS, so
    every Book link opens Vagaro's services page in a new tab (same approach
    as the Stevie Cain site). Vagaro has no per-service deep links.
  */
  vagaro: {
    profile: "https://www.vagaro.com/girlontherun",
    booking: "https://www.vagaro.com/girlontherun/services",
    reviews: "https://www.vagaro.com/girlontherun",
  },
  /*
    No Google Business Profile Place ID yet. Directions and the map embed
    search the street address; swap in the Place ID once Tam's profile is
    confirmed so they land on the listing instead of a bare pin.
  */
  get mapsQuery() {
    return encodeURIComponent(
      `${this.address.line1}, ${this.address.city}, ${this.address.state} ${this.address.zip}`,
    );
  },
  get mapsHref() {
    return `https://www.google.com/maps/search/?api=1&query=${this.mapsQuery}`;
  },
  get mapsEmbedSrc() {
    return `https://www.google.com/maps?q=${this.mapsQuery}&output=embed`;
  },
} as const;

export const fullAddress = `${site.address.line1}, ${site.address.unit}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/* Book lives in the header button, not the link row. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Menu", href: "/services/" },
  { label: "HairPeace", href: "/hairpeace/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Visit", href: "/visit/" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms & Conditions", href: "/terms/" },
] as const;

export function bookHref(): string {
  return site.vagaro.booking;
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://girlontherun.com";

/* ------------------------------------------------------------------------
   ABOUT
   The bio is Tam's Vagaro description, verbatim, split into paragraphs.
   ------------------------------------------------------------------------ */

export const about = {
  bio: [
    "tam.i.am, the creator of GirlOnTheRun, has been a licensed cosmetologist since 2001, providing a comprehensive array of services tailored to meet individual needs. With extensive experience across all hair types and textures, tam.i.am combines hair artistry with seamstressing to introduce an innovative black lace lingerie-inspired clip-in collection called “HairPeace.”",
    "This unique offering will soon be available for pre-order, with a patent pending. The mission is to empower girls to run the world, enhancing their confidence and style. Discover the fusion of beauty and creativity that sets tam.i.am apart in the industry.",
  ],
  /* Tam's own line from the HairChat consultation description. */
  promise: "Whether you want to Blend In or Stand Out, I got you!",
  pillars: [
    {
      title: "Every hair type & texture",
      text: "Curly, straight, short, long, relaxed, natural. Two decades of chairs and every kind of head.",
    },
    {
      title: "Stylist + seamstress",
      text: "Tam sews her own clip-ins by hand: Remy weft, black lace, silk thread. That’s HairPeace.",
    },
    {
      title: "Cuts for everyone",
      text: "ForTheFellas barbering, KidsCuts with superhero capes, and full glam. Gender and pronouns don’t set the menu.",
    },
  ],
} as const;

/* ------------------------------------------------------------------------
   HOURS (Vagaro, 2026-11-23). Sunday first. open/close are 24h for schema.
   ------------------------------------------------------------------------ */

export const hours = [
  { day: "Sunday", short: "Sun", open: "11:00", close: "16:00", label: "11 AM – 4 PM" },
  { day: "Monday", short: "Mon", open: "09:00", close: "14:00", label: "9 AM – 2 PM" },
  { day: "Tuesday", short: "Tue", open: "09:00", close: "19:00", label: "9 AM – 7 PM" },
  { day: "Wednesday", short: "Wed", open: "09:00", close: "14:00", label: "9 AM – 2 PM" },
  { day: "Thursday", short: "Thu", open: "09:00", close: "19:00", label: "9 AM – 7 PM" },
  { day: "Friday", short: "Fri", open: "09:00", close: "21:00", label: "9 AM – 9 PM" },
  { day: "Saturday", short: "Sat", open: "09:00", close: "21:00", label: "9 AM – 9 PM" },
] as const;

export const hoursSummary = "Open 7 days · Late nights Fri & Sat till 9";

export const visit = {
  parking: "Free parking",
  payment: ["Visa", "MasterCard", "Discover", "American Express", "Debit", "Cash"],
  amenities: ["WiFi", "Disabled access", "LGBTQIA+ friendly", "Kid friendly"],
  language: "English",
  financing: "Pay over time with Affirm on Vagaro (orders over $50).",
} as const;

/* ------------------------------------------------------------------------
   SERVICES
   Full Vagaro menu, in Vagaro's category and item order. `from: true`
   renders "from $250" (Vagaro's "Starting at"). price 0 renders "Free".
   `mobile: true` marks the items Vagaro tags "Mobile Service".
   ------------------------------------------------------------------------ */

export type Service = {
  name: string;
  price: number;
  from?: boolean;
  mobile?: boolean;
  description?: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  /* Short site-written intro for the category; the items stay verbatim. */
  blurb: string;
  image?: { src: string; alt: string };
  services: Service[];
};

const WEFT =
  "Sew-In Crochet Style Weft Xtensions Secured With MicroLinks. NO HEAT. NO GLUE. Book HairChat for Consultation for ColorMatching, ColorBlending or Custom Dying for PreOrder or Simply Bring Your Own! Hair Can be ReUsed Multiple Times. DryCut and Style Included.";

export const serviceGroups: ServiceGroup[] = [
  {
    id: "the-basics",
    title: "TheBasics",
    blurb: "Cuts, blowouts, and the quick in-and-out.",
    image: { src: "/images/gallery/01.webp", alt: "Long layered cut on brunette hair, from behind" },
    services: [
      { name: "HairCut & BlowOut", price: 55, from: true, mobile: true, description: "A Customized HairCut Designed to Fit Your Individual Style and Preferences, Includes BlowOut and Finishing Product." },
      { name: "BlowOut", price: 35, description: "Wash and Finishing Service Using a BlowDryer and Professional Styling Brush." },
      { name: "ForTheFellas", price: 40, description: "ForTheFellas provides expert barbering services tailored for everyone, emphasizing precision and style regardless of Gender/Pronouns. Challenging the notion that grooming is just for girls. We ensure that each client leaves looking sharp and feeling confident, making it a go-to destination for top-notch grooming." },
      { name: "KidsCuts", price: 30, description: "KidsCuts Offers a Fun and Engaging HairCut Experience for Children Under 10, Featuring SuperHero/Princess Themed Capes to Enhance Their Ultimate Style, We Provide Complimentary Colored HairGel, Glitter, or Tinsel UpOn Request, Ensuring Every Child Leaves feeling Like They Can Run The World." },
      { name: "Haircut-n-Run", price: 40, description: "Either Dry Cut or Wash and Cut. No Styling" },
    ],
  },
  {
    id: "hair-color",
    title: "HairColor",
    blurb: "Single process to full color correction, highlights, lowlights, and balayage.",
    image: { src: "/images/gallery/02.webp", alt: "Burgundy-red color with loose waves" },
    services: [
      { name: "Full Base Color- Single Process", price: 250, from: true, description: "Permanent Dye to Change the Entire Color of Your Hair or to Eliminate Grey from Root to Ends." },
      { name: "Color Correction", price: 500, from: true, description: "Corrective Service to Fix Even Out Unbalanced Color. Can Take Multiple Sessions Depending on the Desired Results. Consultation Required" },
      { name: "Root TouchUp- Single Process", price: 95, mobile: true, description: "Permanent Color Applied to New Growth Area Only." },
      { name: "Full Base Color- Double Process", price: 350, description: "•PreLightening Hair More Than 4 Shades or Lighter Requiring Additional Toner Application or •Darkening Hair More Than 4 Shades Requiring Fill With TintBack." },
      { name: "HiLites- Partial", price: 150, description: "Half Head of Alternating Lighter Pieces in T-Zone" },
      { name: "HiLites- Full", price: 250, description: "Entire Head Foiled With Lighter Pieces" },
      { name: "SunBurst", price: 90, description: "6 Foils Around FaceFrame to Create a Natural Sun Brightening Effect" },
      { name: "LoLites- Partial", price: 150, description: "Half Head Adding Darker Pieces in the T-Zone for Contrast and Dimension" },
      { name: "LoLites- Full", price: 250, description: "Entire Head Foiled With Darker Pieces Added for Contrast and Dimension" },
      { name: "Carmelizing", price: 350, description: "Process of Adding Darker and Lighter Pieces into the Hair to Create Multidimensional Tones" },
      { name: "ColorBlending", price: 75, description: "Stains the Hair with a Tinted Color to Blend Grey Instead of Covering It. Gradually Washes out 4-6 Weeks for No Commitment" },
      { name: "SemiPermanent", price: 75, description: "Temporary Color Coating the Hair Root to Ends Changing the Tone or to Darken. Perfect for the NoCommitment Client." },
      { name: "Root TouchUp- Double Process", price: 150, description: "Lift and Tone to NewGrowth Area" },
      { name: "Color ReFresh", price: 60, description: "Tinted Glaze Used to PumpUp Brightness to Dull Hair or Neutralize and Tone Down UnWanted Warmth. Adds Shine by Sealing Hair Cuticle. Gradually Fades In About 4 Weeks" },
      { name: "Balayage", price: 285, description: "Seamless Blend of HiLites with Shadowed Root. Bold Face Framing Money Peaces. Perfect for the Low Maintenance Girl." },
      { name: "Cheater", price: 40, description: "InBetween Root TouchUps, We Can “Cheat” By Dabbing Color On Part and Around Hairline Only. Wash. Run. It Will Be Our Secret. **Styling NOT Included but Can be Added On." },
    ],
  },
  {
    id: "hairpeace",
    title: "HairPeace",
    blurb: "Tam’s handmade lace clip-in collection. Patent pending.",
    image: { src: "/images/suite/hair-closet.webp", alt: "The HairCloset: hanging rows of clip-in extensions in every shade" },
    services: [
      { name: "HairLingerie", price: 0, description: "Take a Sneak Peek Inside the HairCloset. One Peace Clip-In Extensions Made With 100% Remi Human Hair. Carefully Crafted for Damage Worry Free Locks. With Black Lace and the Finest Silk Thread Which Insures Flexibility. Can Be Worn Versatile Ways. Takes the Stress Out of “Matching” With Our Color “Blending” Technique. SIZES- Small, Medium, Large. LENGTH- 14″, 16″, 18″. SHADES- Light, Medium, Dark. Only 3 minute Application to Get You Running Out The Door Looking and Feeling Like a RockStar. Hang Tight, Videos and Before/After Pictures Soon to Come! Patent Pending. Book for a Consultation and Measuring." },
      { name: "TheGarter", price: 150, description: "4 Remy Weft Strips Sewn OnTo Light as a Feather Lace Using Finest Silk Thread Attaching SnagProof Clips Giving a Natural Look. Minimal Coverage." },
      { name: "ThePanty", price: 250, description: "9 Remy Weft Strips Sewn OnTo Light as a Feather Lace Using Finest Silk Thread Attaching SnagProof Clips. Giving a More Glam Look. Maximum Coverage." },
      { name: "POP Peace", price: 30, description: "Pair of Peaces Designed for a Variety of Different Styles Such as Getting That Asymmetrical Look, a More Elongated Front, or Fuller UpDos." },
      { name: "DreadHead", price: 0 },
      { name: "L7s", price: 40, description: "Pair of Peaces designed to curve around the ear for seamless French/Dutch Braids." },
      { name: "FauxCut", price: 120, description: "Have the Urge to Chop Your Hair but Afraid of Commitment? Get Your ShortHair Fix Without Regrets or Weird GrowOut Stage." },
    ],
  },
  {
    id: "permanent-straightening",
    title: "PermanentStraightening",
    blurb: "Relaxers with Mizani ButterBlend for sensitive scalps.",
    services: [
      { name: "Relaxer - Full Head", price: 150, from: true, description: "Full Process Chemical Application from Root to End to Relax and Straighten NewGrowth Permanently Using Mizani ButterBlend for SensitiveScalp." },
      { name: "Relaxer- TouchUp", price: 100, from: true, description: "Chemical ReApplication Targeting Only the NewGrowth of Previously Relaxed Hair Using Mizani ButterBlend for SensitiveScalp" },
    ],
  },
  {
    id: "smoothing-treatments",
    title: "SmoothingTreatments",
    blurb: "Keratin, gloss, and deep conditioning.",
    image: { src: "/images/gallery/14.webp", alt: "Before and after a GK keratin treatment" },
    services: [
      { name: "DeepConditioning Treatment", price: 15, description: "A formula that is designed to restore proteins and moisture in the hair. Often the client will wear a cap and be placed under a dryer for 10-20 minutes to increase the speed of penetration." },
      { name: "GK- Keratin Treatment", price: 250, from: true, description: "Blowout that conditions, relaxes and eliminates frizz from hair for up-to four months" },
      { name: "ClearGloss", price: 30, description: "Clear Glaze Temporarily Smoothes Frizz and Adds MegaShine to Every Strand. Gradually Fades Lasting About a Month." },
    ],
  },
  {
    id: "hairchat",
    title: "HairChat",
    blurb: "Not sure what to book? Start here.",
    services: [
      { name: "Consultation", price: 0, description: "Run in for a quick HairChat about what we like/love/not so much. Let me help you decide what can be achieved in minutes VS multiple sessions to meet your hair goals. Integrity and Time Saving techniques are the most important to me. Whether you want to Blend In or Stand Out, I got you!" },
    ],
  },
  {
    id: "brow-bar",
    title: "BrowBar",
    blurb: "Wax, tint, lamination, and brow extensions.",
    image: { src: "/images/brand/brow-lamination.webp", alt: "Brows before and after lamination" },
    services: [
      { name: "Wax", price: 15, description: "Cleaning Up or ReShaping" },
      { name: "Lamination", price: 80, description: "Brow Lamination is a semi-permanent treatment that enhances the shape and fullness of your eyebrows, creating a sleek, polished look. This process involves setting the brow hairs in place, providing a long-lasting, natural appearance that can be tailored to your desired style. Complimentary Tint and Tweeze." },
      { name: "Tinting", price: 30, description: "Tinting enhances the natural beauty of your eyebrows by applying a semi-permanent dye to either lighten or darken their appearance. This service results in fuller, more defined brows that complement your facial features and require minimal maintenance." },
      { name: "BrowXtensions", price: 80, description: "Xtensions utilize specialized BrowGlue to seamlessly attach individual hairs, effectively filling in sparse areas and covering scars. This technique addresses unevenness and over-plucked brows, resulting in a fuller, more natural appearance." },
    ],
  },
  {
    id: "xtensions",
    title: "Xtensions",
    blurb: "Woven, braided, or bonded. 100% Remy human hair.",
    services: [
      { name: "Consultation", price: 0, description: "Extensions are positioned close to the scalp by weaving, braiding, or bonding, and may consist of real or synthetic hair. They are designed to add length and volume to the style. When applied professionally, extensions will mix and move naturally with any style." },
      { name: "Implementation", price: 500, description: "Extensions are positioned close to the scalp by weaving, braiding, or bonding, and always consist of 100% Remy HumanHair. They are designed to add length and volume to the style. When applied professionally, extensions will mix and move naturally with any style. Includes DryCut" },
      { name: "Removal", price: 100, description: "Includes Wash DeepConditioning and Style" },
    ],
  },
  {
    id: "braids",
    title: "Braids",
    blurb: "Dutch, French, and a little hardware.",
    image: { src: "/images/brand/hair-piercing.webp", alt: "Braids finished with metal hair jewelry" },
    services: [
      { name: "Dutch/ French Braids", price: 15, description: "Dutch and French Braids offer a stylish and elegant way to manage your hair, utilizing intricate weaving techniques to create beautiful, long-lasting styles. These braids not only provide a polished look but also keep your hair secure and tangle-free, making them perfect for any occasion. $15 Per Section" },
      { name: "HairPiercing", price: 5, description: "Transform your Braids with our stunning HairPiercing service, featuring unique metal Hair Jewelry pendants designed to elevate your hairstyle. Each piece adds a touch of individuality and flair, ensuring you stand out in any crowd." },
      { name: "More Inches", price: 15, description: "More Inches specializes in enhancing your style with synthetic braiding hair, providing both added length and vibrant color accents. Price Per Section." },
    ],
  },
  {
    id: "rosegold",
    title: "RoseGold",
    blurb: "Four rose-gold undertones, matched to your base.",
    services: [
      { name: "Blush UnderTone Neutral Pink", price: 150, description: "Best on DoubleProcess Blonde. Includes Styling" },
      { name: "Peach UnderTone Gold", price: 150, description: "Best on Light-ish Bases. Includes Styling" },
      { name: "Lavender UnderTone Muted Violet", price: 150, description: "Best on Medium-ish Bases. Includes Styling" },
      { name: "Coral UnderTone Bright Copper", price: 150, description: "Best For Dark-ish Bases. Includes Styling" },
      { name: "SemiPermanent", price: 150, description: "NoLift ColorStaining that Fades Gradually with Each Wash. Can be Applied to Any Level Base. Includes Styling" },
    ],
  },
  {
    id: "xtensions-hair",
    title: "Xtensions-HAIR",
    blurb: "Sew-in wefts by the row. No heat, no glue.",
    services: [
      { name: "Sew-In Weft (1 Row)", price: 150, description: WEFT },
      { name: "Sew-In Weft (2 Rows)", price: 300, description: WEFT },
      { name: "Sew-In Weft (3 Rows)", price: 450, description: WEFT },
      { name: "Sew-In Weft (4 Rows)", price: 600, description: WEFT },
    ],
  },
];

export const allServices: Service[] = serviceGroups.flatMap((g) => g.services);

export function formatPrice(s: Service): string {
  if (s.price === 0) return "Free";
  return `${s.from ? "from " : ""}$${s.price}`;
}

/* Lowest paid price in a group, for the "from $X" on the menu index. */
export function groupFrom(g: ServiceGroup): string {
  const paid = g.services.filter((s) => s.price > 0).map((s) => s.price);
  if (!paid.length) return "Free";
  return `from $${Math.min(...paid)}`;
}

/* ------------------------------------------------------------------------
   REVIEWS
   Published Vagaro reviews, quoted verbatim (typos included) with the
   name exactly as Vagaro shows it. Don't tidy, invent, or add star counts.
   `feature` marks the pull quotes used large on the home page.
   ------------------------------------------------------------------------ */

export const reviews = [
  { quote: "Tam has been doing my hair since I was in a stroller! Growing up and having the same hairdresser is such a privilege; I always leave feeling refreshed and like myself", name: "Eliana D.", feature: true },
  { quote: "Tam just has a way with hair. Curly, short, long or straight it doesn't matter she will work her magic and have you walking out feeling like ten million dollars. Her space, energy and attention to detail never goes unnoticed! We will keep coming back forever", name: "Tessy S.", feature: true },
  { quote: "I've been going to Tam 15+ years and never disappoints! Ive had every service from a basic blowout to a full head weft install! But her last creation the hair lingerie knocks it out the park!! Talk about a game changer! It is a light seamless full head clip in hair extension made by hand by the expert herself and I highly recommend! XOXO", name: "Meredith P.", feature: true },
  { quote: "Tam is truly the best! I always leave with beautiful hair, I don’t trust anyone with my hair except for her, she’s so talented and I will never go to anyone else. 🤗", name: "Diora I." },
  { quote: "Tam is amazing! I've been going to her for forever and we've had fun changing my hairstyles and color over the years. I always leave feeling fabulous. New spot is very chic!", name: "Summer S." },
  { quote: "I had such a great experience getting my haircut! I absolutely love how it turned out. Tam was friendly, professional, and really listened to what I wanted. My hair looks and feels so much healthier, and I left feeling amazing. I’ll definitely be coming back and highly recommend Tam!", name: "Fatima T." },
  { quote: "Tam is truly a talented person! She knows hair and beauty…. Her effort into every detail is incredible. She takes the time to listen to her clients, gives feedback when needed and just always knows how to make everyone feel so much more beautiful and confident. Her space is full of vibrant and chic energy, amazing smiles that only she can give and great customer service! So glad she’s at this space!", name: "Edna G." },
  { quote: "Tam has been doing my hair for over 20 years and she is absolutely the best at her craft! I trust her implicitly and she never disappoints. ❤️❤️", name: "Jessica B." },
  { quote: "Tamera has been in the beauty business a long time, always changing with the time yet staying current. Skilled and talented, kind and funny. Happy to be in her chair and left feeling like a million bucks!", name: "Lacey D." },
  { quote: "Tamrah has been making my hair gorgeous since 2002! I ALWAYS receive compliments on my hair & it’s all due to Tam’s mastery. She truly us the best!", name: "Patti B." },
  { quote: "Absolutely amazing! I always leave loving my hair and feeling my best. She’s incredibly talented, professional, and truly listens to what you want. I wouldn’t trust anyone else with my hair! ❤️", name: "Gina W." },
  { quote: "Tam is the best, you always leave feeling amazing. You will not regret going to her.", name: "Krislin L." },
] as const;

/* ------------------------------------------------------------------------
   PHOTOS. From Tam's Vagaro gallery (800px is the largest Vagaro serves).
   Alt text describes the hair, never the client.
   ------------------------------------------------------------------------ */

export const photos = {
  tam: { src: "/images/tam/tam-suite.webp", alt: "Tam in her suite with long, loose brunette waves" },
  tamAlt: { src: "/images/tam/tam-certified.webp", alt: "Tam smiling in front of a certification banner" },
  suite: { src: "/images/suite/suite.webp", alt: "Tam’s suite: damask wall, red stool, fiddle-leaf fig, and styling chair" },
  suiteDetails: [
    { src: "/images/suite/wall.webp", alt: "Red-and-black wall shelves with a vintage dryer hood, mirror, and products" },
    { src: "/images/suite/brow-bar.webp", alt: "The Brow Bar shelf" },
    { src: "/images/suite/fellas-shelf.webp", alt: "The ForTheFellas shelf with grooming products" },
    { src: "/images/suite/skin-shelf.webp", alt: "Skin shelf with a red figure and serums" },
  ],
  hairCloset: { src: "/images/suite/hair-closet.webp", alt: "The HairCloset: hanging clip-in pieces in every shade" },
  popPeace: { src: "/images/brand/pop-peace.webp", alt: "POP Peace DreadHead in blush pink, worn as a side braid" },
  plates: { src: "/images/brand/plates.webp", alt: "GOXTR spelled out in vintage license-plate letters" },
  inspired: { src: "/images/brand/inspired.webp", alt: "Wall lettering: So many people have inspired me to be nothing like them" },
  logoSign: { src: "/images/brand/logo-window.webp", alt: "The GirlOnTheRun crossed-arrows logo framed in red roses" },
  nameplate: { src: "/images/brand/tam-i-am.webp", alt: "Studded red tam.i.am nameplate" },
} as const;

export type GalleryItem = { src: string; alt: string; tag: string };

export const gallery: GalleryItem[] = [
  { src: "/images/gallery/01.webp", alt: "Long V-layers on brunette hair with lighter ends", tag: "Cut" },
  { src: "/images/gallery/02.webp", alt: "Burgundy-red color with loose waves", tag: "Color" },
  { src: "/images/gallery/03.webp", alt: "Before and after: brassy blonde to cool, even blonde", tag: "Before / After" },
  { src: "/images/gallery/04.webp", alt: "Long platinum blonde waves", tag: "Color" },
  { src: "/images/gallery/05.webp", alt: "Copper balayage on a dark lob", tag: "Balayage" },
  { src: "/images/gallery/06.webp", alt: "Before and after: pastel blonde to rainbow peekaboo color", tag: "Before / After" },
  { src: "/images/gallery/07.webp", alt: "Glossy auburn A-line bob", tag: "Cut + Color" },
  { src: "/images/gallery/08.webp", alt: "Before and after: brassy long hair to soft brunette", tag: "Before / After" },
  { src: "/images/gallery/09.webp", alt: "Icy platinum with long face-framing layers", tag: "Color" },
  { src: "/images/gallery/10.webp", alt: "Long layers with ribbon highlights", tag: "HiLites" },
  { src: "/images/gallery/11.webp", alt: "Before and after: dark to golden balayage on long hair", tag: "Before / After" },
  { src: "/images/gallery/12.webp", alt: "Soft blonde curls", tag: "Style" },
  { src: "/images/gallery/13.webp", alt: "Dark roots melting into rose-pink ends", tag: "Color" },
  { src: "/images/gallery/14.webp", alt: "Before and after a GK keratin treatment", tag: "Keratin" },
  { src: "/images/gallery/15.webp", alt: "Long ash-blonde layers", tag: "Color" },
  { src: "/images/gallery/16.webp", alt: "Two color looks: pink-blonde and electric blue", tag: "Vivid" },
  { src: "/images/gallery/17.webp", alt: "Violet vivid color in long straight hair", tag: "Vivid" },
];
