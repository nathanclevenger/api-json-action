# api-json-action
GitHub Action to Generate api.json file at `.github/workflows/generate.yaml`

```yaml
name: Generate api.json

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - uses: actions/checkout@v3
      - uses: nathanclevenger/api-json-action@v1
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "🚀 api.json Generated Successfully"
```
