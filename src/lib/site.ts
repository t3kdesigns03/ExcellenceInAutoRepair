// Single source of truth for business details. Every fact here comes from the
// shop's own previous website / public listings — nothing invented.

export const site = {
  name: "Excellence In Auto-Repair",
  owner: "Tom McGuire",
  since: 1993,
  phone: {
    display: "(402) 399-0934",
    href: "tel:+14023990934",
    e164: "+14023990934",
  },
  address: {
    street: "8401 Blondo St",
    city: "Omaha",
    region: "NE",
    zip: "68134",
    oneLine: "8401 Blondo St, Omaha, NE 68134",
  },
  hours: {
    days: "Mon – Fri",
    time: "7:30am – 5:30pm",
    schema: "Mo-Fr 07:30-17:30",
  },
  facebook: "https://www.facebook.com/ExcellenceInAutoRepair",
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Excellence+In+Auto-Repair%2C+8401+Blondo+St%2C+Omaha%2C+NE+68134",
    reviews:
      "https://www.google.com/maps/search/?api=1&query=Excellence+In+Auto-Repair+8401+Blondo+St+Omaha+NE+68134",
    embed:
      "https://maps.google.com/maps?q=Excellence%20In%20Auto-Repair%2C%208401%20Blondo%20St%2C%20Omaha%2C%20NE%2068134&z=15&output=embed",
  },
  rating: { score: 4.8, count: 246 },
} as const;

export const about =
  "We understand how much you depend on your vehicle – and that's why we treat each vehicle we service as if it were our own. As a family owned and operated business, we've dedicated ourselves to providing 'Excellence In Auto Repair' to the Omaha area since 1993.";

export const dealershipLine =
  "Never pay those high dealership prices again! We can do it all right here, including completely maintaining your manufacturer's warranty.";

export type ServiceIcon =
  | "brakes"
  | "struts"
  | "exhaust"
  | "belts"
  | "cooling"
  | "diagnostics"
  | "electrical"
  | "ac"
  | "tuneup";

export const services: { name: string; icon: ServiceIcon }[] = [
  { name: "Brakes", icon: "brakes" },
  { name: "Struts & Shocks", icon: "struts" },
  { name: "Exhaust", icon: "exhaust" },
  { name: "Belts & Hoses", icon: "belts" },
  { name: "Cooling Systems", icon: "cooling" },
  { name: "Diagnostics", icon: "diagnostics" },
  { name: "Electrical Repair", icon: "electrical" },
  { name: "A/C Repair", icon: "ac" },
  { name: "Tune-Up", icon: "tuneup" },
];

export const promises = [
  {
    title: "Only what's necessary",
    text: "We'll repair only what's necessary — and advise you of other problems we see without pressuring you.",
  },
  {
    title: "No surprises",
    text: "We never perform a service or exceed our estimate without your okay.",
  },
  {
    title: "Fixed right the first time",
    text: "The latest state of the art equipment — your problem is fixed right the first time.",
  },
  {
    title: "Familiar, friendly faces",
    text: "Family owned and operated; built on hard work, value, and honesty.",
  },
];

export const badges = [
  { top: "ASE", big: "Blue Seal", bottom: "of Excellence", label: "ASE Blue Seal of Excellence" },
  { top: "ASE", big: "Certified", bottom: "Technicians", label: "ASE Certified Technicians" },
  { top: "BBB", big: "A+", bottom: "Rating", label: "BBB A+ Rating" },
];

export const reviewThemes = [
  "Honest, trustworthy service",
  "No upselling — just the repairs you need",
  "Fair prices",
  "Same-day repairs",
  "Accommodating last-minute requests",
];

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#promise", label: "Our Promise" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];
