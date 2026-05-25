# LinkedIn Integration Plan

Status: demo-ready frontend, production backend required.

## Current MVP

The product includes a LinkedIn Network page that simulates identity connection and lets users provide relationship context manually. This is intentional for the first demo:

- no scraping
- no browser cookie use
- no automated LinkedIn actions
- no storage of LinkedIn member data from unofficial sources

The product also includes an AI Talent Search page. It accepts natural-language hiring needs and generates:

- a structured candidate ICP
- ranked warm-path connector routes from local demo data
- manual LinkedIn search strings
- consent-first outreach copy
- Trust Ops checks before owner review

This page is a compliant search-assist workflow, not a LinkedIn data extractor.

## Production Architecture

Use LinkedIn Sign In with OpenID Connect for identity:

1. Create a LinkedIn Developer application.
2. Add the Sign In with LinkedIn using OpenID Connect product.
3. Request scopes: `openid profile email`.
4. Redirect users to LinkedIn authorization.
5. Exchange the authorization code on the backend, not in the browser.
6. Store only the identity fields needed for account verification.

Network intelligence should start with user-provided context or explicit imports. Deeper LinkedIn data access requires approved LinkedIn products and must respect LinkedIn API terms.

## Required Backend Endpoints

- `GET /auth/linkedin/start`
- `GET /auth/linkedin/callback`
- `POST /network/context`
- `POST /opportunities/:id/claim`
- `POST /introductions`
- `POST /messages/consent`
- `POST /trust/reviews/:id/decision`

## Compliance Rules

- Do not scrape LinkedIn.
- Do not ask users for LinkedIn cookies.
- Do not build a database of LinkedIn member data beyond permitted use.
- Do not expose contacts to opportunity owners without consent.
- Do not use LinkedIn data for recruiting or sales use cases unless the approved LinkedIn product and terms allow it.

## References

- LinkedIn OAuth/API access overview: https://learn.microsoft.com/en-us/linkedin/shared/authentication/getting-access
- Sign In with LinkedIn OpenID Connect: https://www.linkedin.com/developers/news/featured-updates/openid-connect-authentication
- LinkedIn Marketing API terms, including restrictions on member data use: https://www.linkedin.com/legal/l/marketing-api-terms
