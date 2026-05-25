# Production Auth And Data Model

Status: design draft
Owner: Ada
Product owner: Tom
Primary MVP: invite-only high-end recruiting and executive search referrals

## 1. Auth Principles

The current `login.html` flow is demo-only and stores state in browser `localStorage`. Production must replace it with server-backed authentication.

Required principles:

- No public self-serve registration for the first MVP.
- Every account starts from invite or manual approval.
- Role and trust tier are assigned server-side.
- Sensitive opportunities are visible only after approval.
- All state-changing actions must write an audit event.
- Admin and Trust Operator surfaces require stronger controls than normal connector access.

## 2. Account States

```text
invited
applied
under_review
approved
limited
suspended
rejected
```

No account should move from `applied` to `approved` without a Trust Operator decision.

## 3. Roles

```text
connector
opportunity_owner
trust_operator
admin
introduced_party
```

`introduced_party` may start as a non-account entity and later become a lightweight account for consent confirmation, status tracking, or dispute handling.

## 4. Core Tables

```text
invites
- id
- email
- role
- invited_by_user_id
- status: sent / accepted / expired / revoked
- expires_at
- created_at

users
- id
- email
- name
- role
- account_status
- trust_tier
- invited_by_user_id
- approved_by_user_id
- approved_at
- created_at
- updated_at

identities
- id
- user_id
- provider: email / linkedin_oidc / manual
- provider_subject_id
- verified_email
- profile_url
- verified_at

organizations
- id
- name
- domain
- type: employer / search_firm / client / platform
- verification_status

opportunities
- id
- owner_user_id
- organization_id
- category: executive_search / senior_recruiting
- title
- confidentiality_level
- role_level
- location
- compensation_range
- must_have_criteria
- nice_to_have_criteria
- disqualifiers
- target_backgrounds
- status: draft / trust_review / live / paused / closed
- created_at
- updated_at

opportunity_terms
- id
- opportunity_id
- fee_basis
- connector_commission_share
- payout_trigger
- payment_timing
- replacement_clause
- refund_clause
- dispute_window_days

claims
- id
- opportunity_id
- connector_user_id
- status: claimed / intro_submitted / expired / rejected / converted
- claim_expires_at
- created_at

candidates
- id
- name
- current_company
- target_role
- profile_url
- normalized_identity_hash
- created_at

consent_proofs
- id
- candidate_id
- introduction_id
- proof_type: written / verbal_logged / platform_confirmed
- proof_summary
- confirmed_at
- created_at

relationship_proofs
- id
- connector_user_id
- candidate_id
- proof_type: direct_colleague / investor / founder_network / prior_client / trusted_second_degree
- proof_summary
- created_at

introductions
- id
- opportunity_id
- claim_id
- connector_user_id
- candidate_id
- relationship_proof
- fit_reason
- consent_status: not_requested / requested / confirmed / declined
- candidate_ownership_status
- duplicate_score
- risk_score
- status: draft / trust_review / owner_review / accepted / rejected / converted / disputed
- created_at
- updated_at

reviews
- id
- target_type: user / opportunity / introduction / payout
- target_id
- reviewer_user_id
- decision: approve / reject / escalate
- reason_code
- notes
- created_at

payout_events
- id
- introduction_id
- opportunity_id
- connector_user_id
- basis_amount
- commission_share
- payout_amount
- status: pending / approved / held / paid / disputed / cancelled
- trigger_event
- created_at

audit_events
- id
- actor_user_id
- action
- target_type
- target_id
- metadata_json
- created_at
```

## 5. Required API Surface

```text
POST /auth/invite
POST /auth/login
GET  /auth/session
POST /auth/logout
GET  /auth/linkedin/start
GET  /auth/linkedin/callback

POST /applications/connector
POST /applications/opportunity-owner
POST /reviews/:id/decision

POST /opportunities
POST /opportunities/:id/submit-review
POST /opportunities/:id/publish
GET  /opportunities
GET  /opportunities/:id

POST /opportunities/:id/claims
POST /introductions
POST /introductions/:id/consent
POST /introductions/:id/owner-decision

GET  /trust/review-queue
GET  /audit/events
```

## 6. Deterministic Checks

Before an introduction reaches owner review:

- connector account is approved;
- connector has remaining submission capacity;
- opportunity is live and visible to connector tier;
- consent status is valid for the workflow stage;
- relationship proof is present;
- duplicate check has run;
- candidate ownership conflict check has run;
- legal/risk flags are below escalation threshold.

## 7. Minimum Audit Events

```text
user.invited
user.applied
user.approved
user.suspended
opportunity.created
opportunity.submitted_for_review
opportunity.approved
opportunity.published
claim.created
introduction.created
introduction.consent_confirmed
introduction.reviewed
introduction.owner_accepted
introduction.owner_rejected
payout.triggered
payout.approved
payout.paid
```

## 8. Security Requirements

- Server-side authorization for every read/write.
- CSRF protection for browser state-changing requests.
- Rate limits for login, invite, claim, intro submission, and review actions.
- Admin MFA before production launch.
- No secrets in the frontend.
- No LinkedIn scraping or cookie collection.
- LinkedIn OIDC token exchange only on backend.
- PII encryption or field-level access controls before storing real candidate data.
