# Trust Review Rubric

Status: MVP operating policy draft
Owner: Mina
Product owner: Tom
Primary MVP: invite-only high-end recruiting and executive search referrals

## 1. Review Philosophy

724.fund should optimize for accepted, consent-confirmed, high-quality introductions. It should not optimize for submission volume.

Default posture:

- protect candidates from spam;
- protect opportunity owners from weak leads;
- protect connectors from unclear reward terms;
- protect the platform from duplicate claims, fake access, and off-platform leakage.

## 2. Opportunity Review

Approve only if:

- owner identity is verified;
- role and target profile are specific;
- compensation range or seniority band is credible;
- must-have criteria are clear;
- disqualifiers are clear;
- commission basis and connector share are defined;
- payout trigger is defined;
- candidate ownership conflicts can be checked;
- no illegal, discriminatory, or misleading requirements are present;
- opportunity does not require cold spam or scraping.

Reject if:

- reward or commission terms are unclear;
- owner cannot prove authority to hire or engage search support;
- role is too vague;
- target profile is impossibly broad;
- the owner wants raw names without consent;
- the owner wants to bypass platform audit or payout rules.

Escalate if:

- cross-border employment law is unclear;
- success fee structure may require legal review;
- owner requests exclusivity or candidate ownership terms that could create disputes;
- role touches regulated industries or sensitive personal data.

## 3. Connector Review

Approve only if:

- identity is verified;
- invite source is known;
- connector can describe a credible recruiting domain;
- connector can provide examples of trusted senior relationships;
- connector accepts consent-first rules;
- connector accepts submission limits;
- connector has no obvious spam or arbitrage pattern.

Initial limits:

- maximum 1 active claim per opportunity;
- maximum 3 submitted introductions per week;
- manual review for every submitted intro;
- trust tier increase only after accepted introductions.

Reject or suspend if:

- connector submits scraped lists;
- connector repeatedly submits candidates without consent;
- connector uses generic fit reasons;
- connector submits duplicate candidates;
- connector attempts off-platform payout or owner contact leakage;
- candidates complain about unauthorized disclosure.

## 4. Introduction Review

Approve only if:

- candidate profile matches must-have criteria;
- connector explains actual relationship;
- consent is confirmed or the next step is explicitly consent request;
- fit reason is specific;
- candidate ownership conflict check is clear;
- duplicate check is clear;
- no unnecessary sensitive data is exposed;
- opportunity owner can review a clean packet without seeing raw contact details prematurely.

Reject if:

- `weak_relationship`: connector cannot explain relationship;
- `no_consent`: candidate has not consented and workflow exposes too much detail;
- `duplicate_intro`: candidate already submitted or owned;
- `poor_fit`: candidate misses must-have criteria;
- `generic_reason`: fit reason is vague or copied;
- `sensitive_leak`: private candidate information is overexposed;
- `spam_pattern`: connector is submitting at suspicious volume;
- `off_platform_risk`: connector or owner is trying to bypass audit or payout.

Escalate if:

- candidate is currently employed by the opportunity owner or a conflicted party;
- candidate ownership is disputed;
- multiple connectors claim the same candidate;
- reward is high enough to create payout fraud risk;
- candidate consent is ambiguous.

## 5. Payout Review

Approve payout only if:

- introduction was submitted through 724.fund;
- candidate consent and relationship proof are recorded;
- owner accepted the introduction;
- success event occurred;
- relevant invoice/client payment was received or contractually confirmed;
- refund/replacement clause and dispute window are satisfied;
- no off-platform bypass evidence exists.

Hold payout if:

- client payment is pending;
- candidate start date has not occurred;
- owner disputes candidate ownership;
- duplicate connector claims exist;
- refund/replacement clause is still active.

## 6. Reason Codes

```text
weak_relationship
no_consent
duplicate_intro
poor_fit
generic_reason
candidate_ownership_conflict
unclear_commission
publisher_unverified
legal_risk
spam_pattern
conflict_of_interest
off_platform_risk
sensitive_leak
missing_acceptance_criteria
```

## 7. Minimum Review Packet

Every owner-facing packet should include:

```text
Opportunity:
Candidate summary:
Must-have fit:
Missing / uncertain criteria:
Connector relationship:
Consent status:
Candidate ownership status:
Duplicate check:
Risk score:
Recommended decision:
Reason codes:
Next action:
```

## 8. Anti-Spam Escalation

Trust Operator actions:

- warning;
- submission limit reduction;
- temporary cooldown;
- manual review only;
- trust tier downgrade;
- suspension;
- permanent removal.

Escalate immediately for:

- scraped contact lists;
- fake consent;
- repeated duplicate submissions;
- candidate complaint;
- owner complaint about off-platform solicitation;
- payout manipulation.
