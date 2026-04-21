# LangNav API

Backend REST API for LangNav, built with Express + TypeScript.

## Setup

```bash
npm install
npm run dev
```

## Endpoints

### Languages

- `GET /api/languages` — list all languages
- `GET /api/languages/:id` — get language by ISO 639-3 code
- `GET /api/languages?q=` — search by name or code

### Territories

- `GET /api/territories` — list all territories
- `GET /api/territories/:id` — get territory by ID
- `GET /api/territories?q=` — search by name
- `GET /api/territories?inTerritory=` — filter by region

### Variant

- `GET /api/variant` — list all variant tags
- `GET /api/variant/:id` — get variant tag by subtag
- `GET /api/variant?q=` — search by name or subtag

### Writing Systems

- `GET /api/writingsystems` — list all writing systems
- `GET /api/writingsystems/:id` — get writing system by ISO 15924 code
- `GET /api/writingsystems?q=` — search by name or code

### External Data

- `GET /api/ext/geo/country-coord` — country coordinates
- `GET /api/ext/un/territory-gdp-literacy` — GDP and literacy data
- `GET /api/ext/iana/variant` — IANA variant tag data
- `GET /api/ext/unicode/cldr-coverage` — CLDR locale coverage data
- `GET /api/ext/glottolog/languages` — Glottolog language data
- `GET /api/ext/tc/language-names-french` — French names for languages
- `GET /api/ext/glottolog/manual-iso-links` — Glottolog manual ISO mappings
- `GET /api/ext/iso/iso-639-3` — ISO 639-3 language codes
- `GET /api/ext/iso/macrolanguages` — ISO macrolanguage mappings
- `GET /api/ext/iso/families` — ISO 639-5 language families
- `GET /api/ext/iso/family-language-links` — family to language links
- `GET /api/ext/iso/retirements` — retired ISO codes
- `GET /api/ext/ethnologue/2012` — Ethnologue 2012 vitality data
- `GET /api/ext/ethnologue/2025` — Ethnologue 2025 vitality data

### Curated Data

- `GET /api/curated/territories` — curated territory data
- `GET /api/curated/writingsystems` — curated writing system data
- `GET /api/curated/languages` — curated language data

## Deployment (GoDaddy cPanel)

After pushing code to GitHub, update the app on cPanel:

1. Open cPanel → Terminal
2. Run:

```bash
source /home/ldijnpfhyij5/nodevenv/lang-nav-api/24/bin/activate
cd ~/lang-nav-api
git pull
npm install --include=dev
./node_modules/.bin/tsc
```

3. Go to cPanel → Setup Node.js App → click Restart

## Notes

- Currently using mock data
- MySQL integration pending
