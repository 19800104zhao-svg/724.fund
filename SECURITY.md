# Security Notes

724.fund is currently a static, dependency-free site. The first public surface intentionally avoids server-side code, third-party scripts, tracking pixels, external fonts, and network form submission.

## Current Controls

- No package dependencies and no build step.
- No third-party JavaScript.
- No inline JavaScript event handlers.
- Content Security Policy via meta tag:
  - `default-src 'self'`
  - `script-src 'self'`
  - `style-src 'self'`
  - `connect-src 'none'`
  - `object-src 'none'`
  - `base-uri 'none'`
- Forms and demo workflows generate local summaries, demo sign-in state, claims, AI talent search packets, review events, and brief outputs only. They do not transmit data.
- The AI talent search page uses deterministic local demo data and manual LinkedIn search guidance only. It does not scrape LinkedIn, automate browser actions, call external APIs, or store unauthorized LinkedIn member data.
- Demo state is stored in browser `localStorage` under `724.demo.state`; it is not a production data store.
- Language selection is limited to a fixed translation dictionary.
- User-provided text is written with `textContent`, not `innerHTML`.
- Clipboard access only occurs after an explicit user click.

## Pre-Launch Requirements For Dynamic Features

Before adding real accounts, payments, AI APIs, databases, or intake submission:

- Replace demo login with server-backed authentication, secure sessions, and LinkedIn OpenID Connect where appropriate.
- Add server-side validation and rate limiting.
- Add server-side persistence for claims, intros, trust reviews, and deal-room messages.
- Add CSRF protection for state-changing requests.
- Add authentication with MFA for admin surfaces.
- Store secrets only in the deployment platform secret manager.
- Add audit logs for opportunity, connector, introduction, and payout state changes.
- Add abuse monitoring for duplicate submissions, automation, and suspicious payout behavior.
- Add legal review before any financial-services, fundraising, M&A, or success-fee workflow.

## Reporting

For security issues, email `trust@724.fund`.
