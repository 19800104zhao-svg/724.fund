# AGENTS.md

## Project

724.fund is an AI-native, invite-only senior AI talent referral network. The first real MVP focuses on high-end recruiting and executive search referrals.

Current stage: Week-1 static MVP / launch validation. The live site is deployed through GitHub Pages at `https://724.fund/`.

Primary users:

- Opportunity owners: companies, founders, hiring managers, recruiters, and search firms who publish vetted senior recruiting opportunities.
- Connectors: trusted people with real access and judgment who can make consent-first introductions.
- Introduced parties: candidates, buyers, partners, or decision makers who must be protected from spam and unwanted disclosure.
- Trust operators: internal reviewers who handle legitimacy, duplicate claims, consent, abuse, disputes, and payout quality.

Core uncertainty:

- Whether a small, high-trust, invite-first network can produce materially better accepted-introduction rates than LinkedIn-style open networking.
- Whether high-end recruiting and executive search can produce the first repeatable paid loop.
- How much relationship context users are willing to provide, and which proof requirements reduce spam without killing participation.

Product principles:

- Ning que wu lan: fewer, higher-quality opportunities and introductions.
- No cold lead marketplace.
- No public registration for the first MVP.
- No reward without verification.
- No full contact exposure without consent or legitimate business context.
- Trust, anti-cheating, and auditability are core product features, not back-office features.

## Commands

No install step is required. The current site is static and dependency-free.

Run locally:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open:

```text
http://127.0.0.1:4173/
```

JavaScript syntax check:

```bash
node --check app.js
```

Security-oriented source scan:

```bash
rg -n "innerHTML|outerHTML|insertAdjacentHTML|eval\\(|new Function|document\\.write|fetch\\(|XMLHttpRequest|sessionStorage|postMessage|onclick=|onerror=|onload=" app.js *.html styles.css
```

Whitespace and patch sanity:

```bash
git diff --check
```

Basic live checks after deployment:

```bash
curl -L -s -o /dev/null -w "%{http_code} %{url_effective}\n" https://724.fund/
curl -L -s -o /dev/null -w "%{http_code} %{url_effective}\n" https://724.fund/login.html
```

Build/lint/test status:

- Build: none currently.
- Lint: none currently.
- Automated tests: none currently.
- Before adding a build system, keep the static launch path working unless the user explicitly approves a framework migration.

## Architecture

Main files:

- `index.html`: public homepage. Defaults to English and supports Chinese/Japanese language switching.
- `login.html`: demo sign-in and role selection for connector, opportunity owner, and trust operator flows.
- `opportunities.html`: connector opportunity board with local claim and intro demo flows.
- `talent-search.html`: natural-language AI talent search copilot. It produces candidate ICP, warm connector paths, manual LinkedIn search guidance, consent-first outreach, and Trust Ops gates using local demo logic only.
- `linkedin.html`: LinkedIn identity/network-context demo. Production backend is required for real LinkedIn OIDC.
- `deal-room.html`: interaction workspace for claims, consent, review, and payout milestones.
- `trust.html`: trust operations, monitoring-agent queue, and failure log surface.
- `publish.html`: opportunity owner intake and Tom Agent brief generation.
- `styles.css`: all layout, responsive behavior, and visual styling.
- `app.js`: translations, demo auth state, local workflow state, rendering, and event handlers.
- `SECURITY.md`: current security controls and requirements before dynamic features.
- `docs/product-blueprint.md`: product thesis, users, trust model, roadmap, and launch plan.
- `docs/mvp-recruiting-focus.md`: recruiting-first MVP scope, commission split model, invite-only access, and anti-spam rules.
- `docs/30-day-private-mvp-plan.md`: 30-day operating plan and success metrics for the private AI talent recruiting MVP.
- `docs/production-auth-and-data-model.md`: production authentication, roles, data model, APIs, and audit events.
- `docs/trust-review-rubric.md`: trust review rules for opportunities, connectors, introductions, and payouts.
- `docs/linkedin-integration.md`: LinkedIn OIDC plan and compliance rules.
- `docs/self-improving-agent-os.md`: monitoring-agent and self-improvement operating model.
- `docs/security-audit.md`: current static-site security audit notes.

Data flow:

- Current MVP has no backend and no external network submission.
- Demo state is stored in browser `localStorage` under `724.demo.state`.
- User input is written to the DOM with `textContent`, not HTML parsing.
- Forms generate local summaries, AI talent search packets, briefs, claims, activity events, and review-state changes only.
- Production must move identity, sessions, claims, introductions, messages, trust decisions, and audit logs to authenticated server-side storage.

External services:

- GitHub repository: `19800104zhao-svg/724.fund`.
- Deployment: GitHub Pages.
- Domain: `724.fund`.
- Planned production identity: LinkedIn Sign In with OpenID Connect using backend token exchange.
- No current third-party JavaScript, analytics, fonts, tracking pixels, AI API calls, database, or payment provider.

## Safety

Do not do these without explicit user approval for the current task:

- Deploy, promote, rollback, or change production hosting settings.
- Change DNS, domain, GitHub Pages, repository visibility, deploy keys, or permissions.
- Delete repositories, branches, production files, databases, logs, or user data.
- Send emails, LinkedIn messages, invitations, or outbound communications.
- Spend money, create paid services, add billing, or subscribe to third-party products.
- Add tracking, analytics, third-party scripts, external fonts, or remote assets.
- Add real authentication, payments, AI APIs, databases, or server endpoints without a security review.
- Add public registration without explicit founder approval and Trust Ops controls.
- Scrape LinkedIn, request LinkedIn cookies, automate LinkedIn actions, or store LinkedIn member data outside permitted API terms.
- Implement regulated financial, securities, M&A, lending, insurance, or investment workflows without legal review.

Security constraints for current static MVP:

- Keep CSP restrictive.
- Keep `connect-src 'none'` until real backend/API usage is intentionally added.
- Do not introduce `innerHTML`, inline event handlers, `eval`, `new Function`, or unsanitized HTML rendering.
- Do not commit secrets, API keys, tokens, private credentials, or production data.
- Treat `localStorage` as demo-only and non-secure.

## Workflow

Before changing code, inspect:

```bash
git status --short --branch
rg --files
sed -n '1,220p' README.md
sed -n '1,220p' SECURITY.md
sed -n '1,220p' app.js
sed -n '1,220p' styles.css
```

For product or trust changes, also inspect:

```bash
sed -n '1,260p' docs/product-blueprint.md
sed -n '1,220p' docs/self-improving-agent-os.md
sed -n '1,180p' docs/linkedin-integration.md
```

Implementation rules:

- Preserve the existing static-site architecture unless migration is explicitly requested.
- Keep edits scoped to the requested workflow.
- Use structured DOM APIs and `textContent` for user-controlled text.
- Keep homepage copy concise and professional.
- Do not add large explanatory blocks to the first viewport.
- If adding a new user flow, make the entry point visible from the homepage and global header.
- If adding any production-like feature, update `SECURITY.md` and the relevant docs.

Required checks after code changes:

```bash
node --check app.js
git diff --check
rg -n "innerHTML|outerHTML|insertAdjacentHTML|eval\\(|new Function|document\\.write|fetch\\(|XMLHttpRequest|sessionStorage|postMessage|onclick=|onerror=|onload=" app.js *.html styles.css
```

For frontend-visible changes:

- Run the local static server.
- Verify the changed page in a browser.
- Check desktop and narrow/mobile layouts when header, hero, forms, or cards change.
- Check browser console errors.
- If deployed, verify the live URL with `curl` and a browser.

Git rules:

- Do not revert user changes unless explicitly requested.
- Do not use destructive git commands such as `git reset --hard` or `git checkout --` without explicit approval.
- Keep commits focused and descriptive.

## AI-Native

Current agent roles:

- Tom: CEO/Product. Owns product thesis, positioning, workflow quality, and daily learning loops.
- Ada: CTO/Architecture. Owns security, backend architecture, data model, deployment, and technical quality gates.
- Leo: Full-Stack. Owns UI workflows, interaction surfaces, audit-log views, and operational tools.
- Nora: AI Engineer. Owns prompts, ranking, matching, RAG, evals, traces, and agent behavior.
- Yuki: Product Design. Owns concise interfaces, review packets, trust indicators, and human override points.
- Mina: Trust & Operations. Owns consent, spam, fraud, duplicate claims, disputes, and payout-quality policies.
- Victor: Growth/BD. Owns opportunity supply, connector acquisition, sales feedback, and conversion playbooks.
- `724-trust-recruiting-operator`: Codex specialist for senior AI recruiting operations, trust review, connector quality, candidate/client matching, consent-first intro packets, anti-spam decisions, and self-improvement feedback. Use this role when the task names `724-trust-recruiting-operator` or involves high-end AI talent matching and Trust Ops workflow design.

Current AI-native mechanisms:

- `docs/self-improving-agent-os.md` defines the monitoring-agent loop.
- `trust.html` exposes a demo review queue and failure log.
- `app.js` tracks demo activities locally so product workflows can show observable state.
- Daily reporting automation should classify failures and propose patches using the self-improvement taxonomy.

Target self-improving loop:

```text
User intent -> Agent action -> Outcome -> Monitor -> Diagnosis -> Patch -> Review -> Deploy -> Better next attempt
```

Failure taxonomy:

- Missing data.
- Bad retrieval.
- Bad ranking.
- Bad reasoning.
- Missing deterministic tool.
- Missing database view or index.
- Missing skill file or playbook.
- Missing eval.
- Bad UX.
- Trust risk.
- Legal risk.

Minimum evals to add before production matching:

- Opportunity brief quality eval.
- Connector-fit ranking eval.
- Duplicate-introduction detection eval.
- Consent-first outreach eval.
- Weak/spam submission rejection eval.
- Owner review packet usefulness eval.
- False-positive trust rejection eval.

Data and feedback that should compound into a moat:

- Opportunity acceptance criteria.
- Connector domains, trust tiers, and accepted/rejected intro history.
- Relationship proof quality.
- Consent evidence and introduced-party feedback.
- Owner acceptance/rejection reasons.
- Meeting, hire, deal, payout, and dispute outcomes.
- Agent query traces and failure labels.

Human judgment must remain in the loop for:

- Trust-tier upgrades.
- Sensitive opportunity approval.
- High-value payout decisions.
- Disputes.
- Legal/compliance edge cases.
- Production deployment and permission changes.
