# 724.fund

724.fund is an AI-native, invite-only referral network for senior AI recruiting and executive search.

The first launch is intentionally narrow: private AI talent search mandates, verified connectors, consent-first candidate introductions, audit trails, and commission sharing after successful placement.

The public homepage defaults to English and includes Chinese and Japanese language switching without third-party scripts.

## Files

- `index.html` - static launch page for the first public MVP.
- `login.html` - demo sign-in and role selection flow for connector, opportunity owner, and trust operator workspaces.
- `opportunities.html` - connector-facing opportunity board with claim and intro demo flows.
- `talent-search.html` - natural-language AI talent search copilot with candidate ICP, warm paths, manual LinkedIn search assist, and consent-first outreach.
- `linkedin.html` - LinkedIn identity/network-context demo and production integration notes.
- `deal-room.html` - interaction workspace for claims, consent, review, and payout milestones.
- `trust.html` - trust operations and Monitoring Agent review surface.
- `publish.html` - opportunity owner intake and Tom Agent brief generation.
- `styles.css` - responsive site styling.
- `app.js` - lightweight interactions for tabs, form summaries, demo auth state, local workflows, and copy actions.
- `SECURITY.md` - current static-site controls and requirements before adding dynamic features.
- `robots.txt` - crawler policy.
- `docs/product-blueprint.md` - product, team, trust model, AI-native roadmap, and launch plan.
- `docs/mvp-recruiting-focus.md` - founder decision to focus the first MVP on high-end recruiting and executive search.
- `docs/30-day-private-mvp-plan.md` - 30-day operating plan for the private AI talent recruiting MVP.
- `docs/production-auth-and-data-model.md` - production authentication, roles, data model, APIs, and audit events.
- `docs/trust-review-rubric.md` - opportunity, connector, introduction, payout, and anti-spam review policy.
- `docs/security-audit.md` - static-site security audit notes and residual risks.
- `docs/linkedin-integration.md` - LinkedIn OIDC integration plan, backend endpoints, and compliance rules.
- `docs/self-improving-agent-os.md` - operating system for monitoring failures and turning them into product, data, AI, and workflow improvements.

## Local Preview

Open `index.html` directly in a browser, or run a small static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deployment

This version is dependency-free and can be deployed to Vercel, Cloudflare Pages, Netlify, GitHub Pages, or any static host. For the fastest launch, deploy the repository and point `724.fund` DNS to the generated host target.
