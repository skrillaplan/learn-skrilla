---
title: "Troubleshooting & FAQ"
description: "Quick answers when something looks off: sync, pending transactions, weird numbers, receipt matching, and how to report a bug."
---

# Troubleshooting & FAQ

Quick answers, worst first. This page grows as real questions arrive — if
yours isn't here, the 🐛 button at the top of the app sends it straight to
us.

## My numbers look wrong

Run the checklist, in order:

1. **Pending?** Rows marked *pending* haven't settled and don't count in
   totals yet. Give the bank a day.
2. **A transfer in disguise?** A credit-card payment or account transfer
   counting as spending doubles your month. Check the **Special** tab —
   and confirm any **❓ Possible transfer** waiting for you.
   *→ [Transfers and the Special tab](/guides/transfers-special/)*
3. **A split?** A split transaction lives as its parts (tagged ⑂). Make
   sure the parts say what you meant.
4. **Ready to Assign looks crazy?** Tap the big number — it shows its own
   math. If old bank history is the culprit, set your **budget start
   month** in that panel. *→ [details](/screens/budget/)*

## My transactions seem stale

Check the timestamp next to **↻ Sync** on the Transactions screen: green
means synced within the hour, gray means earlier today, red and bold means
not today — press **↻ Sync**. Banks also sync on their own every morning.

If a bank stays red after a manual sync, check its row on the
[Banks screen](/screens/banks/) for its last sync time. Disconnecting and
reconnecting is safe — history already synced always stays.

## Receipt matching keeps asking to reconnect

Expected, for now. During early access Google makes us re-ask for Gmail
permission about weekly; the **reconnect needed** note on the Account page
means it's time, and one click fixes it.

## A purchase didn't get its 🧾 receipt

Matching needs the email's total to equal the card charge to the cent, and
Amazon charges when things *ship* — so matches land a few days late, and
split shipments stay plain. Best effort, not a vow.
*→ [Receipt matching](/guides/receipt-matching/)*

## I imported a file twice

Nothing doubled. Every row gets a fingerprint; duplicates are skipped and
your edits are left alone. Re-importing is always safe.

## Something else is confusing

That's a bug even if it technically works. Hit the **🐛** button at the top
of the app and say what you expected. Confusion reports are how the rough
edges get found — during the alpha, they're half the point.
*→ [Welcome to the alpha](/alpha/)*
