
# chebbebang — Personal Portfolio

The source code for the personal website of Chebb Jenson Magallano. A responsive single-page portfolio showcasing projects, skills, and contact information. Live at **https://chebbebang.github.io/**.

## Features

- Single-page portfolio: hero, about, work, skills, contact
- Professional navy + blue design with soft shadows and rounded cards
- Fixed navigation with active-section highlighting
- Scroll-reveal animations (respects `prefers-reduced-motion`, safe when JS is disabled)
- Zero JavaScript dependencies — vanilla JS only (jQuery removed)
- SEO: meta description, Open Graph, Twitter Card, JSON-LD structured data
- Accessibility: skip link, semantic HTML, focus-visible styles, descriptive alt text
- Lazy-loaded images, responsive across desktop/tablet/mobile

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS grid, media queries)
- Vanilla JavaScript (ES5-compatible, IntersectionObserver)

## Getting Started

```bash
git clone https://github.com/Chebbebang/chebbebang.github.io.git
```

Then simply open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Project Structure

```
.
├── index.html          # Page markup (hero, about, work, skills, contact)
├── style.css           # All styles (design tokens in :root)
├── script.js           # Vanilla JS: smooth scroll, reveals, active nav, year
├── Assets/
│   ├── Files/          # Resume & CV PDFs
│   ├── Icons/          # Skill card icons
│   └── Img/            # Project screenshots & illustrations
├── AGENTS.md           # Guidelines for AI coding agents
└── README.md
```

## Demo

https://chebbebang.github.io/

## Contributing

Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.

## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License. See the LICENSE file.

## Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://chebbebang.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chebbm/)

Thank you for visiting the chebbebang.github.io repository!
