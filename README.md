# Interactive Crush Romantic Website ❤️

This version uses a SEPARATE HTML FILE for every page.

## Pages

```text
pages/
├── 01-home.html
├── 02-confession.html
├── 03-compliments.html
├── 04-quiz.html
├── 05-guess.html
├── 06-song.html
├── 07-photos.html
├── 08-question.html
└── 09-final.html
```

Only one HTML page is open at a time.

Every page contains:
- Back button
- Page number
- Next button (except the final page)
- Shared animations
- Floating heart effects

## Other files

```text
css/
├── style.css
├── animations.css
└── responsive.css

js/
├── main.js
├── quiz.js
├── music.js
└── question.js

data/
└── content.js

assets/
├── images/
├── icons/
└── music/
    └── our-song.mp3
```

## Add your music

Put your MP3 here:

```text
assets/music/our-song.mp3
```

Then open:

```text
pages/06-song.html
```

## Add your photos

Put photos in:

```text
assets/images/
```

Then replace the photo placeholders inside:

```text
pages/07-photos.html
```

For example:

```html
<img
    src="../assets/images/photo-01.jpg"
    alt="Romantic photo"
/>
```

## Open the website

Open `index.html`.

It automatically starts at:

```text
pages/01-home.html
```

All HTML is intentionally formatted and commented so it is easy to edit in VS Code.
