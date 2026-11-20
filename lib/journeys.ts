export type Journey = {
  slug: string;
  region: string;
  title: string;
  days: string;
  altitude: string;
  season: string;
  price: string;
  chips: string[];
  lead: string;
  intro: string;
  daysTitle: string;
  itinerary: string[];
  cover: string;
  stay: string;
  next: {
    href: string;
    title: string;
    image: string;
  };
};

export const journeys: Journey[] = [
  {
    slug: "shimla-kinnaur",
    region: "Shimla, Kinnaur",
    title: "Shimla & Kinnaur",
    days: "7 days",
    altitude: "3,450 m (Chitkul)",
    season: "Apr–Jun, Sep–Oct",
    price: "₹68,000",
    chips: ["7 days", "3,450 m (Chitkul)", "Apr–Jun, Sep–Oct"],
    lead: "From the old summer capital up the Sutlej to apple country and India’s last village road.",
    intro:
      "Shimla was declared the Summer Capital of India in 1864. From there the road follows the Sutlej into Kinnaur: Sarahan’s Bhimakali temple, the Baspa valley at Sangla, and Chitkul at the end of the road.",
    daysTitle: "Day by day",
    itinerary: [
      "Day 1 · Shimla: the Ridge, the Mall and Jakhu at dusk.",
      "Day 2 · Narkanda to Sarahan: apple orchards and the Bhimakali temple.",
      "Day 3 · Sangla: into the Baspa valley, an orchard walk with your host.",
      "Day 4 · Chitkul: the last village on the road, a slow river walk.",
      "Day 5 · Kalpa: Kinner Kailash at sunrise, Roghi village.",
      "Days 6–7 · Back down the Sutlej via Rampur to Shimla.",
    ],
    cover: "/routes/shimla-cover.jpg",
    stay: "/journeys/shimla-stay.jpg",
    next: {
      href: "/journeys/kangra-dharamshala",
      title: "Kangra & Dharamshala",
      image: "/routes/kangra-cover.jpg",
    },
  },
  {
    slug: "kangra-dharamshala",
    region: "Kangra",
    title: "Kangra & Dharamshala",
    days: "6 days",
    altitude: "2,100 m (McLeod Ganj)",
    season: "All year",
    price: "₹52,000",
    chips: ["6 days", "2,100 m (McLeod Ganj)", "All year"],
    lead: "Tea gardens, the Dhauladhar wall and the toy train through Kangra valley.",
    intro:
      "Ride the narrow-gauge line from Pathankot towards Jogindernagar, walk the tea estates of Palampur and spend two slow days in Dharamshala and McLeod Ganj under the Dhauladhar.",
    daysTitle: "Day by day",
    itinerary: [
      "Day 1 · The narrow-gauge train from Pathankot into Kangra valley.",
      "Day 2 · Kangra fort and the Masroor rock-cut temples.",
      "Day 3 · Palampur tea estates and the Andretta artists’ village.",
      "Day 4 · Bir: monasteries, and a tandem flight if you want one.",
      "Days 5–6 · Dharamshala and McLeod Ganj, with an optional walk to Triund.",
    ],
    cover: "/routes/kangra-cover.jpg",
    stay: "/journeys/kangra-stay.jpg",
    next: {
      href: "/journeys/kullu-parvati",
      title: "Kullu & the Parvati valley",
      image: "/routes/kullu-cover.jpg",
    },
  },
  {
    slug: "kullu-parvati",
    region: "Kullu",
    title: "Kullu & the Parvati valley",
    days: "6 days",
    altitude: "2,800 m",
    season: "Mar–Jun, Sep–Nov",
    price: "₹56,000",
    chips: ["6 days", "2,800 m", "Mar–Jun, Sep–Nov"],
    lead: "Orchards, river days and the villages above the Beas.",
    intro:
      "Raft the Beas, walk to old wooden villages above Naggar and spend a night in the Parvati valley, away from Manali’s main street.",
    daysTitle: "Day by day",
    itinerary: [
      "Day 1 · Kullu: a riverside homestay on the Beas.",
      "Day 2 · Rafting on the Beas, Naggar castle in the afternoon.",
      "Day 3 · Old wooden villages above Naggar.",
      "Day 4 · Into the Parvati valley, past Kasol to Kalga.",
      "Day 5 · A walk to Pulga and back through the pines.",
      "Day 6 · Manikaran hot springs, then out from Bhuntar.",
    ],
    cover: "/routes/kullu-cover.jpg",
    stay: "/journeys/kullu-stay.jpg",
    next: {
      href: "/journeys/spiti-circuit",
      title: "Spiti Circuit",
      image: "/routes/spiti-cover.jpg",
    },
  },
  {
    slug: "spiti-circuit",
    region: "Lahaul & Spiti, Kinnaur",
    title: "Spiti Circuit",
    days: "10 days",
    altitude: "4,551 m (Kunzum Pass)",
    season: "Jun–Oct",
    price: "₹96,000",
    chips: ["10 days", "4,551 m (Kunzum Pass)", "Jun–Oct"],
    lead: "A high desert loop through Kinnaur and Spiti, with rest days before every pass.",
    intro:
      "Climb slowly through Kinnaur into Spiti: Tabo, Dhankar, Key monastery and the villages around Kaza. Cross Kunzum Pass into Lahaul on the way out, when the road is open.",
    daysTitle: "Day by day",
    itinerary: [
      "Days 1–2 · Shimla to Sarahan, climbing slowly.",
      "Day 3 · Kalpa, a rest day to acclimatise.",
      "Day 4 · Nako lake and village.",
      "Day 5 · Tabo and its thousand-year-old monastery.",
      "Day 6 · Dhankar and the Pin valley.",
      "Days 7–8 · Kaza, Key monastery, Langza and Hikkim.",
      "Day 9 · Over Kunzum Pass to Chandratal, road permitting.",
      "Day 10 · Through the Atal Tunnel to Manali.",
    ],
    cover: "/routes/spiti-cover.jpg",
    stay: "/journeys/spiti-stay.jpg",
    next: {
      href: "/journeys/chamba-pangi",
      title: "Chamba & Pangi",
      image: "/routes/chamba-cover.jpg",
    },
  },
  {
    slug: "chamba-pangi",
    region: "Chamba",
    title: "Chamba & Pangi",
    days: "9 days",
    altitude: "4,414 m (Sach Pass)",
    season: "Jul–Oct",
    price: "₹88,000",
    chips: ["9 days", "4,414 m (Sach Pass)", "Jul–Oct"],
    lead: "Over Sach Pass into Pangi, one of Himachal’s most remote valleys.",
    intro:
      "Start in Chamba’s old temple town, continue through Churah and Tissa, then cross Sach Pass (4,414 m) into Pangi. The pass is usually snowbound from late November until July.",
    daysTitle: "Day by day",
    itinerary: [
      "Days 1–2 · Dalhousie and the meadows of Khajjiar.",
      "Day 3 · Chamba: the Lakshmi Narayan temples and the Chaugan.",
      "Day 4 · Up the Churah valley to Tissa.",
      "Day 5 · Over Sach Pass (4,414 m) to Killar.",
      "Days 6–7 · Pangi villages above the Chenab.",
      "Days 8–9 · Back over the pass to Chamba.",
    ],
    cover: "/routes/chamba-cover.jpg",
    stay: "/journeys/chamba-stay.jpg",
    next: {
      href: "/journeys/bir-billing",
      title: "Bir Billing",
      image: "/routes/bir-cover.jpg",
    },
  },
  {
    slug: "bir-billing",
    region: "Kangra",
    title: "Bir Billing",
    days: "4 days",
    altitude: "2,290 m (Billing)",
    season: "Oct–Nov, Mar–May",
    price: "₹34,000",
    chips: ["4 days", "2,290 m (Billing)", "Oct–Nov, Mar–May"],
    lead: "Tea estates, monasteries and a tandem flight from Billing to Bir.",
    intro:
      "Billing, at 2,290 m, is the take-off point; the landing field is at Bir, at 1,400 m. Add a tandem flight, a tea-estate walk and Bir’s monasteries. Bir is 30 km from Palampur.",
    daysTitle: "Day by day",
    itinerary: [
      "Day 1 · Bir: the Tibetan colony and its monasteries.",
      "Day 2 · A tandem flight from Billing down to Bir.",
      "Day 3 · A tea estate walk and the Baijnath temple.",
      "Day 4 · Out via Palampur or Kangra airport.",
    ],
    cover: "/routes/bir-cover.jpg",
    stay: "/journeys/bir-stay.jpg",
    next: {
      href: "/journeys/shimla-kinnaur",
      title: "Shimla & Kinnaur",
      image: "/routes/shimla-cover.jpg",
    },
  },
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}
