# Editing this site — quick guide

Everything you'll want to change lives in **one file**:

```
js/content.js
```

You never need to touch `index.html`, `shows.html`, `presskit.html`, `css/style.css` or `js/main.js` for normal updates — those just display whatever is in `content.js`. Open `content.js` in any text editor (Notepad, TextEdit, VS Code, etc.), make your change, save, and refresh the site.

---

## 1. Your logo, brand colour and stage name

At the top of `content.js`:

```js
artist: {
  stageName: "DARRYL RED",
  accentHex: "#FF3D7F",
  logo: "assets/logo.png",
  ...
```

- **Stage name** — change the text between the quotes.
- **Brand colour (hex)** — once you have your real hex code, replace `#FF3D7F` with it, e.g. `accentHex: "#1CE7B0",`. The whole site (buttons, glows, highlighted text, marquee accents) updates automatically.
- **Logo** — drop your logo PNG into the `assets` folder (e.g. `assets/logo.png`), then make sure the `logo:` line points to it. If you leave `logo: ""` (empty), the site will just use your stage name as a text mark in the nav instead — that's the current default until you add the file.

---

## 2. Your introduction / bio

Still inside `artist { ... }`:

- `heroLine` — the one short line under your name on the homepage.
- `longBio` — an array of paragraphs (each one wrapped in quotes, separated by commas) used in the "About" section on the homepage and the "Full bio" section on the press kit page. Add, remove or rewrite paragraphs freely.
- `strengths` — the four short lines in the "Where DARRYL RED plays best" panel (Nightlife / Sport & fitness / Corporate / Private & campus). Edit the `detail` text for each, or add a new one in the same shape:
  ```js
  { label: "New category", detail: "A short description." }
  ```

---

## 3. Genres

```js
genres: ["Commercial", "UKG", "DNB", "House", "Bass"],
```
This list feeds the scrolling ticker on the homepage. Add, remove or reorder freely.

---

## 4. Venues / events you've played (logo strip)

```js
trustedBy: [
  { name: "SOCIAL", note: "Across Bengaluru" },
  { name: "HYROX Bengaluru", note: "Sport & fitness" },
  ...
```

This powers the scrolling "Played at & trusted by" strip. Right now each one shows as a styled text wordmark, since no logo image files were supplied.

**To use a real logo image instead of text** for any entry, add a `logo` field pointing to a file in `/assets`:
```js
{ name: "Red Bull", note: "Brand activation", logo: "assets/redbull-logo.png" },
```
The site will automatically use the image instead of the text version once that field is present.

To add a new venue/event, copy the pattern:
```js
{ name: "Venue or brand name", note: "One short line of context" },
```

---

## 5. Past gigs (the "Gigs & experience" list)

```js
pastGigs: [
  { type: "Sport & fitness", name: "HYROX Bengaluru", note: "..." },
  ...
```
- `type` — short category label (Nightlife, Sport & fitness, Corporate, Campus, Festival, etc.)
- `name` — the event or venue name
- `note` — one sentence about what you did there

Add a new row anywhere in the list using the same three fields.

---

## 6. Upcoming shows

```js
upcomingShows: [
  {
    date: "2026-10-18",
    event: "SAMPLE — Update this show",
    venue: "Venue name",
    city: "Bengaluru",
    note: "Optional extra line",
    ticketUrl: ""
  }
],
```

**This one list powers both the homepage preview (top 3 shows) and the full `shows.html` calendar page** — you only ever update it in one place.

- `date` — always use the format `"YYYY-MM-DD"` (year-month-day) so shows sort correctly and the calendar keeps working.
- `event`, `venue`, `city` — plain text.
- `note` — optional, leave as `""` to omit.
- `ticketUrl` — optional link (tickets, event page, Instagram post). Leave as `""` to hide the link.

**Delete the sample row** (the one that says "SAMPLE — Update this show") once you add your first real date. To add more shows, copy the whole `{ ... }` block, paste it above or below, add a comma between entries, and fill in your details.

If the list is ever empty, both pages will automatically show a friendly "no shows listed right now" message instead of breaking.

---

## 7. Press kit page

Inside `pressKit: { ... }`:

- `shortBio` — the one-paragraph bio used at the top of the press kit (also good for send-outs to promoters/press).
- `quickFacts` — the label/value list (Based in, Genres, Books for, Notable events). Edit or add rows in the same shape:
  ```js
  { label: "New label", value: "New value" },
  ```
- `riderNote` — your technical rider summary text.
- `assets` — the downloadable files list. Add your logo and a press photo to `/assets`, then point each entry's `path` at the real file:
  ```js
  { name: "Press photo", meta: "High-res, 300dpi", path: "assets/press-photo.jpg" },
  ```
- `contact` — your booking email, Instagram handle, and (optional) phone number. Leave `phone: ""` empty to hide it from the page entirely.

---

## Where to put image files

All images (logo, press photos, any venue logos) go in the `assets` folder:

```
darryl-red/
  assets/        ← put your PNG/JPG files here
  css/
  js/
    content.js   ← edit this one
    main.js      ← don't need to touch this
  index.html
  shows.html
  presskit.html
```

Then reference them by their path from the site root, e.g. `assets/logo.png`.

---

## Publishing the site

This is a plain HTML/CSS/JS site with no build step — you can host it as-is on any static host (GitHub Pages, Netlify, Vercel, or your own web server). Just upload the whole `darryl-red` folder, keeping the file structure intact.
