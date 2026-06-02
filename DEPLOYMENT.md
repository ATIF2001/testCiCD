# CI/CD Setup

This project deploys the static files in `src/` to Netlify.

## Branch Flow

- Push to `staging` to run tests, build the Docker image, and deploy to the staging Netlify site.
- Push to `main` to run tests, build the Docker image, and deploy to the production Netlify site.
- Pull requests into `staging` or `main` run tests and Docker build only.

## GitHub Secrets

Add these repository secrets in GitHub under `Settings > Secrets and variables > Actions`:

- `NETLIFY_AUTH_TOKEN`

The Netlify site ID is configured directly in the GitHub Actions workflow:

- `836a0ccb-b8bb-46b9-9003-fce0c59b4ba0`

## Useful Commands

```bash
npm test
docker build -t calculator-app:local .
git push origin staging
git push origin main
```

For local Docker testing, start Docker Desktop before running the Docker build command.
