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

### External Data
- `GET /api/ext/geo/country-coord` — country coordinates
- `GET /api/ext/un/territory-gdp-literacy` — GDP and literacy data

### Curated Data
- `GET /api/curated/territories` — curated territory data

## Notes
- Currently using mock data
- MySQL integration pending