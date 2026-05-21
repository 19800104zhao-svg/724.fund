# Self-Improving Agent OS

Owner: Tom  
Purpose: Make 724.fund and the team improve every day without waiting for a human to notice every defect.

## 1. Principle

The goal is not to build a smarter search box. The goal is to build a company that observes its own failures, diagnoses the missing capability, proposes a fix, implements it, verifies it, and ships the improvement.

Every workflow should move through this loop:

```text
User intent -> Agent action -> Outcome -> Monitor -> Diagnosis -> Patch -> Review -> Deploy -> Better next attempt
```

If the same user request fails twice for the same reason, the system has failed to learn.

## 2. What We Learned From The YC Pattern

The YC example has three maturity levels:

1. Search Copilot
   - Natural language queries over internal data.
   - Useful, but mainly speeds up existing human lookup.

2. Recommendation Agent
   - Combines RAG, database queries, context, and domain heuristics.
   - Produces higher-value recommendations, not just faster retrieval.

3. Monitoring + Self-Improvement Agent
   - Watches every query and every result.
   - Detects failed or weak outcomes.
   - Diagnoses why the system failed.
   - Decides whether the fix is a deterministic tool, skill file, database view, index, prompt, eval, or UI change.
   - Writes the patch, opens a merge request, gets reviewed by another agent, and deploys.

The third level is the breakthrough. It turns usage into compounding product improvement.

## 3. 724.fund Application

724.fund should apply this to the opportunity network itself.

### User Queries To Capture

- "Who in my network could help this company?"
- "Which connectors should see this opportunity?"
- "Why did this introduction get rejected?"
- "Find five founders who can help a petrochemical startup."
- "Which opportunity should this connector work on today?"
- "Which submitted intro is likely spam?"
- "What should we ask this candidate before revealing the company?"

### Outcomes To Track

- query succeeded
- query failed
- no good result
- result was accepted by human
- result was ignored
- intro was submitted
- intro was accepted
- intro was rejected
- intro converted to meeting
- intro converted to hire or deal
- dispute opened
- payout completed

### Failure Taxonomy

Every failed or weak outcome must be classified:

- Missing data: the relevant people, companies, relationships, or opportunities are not in the system.
- Bad retrieval: the data exists but the agent did not find it.
- Bad ranking: the agent found candidates but ranked the wrong ones.
- Bad reasoning: the agent misunderstood fit, timing, trust, or disqualifiers.
- Missing deterministic tool: the agent needs a real query, scoring function, duplicate detector, or workflow action.
- Missing database view/index: the query is too slow, too brittle, or hard to express.
- Missing skill file: the agent lacks a reusable playbook for a repeated task.
- Missing eval: we cannot know if a change made the answer better.
- Bad UX: the right information exists but is not visible or actionable.
- Trust risk: the action would create spam, privacy leakage, conflict, or payout abuse.
- Legal risk: the request touches recruiting, compensation, financial promotion, M&A, securities, privacy, or labor rules.

## 4. Monitoring Agent

The Monitoring Agent watches all product and team workflows.

Inputs:

- user queries
- agent outputs
- human edits
- accepted/rejected intros
- review notes
- support messages
- payout events
- failed searches
- empty-state events
- conversion funnel events
- code review comments

Outputs:

- daily failure digest
- prioritized improvement proposals
- auto-generated issues
- auto-generated code or prompt patches
- eval updates
- data quality tasks
- risk alerts

The Monitoring Agent should never optimize for more activity. It optimizes for trusted successful outcomes.

## 5. Patch Types

When a failure is detected, the system should choose one of these patch types:

- Tool patch: add a deterministic function, query, API call, validator, or scorer.
- Data patch: add a field, view, index, normalization rule, or enrichment pipeline.
- Skill patch: update a reusable workflow, rubric, prompt, or examples file.
- Product patch: change UI, copy, form fields, review states, or decision surfaces.
- Trust patch: add rate limits, consent checks, duplicate detection, proof requirements, or review gates.
- Eval patch: add a test case or golden dataset for future comparison.
- Ops patch: change the human playbook or escalation policy.

## 6. Agent Team Responsibilities

Tom - CEO/Product

- Owns the failure taxonomy and quality bar.
- Reviews daily learning loops.
- Decides which failures are product-defining versus noise.

Ada - CTO/Architecture

- Owns tool patches, database views, indexes, security, and deployment.
- Ensures self-improvement does not bypass safety controls.

Leo - Full-Stack

- Implements UI, workflows, audit logs, and admin surfaces.
- Converts repeated manual ops into product flows.

Nora - AI Engineer

- Owns prompts, skills, evals, RAG, ranking, and agent traces.
- Turns failures into measurable eval cases.

Yuki - Product Design

- Designs review packets, failure states, trust indicators, and human override points.
- Keeps the interface concise and professional.

Mina - Trust & Operations

- Labels real-world failure modes.
- Owns fraud, spam, consent, disputes, and payout quality.

Victor - Growth/BD

- Feeds back which opportunities, connectors, and messages convert.
- Turns sales calls into playbook updates.

## 7. Daily Operating Loop

Every day before the noon report:

1. Review yesterday's user actions and team work.
2. Identify the top three repeated failures.
3. Classify each failure using the taxonomy.
4. Decide the smallest patch that would prevent recurrence.
5. Assign one patch to an owner.
6. Add or update at least one eval, checklist, skill, data view, or product rule.
7. Report what improved and what still fails.

The daily report must include:

- What failed.
- Why it failed.
- What we changed or will change.
- Which agent/person owns it.
- How we will know if the fix worked.

## 8. Initial MVP Implementation

Before we have a full application backend, we still run the loop manually:

- Store founder notes, opportunity briefs, connector reviews, and intros in structured docs or tables.
- Keep a daily `Failure Log`.
- Convert every repeated failure into an issue or code/doc change.
- Maintain a `Skills` folder later for opportunity review, connector review, intro review, and dispute review.
- Add eval examples as soon as we have ten real opportunities and twenty real connector submissions.

The first real product feature should not be a large marketplace. It should be an internal Operator Console that lets Tom/Mina/Nora review:

- submitted opportunities
- connector applications
- suggested matches
- rejected matches
- failure reasons
- recommended patches

## 9. Safety Rules

Self-improvement cannot mean unsafe autonomy.

- No agent can approve payouts without audit evidence.
- No agent can expose contact details without consent rules.
- No agent can bypass legal/compliance gates.
- No agent can deploy code without tests or review when production data or money is affected.
- No agent can optimize for submissions, clicks, or revenue if trust quality degrades.

The company improves itself only inside trust boundaries.

## 10. North Star

724.fund should become a compounding network:

- every opportunity teaches the system better ICPs
- every connector teaches relationship strength and domain judgment
- every accepted intro improves ranking
- every rejected intro improves disqualifiers
- every dispute improves contract and payout logic
- every failed query creates a patch

That is the path from a marketplace to a self-improving company.
