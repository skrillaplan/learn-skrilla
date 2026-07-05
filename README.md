# learn-skrilla

User documentation for [SkrillaPlan](https://skrillaplan.com), served at
**[learn.skrillaplan.com](https://learn.skrillaplan.com)**.

## Stack

- [Eleventy](https://www.11ty.dev/) → static HTML in `_site/`
- Firebase Hosting (project `learnskrilla`, custom domain wired)
- **Zero third-party requests at runtime.** No CDN fonts, no external
  scripts, no analytics. Privacy is the product; this site keeps the promise.

## Working on it

```bash
npm install
npm run serve    # local dev at localhost:8080
npm run build    # writes _site/
firebase deploy --only hosting
```

## Structure

- `src/index.md` — landing page
- `src/getting-started.md` — the first-week path
- `src/screens/` — one walkthrough per app screen, in the order a user
  meets things
- `src/guides/` — task-shaped guides that link into the walkthroughs
- `src/_includes/layout.njk` + `src/assets/style.css` — the whole design

## Voice (house rule)

Hemingway meets lifecoach. Short sentences. Plain words. Warm, never
gushing. Second person, present tense, active voice. Use the app's exact
labels in **bold**. Motif: *an old typewriter and a money clip on the same
desk — write plain, count honest.* If a sentence would sound wrong said out
loud to a friend, rewrite it.

## The article-brief pipeline

When a user-facing feature ships in `DEVlimited/budget-tool`, that repo's
session files a GitHub issue here labeled `article-brief` (facts, not
drafts). This repo's session consumes them:

```bash
gh issue list --label article-brief --state open
```

Update the affected articles, deploy, close each issue with a comment
naming the commit. Zero open briefs = documentation is current.
