---
title: "Receipt matching: what did I actually buy?"
order: 20
---

# Receipt matching: what did I actually buy?

Your bank says "Amazon — $97.75." That's not information. That's a shrug.

Receipt matching reads your Amazon order-confirmation emails and pairs them to
your card charges by amount. The row stops saying "Amazon" and starts saying
**"Klein Tools RT250KIT…"** with a 🧾. Hover the 🧾 for the original merchant
and order number. Nothing about your budget math changes — only what you can
see.

## Turning it on

1. **Account → Integrations** — flip **Gmail receipt matching** on. One
   switch for the whole household, off by default.
2. Click **Connect my Gmail** and approve Google's permission screen. Each
   member connects their own
   mailbox; connect the one where your Amazon confirmations actually land.

About privacy: we search for **Amazon order confirmations only** —
one specific sender, order subjects — and read nothing else. No promotions, no
personal mail. Disconnect any time and the access is revoked with it.

## What to expect

- **Matches take a few days.** Amazon charges your card when the box *ships*,
  not when you click Buy. The receipt arrives immediately; the charge follows.
  The 🧾 appears once both exist. Patience — the system checks daily.
- **Exact amounts only.** The email's Grand Total must equal the charge to the
  cent. If Amazon splits an order into two shipments, the charges won't equal
  the order total, and those stay plain. Matching is a best effort, not a vow.
- **History stays plain.** We look back about two months on first connect.
  Older charges keep their shrug.
- **Early access:** Google makes us re-ask for permission about weekly. When
  you see **reconnect needed** on the Account page, one click fixes it.

## No Gmail? Make one. It takes five minutes.

The trick: a free Gmail account that does nothing but hold your receipts.

1. Create a Gmail — something like `yourname.receipts@gmail.com`.
2. Point your Amazon mail at it. Two ways, pick one:
   - **Cleanest:** in your Amazon account settings, change your login/contact
     email to the new Gmail. Every future confirmation lands there directly.
   - **Or forward automatically:** in your regular mail provider (Outlook,
     iCloud, Yahoo…), set up an *automatic forwarding rule* for mail from
     `amazon.com` to the new Gmail. Use the provider's forwarding **settings**,
     not the Forward button — automatic forwarding keeps Amazon listed as the
     sender, which the matching needs. Manually forwarded mail won't match.
3. Connect that Gmail on the Account page.

You end up with a dedicated, searchable filing cabinet of every order you
place — and a budget that speaks in things instead of merchants.
