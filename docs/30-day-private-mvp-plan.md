# 30-Day Private MVP Plan

Owner: Tom
Status: execution plan
Primary wedge: senior AI recruiting and executive search
Access model: invite-only

## 1. Goal

Prove that a small, high-trust network can produce better senior AI candidate introductions than LinkedIn-style open outreach.

This is not a public marketplace launch. The first 30 days should validate a private operating loop:

```text
real AI role -> invited connector -> consent-first candidate intro -> Trust Ops review -> owner review -> accepted intro / rejection reason -> learning loop
```

## 2. Success Criteria

By day 30:

- 3-5 real senior AI search mandates collected.
- 20-30 trusted connectors invited.
- 10-15 connectors approved.
- 10 consent-confirmed candidate introductions submitted.
- Owner accepted intro rate at or above 50%.
- 0 no-consent full candidate identity leaks.
- 0 public registration paths.

## 3. Weekly Plan

### Week 1: Positioning And Mandate Intake

- Update public site to focus on senior AI talent and cross-border recruiting.
- Collect 3-5 real or near-real AI search mandates.
- Capture commission basis, connector share, payout trigger, and candidate ownership rules for each mandate.
- Create standard mandate review packet.

### Week 2: Connector Cohort

- Invite 20-30 trusted connectors manually.
- Approve 10-15 after identity, domain, and behavior review.
- Assign initial limits:
  - 1 active claim per mandate;
  - 3 candidate submissions per week;
  - every intro manually reviewed.

### Week 3: Candidate Intro Loop

- Run consent-first outreach.
- Generate candidate review packets.
- Track rejection reason codes:
  - weak_relationship;
  - no_consent;
  - duplicate_intro;
  - poor_fit;
  - candidate_ownership_conflict;
  - generic_reason.

### Week 4: Learning And Next Build Decision

- Review accepted intro rate and rejection patterns.
- Decide whether to build production backend immediately or continue manual ops for more evidence.
- Convert repeated failures into product rules, deterministic checks, or eval cases.

## 4. Operating Rules

- No public registration.
- No scraped LinkedIn contacts.
- No bulk resumes.
- No full candidate identity exposure before consent.
- No payout for unverified names.
- No commission payout before documented success event and payment evidence.
- Every intro must include relationship proof, consent status, fit reason, duplicate check, and candidate ownership status.

## 5. Metrics

```text
mandates_collected
connectors_invited
connectors_approved
claims_created
candidate_intros_submitted
consent_confirmed_intros
owner_accepted_intros
owner_rejected_intros
duplicate_risks
no_consent_blocks
commission_holds
candidate_complaints
```

## 6. Daily Review

Every day, Tom and Mina should review:

- the best candidate packet submitted;
- the weakest candidate packet submitted;
- all rejected intros and reason codes;
- all duplicate and ownership risks;
- all workflow steps that required manual explanation;
- one smallest product or policy patch to prevent repeated failure.
