#!/bin/bash

# Load NVM and run prettier
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Function to run all checks
run_all_checks() {
  echo "🔍 Running all code quality checks..."
  
  echo "📝 Checking Prettier formatting..."
  prettier --check .
  PRETTIER_EXIT=$?
  
  echo "🔧 Running ESLint..."
  npm run lint
  ESLINT_EXIT=$?
  
  echo "📋 Running TypeScript type checking..."
  npm run typecheck
  TYPESCRIPT_EXIT=$?
  
  # Return error if any check failed
  if [ $PRETTIER_EXIT -ne 0 ] || [ $ESLINT_EXIT -ne 0 ] || [ $TYPESCRIPT_EXIT -ne 0 ]; then
    echo "❌ Some checks failed. Please fix the issues above."
    exit 1
  else
    echo "✅ All checks passed!"
  fi
}

# Function to fix formatting
fix_formatting() {
  echo "🎨 Fixing code formatting..."
  prettier --write .
  echo "✅ Formatting complete!"
}

# Main script logic
case "${1:-help}" in
  "check"|"--check")
    prettier --check .
    ;;
  "fix"|"--fix"|"write"|"--write")
    fix_formatting
    ;;
  "lint"|"--lint")
    npm run lint
    ;;
  "typecheck"|"--typecheck")
    npm run typecheck
    ;;
  "all"|"--all")
    run_all_checks
    ;;
  "fix-all"|"--fix-all")
    fix_formatting
    echo "🔧 Running ESLint..."
    npm run lint
    echo "📋 Running TypeScript type checking..."
    npm run typecheck
    ;;
  "help"|"--help"|*)
    echo "Usage: ./format.sh [command]"
    echo ""
    echo "Commands:"
    echo "  check, --check        Check Prettier formatting"
    echo "  fix, --fix           Fix Prettier formatting"
    echo "  lint, --lint         Run ESLint"
    echo "  typecheck, --typecheck Run TypeScript type checking"
    echo "  all, --all           Run all checks (formatting, linting, type checking)"
    echo "  fix-all, --fix-all   Fix formatting and run all checks"
    echo "  help, --help         Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./format.sh check     # Check formatting"
    echo "  ./format.sh fix       # Fix formatting"
    echo "  ./format.sh all       # Run all checks"
    ;;
esac 