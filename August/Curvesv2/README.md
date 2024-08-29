# Curve v2
Created this project as an introduction for section curve design. Started August 28, 2024 and finished August 29, 2024.

## Core Learnings
- You cannot fully control the height of the curve primarily because they are <code>svg</code> so what I did is gave the <code>.section__parent</code> a padding so that curve stretches.
- <code>-webkit-mas-image: URL()</code> I was able to put my image above the SVG I generated from SVG Generator and insert the encoded of it version from Base64Guru.
- For large screen I used <code>-webkit-mask-repeat: no-repeat</code> ensuring that the SVG wont repeat.

## Websites used
- For SVG's https://www.shapedivider.app/ & https://app.haikei.app/
- SVG Generator https://www.softr.io/tools/svg-shape-generator
- Base64 Guru https://base64.guru/converter/encode/image/svg