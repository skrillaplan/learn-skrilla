---
title: The Banks screen
order: 5
---

# The Banks screen

Connect your accounts once. After that, transactions walk in on their own.

## Connecting a bank

Press **+ Connect a bank**. A secure window from **Plaid** opens — the same
service most finance apps use. Find your bank, sign in with your bank
credentials, choose accounts, done.

Two things worth knowing, plainly:

- **Your bank password never touches SkrillaPlan.** The whole sign-in happens
  inside Plaid. We receive transactions, never credentials.
- The access token Plaid gives us is stored server-side where no browser —
  including yours — can read it.

Connect every account money moves through: checking, savings, credit cards.
The budget can only be honest about accounts it can see. (Bonus: with both
sides connected, credit-card payments are detected as transfers automatically
instead of counting as spending.)

A household can connect up to **five institutions** — generous for a
household, since one connection brings all of that bank's accounts along.

## The list

Each connected bank shows its last sync time. Everything syncs automatically
each morning; **↻ Sync** on the Transactions screen fetches on demand.

## Disconnecting

**Disconnect** unlinks the bank and stops new imports. Transactions already
synced stay in your history — disconnecting never rewrites the past.

## No bank? No problem.

**Import CSV / YNAB** takes you to the Import screen. Manual-first budgeting
is real budgeting. Some people prefer it. The envelopes don't care how the
transactions arrive.
