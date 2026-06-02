# CI/CD Setup

This project deploys the static files in `src/` to Netlify.

## Branch Flow

- Push to `staging` to run tests, build the Docker image, and deploy to the staging Netlify site.
- Push to `live` to run tests, build the Docker image, and deploy to the production Netlify site.
- Pull requests into `staging` or `live` run tests and Docker build only.

## GitHub Secrets

Add these repository secrets in GitHub under `Settings > Secrets and variables > Actions`:

- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_STAGING_SITE_ID`
- `NETLIFY_LIVE_SITE_ID`

## Useful Commands

```bash
npm test
docker build -t calculator-app:local .
git push origin staging
git push origin live
```

For local Docker testing, start Docker Desktop before running the Docker build command.
