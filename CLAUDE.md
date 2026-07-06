# CLAUDE.md — learn-skrilla

This repo is the SkrillaPlan wiki, live at https://learn.skrillaplan.com.
The app lives in `DEVlimited/budget-tool` (its own session files briefs here).

## Start of every session

```bash
gh issue list --label article-brief --state open
```

For each open brief: update the affected articles, build, deploy, commit,
push, close the issue with a comment naming the commit. Briefs are facts,
not drafts — you own the words.

## Voice — non-negotiable

Hemingway meets lifecoach. Short sentences. Plain words. Warm, never
gushing. Second person, present tense, active voice. App labels in
**bold**, exactly as displayed ("**Move money**", "**Special**",
"$9.99/mo"). Read an existing article in `src/screens/` before writing.
Never imply data is held hostage; never document admin-only internal
tooling.

## Audience — beginner-first (Bobby, 2026-07-06)

The PRIMARY reader has **never budgeted before** — no prior tool, no
jargon, no muscle memory. Envelope-101 (`/envelope-budgeting/`) and
`/getting-started/` are the front door; write for someone meeting the whole
idea for the first time. Switcher guides (YNAB, Monarch) still ship but are
bottom-of-funnel — never the top of the site. Monarch users are closer to
beginners than to YNAB users (they're watchers, not budgeters), so that
guide teaches the method, not just data migration. Current price: **$9.99/mo
or $79/yr** (annual = four months free).

## Build & deploy

```bash
npm run build                     # Eleventy → _site/
firebase deploy --only hosting    # project: learnskrilla
```

Commit and push after every meaningful change.

## Visual verification

Headless Chromium works on this machine (system deps installed). For
layout-affecting changes, verify at phone size before deploying: serve
`_site/`, then drive it with `playwright-core` (npm-install it in the
scratchpad) launching the browser from `~/.cache/ms-playwright/
chromium_headless_shell-*/chrome-headless-shell-linux64/chrome-headless-shell`.
Check: no horizontal overflow (scrollWidth == viewport), article h1 near
the top of the first screen, both color schemes. Do not trust screenshots
taken through Windows Chrome (`/mnt/c/...`) — display scaling distorts them.

## Hard constraints

- Zero third-party requests at runtime (no CDN fonts/scripts/analytics).
  After a build, verify: external `href`s to skrillaplan.com are fine
  (navigation), external `src`/`link rel=stylesheet`/fonts are not.
- Dark-first, system fonts only, fast.
- Legal pages (privacy, ToS) live in the app, not here — link, don't copy.
- No screenshots yet (UI still moving; revisit at public launch).
