# Security Audit

Date: 2026-05-20  
Scope: Static public site and demo workspace for 724.fund

## Result

No high-risk issues found in the current static site scope.

The current implementation has a deliberately small attack surface:

- No server-side code.
- No package dependencies.
- No build pipeline.
- No third-party scripts, fonts, analytics, pixels, iframes, or embeds.
- No network submission from forms.
- No external API calls.
- No secrets or credentials in the repository.
- Demo workflow and sign-in state is stored only in browser `localStorage`.

## Controls Reviewed

### Dependency Risk

Status: Pass

The site has no package manifest and no installed runtime dependencies. There is no dependency tree to audit for supply-chain CVEs.

### Cross-Site Scripting

Status: Pass

Application code does not use `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `eval`, `new Function`, or `document.write`.

User-provided form values are placed into the page with `textContent`, not parsed as HTML.

### Content Security Policy

Status: Pass

The page includes a restrictive CSP meta tag:

```text
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'self'
```

The repository also includes `_headers` for hosts that support static security headers, adding `frame-ancestors 'none'`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, and `Permissions-Policy`.

Note: GitHub Pages does not apply custom `_headers`. If GitHub Pages is used, the meta CSP still applies, but full HTTP response headers require Cloudflare Pages, Netlify, Vercel header config, or a proxy such as Cloudflare.

### Data Transmission

Status: Pass

Forms are local-only. They generate application summaries, demo sign-in state, opportunity briefs, deal-room activity, and demo review events in the browser and do not send data to any server.

### Demo Storage

Status: Pass for prototype scope

The frontend uses `localStorage` for demo-only state under `724.demo.state`. This is suitable only for the current static prototype. Production must move identity, sessions, claims, introductions, messages, trust decisions, and audit logs to an authenticated backend with server-side validation and authorization.

### Clipboard

Status: Pass

Clipboard write happens only after an explicit user click on the copy button.

### External Links

Status: Pass

The public page has only a `mailto:` contact link. No third-party script or remote asset is loaded.

### Internationalization

Status: Pass

Language switching uses a fixed in-memory dictionary. User input is not used to select executable code or HTML.

## Residual Risk

This audit covers the current static site only. Before adding real account creation, AI matching, opportunity intake, payments, admin review, email sending, or databases, the product will need a full application security pass:

- authentication and session security
- server-side validation
- bot and rate-limit controls
- CSRF protection
- audit logs
- secret management
- admin authorization
- payment fraud controls
- privacy and data retention policies
- abuse monitoring for referral spam and payout attacks

## Verification Commands

```bash
/Users/kenichi/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node --check app.js
rg -n "innerHTML|outerHTML|insertAdjacentHTML|eval\\(|new Function|document\\.write|http://|https://|fetch\\(|XMLHttpRequest|localStorage|sessionStorage|postMessage|onclick=|onerror=|onload=" .
```
