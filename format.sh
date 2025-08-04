#!/bin/bash

# Load NVM and run prettier
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Run prettier with the provided arguments
prettier "$@" 