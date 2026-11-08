// ĀINA services data
// -----------------------------------------------------------------
// HOW TO EDIT
//  - To add a service: copy a whole { ... } block, paste it below, change the details.
//  - duration = minutes, price = BBD (use 0 for complimentary).
//  - priceNote (optional) adds a few words after the price, e.g. "per unit".
//  - reserve: false hides the Reserve button (used for add-ons not yet in the booking system).
//    To turn the button on later, delete that line or change it to reserve: true.
//  - link = that service's direct booking link (paste between the quotes).
//    If a link is left empty, the Reserve button uses DEFAULT_BOOKING_LINK below
//    (right now every service uses that one link).
//  - A comma after every line inside a block (except the last one),
//    and a comma between blocks (except after the very last one).
// -----------------------------------------------------------------

const DEFAULT_BOOKING_LINK = "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098";

const services = [

  // ---------- CONSULTATIONS ----------
  {
    category: "Consultations",
    name: "ĀINA Client Consultation",
    duration: 30,
    price: 0, // CHECK: the PDF shows "300" - read as 30 min / BBD $0
    description: "The ĀINA Client Consultation is an opportunity for current clients to discuss your evolving hair goals, explore new styles, and address any questions or concerns you may have about your hair. Whether you're considering a change, maintaining your current look, or seeking guidance on your haircare routine, this one-on-one experience allows us to take a closer look at your needs and create a thoughtful approach to achieving your desired results. During your consultation, we discuss your styling preferences, hair history, current condition, and maintenance routine. Together, we explore suitable service options and recommendations that align with your hair goals, lifestyle, and long-term hair care needs. Our aim is to ensure you feel informed, confident, and comfortable with your service plan before moving forward.",
    link: "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098"
  },
  {
    category: "Consultations",
    name: "New Client Consultation",
    duration: 30,
    price: 50,
    description: "Your introduction to ĀINA begins with a personalized consultation designed to help us understand you, your hair, and what you hope to achieve. This initial experience allows us to become familiar with your hair history, previous treatments, lifestyle, and styling preferences while giving you the opportunity to discover our approach to hair care and the services we offer. Whether you're looking to maintain your current look, explore something new, or establish a more intentional haircare routine, we want to understand the bigger picture before recommending a direction. During your consultation, we assess your hair's current condition, discuss your goals, and identify services and treatments best suited to your needs. We'll also walk through recommended maintenance, styling options, and any necessary preparation to help you achieve the best possible outcome. This is your opportunity to ask questions, share inspiration, and get acquainted with the ĀINA experience. By the end of your consultation, you'll have a clearer understanding of your hair's needs and a personalized plan to guide your journey with us. Your consultation fee will be credited toward your future appointment.",
    link: "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098"
  },
  {
    category: "Consultations",
    name: "Extension Consultation",
    duration: 30,
    price: 20,
    description: "Your journey to beautifully customized extensions begins with a private, one-on-one virtual consultation. This experience is designed to explore your desired look while ensuring your natural hair remains at the forefront of every recommendation. We'll take the time to understand your hair history, assess its current condition, discuss your length and volume goals, and guide you through the extension methods best suited to your hair and lifestyle. Together, we'll establish a personalized installation plan, covering your preferred look, suitable techniques, and the preparation needed ahead of your appointment. At the conclusion of your consultation, you'll have the opportunity to secure your installation appointment. Your consultation fee will be credited toward your extension service. Exclusively available to new extension clients.",
    link: "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098"
  },

  // ---------- MENU ----------
  {
    category: "Menu",
    name: "Classic Ponytail",
    duration: 90,
    price: 200,
    description: "More than a ponytail, this experience begins with a clarifying and moisturizing cleanse to refresh and rebalance, followed by a deep conditioning steam treatment to hydrate every strand. Your hair is left prepped, moisturized and protected from heat. Using infrared technology your hair is dried while locking in moisture and then carefully pressed. A trim is included if necessary. Your hair is carefully sculpted into a smooth ponytail of your choice. For your finish your extensions are styled to your preference leaving you feeling polished and renewed.",
    link: "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098"
  },
  {
    category: "Menu",
    name: "The Relaxer",
    duration: 150,
    price: 180,
    description: "Maintain your smooth, sleek look with a carefully tailored relaxer retouch designed to complement your hair's natural growth pattern. This service focuses on refreshing new growth while giving special attention to the condition of your previously relaxed hair. We begin by evaluating your hair and scalp to determine the appropriate application and ensure your service is approached with the care and precision your hair deserves. The treatment includes the careful protection of previously relaxed lengths, targeted relaxer application to new growth, and a thorough neutralizing and moisturizing cleanse to restore the hair after processing. A nourishing conditioning treatment follows to replenish moisture, enhance softness, and leave your strands feeling revitalized. Your service concludes with a precision trim and a customized finish, styled to your preference for a smooth, refined result that is easy to maintain and beautifully suited to your everyday routine.",
    link: "https://app.acuityscheduling.com/schedule/be07cd67/appointment/98559784/calendar/14588098"
  },
  {
    category: "Menu",
    name: "Closure Installation",
    duration: 240,
    price: 300,
    description: "Created for those who prefer the seamless finish of a closure installation, this service is suited to both closure sew-ins and closure wig applications. Whether you're looking for a natural-looking hairline, added versatility, or a beautifully finished protective style, every detail is carefully considered to achieve a look that complements your preferences. Your experience includes a clarifying and moisturizing cleanse, a restorative conditioning treatment, precision trimming, and complete hair preparation, including cleansing, drying, and closure customization. Your installation is then expertly fitted and styled to create a seamless, polished finish. A personalized consultation is recommended to discuss your desired look, explore styling possibilities, and ensure the best approach for your installation, although it is not required to book the service.",
    link: ""
  },
  {
    category: "Menu",
    name: "Sew-in Experience",
    duration: 180,
    price: 250,
    description: "Your appointment begins with a personalized consultation to discuss your desired outcome, assess your natural hair, and determine the most suitable foundation and installation technique. Your service includes a thorough cleanse and conditioning treatment to prepare your natural hair. Damaged ends are removed if required, followed by careful sectioning, braiding, and secure weft installation. Special attention is given to the placement, tension, and distribution of the extensions to create a comfortable foundation and a natural-looking finish. Once installed, your extensions are expertly shaped, blended, and styled to achieve your desired look. The experience concludes with a polished finish that feels beautifully integrated, allowing you to enjoy added length, volume, and styling versatility.",
    link: ""
  },
  {
    category: "Menu",
    name: "Quick Weave Experience",
    duration: 180,
    price: 220,
    description: "Enjoy the versatility of a beautifully styled look with our customized quick weave experience. Designed to deliver added length, volume, and dimension, this installation offers a seamless finish tailored to your desired look. Your appointment begins with a consultation to discuss your styling preferences, assess your natural hair, and select the most suitable approach to achieve a result that complements your features and personal style. Your service includes a thorough cleansing and conditioning ritual to prepare your hair. Your hair is carefully trimmed, followed by careful molding and protective preparation of your natural strands. Extensions are then expertly placed and shaped to create a seamless blend, with attention given to the overall silhouette, movement, and finish. We complete your experience with customized cutting and signature styling, leaving you with a polished, beautifully blended look that is ready to wear.",
    link: ""
  },
  {
    category: "Menu",
    name: "Express Maintenance",
    duration: 150,
    price: 150,
    description: "Designed to restore the appearance of your installation while caring for your natural hair underneath, this service focuses on bringing back the softness, movement, and polished finish of your style. We begin by assessing the condition of your extensions, installation, and natural hair to determine the care and attention needed to refresh your look. Your service includes a thorough cleansing of the scalp and extensions to remove product buildup and impurities, followed by a moisturizing conditioning treatment to restore softness and manageability. Your installation is then carefully refreshed, with attention given to the foundation, blending, and overall presentation of the style. We finish with professional drying and signature styling, leaving your extensions revitalized, refreshed, and beautifully put together.",
    link: ""
  },
  {
    category: "Menu",
    name: "The Virgin Relaxer",
    duration: 180,
    price: 230,
    description: "Designed to transform your natural texture into a beautifully smooth, manageable finish, our virgin relaxer service is a carefully tailored treatment that prioritizes both your desired result and the condition of your hair. Every appointment begins with an in-depth consultation to evaluate your hair's texture, density, scalp condition, and overall needs. This allows us to determine the most suitable approach to achieve your preferred level of smoothness while maintaining the integrity of your strands. Your service includes the precise application of a professional relaxer to virgin hair, followed by a thorough neutralizing cleanse to ensure all chemical residue is removed. A restorative conditioning treatment follows to replenish moisture, improve softness, and leave your hair feeling nourished. Your hair is carefully trimmed to remove any damaged ends. We complete your experience with a customized blow-dry and signature styling, revealing a sleek, refined finish with beautiful movement and manageability.",
    link: ""
  },
  {
    category: "Menu",
    name: "The Removal",
    duration: 60,
    price: 100,
    description: "A gentle removal of your sew-in extensions. Each thread is carefully cut and wefts released to allow your natural hair to be unbraided and detangled. Your hair is then cleansed and deep conditioned. This service is completed with an infrared heat infused blow-dry.",
    link: ""
  },
  {
    category: "Menu",
    name: "The ĀINA Hair Care Ritual",
    duration: 120,
    price: 170,
    description: "The ĀINA Hair Care Ritual is designed to restore balance, replenish moisture, and maintain the overall condition of your strands. Whether your hair needs a fresh start or simply a little extra attention, this experience focuses on creating a healthy foundation through intentional cleansing and conditioning. We begin with an assessment of your scalp and hair to identify areas that need particular attention and select the most suitable treatments for your needs. Your ritual begins with a detoxifying cleanse to lift away product residue, excess oils, and environmental buildup, leaving the scalp refreshed and renewed. This is followed by a customized conditioning treatment selected to address your hair's individual needs, helping to improve moisture, softness, and manageability. A precision trim follows to remove compromised ends and maintain a neat, healthy-looking shape. Your experience concludes with a professional blow-dry, leaving your hair refreshed, beautifully conditioned, and effortlessly styled.",
    link: ""
  },
  {
    category: "Menu",
    name: "Silk Press and Precision Trim",
    duration: 180,
    price: 200,
    description: "We begin with a thorough assessment of your hair's condition and styling needs to ensure each step is tailored to your texture and desired result. Your experience includes a purifying cleanse to remove product buildup, followed by a moisturizing conditioning treatment to replenish hydration, improve softness, and prepare your strands for heat styling. Professional heat protection is applied before your hair is expertly blow-dried and silk-pressed using precise techniques to achieve a sleek, lustrous finish while respecting your natural texture. A precision trim is incorporated to refine your ends, eliminate unwanted split ends, and maintain the overall health and shape of your hair. We conclude with signature styling, leaving your strands silky, bouncy, and beautifully polished.",
    link: ""
  },

  {
    category: "Menu",
    name: "Color Service",
    duration: 180,
    price: 200,
    description: "Transform your look with a customized colour experience designed to complement your features, personal style, and desired finish. Whether you're embracing a deeper, richer shade, enhancing your natural colour, or exploring an entirely new look, every colour service begins with a detailed consultation. We assess your hair's current condition, colour history, and overall goals to determine the most suitable approach while keeping the health and integrity of your strands a priority. Your experience includes the careful application of professional colour throughout the hair, followed by the appropriate cleansing and conditioning process to leave your strands feeling refreshed and nourished. Special attention is given to colour placement, saturation, and tonal balance to achieve a beautifully consistent result. We complete your service with a customized finish and signature styling, revealing a rich, dimensional colour that feels effortlessly refined and uniquely yours.",
    link: ""
  },

  // ---------- EXTENSION SERVICES ----------
  {
    category: "Extension Services",
    name: "Extension Color Service",
    duration: 180,
    price: 70,
    priceNote: "per unit",
    description: "We begin by evaluating the hair quality, existing colour, and desired outcome to determine the most appropriate colour approach. Your extensions are carefully prepared before professional colour is applied with attention to even saturation and tonal consistency. Once the desired shade is achieved, the hair undergoes a suitable cleansing and conditioning process to help maintain softness and manageability. Your extensions are then thoroughly dried and assessed to ensure a beautifully refined finish. The result is a refreshed, customized colour that enhances your extensions and complements your personal style.",
    link: ""
  },
  {
    category: "Extension Services",
    name: "Extension Detox and Moisturize Ritual",
    duration: 180,
    price: 100,
    description: "Give your extensions the attention they deserve with a restorative care experience designed to refresh, revive, and maintain their quality. Over time, extensions can accumulate product residue, oils, and environmental buildup that affect their softness, movement, and overall appearance. This specialized treatment focuses on thoroughly cleansing the extensions while restoring the moisture and manageability needed to keep them looking and feeling their best. Your experience begins with a purifying detox cleanse to lift away buildup and impurities, followed by a deeply nourishing conditioning treatment selected to replenish moisture and improve softness. Each weft is carefully handled throughout the process to maintain its condition and minimize unnecessary stress on the hair. Your extensions are then thoroughly dried and finished, leaving them refreshed, softer to the touch, and beautifully manageable, ready for their next installation or styling.",
    link: ""
  },

  // ---------- A LA CARTE ----------
  {
    category: "A La Carte",
    name: "Clear Shine Gloss",
    duration: 30,
    price: 80,
    description: "A gentle ammonia free treatment that transforms dull, dry hair and lasts up to 28 shampoos. This gloss is infused with amino acids that condition hair leaving it super shiny. This treatment's acidic formation balances your hair pH, strengthening your strands, reducing frizz, dryness and breakage. This is the perfect addition to any service.",
    reserve: false,
    link: ""
  },
  {
    category: "A La Carte",
    name: "The Removal",
    duration: 30,
    price: 80,
    description: "A gentle removal of your sew-in extensions. Each thread is carefully cut and wefts released to allow your natural hair to be unbraided and detangled.",
    reserve: false,
    link: ""
  },
  {
    category: "A La Carte",
    name: "Redken Bond Repair System",
    duration: 100,
    price: 200,
    description: "The gentle yet effective sulfate-free repair system uses citric acid and a bonding care complex to penetrate the hair shaft and rebuild broken bonds caused by chemical services, heat styling and environmental damage. The pH-balancing formulas seal the cuticle for improved strength and shine. This treatment is suitable for all hair types.",
    reserve: false,
    link: ""
  }
];
