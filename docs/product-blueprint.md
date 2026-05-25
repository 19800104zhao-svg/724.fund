# 724.fund Product Blueprint

Owner: Tom, CEO/Product  
Version: Week-1 MVP  
Date: 2026-05-20

## 1. Company Thesis

724.fund is not a bigger LinkedIn. It is a smaller, higher-trust opportunity network.

LinkedIn solved professional visibility. 724.fund solves verified commercial action: who can credibly introduce whom, under what consent, with what evidence, for what reward, and with what protection for every side.

The product turns three invisible assets into software:

- Access: who can reach the right buyer, candidate, partner, or investor.
- Judgment: who knows whether a match is real, timely, and mutually valuable.
- Trust: who can introduce without wasting time, leaking information, or abusing incentives.

## 2. Positioning

Public positioning:

> The invite-only AI executive talent referral network for cross-border recruiting.

Sharper founder/investor positioning:

> 724.fund is the trust, consent, and commission-sharing layer for senior AI candidate introductions.

What we are:

- Curated, invite-first, high-trust.
- Built for senior AI recruiting and executive search first.
- AI-native from opportunity intake to match scoring, anti-fraud, and workflow automation.
- Designed to protect the opportunity owner, connector, and introduced party.

What we are not:

- A public spam marketplace.
- A generic job board.
- A lead list vendor.
- A LinkedIn clone.
- A regulated securities broker-dealer or investment solicitation platform in the MVP.

## 3. Initial Market Wedge

Founder decision on 2026-05-22: the first MVP wedge is senior recruiting and executive search.

Start narrow. High-ticket B2B commercial introductions remain a later expansion path, but the first operating loop should be built around high-end recruiting and headhunting because the target profile, candidate consent flow, success event, and commission-sharing model are easier to define.

1. Senior recruiting and executive search referrals
   - VP, C-level, founding team, AI engineering, enterprise sales, regional leadership.
   - Reward should primarily be a commission split based on the actual placement or search success fee, where legally and contractually supported.
   - Candidate consent is mandatory before a full referral is submitted.
   - The first product should optimize for a small number of qualified, consent-confirmed candidate introductions.

2. Later: high-ticket B2B commercial introductions
   - Enterprise SaaS, AI infrastructure, corporate services, cross-border expansion, professional services.
   - Reward can be staged: qualified meeting reward, opportunity reward, closed-won success reward.
   - Buyer consent or clear relationship proof is required.

Avoid as public MVP:

- Securities fundraising, fund placement, token sales, investment products, insurance, lending, and M&A success-fee workflows until legal architecture is reviewed jurisdiction by jurisdiction.
- Consumer affiliate offers.
- Low-ticket lead-gen offers.
- Public self-serve registration. Access should be invite-only and manually approved until the trust model has enough evidence.

## 4. Product Principles

宁缺毋滥.

Every design decision should reduce noise, not increase activity for its own sake.

- No reward without verification.
- No full contact exposure without consent or legitimate business context.
- No unlimited submissions from unproven connectors.
- No public free-for-all opportunity board for sensitive opportunities.
- No public registration in the first MVP.
- No one-sided trust: publishers and connectors both build reputations.
- The system should reward restraint. A connector who submits one excellent introduction is more valuable than one who submits twenty weak leads.

## 5. Core Users

Opportunity Owner

- Company, fund, recruiter, hiring manager, founder, sales leader, or service provider.
- Publishes a qualified opportunity and locks budget or reward terms.
- Reviews intros with AI scoring and human context.

Connector

- Vetted person with real access and judgment.
- Uses the AI Copilot to identify likely matches inside their own network.
- Requests consent and submits only high-confidence introductions.

Introduced Party

- Candidate, buyer, partner, or decision maker.
- Must be protected from spam and unwanted disclosure.
- Can confirm consent, interest, and relationship quality.

Trust Operator

- Internal 724.fund role.
- Reviews suspicious opportunities, disputes, duplicate claims, and payout events.

## 6. MVP User Flows

### 6.1 Publish Opportunity

1. Owner applies to publish.
2. AI converts raw request into a structured opportunity brief:
   - category
   - target profile
   - must-have criteria
   - disqualifiers
   - geography
   - reward terms
   - acceptance standard
   - confidentiality level
3. Trust Operator reviews owner identity and opportunity legitimacy.
4. Owner funds or contractually commits the reward.
5. Opportunity goes live to selected connector tiers.

### 6.2 Connector Onboarding

1. Connector applies with identity, role, geography, domains, and sample networks.
2. System verifies email domain, LinkedIn identity, invite source, and track record.
3. AI interviews the connector briefly:
   - industries they understand
   - roles they can judge
   - regions they know
   - examples of past successful introductions
4. Connector receives an initial trust tier and submission limits.

### 6.3 AI-Assisted Matching

1. Owner or connector describes a senior AI talent need in natural language.
2. AI converts the request into candidate ICP, must-haves, disqualifiers, geography, and trust gates.
3. AI suggests warm connector paths from private relationship context and approved internal data.
4. Connector opens an opportunity.
5. AI explains the target profile in plain language.
6. Connector can upload or paste optional private network context:
   - names only
   - company list
   - CRM export
   - LinkedIn export
   - email snippets
7. AI suggests possible matches with confidence, reason, and risk.
8. AI can generate manual LinkedIn search strings, but it must not scrape, automate messages, or store unauthorized LinkedIn member data.
9. Connector chooses whether to contact the person.
10. AI drafts a consent-first outreach message.

### 6.4 Submit Introduction

1. Connector submits:
   - introduced party
   - relationship proof
   - why this is a fit
   - consent evidence
   - desired next step
2. AI Trust Agent checks:
   - duplicate claims
   - known owner relationship
   - obvious mismatch
   - suspicious behavior
   - contactability and entity normalization
3. Owner receives a clean review packet, not a raw lead dump.
4. Owner accepts, rejects with reason, or requests clarification.

### 6.5 Settlement

1. Qualified intro accepted: recorded for reputation and optional small milestone only if the opportunity owner explicitly supports it.
2. Success event: commission split unlocks after documented hire, start date, paid invoice, or agreed contractual milestone.
3. Disputes enter a documented review flow.
4. Reputation events are written for both owner and connector.

## 7. Anti-Cheating System

The trust model is the product.

Identity Controls

- KYC/KYB for publishers and high-volume connectors.
- Company email or verified professional identity.
- Invite source captured.
- Device/IP anomaly logging.
- Sanctions and fraud screening before payouts as needed.

Opportunity Controls

- Publisher verification.
- No public posting of sensitive opportunities by default.
- Reward budget proof or escrow before exposure to connectors.
- Clear acceptance criteria before launch.
- Opportunity reputation score.

Connector Controls

- Initial submission limits.
- Higher limits only after accepted intros.
- Category-specific trust tiers.
- Rate limits by opportunity, company, and introduced party.
- Cooldown after repeated low-quality submissions.

Introduction Controls

- Consent-first submission for candidates and sensitive buyers.
- Duplicate detection by normalized email, domain, LinkedIn URL, company, name, and relationship graph.
- Time-stamped claim protection window.
- Relationship proof required above reward thresholds.
- Owner cannot see unnecessary contact detail before acceptance.

Payment Controls

- Staged rewards.
- Holdbacks and dispute windows.
- No large payout based only on a claimed contact.
- Success fee tied to documented outcome.
- Publisher non-payment lowers or removes access.

AI Risk Controls

- Submission quality score.
- Mismatch explanation.
- Duplicate and near-duplicate clustering.
- Suspicious connector pattern detection.
- Owner abuse detection: repeated rejection followed by off-platform contact.

## 8. AI-Native Product Surface

The AI is not a chatbot bolted onto a marketplace. It is the operating system.

Opportunity Agent

- Turns messy hiring requests into structured AI search mandates.
- Creates ICP, disqualifiers, acceptance criteria, and screening questions.
- Flags legal and fraud risk.

Connector Copilot

- Helps a connector reason through their own network.
- Suggests who may fit and why.
- Drafts consent-first outreach.
- Warns when a match is weak or socially risky.

Trust Agent

- Scores every opportunity, connector, and introduction.
- Detects duplicate claims and low-signal submissions.
- Produces a review packet for internal operators.

Deal Room Agent

- Summarizes each accepted introduction.
- Tracks next steps, silence, overdue replies, and payout triggers.
- Keeps an audit trail.

Monitoring Agent

- Watches every query, recommendation, submission, rejection, dispute, and payout event.
- Classifies failures by cause: missing data, bad retrieval, bad ranking, missing tool, missing database view, weak skill file, missing eval, bad UX, trust risk, or legal risk.
- Proposes the smallest patch that would prevent the same failure from recurring.
- Creates issues or code/prompt/data-view changes for human or agent review.
- Measures whether the next similar query or workflow improves.

Tom Agent

- Encodes the founder's judgment framework:
  - Is this opportunity real?
  - Is this person actually relevant?
  - Is the timing right?
  - Is the introduction respectful?
  - Is the reward aligned with effort and value?
- Starts as a rules-and-examples assistant, then becomes a scored model after enough outcomes.

## 9. Data Model

Core tables for the real application:

- users
- organizations
- identities
- opportunities
- opportunity_terms
- connector_profiles
- connector_tiers
- introductions
- introduced_parties
- consent_proofs
- relationship_proofs
- review_packets
- reputation_events
- payout_events
- disputes
- audit_logs
- ai_scores

## 10. Week-1 Launch Plan

Day 1: Positioning and public MVP

- Launch static site with trust-first positioning.
- Add two intake forms: publish opportunity, apply as connector.
- Define the first opportunity categories and disallowed categories.

Day 2: Manual trust backend

- Use Airtable/Notion/Supabase for opportunity and connector tracking.
- Create standard review templates.
- Prepare email templates for invite, consent, acceptance, rejection, and payout.

Day 3: AI brief generator

- Build a lightweight internal prompt/tool that converts raw opportunities into structured briefs.
- Produce acceptance criteria and disqualifiers for each opportunity.

Day 4: First supply

- Source 3-5 excellent senior AI search mandates:
  - Head of AI / VP AI
  - Principal or Staff ML Engineer
  - AI Product or Platform leader
  - Cross-border AI founding CTO
- No public low-quality listings.

Day 5: First connector cohort

- Invite 20-30 carefully selected connectors.
- Approve 10-15.
- Assign category-specific limits.

Day 6: First introductions

- Run founder-led, white-glove matching.
- Use AI to draft outreach and review fit.
- Measure accepted intro rate, rejection reasons, and time saved.

Day 7: Controlled launch

- Publicly announce invite-only beta.
- Publish first anonymized outcome dashboard.
- Keep the product scarce: more quality, less volume.
- Start the daily self-improvement loop: every failed query, rejected intro, and manual workaround becomes a patch candidate.

## 11. Team

One-week MVP team: 7 core people plus 2 fractional advisors.

Tom - CEO / Product

- Owns product strategy, prioritization, quality bar, trust system, and launch.
- Talks to the founder daily.
- Makes final product calls.

Ada - CTO / Architect

- Owns technical architecture, data model, security posture, deployment, and integration choices.
- Keeps the MVP simple enough to ship but strong enough to evolve.

Leo - Full-Stack Engineer

- Builds the web app, forms, admin workflows, database, authentication, and email flows.

Nora - AI Engineer

- Builds Opportunity Agent, Connector Copilot, Trust Agent prompts, evals, scoring rubrics, and logs.

Yuki - Product Designer

- Designs landing page, opportunity cards, connector workflow, review packets, and trust states.

Mina - Trust & Operations Lead

- Reviews opportunities and connectors.
- Owns anti-spam rules, dispute playbooks, payout checklist, and quality control.

Victor - Growth / BD Lead

- Sources first 3-5 AI search mandates and first 20-30 connectors.
- Runs founder-led sales and beta onboarding.

Claire - Fractional Legal / Compliance

- Reviews terms, privacy, referral agreements, recruiting rules, financial-services exclusions, and payout language.

Owen - Fractional Finance / Payments

- Sets up payment ops, accounting controls, payout documentation, and KPI reporting.

## 12. Communication Cadence

Founder <> Tom

- Daily 15-minute decision sync.
- One written CEO memo per day:
  - what shipped
  - what was learned
  - what needs founder decision
  - top risk
  - next 24 hours

Team rhythm

- Daily 20-minute standup.
- One shared launch board.
- Every opportunity has one owner.
- Every intro has an audit trail.

Decision rules

- If a decision affects trust, quality, legal risk, or brand, Tom decides with founder input.
- If a decision affects architecture or security, Ada decides with Tom.
- If a decision affects individual payouts or disputes, Mina decides with Tom review.
- If a decision affects legal category boundaries, Claire must review.

## 13. Founder Inputs Needed

To launch in one week, the founder should provide:

- 3-5 real senior AI search mandates or warm leads to hiring owners.
- 20-30 people who could become high-quality connectors.
- Preferred launch geography and languages.
- First AI talent wedge: AI leadership, principal/staff ML engineering, AI product, or cross-border founding CTO.
- Access to domain DNS for `724.fund`.
- Sender email to configure, ideally `tom@724.fund` or `hello@724.fund`.
- Payment preference for the MVP: manual invoice, Stripe, Wise, bank transfer, or escrow provider.
- Legal counsel contact if available.

## 14. Domain and Launch Checklist

Fastest path:

- Do not transfer the domain unless necessary.
- Keep the domain at the current registrar.
- Point DNS to the static host or Vercel/Cloudflare Pages deployment.
- Add `www` and apex domain.
- Set up `hello@724.fund`, `tom@724.fund`, and `trust@724.fund`.
- Add analytics.
- Add privacy policy and terms.
- Add application forms.

Transfer path if needed:

- Unlock the domain at the registrar.
- Confirm it is not within a transfer lock period.
- Get the EPP/Auth code.
- Start transfer to the target registrar.
- Keep old DNS active until the new registrar is ready.
- After transfer, recreate DNS records and email records.

## 15. Three-Year Nasdaq Ambition

Treat Nasdaq as a forcing function for governance and scale, not a promise.

What must be true:

- Large, recurring, high-quality revenue.
- Auditable controls from year one.
- Clear legal posture around every opportunity category.
- Strong marketplace liquidity with low spam.
- Defensible AI data advantage.
- International expansion without compliance shortcuts.
- Board, finance, security, and privacy maturity early.

The path:

- Year 1: prove trusted-intro marketplace economics in one or two categories.
- Year 2: expand categories, automate trust, grow enterprise accounts, build repeatable connector liquidity.
- Year 3: reach public-company-grade controls and either prepare IPO readiness, strategic financing, or acquisition path.

The non-negotiable:

No fake growth. A spammy marketplace can show activity fast, but it destroys the brand before it earns trust.
