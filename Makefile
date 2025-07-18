SHELL := /bin/bash

default: run

run:
	# Development
	npx next dev --turbo

run-prod:
    # Production (after build)
	npx next start

prettier:
	npx prettier --write .

.SILENT:
.PHONY: default run run-prod prettier
