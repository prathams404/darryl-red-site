/* =========================================================
   EDIT THIS FILE ONLY.
   Everything on the website (index.html, shows.html,
   presskit.html) is pulled from the object below. You don't
   need to touch any other file to update your content —
   see EDIT-ME.md for the full guide.
   ========================================================= */

const DJ_CONTENT = {

  /* ---------------------------------------------------------
     1. ARTIST BASICS
     - accentHex: replace with your real brand hex when ready
       (also update --accent in css/style.css to match)
     - logo: drop your PNG in /assets and point to it here
     --------------------------------------------------------- */
  artist: {
    stageName: "DARRYL RED",
    accentHex: "#FF3D7F",
    logo: "assets/logo.png", // put your logo PNG in the assets folder and update this path
    tagline: "Bengaluru selector. Commercial, UKG, DNB, house, bass.",
    location: "Bengaluru, India",

    // Short version — used in the hero and anywhere space is tight.
    heroLine: "Reads a room like a course, then takes it to the peak.",

    // Long bio — used in the About section on the homepage.
    longBio: [
      "DARRYL RED reads a crowd the way a runner reads a course — pace, terrain, and the exact moment to push. Behind the decks that instinct becomes a set: commercial hooks that pull a room in, UK garage swing that gets shoulders moving, drum & bass and bass-heavy drops that carry a floor to its peak, and house grooves that hold it there once it arrives.",
      "Based in Bengaluru, DARRYL RED has built a reputation across two very different worlds. On one side, nightlife at full volume — SOCIAL's rooms across the city, frat nights, freshers' weeks, festival stages, the kind of sets where the only job is maximum energy. On the other, the disciplined, high-stakes rhythm of sport and corporate events — HYROX Bengaluru, TCS Marathon — where the music has to motivate thousands without ever getting in the way of the moment.",
      "The result is a DJ who can build a floor from zero to peak in a club at 1am, and hold the energy of a finish line at 7am — reading the room, not just the rider, and finding the drop it didn't know it needed."
    ],

    // A few short, punchy lines used as the "what I do" panel on the homepage.
    strengths: [
      { label: "Nightlife", detail: "Builds a dancefloor from warm-up to peak, set after set." },
      { label: "Sport & fitness events", detail: "High-tempo sets that pace a crowd, not distract it — HYROX, marathons, race villages." },
      { label: "Corporate & brand activations", detail: "Reads the room and the brief — energy on cue, never off-key." },
      { label: "Private & campus events", detail: "Frat nights, freshers' weeks, festivals — built for a room that wants to move." }
    ]
  },

  /* ---------------------------------------------------------
     2. GENRES — shown as a scrolling ticker on the homepage
     --------------------------------------------------------- */
  genres: ["Commercial", "UKG", "DNB", "House", "Bass"],

  /* ---------------------------------------------------------
     3. TRUSTED BY / PLAYED AT — logo strip
     Right now these render as styled text wordmarks since no
     logo files were supplied. Add a `logo: "assets/xyz.png"`
     field to any entry once you have the real logo file, and
     the site will use the image instead of the text version —
     see EDIT-ME.md.
     --------------------------------------------------------- */
  trustedBy: [
    { name: "SOCIAL", note: "Across Bengaluru" },
    { name: "HYROX Bengaluru", note: "Sport & fitness" },
    { name: "TCS World 10K / Marathon", note: "Race village" },
    { name: "Red Bull", note: "Brand activation" },
    { name: "The Leela Palace", note: "Private event" },
    { name: "Mall of Asia", note: "Live event" }
    // Add more venues/brands here, same shape: { name: "...", note: "..." }
  ],

  /* ---------------------------------------------------------
     4. PAST GIGS — the experience list on the homepage
     --------------------------------------------------------- */
  pastGigs: [
    {
      type: "Sport & fitness",
      name: "HYROX Bengaluru",
      note: "Race-day sets pacing thousands of competitors through the toughest hour of their week."
    },
    {
      type: "Sport & fitness",
      name: "TCS World 10K / TCS Marathon",
      note: "Start-line and finish-line energy for one of the city's biggest race weekends."
    },
    {
      type: "Nightlife",
      name: "SOCIAL — across Bengaluru",
      note: "Recurring resident-style sets across SOCIAL's rooms in the city."
    },
    {
      type: "Campus",
      name: "Frat nights & freshers' weeks",
      note: "College and campus events built for a room that wants to move from the first track."
    },
    {
      type: "Festival",
      name: "Festival stages",
      note: "Open-format sets built to hold attention across a longer, mixed-crowd set."
    },
    {
      type: "Corporate",
      name: "Corporate & brand events",
      note: "Activations and corporate parties where the music has to fit the brief and still hit hard."
    }
    // Add more rows in the same shape as above: { type, name, note }
  ],

  /* ---------------------------------------------------------
     5. UPCOMING SHOWS — powers the "Upcoming Shows" section on
     the homepage AND the full showcase on shows.html.
     Delete the sample rows and add your real ones. Keep the
     date in "YYYY-MM-DD" format so sorting works correctly.
     --------------------------------------------------------- */
  upcomingShows: [
    // SAMPLE ROW — replace with your real upcoming show, or delete this block.
    {
      date: "2026-10-18",
      event: "SAMPLE — Update this show",
      venue: "Venue name",
      city: "Bengaluru",
      note: "Replace this with a real upcoming show, or remove the row entirely — see EDIT-ME.md.",
      ticketUrl: ""
    }
  ],

  /* ---------------------------------------------------------
     6. PRESS KIT
     --------------------------------------------------------- */
  pressKit: {
    shortBio: "DARRYL RED is a Bengaluru-based DJ playing commercial, UKG, DNB, house and bass — known for taking dancefloors to peak energy and running the music at sport, fitness and corporate events, including HYROX Bengaluru, TCS Marathon and SOCIAL.",

    quickFacts: [
      { label: "Based in", value: "Bengaluru, India" },
      { label: "Genres", value: "Commercial, UKG, DNB, House, Bass" },
      { label: "Books for", value: "Nightlife, sport & fitness events, corporate activations, campus & festival events" },
      { label: "Notable events", value: "HYROX Bengaluru, TCS Marathon, SOCIAL (Bengaluru)" }
    ],

    riderNote: "Full technical rider available on request. DARRYL RED performs on standard club/festival setups (CDJ-3000 / DJM-900 or equivalent) and is happy to adapt to venue or event-provided rigs — get in touch for the full spec sheet.",

    assets: [
      { name: "Logo (PNG, transparent)", meta: "Add file to /assets and update path in content.js", path: "assets/logo.png" },
      { name: "Press photo", meta: "Add file to /assets and update path in content.js", path: "assets/press-photo.jpg" }
      // Add more downloadable assets in the same shape: { name, meta, path }
    ],

    contact: {
      email: "bookings@example.com",       // replace with your real booking email
      instagram: "@darrylred",             // replace with your real handle
      phone: ""                            // optional — leave blank to hide
    }
  }
};
