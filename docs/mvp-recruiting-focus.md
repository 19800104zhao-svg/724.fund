# MVP Recruiting Focus

Date: 2026-05-22
Owner: Tom
Status: Founder decision captured, implementation pending

## 1. Decision

The first real MVP should focus on high-end recruiting and executive search referrals.

Rationale:

- Candidate profile and success event are clearer than generic B2B introductions.
- Candidate consent can be enforced before a full introduction.
- Reward can be tied to actual placement commission or search success fee.
- Quality can be measured with accepted intro rate, interview rate, placement rate, and payout disputes.
- The product can stay small and high-trust instead of becoming a lead marketplace.

High-ticket B2B introductions remain a later expansion path, not the first operating surface.

## 2. Initial Scope

In scope:

- Executive search referrals.
- VP/C-level hiring.
- Founding team and senior AI talent.
- Enterprise sales/GTM leadership.
- Japan, cross-border, and bilingual senior talent where the founder has advantage.
- Invite-only connectors who can credibly reach senior candidates.

Out of scope for the first MVP:

- Public job board.
- Public self-serve registration.
- Low-seniority roles.
- Bulk resume uploads.
- Cold LinkedIn scraping.
- Resume database resale.
- Contingency recruiting at spam volume.
- Securities, fundraising, lending, insurance, M&A, or regulated investment workflows.

## 3. Reward Model

Default model: commission split.

The connector participates in the actual recruiting/search commission if:

1. the connector submitted the candidate through 724.fund;
2. consent and relationship proof were recorded;
3. the opportunity owner accepted the introduction;
4. the candidate was hired or another contractual success event occurred;
5. the client paid the relevant placement/search fee.

Recommended MVP reward structure:

- No large reward for an unverified name.
- Optional small milestone only after owner-accepted, consent-confirmed intro.
- Main payout after successful placement and paid invoice.
- Holdback/dispute window before final payout.
- Commission split percentage defined per opportunity before connectors can claim it.

Fields every opportunity must disclose:

- base fee or commission basis;
- connector share percentage;
- payout trigger;
- expected payment timing;
- refund/replacement clause;
- dispute window;
- whether candidate ownership already exists with the owner or recruiter.

## 4. Invite-Only Access

Public registration should be disabled for the first MVP.

Access path:

1. Founder or trusted team member invites the user.
2. User submits identity and domain expertise.
3. Trust Operator reviews identity, network relevance, and expected behavior.
4. User receives a role and initial trust tier.
5. Submission limits increase only after accepted introductions.

No user should be able to immediately browse sensitive opportunities, submit unlimited candidates, or see contact details after creating an account.

## 5. Anti-Spam Policy

Hard rules:

- No cold candidate lists.
- No scraped LinkedIn contacts.
- No submission without relationship context.
- No full candidate identity exposure without consent or an approved consent-request flow.
- No repeated submissions after low-quality rejections.
- No duplicate candidate submission across multiple connectors without deterministic duplicate review.
- No off-platform payment or side agreement that bypasses recorded audit events.

Signals that should reduce trust tier:

- repeated weak_relationship rejections;
- no_consent submissions;
- duplicate_intro patterns;
- generic fit reasons;
- unusually high submission velocity;
- repeated owner complaints;
- candidate complaints;
- attempts to reveal or monetize contact details outside the platform.

Automatic limits for first cohort:

- new connector: maximum 1 active claim per opportunity;
- new connector: maximum 3 submitted intros per week;
- trust tier upgrade only after accepted intros;
- cooldown after 2 rejected intros for the same reason;
- manual review for every high-fee opportunity.

## 6. First Opportunity Template

Every real recruiting opportunity should be captured in this format:

```text
Opportunity title:
Company / owner:
Confidentiality level:
Role level:
Location / remote:
Compensation range:
Must-have criteria:
Nice-to-have criteria:
Disqualifiers:
Target companies / backgrounds:
Why now:
Hiring urgency:
Search fee or commission basis:
Connector commission share:
Payout trigger:
Replacement/refund clause:
Candidate consent requirement:
Known candidate ownership conflicts:
Review owner:
```

## 7. Open Clarification

Founder mentioned that "外通" is important as an example. This needs clarification before it becomes product copy or data model language.

Possible interpretations:

- a specific company or customer example;
- foreign-company / overseas-channel recruiting;
- outsourcing / external-channel recruiting;
- a specific recruiting market term;
- another founder-specific shorthand.

Tom should confirm the intended meaning before building workflows around it.

## 8. Immediate Build Implications

Change product emphasis:

- Homepage should read more clearly as high-trust recruiting referrals, not generic opportunity marketplace.
- Opportunities page should default to senior recruiting cards.
- Publish flow should ask recruiting-specific terms first.
- Trust Ops should show candidate consent, candidate ownership, duplicate submission, and commission-risk fields.
- LinkedIn page should remain identity/context only; no scraping or automated outreach.
