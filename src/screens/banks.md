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

Two things worth knowing:

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

## Accounts and balances

**Cash on hand** sits at the top: your checking and savings balances,
added up. Credit cards and loans stay out of that number on purpose — it's
money you have, not net worth.

Under it, each connected bank lists every account it shared: name, last
four digits, and a balance. Checking and savings show what's available;
credit cards show what's **owed**. When a bank reports an available
balance (after holds), you see that; when it doesn't, you see the current
balance, labeled **balance**.

Balances refresh at every sync — on their own each morning, or when you
press **↻ Sync** on the Transactions screen. The page says **as of last
sync** because that's the truth. Each bank shows its last sync time too.

Two things to know:

- **Balances are display-only.** The envelopes run on transactions; a
  balance never changes your budget math. To make the two worlds agree,
  use the bank check in the Budget screen's math panel.
  *→ [the bank check](/screens/budget/)*
- After connecting, give the list a skim. It shows every account the bank
  shared — including the ones you forgot you had.

## Disconnecting

**Disconnect** unlinks the bank and stops new imports. Transactions already
synced stay in your history — disconnecting never rewrites the past.

## No bank? No problem.

**Import CSV / YNAB** takes you to the Import screen. Manual-first budgeting
is real budgeting. Some people prefer it. The envelopes don't care how the
transactions arrive.
