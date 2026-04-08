#!/usr/bin/env bash
set -euo pipefail

# Documentation drift detection
# Checks that CLAUDE.md references all structural elements

ERRORS=0
ROOT_CLAUDE="../../CLAUDE.md"

echo "Checking documentation sync..."

# Check all routers in root.ts are mentioned in CLAUDE.md
for router in $(grep -oP '(\w+)Router' src/server/api/root.ts | sed 's/Router//'); do
  if ! grep -q "$router" "$ROOT_CLAUDE" 2>/dev/null; then
    echo "ERROR: Router '$router' not found in CLAUDE.md"
    ERRORS=$((ERRORS + 1))
  fi
done

# Check all (app) pages are mentioned
for page in $(ls -d src/app/\(app\)/*/ 2>/dev/null | xargs -I{} basename {}); do
  if ! grep -q "$page" "$ROOT_CLAUDE" 2>/dev/null; then
    echo "ERROR: App page '$page' not found in CLAUDE.md"
    ERRORS=$((ERRORS + 1))
  fi
done

# Check all (marketing) pages are mentioned
for page in $(ls -d src/app/\(marketing\)/*/ 2>/dev/null | xargs -I{} basename {}); do
  if ! grep -q "$page" "$ROOT_CLAUDE" 2>/dev/null; then
    echo "ERROR: Marketing page '$page' not found in CLAUDE.md"
    ERRORS=$((ERRORS + 1))
  fi
done

if [ $ERRORS -gt 0 ]; then
  echo ""
  echo "Found $ERRORS documentation issue(s). Update CLAUDE.md to fix."
  exit 1
else
  echo "All documentation checks passed!"
fi
