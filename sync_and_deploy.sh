#!/usr/bin/env bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$(cd "$SCRIPT_DIR/../nicotron.github.io" && pwd)"

cd "$SCRIPT_DIR"

if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source folder not found: $SOURCE_DIR"
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync is required to sync files from nicotron.github.io."
  exit 1
fi

echo "Syncing local changes from $SOURCE_DIR to $SCRIPT_DIR"

rsync -ai \
  --exclude '.git/' \
  --exclude '.vscode/' \
  --exclude '.cursor/' \
  --exclude '.DS_Store' \
  --exclude '.cursorrules' \
  "$SOURCE_DIR"/ \
  .

echo
echo "Local sync complete. Starting deploy."
echo

"$SCRIPT_DIR/deploy_changes.sh"
