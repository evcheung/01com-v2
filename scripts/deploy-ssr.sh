#!/usr/bin/env bash

set -euo pipefail

pm2_app_name="${1:-${PM2_APP_NAME:-}}"
deploy_branch="${2:-${DEPLOY_BRANCH:-main}}"

if [[ -z "${pm2_app_name}" ]]; then
  echo "Usage: ./scripts/deploy-ssr.sh <pm2-app-name> [branch]" >&2
  exit 1
fi

current_branch="$(git rev-parse --abbrev-ref HEAD)"
if [[ "${current_branch}" != "${deploy_branch}" ]]; then
  git checkout "${deploy_branch}"
fi

git pull --ff-only origin "${deploy_branch}"
npm ci
npm run build
pm2 reload "${pm2_app_name}" --update-env
