# Drafts — not built, not published

Eleventy builds `src/` only; nothing in this folder reaches the site.

These three articles cover the community forum (forum.skrillaplan.com),
which is still in build. Briefs 014–016 (issues #29–31) say: **draft now,
hold for the forum M3 go-live ping.**

To publish when the ping arrives:

1. `git mv drafts/community*.md src/` (keep the permalinks already set in
   frontmatter).
2. Add `order:` to each so they land sensibly in the nav (after the
   guides).
3. Link the community article from getting-started's "where to get help"
   area (per brief 014).
4. Build, verify, deploy, close #29–31 naming the commit.
