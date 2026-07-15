---
name: voice
description: "Two-pass editorial polish of every wiki article: an MFA-style voice-and-brevity pass, then a first-time-user clarity pass, each as a written revision list that gets implemented, verified, and shipped. Use when the user says '/voice', 'polish the voice', 'do a voice pass', 'tighten the prose', or after a batch of new articles or briefs has landed and the corpus needs re-leveling. SKIP for: writing a new article (write it, then run /voice), consuming an article-brief (facts first, polish later), or fixing a single typo or wrong fact (just fix it)."
---

# Voice

A recurring editorial workshop for the SkrillaPlan wiki. Two readers take
turns over the whole corpus: a grad student finishing an MFA in American
Literature (voice and brevity), then a technical writer who has never used
SkrillaPlan and has never budgeted (step clarity). Each reader produces a
numbered revision list; each list gets implemented, built, and committed
separately. The run ends with a report written in the site's own voice.

**The voice being polished** (CLAUDE.md owns this; restated for the passes):
Hemingway meets lifecoach. Short sentences. Plain words. Warm, never
gushing. Second person, present tense, active voice. App labels in **bold**,
exactly as displayed. The motif: an old typewriter and a money clip on the
same desk — write plain, count honest.

---

## Phase 1 — Read the corpus

Read every article: `src/*.md`, `src/screens/*.md`, `src/guides/*.md`.
Record the total word count (`wc -w`) — the run should end at or below it.

Skim the two most recent voice commits (`git log --oneline --grep="pass"`)
so this run doesn't relitigate the last one or reintroduce what it cut.

---

## Phase 2 — Pass A: the MFA read (voice + brevity)

Read as a grad student completing an MFA in American Literature. The prose
is already in this register; the job is pitch, not overhaul. Hunt for:

1. **Stacked aphorisms.** One punch per paragraph. Where two or three
   punchlines pile up, keep the best and cut the rest. Endings especially —
   a double close is no close.
2. **Wandering refrains.** A signature line lives on **one** page. A screen
   doc and its deep-dive guide may share facts, never punchlines. Check the
   motif ledger below; add new signature lines to it as they appear.
3. **Adverb tics.** Sweep `plainly`, `actually`, `genuinely`, `quietly`,
   `really`, `just`. Keep only the ones earning their seat. "Plain" belongs
   to the motto, not to adverbs.
4. **Broken jokes and bent metaphors.** A gag that doesn't parse is worse
   than no gag. Fix the logic or cut the line.
5. **Em-dash chains.** Where three clauses hang off dashes, split into
   short sentences.
6. **Flabby openers.** "What we're really giving you is…" → say the thing.

Brevity means cutting whole clauses and sentences, not compressing syntax
into fragments. What stays must still read warm.

**Produce a numbered revision list** and save it to the scratchpad
(`pass-a-mfa-revisions.md`): per file, each item as *what's wrong → old →
new*. List the pages left untouched and say so — restraint is part of the
edit. Then **implement the list**, build (`npm run build`), and commit
Pass A on its own.

### Motif ledger (line → its one home)

Maintained across runs. Before reusing any of these lines on another page,
don't. Vary the thought or cut it.

- "Dollars in, jobs assigned, envelopes honest." → getting-started (close)
- "Moving money isn't failing the plan; moving money is the plan." → envelope-budgeting
- "A budget with no fun in it is a diet, and diets end." → envelope-budgeting
- "Zero isn't broke. Zero is decided." → envelope-budgeting + getting-started
  (deliberate refrain: the koan repeats at the moment of action)
- "The budget you check is the budget that works." → install-on-your-phone
- "Subscriptions multiply in the dark." → transactions (Special tab)
- "Prices creep. This list catches them." → reports
- "Some money movements lie to budgets." → transfers-special
- "We surface; we don't hide your money." → transfers-special
- "Ask about the reason, not the deed." → activity
- "Shared money fails on mystery." → household-sharing
- "a lens, not a ledger" → tags
- "your history stays speakable" → ynab-import
- "Nobody is ever locked out of their own numbers." → what-we-dont-do +
  account/Billing (policy promise; restated where billing anxiety lives)
- "Best effort, not a vow." → receipt-matching + troubleshooting (feature tagline)

---

## Phase 3 — Pass B: the first-timer read (clarity)

Re-read the post-Pass-A corpus as a technical writer who is also a
brand-new SkrillaPlan user who has never budgeted. Every procedure must
answer, in place: **what do I press, where is it, and what happens next?**
Hunt for:

1. **Unperformable verbs.** "Work the filter" isn't an action. "Turn on"
   is.
2. **Missing mechanics at first use.** The click-type-Enter of a step is
   stated once, at the moment the reader first needs it — usually
   getting-started — and linked thereafter.
3. **Jargon before its link.** A term of art (Ready to Assign, Special
   tab, archive) links to its home page the first time each article uses it.
4. **Label drift.** Every app label matches the app exactly, in bold,
   including glyphs (**＋ Income**, **↻ Sync**, **⬇ Export CSV**). Grep for
   near-misses.
5. **Promise-then-correction.** If a "heads up" reverses what a step just
   implied (invites that aren't emailed), fold reality into the step so the
   wrong mental model never forms.
6. **Ambiguous forks.** "Pick either. Pick both." — tell the reader which
   door is theirs before offering both.

The constraint: **add the fewest words that remove the confusion.** No new
paragraphs of explanation; a clause, an icon description, a link.

Some confusion can't be fixed with a clause because the page it needs
doesn't exist — the reader has a real question and no article owns the
answer. Those are **article gaps**, not inline revisions. Record them in a
separate section of the revision list: what the first-timer was trying to
do, where they got stuck, and what an article would cover.

**Produce a numbered revision list** (`pass-b-firsttimer-revisions.md` in
the scratchpad, same format, including a "checked and already clear" list
and the article-gaps section), **implement the inline revisions**, build,
and commit Pass B on its own.

### File the article gaps as issues

For each gap, open a GitHub issue labeled **`content-idea`** — one issue
per article, filed during the run, not after:

1. **Dedupe first.** Search open and closed issues
   (`gh issue list --label content-idea --state all --search "<topic>"`)
   and skim article titles in `src/` — the answer may exist under a name
   the reader wouldn't guess (that's a nav or cross-link fix, not a new
   article).
2. **File it:**
   ```
   gh issue create --label content-idea \
     --title "Article: <working title>" \
     --body  "<the gap, from the reader's side>"
   ```
   The body carries: what the first-timer was doing when the question
   arose, the exact question in their words, which existing pages came
   close and why they weren't enough, and a sketch of what the article
   covers. Suggest where it lives in the nav. Facts only — the words get
   written when the issue is worked.
3. **Don't write the article now.** Content-idea issues are worked when
   the brief queue is clear, like any other. A /voice run levels the
   corpus; it doesn't grow it.

---

## Phase 4 — Verify and ship

1. `npm run build` — clean.
2. **Link check:** every internal `href` in `_site/` resolves to a built
   file.
3. **External-request audit:** no third-party `src`, stylesheet, or font;
   external `href`s to skrillaplan.com are fine.
4. Word count vs Phase 1 — it went down or held. If it grew, Pass B
   overexplained; trim before shipping.
5. Layout untouched by prose edits — the phone-size headless check is only
   needed if any change could affect layout (tables, long unbroken strings,
   new elements).
6. `firebase deploy --only hosting`, then push.

---

## Phase 5 — The report, in voice

Close with a summary **written in the site's own voice** — short sentences,
plain words, warm, second person where it fits. It's an overview for
Bobby's review, not a changelog: what each reader found, the shape of the
cuts, the word count before and after, where the revision lists live, and
the content-idea issues filed (number and title each). One page, no headers
deeper than bold. End on the strongest line the edit produced.

---

## Guard Rails

- **Never change facts.** Prices, limits, feature behavior, and app labels
  are the brief pipeline's territory. If a fact looks wrong, flag it in the
  report; don't edit it.
- **Never invent UI.** No labels, positions, or icons the corpus (or the
  app) doesn't already establish. Standard OS icons (Share square, ⋮ menu)
  are fair game.
- **Never promise unshipped features** — no push notifications, no offline
  editing, no native-app dates, no "PWA."
- **Never imply data is held hostage; never document admin-only tooling.**
- **Word count goes down or holds.** Both passes together must not grow
  the corpus.
- **Two commits minimum** — Pass A and Pass B stay separate, like
  structural and behavioral changes in a tidy-first session. Each commit
  message names its pass.
- **Gaps become issues, not articles.** A /voice run never writes a new
  page. Every missing-article finding is filed as a deduped `content-idea`
  issue and left for its own session.
- **Restraint is an edit.** A page already at pitch gets listed as
  untouched, not re-seasoned. If a run finds fewer than five real revisions
  total, say the corpus is holding and stop — don't manufacture edits to
  justify the run.
