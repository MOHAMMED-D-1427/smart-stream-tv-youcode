# Smart Stream TV

A web app to browse and watch TV channels, with search and filters options.

🔗 **Live demo:** https://mohammed-d-1427.github.io/smart-stream-tv-youcode



## About

This project was an assignment of a Sprint from YouCode school, and it was a very good idea to desplay and whatch TV channels in a web app.

## Features

- Channel list loaded from MockAPI
- Search by channel name/channel number
- Filters by category
- Responsive UI built with Tailwind CSS

## Tech Stack

- HTML5
- Tailwind CSS
- JavaScript (vanilla, modular)
- GitHub Pages + GitHub Actions (CI/CD)


### Prerequisites
- Node.js (v18 or later)

### Installation

```bash
git clone https://github.com/MOHAMMED-D-1427/smart-stream-tv-youcode.git
cd REPO-NAME
npm install
npm run build
npx @tailwindcss/cli -i ./css/style.css -o ./css/output.css --watch
```

Then open `index.html` in your browser (or use a local server such as the VS Code Live Server extension).

## Project Structure

```
├── .github/workflows/   # Deployment workflow (deploy.yml)
├── assets/              # Icons and images
├── css/                 # style.css (input) and output.css (Tailwind build)
├── data/                # channels.json(It wast for testing)
├── js/
│   ├── app.js           # App entry point
│   ├── filter.js        # Filtering logic
│   ├── search.js        # Search logic
│   └── ui.js            # UI rendering
├── services/
│   └── api.js           # Data fetching
├── index.html
├── package.json
└── README.md
```

## Git Workflow

- `main`: stable version
- `develop`: integration branch
- `features/*`: one branch per feature
- Commits follow: `feat:`, `fix:`, `style:`, `docs:`

## Author

**Mohammed Darkaoui**
GitHub: [@MOHAMMED-D-1427](https://github.com/MOHAMMED-D-1427)