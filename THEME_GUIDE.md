# THEME_GUIDE

## Current themes
- t1 Trust Tech
- t2 Growth Nature
- t3 Bold Action
- t4 Premium Creator
- t5 Calm Future
- t6 Minimal Mono

## Add a new theme
1. Add one item in `themes[]` (index.html)
2. Provide: `id`, `name`, `title`, `sub`, `cta`, `palette`, `tone`
3. Add CSS gradient class `.<id>`

## Publish
```bash
git add .
git commit -m "feat: add theme x"
git push
```
GitHub Pages updates automatically.
