# hermai-docs

Customer-facing documentation for [Hermai](https://hermai.ai), hosted at [docs.hermai.ai](https://docs.hermai.ai). Built on [Mintlify](https://mintlify.com).

## What Hermai is

Hermai is a community-driven schema registry for AI agents. Developers discover and contribute website API schemas; agents consume them to get structured JSON from any site — no browser, no HTML parsing, no wasted tokens.

## Layout

```
.
├── docs.json             Mintlify config (nav, theme, colours, logo, navbar)
├── index.mdx             Landing page
├── quickstart.mdx        Sign up → API key → first query → contribute
├── concepts/
│   ├── how-hermai-works.mdx   Two-sided mental model: CLI discovers, platform serves
│   ├── schemas.mdx            Schema format, contribution paths, validation, verified badge
│   ├── catalog.mdx            Lookup API, intent requirement, rate limits, browsing
│   ├── actions.mdx            Action types (api_call, navigate, search, paginate, submit_form)
│   ├── credits-and-usage.mdx  Rate limits, credit earning
│   └── api-keys.mdx           Auth, rate-limit tiers, schema access toggle
├── logo/                 Brand marks
├── favicon.svg
├── images/               Static images used in docs pages
├── CONTRIBUTING.md       How to edit pages, writing guidelines
└── AGENTS.md             Style guide for AI-assisted doc writing
```

## Development

Requires the [Mintlify CLI](https://www.npmjs.com/package/mint):

```bash
npm i -g mint
mint dev
```

Preview at `http://localhost:3000`. Changes on the default branch deploy to production automatically via the Mintlify GitHub app.

If the dev environment breaks, run `mint update` to pull the latest CLI.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for editing guidelines and local development setup.

## Links

- [hermai.ai](https://hermai.ai) — Homepage
- [docs.hermai.ai](https://docs.hermai.ai) — Live docs
- [hermai-cli](https://github.com/hermai-ai/hermai-cli) — Open-source discovery CLI (AGPL-3.0)
