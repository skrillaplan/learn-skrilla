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

## Hard constraints

- Zero third-party requests at runtime (no CDN fonts/scripts/analytics).
  After a build, verify: external `href`s to skrillaplan.com are fine
  (navigation), external `src`/`link rel=stylesheet`/fonts are not.
- Dark-first, system fonts only, fast.
- Legal pages (privacy, ToS) live in the app, not here — link, don't copy.
- No screenshots yet (UI still moving; revisit at public launch).
