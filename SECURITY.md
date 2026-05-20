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
- Forms generate local summaries only. They do not transmit data.
- Language selection is limited to a fixed translation dictionary.
- User-provided text is written with `textContent`, not `innerHTML`.
- Clipboard access only occurs after an explicit user click.

## Pre-Launch Requirements For Dynamic Features

Before adding accounts, payments, AI APIs, databases, or intake submission:

- Add server-side validation and rate limiting.
- Add CSRF protection for state-changing requests.
- Add authentication with MFA for admin surfaces.
- Store secrets only in the deployment platform secret manager.
- Add audit logs for opportunity, connector, introduction, and payout state changes.
- Add abuse monitoring for duplicate submissions, automation, and suspicious payout behavior.
- Add legal review before any financial-services, fundraising, M&A, or success-fee workflow.

## Reporting

For security issues, email `trust@724.fund`.
