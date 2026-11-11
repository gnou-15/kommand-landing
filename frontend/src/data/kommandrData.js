/**
 * Kommandr OS — Structured Landing Page Data
 * Centralizes all copy, metrics, interactive demo scenarios, competitor tables, and FAQs.
 */

export const NAV_LINKS = [
  { label: 'Command Center', href: '#command-center' },
  { label: 'Deal Sniper', href: '#live-simulator' },
  { label: '6-Step Lifecycle', href: '#lifecycle' },
  { label: 'Kommandr vs. All', href: '#comparison' },
  { label: 'Pricing', href: '#pricing' },
];

export const HERO_CALLOUTS = [
  {
    id: 'sniper-match',
    badge: '24/7 Cloud Sniper',
    title: 'West Elm Leather Sectional',
    subtitle: 'Listed 2m ago • 6.4 mi away',
    askPrice: '$180',
    compValue: '$1,150',
    netProfit: '+$845 Est. Profit',
    platform: 'FB Marketplace',
    specTag: '4-Min Cloud Alert • Auto-Comp Verified',
  },
  {
    id: 'crosspost-sync',
    badge: 'Human-Paced Queue',
    title: 'Mid-Century Teak Credenza',
    subtitle: 'Cross-posted to 4 channels',
    askPrice: '$220',
    compValue: '$980',
    netProfit: '+$660 Est. Profit',
    platform: 'FB • OfferUp • eBay • Store',
    specTag: 'Zero Bot Flags • Safe Pacing Active',
  },
  {
    id: 'muse-dispatch',
    badge: 'Muse AI Dispatcher',
    title: 'Restoration Oak Dining Set',
    subtitle: 'Buyer paid deposit via Stripe',
    askPrice: '$310',
    compValue: '$1,450',
    netProfit: '+$990 Locked In',
    platform: 'Pickup Booked • Sat 2:00 PM',
    specTag: 'Missed-Call Text-Back • Google Cal Sync',
  },
];

export const LIFECYCLE_PILLARS = [
  {
    step: '01',
    code: 'SOURCE',
    title: '24/7 Cloud Deal Scanner',
    tagline: 'Catch underpriced couches & dressers while your computer is off.',
    description:
      'Set your hunt radius, ZIP code, keywords, and max price bounds. Our cloud sniper watches Facebook Marketplace and OfferUp around the clock and drops high-margin matches straight into your dashboard within minutes.',
    metrics: [
      { label: 'Avg. Alert Speed', value: '< 90 sec' },
      { label: 'Cloud Uptime', value: '24/7/365' },
    ],
    highlights: [
      'Runs in the cloud — no keeping browser tabs open all night',
      'Custom Sniper Filters by brand, condition, ZIP, and mile radius',
      'Instant push & SMS alerts before competing flippers see the post',
    ],
  },
  {
    step: '02',
    code: 'COMP',
    title: 'Real-Time Price History & Comping',
    tagline: 'Know what a piece actually sells for before you load the truck.',
    description:
      'Never buy on gut feel again. Kommandr OS cross-references historical sold prices across local marketplaces and regional storefronts so you know your exact resale ceiling and turnaround time before making an offer.',
    metrics: [
      { label: 'Comp Accuracy', value: '94.8%' },
      { label: 'Margin Protection', value: '3.2x ROI' },
    ],
    highlights: [
      'Instant low / median / high resale value breakdown by zip code',
      'Estimated days-to-sell velocity score for bulky furniture',
      'Built-in refurbishment & pickup fuel cost deductions',
    ],
  },
  {
    step: '03',
    code: 'LIST',
    title: 'List Once, Sell Everywhere',
    tagline: 'Human-paced cross-posting that protects your marketplace accounts.',
    description:
      'Upload photos and details once. Kommandr Konnect and our companion Chrome Extension cross-post to Facebook Marketplace, OfferUp, eBay, and your own web store using natural safety curves and quiet hours.',
    metrics: [
      { label: 'Channels Synced', value: '4+ Platforms' },
      { label: 'Time Saved / Item', value: '18 mins' },
    ],
    highlights: [
      'Human-like posting queue with randomized intervals & quiet hours',
      'Auto-delists across all platforms the moment an item sells',
      'Kommandr AI writes high-converting titles, dimensions & descriptions',
    ],
  },
  {
    step: '04',
    code: 'SELL',
    title: 'Auto-Built Branded Storefront',
    tagline: 'A sleek showroom website generated automatically from your logo.',
    description:
      'Skip Shopify headaches and $2,000 agency builds. Kommandr spins up a high-converting furniture storefront on a free Kommandr address or your own custom domain, complete with direct Stripe checkout and zero marketplace fees.',
    metrics: [
      { label: 'Store Setup Time', value: '60 seconds' },
      { label: 'Marketplace Fee', value: '0% Direct' },
    ],
    highlights: [
      'Auto-themed directly from your brand logo and inventory feed',
      'Integrated Stripe checkout, deposit holds & delivery fee tiers',
      'Live inventory sync — every cross-posted item appears in your store',
    ],
  },
  {
    step: '05',
    code: 'FOLLOW UP',
    title: 'Unified CRM, Inbox & Business Line',
    tagline: 'Turn "Is this still available?" into scheduled warehouse pickups.',
    description:
      'Stop juggling personal texts, Facebook DMs, and OfferUp chats. Get a dedicated business phone number with voice, SMS, voicemail, missed-call text-back, and Muse AI auto-dispatching synced to your Google Calendar.',
    metrics: [
      { label: 'Lead Response', value: 'Instant AI' },
      { label: 'No-Show Drop', value: '-68%' },
    ],
    highlights: [
      'Threads FB chats, SMS, calls, voicemails & web inquiries in one view',
      'Muse AI drafts replies with your exact pickup windows & delivery rates',
      'Automated buyer reminders and Google Calendar pickup scheduling',
    ],
  },
  {
    step: '06',
    code: 'BOOKS',
    title: 'True Net Profit & Tax Set-Asides',
    tagline: 'See the real money you keep after COGs, fees, fuel, and taxes.',
    description:
      'Revenue means nothing if you don’t know your net. Track every couch from purchase receipt to final payout—automatically deducting platform fees, repair supplies, delivery mileage, and setting aside your tax bracket percentage.',
    metrics: [
      { label: 'Tax Readiness', value: '1-Click CSV' },
      { label: 'Profit Clarity', value: 'Real-Time' },
    ],
    highlights: [
      'True net margin calculated after COGs, Stripe/platform fees & repairs',
      'Automatic tax set-aside bucket on every completed flip',
      'Accountant-ready spreadsheet exports & ask-anything AI financial queries',
    ],
  },
];

export const SIMULATOR_DEALS = [
  {
    id: 'deal-1',
    name: 'Article Sven Charme Tan Leather Sofa (88")',
    category: 'Living Room • Full Grain Leather',
    marketplace: 'Facebook Marketplace',
    distance: '4.2 mi away (Scottsdale, AZ)',
    timeAgo: 'Posted 1m 42s ago',
    sourcePrice: 220,
    estimatedResale: 1250,
    cleaningCost: 45,
    deliveryFuel: 30,
    platformFeeRate: 0.0,
    daysToSell: '3–5 Days',
    demandScore: '98 / 100 (Ultra High)',
    museReply:
      'Hi! I can pick up the Article leather sofa today between 4:00 PM – 6:00 PM with cash in hand and a ramp van. Sending $220 now if you can mark it pending!',
  },
  {
    id: 'deal-2',
    name: 'Pottery Barn Folsom Reclaimed Wood Dining Table + 6 Chairs',
    category: 'Dining Sets • Solid Pine',
    marketplace: 'OfferUp Local',
    distance: '8.7 mi away (Tempe, AZ)',
    timeAgo: 'Posted 3m 10s ago',
    sourcePrice: 350,
    estimatedResale: 1680,
    cleaningCost: 65,
    deliveryFuel: 45,
    platformFeeRate: 0.0,
    daysToSell: '4–7 Days',
    demandScore: '94 / 100 (High)',
    museReply:
      'Hey there! We’d love to grab the Pottery Barn dining set. Our box truck is in Tempe right now—can swing by within the hour with $350 cash!',
  },
  {
    id: 'deal-3',
    name: 'Crate & Barrel Tate Walnut 9-Drawer Mid-Century Dresser',
    category: 'Bedroom • Walnut Veneer',
    marketplace: 'Facebook Marketplace',
    distance: '3.1 mi away (Phoenix, AZ)',
    timeAgo: 'Posted 54s ago',
    sourcePrice: 140,
    estimatedResale: 890,
    cleaningCost: 25,
    deliveryFuel: 20,
    platformFeeRate: 0.0,
    daysToSell: '2–4 Days',
    demandScore: '96 / 100 (Hot Flip)',
    museReply:
      'Hello! Is the Crate & Barrel walnut dresser still available? I can pick up immediately—no stairs help needed, I have a dolly and blankets ready.',
  },
];

export const COMPARISON_ROWS = [
  {
    capability: '24/7 Cloud Deal Scanner (FB & OfferUp)',
    kommandr: 'Included (Runs with PC off)',
    crosslisters: 'Not available',
    patchwork: '$99/mo separate bot tool',
  },
  {
    capability: 'Historical Furniture Price Comping',
    kommandr: 'Included (Instant ROI & Comps)',
    crosslisters: 'Not available',
    patchwork: 'Manual spreadsheet guessing',
  },
  {
    capability: 'Human-Paced Multi-Channel Cross-Posting',
    kommandr: 'Included (Safety curves + Quiet hours)',
    crosslisters: 'Basic browser tab blasting',
    patchwork: '$70/mo (Vendoo / List Perfectly)',
  },
  {
    capability: 'Auto-Built Branded Web Storefront + Stripe',
    kommandr: 'Included (Builds from your logo)',
    crosslisters: 'Not available',
    patchwork: '$39–$105/mo (Shopify + theme)',
  },
  {
    capability: 'Unified CRM, Business Phone & Missed-Call Text-Back',
    kommandr: 'Included (Voice, SMS, FB, Web)',
    crosslisters: 'Not available',
    patchwork: '$297/mo (GoHighLevel / OpenPhone)',
  },
  {
    capability: 'Muse AI Auto-Responder & Pickup Calendar Sync',
    kommandr: 'Included (24/7 AI Dispatcher)',
    crosslisters: 'Not available',
    patchwork: '$99/mo AI automation zaps',
  },
  {
    capability: 'True Net Profit, COGs & Tax Set-Aside Ledger',
    kommandr: 'Included (Accountant-ready CSV)',
    crosslisters: 'Basic gross sales only',
    patchwork: '$65/mo (QuickBooks + manual entry)',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How do I connect Facebook Marketplace, OfferUp, and eBay?',
    answer:
      'Marketplaces like eBay and OfferUp connect directly inside the app via Kommandr Konnect. For Facebook Marketplace, you install the companion Kommandr OS Chrome Extension, log into your Kommandr account, and click Connect. The web dashboard acts as the "brain" while the extension acts as your safe "hands" inside the browser.',
  },
  {
    question: 'Is my Facebook or marketplace account safe from bans?',
    answer:
      'Yes. Unlike aggressive bots that blast 50 listings in 10 seconds from foreign servers, Kommandr posts through your own connected session using human-like pacing curves, randomized intervals, and customizable quiet hours so your activity looks like a natural top-rated seller.',
  },
  {
    question: 'Why is the All-In-One plan $397/mo compared to $39 cross-listers?',
    answer:
      'A $39 tool only copy-pastes listings—it doesn’t find underpriced couches for you, build your e-commerce website, give you a business phone line with missed-call text-back, answer buyer messages with AI, or calculate your taxes. Kommandr OS replaces $670+/mo of separate software and saves 20+ hours of manual hustle every week. One extra couch flip per month pays for the entire platform.',
  },
  {
    question: 'Can I start for free before upgrading to the $397/mo Command Plan?',
    answer:
      'Absolutely. You can create a Free Starter account with no credit card required to explore the Command Center, log inventory, and see how the workflow fits your flipping operation before unlocking full 24/7 cloud automation and multi-seat showroom power.',
  },
  {
    question: 'How does the auto-built Storefront work?',
    answer:
      'Upload your logo and Kommandr OS automatically generates a clean, mobile-ready furniture storefront hosted on a free Kommandr address or your own custom domain. Every item in your inventory syncs automatically with built-in Stripe checkout so buyers can purchase or place pickup deposits online.',
  },
];

