SHELL := /bin/bash

default: run

run:
	# Development
	npx next dev --turbo

build:
	npx run build

run-prod:
    # Production (after build)
	npm next start

prettier:
	npx prettier --write .

.SILENT:
.PHONY: default run run-prod prettier
