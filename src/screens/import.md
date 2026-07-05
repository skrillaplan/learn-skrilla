---
title: The Import screen
order: 6
---

# The Import screen

Your history didn't start today. Bring it with you.

Drop a file on this screen — or click to choose one. Three kinds work:

## Coming from YNAB

Export your data from YNAB (Account → Export Data) and drop the **.zip here —
unopened**. SkrillaPlan unpacks it, reads the register, and reads your budget
file too:

- **Transactions** import with dates, payees, amounts, and cleared status.
- **Categories you don't have yet are created for you** — a toggle shows
  exactly which ones before you commit. Your category names carry over; your
  history stays speakable.
- **Budget assignments** import month by month, so past months in SkrillaPlan
  look the way they looked in YNAB.

Years of budgeting survive the move. That history is worth more than the app
it came from.

## A bank CSV

Most banks export CSV. Drop it in. If the columns aren't obvious, a mapping
step appears: point at the date column, the amount column (or separate
outflow/inflow columns), the description. Preview shows exactly what will
import. Nothing lands until you commit.

## A SkrillaPlan export

The CSV from **Transactions → ⬇ Export CSV** re-imports cleanly. Round trips
are honest trips.

## Duplicates

Import twice and nothing doubles. Each row gets a fingerprint from its
content; a row that already exists is skipped, and any category or edits
you've made are left alone. Re-importing is always safe.
