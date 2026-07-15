---
title: The Transactions screen
order: 2
---

# The Transactions screen

Every dollar that moved, in one list. Your job here is small and worth doing:
give each transaction a category, and mark it reviewed.

## The window

The screen opens on the **last 30 days** — not the calendar month, so the
first of the month is never empty. The date range shows at the top.
**‹** and **›** page 30 days at a time. **back to recent** returns you to now.

## Sync and freshness

Next to **↻ Sync**, a timestamp tells you how fresh your data is:

- **Green** — synced within the hour. You're looking at reality.
- **Gray** — synced earlier today. Fine.
- **Red and bold** — not synced today. Press **↻ Sync**.

Banks also sync automatically every morning. The button is for the impatient,
which is all of us on payday.

## Tabs: Transactions and Special

- **Transactions** — regular spending and income.
- **Special** — money that isn't really spending: transfers between your own
  accounts, credit-card payments, and your recurring bills. See below.

## The list

Each row: date, name, amount, category, review mark.

- **Red amounts** — money out. **Green** — money in.
- **Category dropdown** — the one decision per row. Pick the envelope this
  spending belongs to. Income goes to **＋ Income**, which feeds Ready to
  Assign. Many transactions arrive pre-categorized; correct the wrong ones.
- **○ / ✓** — the review mark. Categorizing marks a row reviewed
  automatically. The **Unreviewed only** filter shows what still needs you.
  Five minutes with that filter, a few times a week, is the whole habit.
- **pending** — the bank hasn't settled it. Pending rows don't count in
  totals yet.
- **🧾** — this purchase matched an email receipt, so instead of "Amazon" you
  see what you actually bought. Hover for the original merchant and order
  number. (Set up in **Account → Integrations**.)

## Rename, notes, split, and tags

Four small tools, one per button on the row:

- **Rename** — click the name, type, Enter. The bank's cryptic string becomes
  your words. A ↺ appears after renaming; click it to restore the original.
  The original is never lost.
- **📝 Note** — attach a sentence to a transaction. Notes show under the row
  and ride along in CSV exports.
- **✂️ Split** — one purchase, several envelopes. Click ✂️, divide the amount
  into parts, give each a category. Save unlocks only when the parts rebuild
  the original to the cent. The parts appear as their own rows tagged ⑂;
  click the ⑂ to unsplit.
- **🏷️ Tags** — labels that cut *across* categories. A category can carry
  default tags (set them in Categories): every transaction in that category
  wears the tag automatically. You can also tag any transaction by hand. The
  point: your EV charging on the Bozer trip stays budgeted under the trip —
  and still shows up when you ask "what does charging cost me?" Click any
  chip (or use the 🏷 filter) to see everything wearing that tag.

## Search, filters, export

Search matches merchant and description. **Show pending** hides the noise
when you want only settled facts. **⬇ Export CSV** downloads the current
view — and the file re-imports cleanly on the Import screen.

## The Special tab

Paying a credit card looks like $1,200 of spending on one account and
$1,200 of income on another. It's neither — it's your own money changing
pockets.

SkrillaPlan detects these pairs and moves them here, labeled:

- **💳 Credit-card payment** or **🔁 Transfer** — detected and excluded from
  your spending, income, and reports. Wrong? Click **Not a transfer** and it
  goes back to counting.
- **❓ Possible transfer** — the amounts match but the signal is weak. These
  still count until you decide: **Confirm** or **Dismiss**.

Below the transfers, **Recurring bills & subscriptions** lists everything that
charges you on a schedule, with its typical amount. Worth a slow read once a
month. Subscriptions multiply in the dark.
