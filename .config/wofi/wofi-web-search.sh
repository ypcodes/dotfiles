#!/bin/bash

# Default search engine URL
SEARCH_ENGINE="https://www.google.com/search?q="

# Get the search query from Wofi
QUERY="$@"

# If query is empty, do nothing
if [ -z "$QUERY" ]; then
    exit 0
fi

# Open the search query in the default web browser
xdg-open "${SEARCH_ENGINE}${QUERY}"