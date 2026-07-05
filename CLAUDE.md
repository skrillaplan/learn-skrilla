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
"$7.99/mo"). Read an existing article in `src/screens/` before writing.
Never imply data is held hostage; never document admin-only internal
tooling.

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
