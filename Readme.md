# LangNav API

Backend REST API for LangNav, built with Express + TypeScript.

## Setup

```bash
npm install
npm run dev
```

## Endpoints

### Territories

- `GET /api/territories` — list all territories
- `GET /api/territories/:id` — get territory by ID
- `GET /api/territories?q=` — search by name
- `GET /api/territories?inTerritory=` — filter by region

### Variant Tags

- `GET /api/varianttags` — list all variant tags
- `GET /api/varianttags/:id` — get variant tag by subtag
- `GET /api/varianttags?q=` — search by name or subtag

### Writing Systems

- `GET /api/writingsystems` — list all writing systems
- `GET /api/writingsystems/:id` — get writing system by ISO 15924 code
- `GET /api/writingsystems?q=` — search by name or code

### External Data

- `GET /api/ext/geo/country-coord` — country coordinates
- `GET /api/ext/un/territory-gdp-literacy` — GDP and literacy data
- `GET /api/ext/iana/variant-tags` — IANA variant tag data

### Curated Data

- `GET /api/curated/territories` — curated territory data

## Deployment (GoDaddy cPanel)

After pushing code to GitHub, update the app on cPanel:

1. Open cPanel → Terminal
2. Run:

```bash
source /home/ldijnpfhyij5/nodevenv/lang-nav-api/24/bin/activate
cd ~/lang-nav-api
git pull
npm install
./node_modules/.bin/tsc
```

3. Go to cPanel → Setup Node.js App → click Restart

## Notes

- Currently using mock data
- MySQL integration pending
