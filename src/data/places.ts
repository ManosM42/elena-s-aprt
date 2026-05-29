// ─────────────────────────────────────────────
//  places.ts  —  src/data/places.ts
//  All nearby places for Elena's Apartment,
//  Kokkini Hani, Crete
// ─────────────────────────────────────────────

export type Category = "beaches" | "restaurants" | "attractions" | "entertainment";

export interface Place {
  id: string;
  category: Category;
  name: { en: string; el: string };
  shortDescription: { en: string; el: string };
  description: { en: string; el: string };
  type: { en: string; el: string };
  distance: string;
  rating: number;
  season: { en: string; el: string };
  tip: { en: string; el: string };
  image: string;
  lat: number;
  lng: number;
}

// ─── Category metadata ───────────────────────

export const categoryMeta: Record<
  Category,
  {
    en: string;
    el: string;
    emoji: string;
    tagline: { en: string; el: string };
  }
> = {
  beaches: {
    en: "Nearby Beaches",
    el: "Κοντινές Παραλίες",
    emoji: "🏖️",
    tagline: {
      en: "Beautiful shores within walking distance of Elena's Apartment.",
      el: "Υπέροχες ακτές σε κοντινή απόσταση από το διαμέρισμα της Ελένας.",
    },
  },
  restaurants: {
    en: "Nearby Restaurants",
    el: "Κοντινά Εστιατόρια",
    emoji: "🍽️",
    tagline: {
      en: "Local flavours and welcoming spots just around the corner.",
      el: "Τοπικές γεύσεις και φιλόξενα μέρη στη γειτονιά σας.",
    },
  },
  attractions: {
    en: "Nearby Attractions",
    el: "Κοντινά Αξιοθέατα",
    emoji: "🏛️",
    tagline: {
      en: "History, culture, and natural wonders within easy reach.",
      el: "Ιστορία, πολιτισμός και φυσικά θαύματα σε κοντινή απόσταση.",
    },
  },
  entertainment: {
    en: "Entertainment & Nightlife",
    el: "Διασκέδαση & Νυχτερινή Ζωή",
    emoji: "🎉",
    tagline: {
      en: "Fun, music, and memorable nights near Kokkini Hani.",
      el: "Διασκέδαση, μουσική και αξέχαστες νύχτες κοντά στο Κοκκίνι Χάνι.",
    },
  },
};

// ─── Beaches ────────────────────────────────

const beaches: Place[] = [
  {
    id: "thalassa-konaki",
    category: "beaches",
    name: { en: "Thalassa Konaki Beach", el: "Παραλία Θάλασσα Κονάκι" },
    shortDescription: {
      en: "A calm, family-friendly beach steps from the apartment.",
      el: "Μια ήσυχη, οικογενειακή παραλία μόλις λίγα βήματα από το διαμέρισμα.",
    },
    description: {
      en: "Thalassa Konaki is the closest beach to Elena's Apartment — a calm, sheltered cove perfect for families with young children. The shallow, crystal-clear water and gentle waves make it ideal for leisurely swims, and the relaxed atmosphere means you can always find a quiet spot.",
      el: "Η παραλία Θάλασσα Κονάκι είναι η πιο κοντινή παραλία στο διαμέρισμα της Ελένας — μια ήσυχη, προστατευμένη παραλία ιδανική για οικογένειες με μικρά παιδιά. Τα ρηχά, κρυστάλλινα νερά και τα ήπια κύματα την κάνουν τέλεια για χαλαρό κολύμπι.",
    },
    type: { en: "Family Beach", el: "Οικογενειακή Παραλία" },
    distance: "600m",
    rating: 4.5,
    season: { en: "May – October", el: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Go early morning for the calmest water and the best light.",
      el: "Πηγαίνετε νωρίς το πρωί για το πιο ήσυχο νερό και το καλύτερο φως.",
    },
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    lat: 35.3415,
    lng: 25.2901,
  },
  {
    id: "toumprouk",
    category: "beaches",
    name: { en: "Toumprouk Beach", el: "Παραλία Τομπρούκ" },
    shortDescription: {
      en: "A quiet local beach with clear waters.",
      el: "Μια ήσυχη τοπική παραλία με διαυγή νερά.",
    },
    description: {
      en: "Toumprouk is a quiet, lesser-known beach favoured by locals who want to escape the summer crowds. The water is remarkably clear and the pebble shoreline gives it a natural, unspoilt character. Bring your own shade — facilities are minimal, which is exactly the appeal.",
      el: "Το Τομπρούκ είναι μια ήσυχη, λιγότερο γνωστή παραλία που προτιμούν οι ντόπιοι για να αποφύγουν τα καλοκαιρινά πλήθη. Τα νερά είναι εξαιρετικά καθαρά και η βοτσαλωτή ακτή της δίνει έναν φυσικό χαρακτήρα.",
    },
    type: { en: "Local Beach", el: "Τοπική Παραλία" },
    distance: "800m",
    rating: 4.3,
    season: { en: "June – September", el: "Ιούνιος – Σεπτέμβριος" },
    tip: {
      en: "Bring snorkelling gear — the clear water hides some lovely sea life.",
      el: "Φέρτε εξοπλισμό κατάδυσης — το διαυγές νερό κρύβει υπέροχη θαλάσσια ζωή.",
    },
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    lat: 35.3408,
    lng: 25.2912,
  },
  {
    id: "kokkini-hani",
    category: "beaches",
    name: { en: "Kokkini Hani Beach", el: "Παραλία Κοκκίνη Χάνι" },
    shortDescription: {
      en: "The main beach of the village, popular with locals.",
      el: "Η κεντρική παραλία του χωριού, αγαπημένη στους ντόπιους.",
    },
    description: {
      en: "The main beach of Kokkini Hani village stretches along the seafront and buzzes with local life throughout the summer. You'll find tavernas and cafés nearby, sun loungers for hire, and a warm community atmosphere. It's the place to feel like a true Cretan for the day.",
      el: "Η κεντρική παραλία του χωριού Κοκκίνι Χάνι εκτείνεται κατά μήκος της παραλίας και ζωντανεύει με τοπική κίνηση καθ' όλη τη διάρκεια του καλοκαιριού. Θα βρείτε ταβέρνες και καφέ κοντά, ξαπλώστρες και ζεστή ατμόσφαιρα.",
    },
    type: { en: "Village Beach", el: "Παραλία Χωριού" },
    distance: "800m",
    rating: 4.4,
    season: { en: "May – October", el: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Stay for sunset — the light on the water here is spectacular.",
      el: "Μείνετε για το ηλιοβασίλεμα — το φως στο νερό είναι εντυπωσιακό.",
    },
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&q=80",
    lat: 35.3395,
    lng: 25.2935,
  },
  {
    id: "vatheianos-kampos",
    category: "beaches",
    name: { en: "Vatheianos Kampos Beach", el: "Παραλία Βαθειανός Κάμπος" },
    shortDescription: {
      en: "A serene stretch of sandy shore.",
      el: "Μια γαλήνια αμμώδης παραλία.",
    },
    description: {
      en: "Vatheianos Kampos offers a longer, quieter stretch of sandy beach that never feels overcrowded. The fine sand is soft underfoot, the water gentle and inviting, and the surrounding landscape feels unhurried. A perfect place to spend a full lazy day by the sea.",
      el: "Ο Βαθειανός Κάμπος προσφέρει μια μεγαλύτερη, πιο ήσυχη αμμώδη παραλία που δεν γεμίζει ποτέ. Η άμμος είναι μαλακή, το νερό ήσυχο και φιλόξενο, και η γύρω περιοχή έχει ένα αδιάφορο ρυθμό.",
    },
    type: { en: "Sandy Beach", el: "Αμμώδης Παραλία" },
    distance: "850m",
    rating: 4.2,
    season: { en: "May – October", el: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Ideal for a long morning walk along the water's edge.",
      el: "Ιδανικό για έναν μεγάλο πρωινό περίπατο κατά μήκος της ακτής.",
    },
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    lat: 35.3388,
    lng: 25.2950,
  },
  {
    id: "themis",
    category: "beaches",
    name: { en: "Themis Beach", el: "Παραλία Θέμις" },
    shortDescription: {
      en: "A well-known beach with organised facilities.",
      el: "Μια γνωστή παραλία με οργανωμένες εγκαταστάσεις.",
    },
    description: {
      en: "Themis Beach is the most organised beach in the area, with sun loungers, umbrellas, a beach bar, and water sports on offer. It draws a lively summer crowd and has a fun, social atmosphere. The slightly longer walk from the apartment is well worth it for a full beach day with all the amenities.",
      el: "Η παραλία Θέμις είναι η πιο οργανωμένη παραλία στην περιοχή, με ξαπλώστρες, ομπρέλες, beach bar και θαλάσσια σπορ. Έχει ζωηρή καλοκαιρινή κίνηση και κοινωνική ατμόσφαιρα.",
    },
    type: { en: "Organised Beach", el: "Οργανωμένη Παραλία" },
    distance: "1.4km",
    rating: 4.6,
    season: { en: "June – September", el: "Ιούνιος – Σεπτέμβριος" },
    tip: {
      en: "Book sun loungers in advance during July and August.",
      el: "Κλείστε ξαπλώστρες εκ των προτέρων τον Ιούλιο και τον Αύγουστο.",
    },
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    lat: 35.3372,
    lng: 25.2978,
  },
];

// ─── Restaurants ─────────────────────────────

const restaurants: Place[] = [
  {
    id: "taverna-arkadi",
    category: "restaurants",
    name: { en: "Taverna Arkadi", el: "Ταβέρνα Αρκάδι" },
    shortDescription: {
      en: "A beloved local taverna serving traditional Cretan cuisine just a short walk away.",
      el: "Μια αγαπημένη τοπική ταβέρνα με παραδοσιακή κρητική κουζίνα σε κοντινή απόσταση.",
    },
    description: {
      en: "Taverna Arkadi is the neighbourhood gem — a family-run spot serving honest, hearty Cretan food made from locally sourced ingredients. Think dakos, lamb kleftiko, and fresh grilled fish, all washed down with a carafe of local wine. The warm, unpretentious setting feels exactly like eating in a Cretan home.",
      el: "Η Ταβέρνα Αρκάδι είναι το στολίδι της γειτονιάς — ένα οικογενειακό μέρος με ειλικρινή, χορταστική κρητική κουζίνα από τοπικά υλικά. Ντάκος, αρνί κλέφτικο και φρέσκο ψάρι στη σχάρα, με μια κανάτα τοπικό κρασί.",
    },
    type: { en: "Cretan Taverna", el: "Κρητική Ταβέρνα" },
    distance: "550m",
    rating: 4.7,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Ask for the daily specials — they're usually the best thing on the menu.",
      el: "Ρωτήστε για τα πιάτα ημέρας — συνήθως είναι τα καλύτερα στο μενού.",
    },
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    lat: 35.3421,
    lng: 25.2888,
  },
  {
    id: "whisky-bar",
    category: "restaurants",
    name: { en: "The Whisky Bar", el: "The Whisky Bar" },
    shortDescription: {
      en: "A cosy bar with a wide selection of whiskies and cocktails, perfect for evening drinks.",
      el: "Ένα άνετο μπαρ με μεγάλη επιλογή whisky και κοκτέιλ, ιδανικό για βραδινά ποτά.",
    },
    description: {
      en: "The Whisky Bar is the area's best spot for a refined evening drink. With over 80 labels on the shelf, knowledgeable staff, and a comfortable, dimly lit interior, it's perfect for unwinding after a beach day. The cocktail menu is short but excellent — and the bar snacks are better than you'd expect.",
      el: "Το Whisky Bar είναι ο καλύτερος χώρος για ένα εκλεπτυσμένο βραδινό ποτό. Με πάνω από 80 ετικέτες, ειδικό προσωπικό και άνετο, ημιφωτισμένο εσωτερικό, είναι τέλειο για να χαλαρώσετε μετά από μια μέρα στην παραλία.",
    },
    type: { en: "Bar & Cocktails", el: "Μπαρ & Κοκτέιλ" },
    distance: "1.2km",
    rating: 4.5,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Try a Greek whisky flight — there are some excellent local distilleries.",
      el: "Δοκιμάστε ελληνικό whisky flight — υπάρχουν μερικά εξαιρετικά τοπικά αποστακτήρια.",
    },
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    lat: 35.3440,
    lng: 25.2865,
  },
  {
    id: "cicada-suites",
    category: "restaurants",
    name: { en: "Cicada Suites Beach Living", el: "Cicada Suites Elegant Beach Living" },
    shortDescription: {
      en: "A stylish beachside venue offering food, drinks, and stunning sea views.",
      el: "Ένας κομψός παραθαλάσσιος χώρος με φαγητό, ποτά και εκπληκτική θέα στη θάλασσα.",
    },
    description: {
      en: "Cicada Suites is the area's most elegant dining experience — a beautifully designed beachside venue where you can enjoy Mediterranean cuisine with your feet practically in the sand. The menu focuses on fresh seafood and seasonal Cretan produce, and the cocktail bar at sunset is genuinely unforgettable.",
      el: "Το Cicada Suites είναι η πιο κομψή γαστρονομική εμπειρία της περιοχής — ένας όμορφα σχεδιασμένος παραθαλάσσιος χώρος με μεσογειακή κουζίνα. Το μενού εστιάζει σε φρέσκα θαλασσινά και εποχιακά κρητικά προϊόντα.",
    },
    type: { en: "Beachside Restaurant", el: "Παραθαλάσσιο Εστιατόριο" },
    distance: "4.7km",
    rating: 4.8,
    season: { en: "April – October", el: "Απρίλιος – Οκτώβριος" },
    tip: {
      en: "Reserve a table for sunset — it's one of the best views on this stretch of coast.",
      el: "Κλείστε τραπέζι για ηλιοβασίλεμα — είναι μια από τις καλύτερες θέες σε αυτό το τμήμα της ακτής.",
    },
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    lat: 35.3510,
    lng: 25.3150,
  },
];

// ─── Attractions ─────────────────────────────

const attractions: Place[] = [
  {
    id: "cretaquarium",
    category: "attractions",
    name: { en: "Cretaquarium (Thalassocosmos)", el: "Κρητάριο (Θαλασσόκοσμος)" },
    shortDescription: {
      en: "One of the largest aquariums in the Mediterranean, home to 2,500+ sea creatures.",
      el: "Ένα από τα μεγαλύτερα ενυδρεία της Μεσογείου με πάνω από 2.500 θαλάσσια πλάσματα.",
    },
    description: {
      en: "Cretaquarium is one of the Mediterranean's largest aquariums and a world-class attraction. Housed in a former US military base, it showcases over 2,500 sea creatures across 60+ tanks — from tiny seahorses to enormous sharks. The immersive tunnels and interactive exhibits make it equally captivating for adults and children.",
      el: "Το Κρητάριο είναι ένα από τα μεγαλύτερα ενυδρεία της Μεσογείου. Στεγάζεται σε πρώην αμερικανική στρατιωτική βάση και παρουσιάζει πάνω από 2.500 θαλάσσια πλάσματα σε 60+ δεξαμενές.",
    },
    type: { en: "Aquarium", el: "Ενυδρείο" },
    distance: "3.7km",
    rating: 4.6,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Allow at least 2 hours and go on a weekday to avoid school groups.",
      el: "Αφιερώστε τουλάχιστον 2 ώρες και πηγαίνετε καθημερινή για να αποφύγετε σχολικές ομάδες.",
    },
    image: "https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?w=800&q=80",
    lat: 35.3583,
    lng: 25.3197,
  },
  {
    id: "heraklion-archaeological-museum",
    category: "attractions",
    name: { en: "Heraklion Archaeological Museum", el: "Αρχαιολογικό Μουσείο Ηρακλείου" },
    shortDescription: {
      en: "World-class museum housing treasures from Minoan civilisation.",
      el: "Παγκοσμίου κλάσης μουσείο με θησαυρούς της Μινωικής πολιτισμού.",
    },
    description: {
      en: "The Heraklion Archaeological Museum is one of the most important museums in Greece and a must for anyone interested in ancient history. Its vast collection spans 5,500 years and includes iconic Minoan artefacts such as the Phaistos Disc, the Bull's Head Rhyton, and the stunning frescoes from the Palace of Knossos.",
      el: "Το Αρχαιολογικό Μουσείο Ηρακλείου είναι ένα από τα πιο σημαντικά μουσεία της Ελλάδας. Η τεράστια συλλογή του καλύπτει 5.500 χρόνια και περιλαμβάνει εμβληματικά Μινωικά αντικείμενα.",
    },
    type: { en: "Museum", el: "Μουσείο" },
    distance: "13km",
    rating: 4.8,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Combine with a visit to Knossos — the context makes both far richer.",
      el: "Συνδυάστε με επίσκεψη στην Κνωσό — το πλαίσιο κάνει και τα δύο πολύ πιο πλούσια.",
    },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    lat: 35.3397,
    lng: 25.1348,
  },
  {
    id: "knossos",
    category: "attractions",
    name: { en: "Palace of Knossos", el: "Ανάκτορο της Κνωσού" },
    shortDescription: {
      en: "The legendary Bronze Age Minoan palace, one of Europe's oldest cities.",
      el: "Το θρυλικό Μινωικό ανάκτορο της Εποχής του Χαλκού, μια από τις αρχαιότερες πόλεις της Ευρώπης.",
    },
    description: {
      en: "The Palace of Knossos is the most important Bronze Age site in the Aegean. This vast complex, covering over 20,000 square metres, was the ceremonial and political centre of the Minoan civilisation — the backdrop to the myths of King Minos, the Minotaur, and Daedalus. Walking through it is genuinely awe-inspiring.",
      el: "Το Ανάκτορο της Κνωσού είναι η σημαντικότερη τοποθεσία της Εποχής του Χαλκού στο Αιγαίο. Αυτό το τεράστιο συγκρότημα ήταν το τελετουργικό και πολιτικό κέντρο του Μινωικού πολιτισμού.",
    },
    type: { en: "Archaeological Site", el: "Αρχαιολογικός Χώρος" },
    distance: "15km",
    rating: 4.7,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Hire a guide at the entrance — the myths come alive with the right storyteller.",
      el: "Νοικιάστε ξεναγό στην είσοδο — οι μύθοι ζωντανεύουν με τον σωστό αφηγητή.",
    },
    image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&q=80",
    lat: 35.2978,
    lng: 25.1634,
  },
  {
    id: "loggia",
    category: "attractions",
    name: { en: "Loggia", el: "Λότζια" },
    shortDescription: {
      en: "A stunning Venetian loggia in the heart of Heraklion's old town.",
      el: "Μια εντυπωσιακή βενετσιάνικη λότζια στην καρδιά της παλιάς πόλης του Ηρακλείου.",
    },
    description: {
      en: "The Loggia is one of the finest examples of Venetian architecture in Crete, dating from the early 17th century. Originally used as a meeting place for Cretan nobles, it now houses the city hall. Its elegant arches and carved stonework make it one of the most photographed buildings in Heraklion.",
      el: "Η Λότζια είναι ένα από τα καλύτερα δείγματα βενετσιάνικης αρχιτεκτονικής στην Κρήτη, που χρονολογείται από τις αρχές του 17ου αιώνα. Αρχικά χρησιμοποιήθηκε ως τόπος συνάντησης για τους Κρητικούς ευγενείς.",
    },
    type: { en: "Historic Building", el: "Ιστορικό Κτίριο" },
    distance: "13km",
    rating: 4.4,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Best visited in the early evening as part of a stroll through the old town.",
      el: "Ιδανικό να επισκεφθείτε νωρίς το βράδυ ως μέρος βόλτας στην παλιά πόλη.",
    },
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    lat: 35.3397,
    lng: 25.1320,
  },
  {
    id: "morosini-fountain",
    category: "attractions",
    name: { en: "Morosini Fountain", el: "Κρήνη Μοροζίνι" },
    shortDescription: {
      en: "The iconic 17th-century Venetian fountain at Heraklion's Lion Square.",
      el: "Η εμβληματική 17ου αιώνα βενετσιάνικη κρήνη στην Πλατεία Λιονταριών του Ηρακλείου.",
    },
    description: {
      en: "The Morosini Fountain, built in 1628 by Venetian governor Francesco Morosini, is the centrepiece of Heraklion's Lion Square — the city's beating heart. The four marble lions that give the square its name are among the most recognisable symbols of Crete, and the surrounding cafés make it a perfect place to linger.",
      el: "Η κρήνη Μοροζίνι, που κατασκευάστηκε το 1628 από τον Βενετό διοικητή Φραγκίσκο Μοροζίνι, είναι το κεντρικό στοιχείο της Πλατείας Λιονταριών του Ηρακλείου.",
    },
    type: { en: "Historic Landmark", el: "Ιστορικό Μνημείο" },
    distance: "13km",
    rating: 4.5,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Grab a coffee at one of the surrounding kafeneions and watch the world go by.",
      el: "Πιείτε έναν καφέ σε ένα από τα γύρω καφενεία και παρακολουθήστε τη ζωή να περνά.",
    },
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    lat: 35.3399,
    lng: 25.1327,
  },
  {
    id: "historical-museum-crete",
    category: "attractions",
    name: { en: "Historical Museum of Crete", el: "Ιστορικό Μουσείο Κρήτης" },
    shortDescription: {
      en: "Chronicles Cretan history from early Christian times to the present.",
      el: "Χρονολογεί την κρητική ιστορία από τους παλαιοχριστιανικούς χρόνους έως σήμερα.",
    },
    description: {
      en: "The Historical Museum of Crete fills the gap left by the Archaeological Museum, covering the island's turbulent history from Byzantine and Venetian rule through the Ottoman period, the Cretan State, and both World Wars. It also houses the only two El Greco paintings remaining in Crete, which alone are worth the visit.",
      el: "Το Ιστορικό Μουσείο Κρήτης καλύπτει την ιστορία του νησιού από τη Βυζαντινή και Βενετική κυριαρχία έως την Οθωμανική περίοδο και τους δύο Παγκόσμιους Πολέμους. Φιλοξενεί επίσης τους μόνους δύο πίνακες του Ελ Γκρέκο που απομένουν στην Κρήτη.",
    },
    type: { en: "Museum", el: "Μουσείο" },
    distance: "13km",
    rating: 4.5,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Don't miss the El Greco room on the top floor.",
      el: "Μην χάσετε την αίθουσα Ελ Γκρέκο στον επάνω όροφο.",
    },
    image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=800&q=80",
    lat: 35.3411,
    lng: 25.1280,
  },
  {
    id: "natural-history-museum-crete",
    category: "attractions",
    name: { en: "Natural History Museum of Crete", el: "Φυσικής Ιστορίας Μουσείο Κρήτης" },
    shortDescription: {
      en: "Interactive exhibits on the Eastern Mediterranean's natural world.",
      el: "Διαδραστικές εκθέσεις για τον φυσικό κόσμο της Ανατολικής Μεσογείου.",
    },
    description: {
      en: "Run by the University of Crete, this modern museum brings the natural world of the Eastern Mediterranean to life through immersive, hands-on exhibits. Highlights include a full-size Deinotherium skeleton, a recreated Cretan landscape through the ages, and an outstanding earthquake simulation room beloved by children.",
      el: "Υπό τη διαχείριση του Πανεπιστημίου Κρήτης, αυτό το σύγχρονο μουσείο ζωντανεύει τον φυσικό κόσμο της Ανατολικής Μεσογείου μέσα από καθηλωτικές, βιωματικές εκθέσεις.",
    },
    type: { en: "Museum", el: "Μουσείο" },
    distance: "13km",
    rating: 4.4,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "The earthquake simulator is the highlight — don't skip it.",
      el: "Ο προσομοιωτής σεισμού είναι το αποκορύφωμα — μην τον παραλείψετε.",
    },
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    lat: 35.3355,
    lng: 25.1170,
  },
  {
    id: "aquaworld",
    category: "attractions",
    name: { en: "Aquaworld Aquarium", el: "Aquaworld Ενυδρείο" },
    shortDescription: {
      en: "A reptile and wildlife rescue centre with crocodiles, snakes, and more.",
      el: "Ένα κέντρο διάσωσης ερπετών και άγριας ζωής με κροκόδειλους, φίδια και άλλα.",
    },
    description: {
      en: "Aquaworld is unlike any typical aquarium — it's primarily a wildlife rescue and rehabilitation centre for reptiles and exotic animals. You'll encounter crocodiles, pythons, iguanas, turtles, and a fascinating array of Mediterranean wildlife up close. It's educational, ethical, and genuinely surprising.",
      el: "Το Aquaworld δεν είναι τυπικό ενυδρείο — είναι κυρίως κέντρο διάσωσης και αποκατάστασης ερπετών και εξωτικών ζώων. Θα συναντήσετε κροκόδειλους, πύθωνες, ιγκουάνες, χελώνες και ποικίλη μεσογειακή άγρια ζωή.",
    },
    type: { en: "Wildlife Centre", el: "Κέντρο Άγριας Ζωής" },
    distance: "14km",
    rating: 4.2,
    season: { en: "April – October", el: "Απρίλιος – Οκτώβριος" },
    tip: {
      en: "Great for children — the handlers are happy to answer questions.",
      el: "Εξαιρετικό για παιδιά — οι φροντιστές απαντούν ευχαρίστως σε ερωτήσεις.",
    },
    image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?w=800&q=80",
    lat: 35.3270,
    lng: 25.1820,
  },
  {
    id: "kazantzakis-museum",
    category: "attractions",
    name: { en: "Nikos Kazantzakis Museum", el: "Μουσείο Νίκου Καζαντζάκη" },
    shortDescription: {
      en: "Dedicated to Crete's most celebrated writer, author of Zorba the Greek.",
      el: "Αφιερωμένο στον πιο διάσημο συγγραφέα της Κρήτης, συγγραφέα του Βίος και Πολιτεία του Αλέξη Ζορμπά.",
    },
    description: {
      en: "Located in Kazantzakis's birthplace village of Myrtia, this intimate museum celebrates the life and work of Crete's most famous son. Personal belongings, manuscripts, photographs, and first editions bring the author of Zorba the Greek and The Last Temptation of Christ vividly to life. A moving and thoughtful visit.",
      el: "Βρίσκεται στο χωριό Μυρτιά, γενέτειρα του Καζαντζάκη, και εορτάζει τη ζωή και το έργο του πιο διάσημου Κρητικού. Προσωπικά αντικείμενα, χειρόγραφα, φωτογραφίες και πρώτες εκδόσεις ζωντανεύουν τον συγγραφέα.",
    },
    type: { en: "Literary Museum", el: "Λογοτεχνικό Μουσείο" },
    distance: "14km",
    rating: 4.3,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Read at least one Kazantzakis novel before visiting — it transforms the experience.",
      el: "Διαβάστε τουλάχιστον ένα μυθιστόρημα Καζαντζάκη πριν επισκεφθείτε — μεταμορφώνει την εμπειρία.",
    },
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    lat: 35.2831,
    lng: 25.1044,
  },
  {
    id: "venetian-walls",
    category: "attractions",
    name: { en: "Venetian Walls of Heraklion", el: "Βενετικά Τείχη Ηρακλείου" },
    shortDescription: {
      en: "Impressive 16th-century fortifications encircling the old city.",
      el: "Εντυπωσιακές οχυρώσεις του 16ου αιώνα που περιβάλλουν την παλιά πόλη.",
    },
    description: {
      en: "The Venetian Walls are among the best-preserved Renaissance fortifications in the world — a 4km circuit of massive bastions, gates, and moats that protected Heraklion for centuries. Walking the ramparts at sunset offers sweeping views over the city and the sea. The Martinengo Bastion holds the tomb of Nikos Kazantzakis.",
      el: "Τα Βενετικά Τείχη είναι ανάμεσα στις καλύτερα διατηρημένες αναγεννησιακές οχυρώσεις στον κόσμο — ένας περίβολος 4 χιλιομέτρων από τεράστιους προμαχώνες, πύλες και τάφρους.",
    },
    type: { en: "Historic Fortification", el: "Ιστορική Οχύρωση" },
    distance: "14km",
    rating: 4.6,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Walk the full circuit at sunset for the best views over the city.",
      el: "Περπατήστε ολόκληρο τον περίβολο στο ηλιοβασίλεμα για την καλύτερη θέα.",
    },
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
    lat: 35.3381,
    lng: 25.1290,
  },
];

// ─── Entertainment ───────────────────────────

const entertainment: Place[] = [
  {
    id: "creta-maris-beach",
    category: "entertainment",
    name: { en: "Creta Maris Beach Resort", el: "Creta Maris Beach Resort" },
    shortDescription: {
      en: "A lively resort complex with pools, bars, and regular live music events.",
      el: "Ένα ζωηρό resort με πισίνες, μπαρ και τακτικές live μουσικές εκδηλώσεις.",
    },
    description: {
      en: "Creta Maris hosts regular live music nights, themed beach parties, and cultural events throughout the summer season. Even non-guests can enjoy the beach bar and evening entertainment — check their schedule for concerts and special events happening during your stay.",
      el: "Το Creta Maris φιλοξενεί τακτικά live μουσικές βραδιές, θεματικά beach party και πολιτιστικές εκδηλώσεις καθ' όλη τη θερινή περίοδο.",
    },
    type: { en: "Resort Entertainment", el: "Ψυχαγωγία Resort" },
    distance: "2.1km",
    rating: 4.5,
    season: { en: "May – October", el: "Μάιος – Οκτώβριος" },
    tip: {
      en: "Check their events calendar — summer concerts are often free or low cost.",
      el: "Ελέγξτε το ημερολόγιο εκδηλώσεων — οι καλοκαιρινές συναυλίες είναι συχνά δωρεάν ή χαμηλού κόστους.",
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    lat: 35.3485,
    lng: 25.3012,
  },
  {
    id: "star-beach",
    category: "entertainment",
    name: { en: "Star Beach Water Park", el: "Star Beach Water Park" },
    shortDescription: {
      en: "A popular beach and water park with slides, pools, and a beach club atmosphere.",
      el: "Ένα δημοφιλές beach & water park με τσουλήθρες, πισίνες και ατμόσφαιρα beach club.",
    },
    description: {
      en: "Star Beach is the area's biggest summer entertainment destination — a full-scale water park and beach club combined. Water slides, wave pools, bungee trampolines, and a packed events calendar of DJ nights and themed parties make it the liveliest spot on this stretch of coast throughout July and August.",
      el: "Το Star Beach είναι ο μεγαλύτερος θερινός προορισμός ψυχαγωγίας στην περιοχή — ένα πλήρες water park και beach club σε ένα. Τσουλήθρες, κυματιστές πισίνες, bungee trampolines και γεμάτο ημερολόγιο DJ βραδιών.",
    },
    type: { en: "Water Park & Beach Club", el: "Water Park & Beach Club" },
    distance: "3.2km",
    rating: 4.3,
    season: { en: "June – September", el: "Ιούνιος – Σεπτέμβριος" },
    tip: {
      en: "Arrive before 11am in peak season to avoid long queues for the slides.",
      el: "Φτάστε πριν τις 11πμ στην αιχμή της σεζόν για να αποφύγετε μεγάλες ουρές.",
    },
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    lat: 35.3512,
    lng: 25.3098,
  },
  {
    id: "heraklion-lions-square",
    category: "entertainment",
    name: { en: "Lion Square (Plateia Liontariou)", el: "Πλατεία Λιονταριών" },
    shortDescription: {
      en: "Heraklion's vibrant main square — the hub of evening life, coffee, and people-watching.",
      el: "Η ζωηρή κεντρική πλατεία του Ηρακλείου — κέντρο βραδινής ζωής, καφέ και θέαση.",
    },
    description: {
      en: "Lion Square is where Heraklion comes alive after dark. Surrounded by café-bars, the square fills with locals and visitors enjoying evening drinks, live music spilling out from nearby venues, and the general buzz of a Mediterranean city at its best. It's the perfect starting point for a Heraklion night out.",
      el: "Η Πλατεία Λιονταριών είναι το σημείο όπου ζωντανεύει το Ηράκλειο μετά τη δύση του ηλίου. Περιτριγυρισμένη από café-bar, η πλατεία γεμίζει με ντόπιους και επισκέπτες που απολαμβάνουν βραδινά ποτά και live μουσική.",
    },
    type: { en: "Town Square & Nightlife", el: "Κεντρική Πλατεία & Νυχτερινή Ζωή" },
    distance: "13km",
    rating: 4.6,
    season: { en: "Year-round", el: "Όλο το χρόνο" },
    tip: {
      en: "Walk the surrounding streets after 10pm — the old town comes alive.",
      el: "Βολτάρετε τους γύρω δρόμους μετά τις 10μμ — η παλιά πόλη ζωντανεύει.",
    },
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=800&q=80",
    lat: 35.3399,
    lng: 25.1327,
  },
];

// ─── Exports ─────────────────────────────────

export const allPlaces: Place[] = [
  ...beaches,
  ...restaurants,
  ...attractions,
  ...entertainment,
];

export function placesByCategory(category: Category): Place[] {
  return allPlaces.filter((p) => p.category === category);
}

export function placeById(id: string): Place | undefined {
  return allPlaces.find((p) => p.id === id);
}