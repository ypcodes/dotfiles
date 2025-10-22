#!/bin/bash

# Get the first active player, or the first player if none are playing
PLAYER=$(playerctl -l 2>/dev/null | head -n 1)

if [ -z "$PLAYER" ]; then
    echo " Not playing"
    exit 0
fi

# Get metadata and status in one go
playerctl --player=$PLAYER metadata --format '{"status": "{{status}}", "artist": "{{artist}}", "title": "{{title}}"}' 2>/dev/null | {
    read -r METADATA
    if [ -z "$METADATA" ]; then
        echo " Not playing"
        exit 0
    fi

    STATUS=$(echo $METADATA | jq -r .status)
    ARTIST=$(echo $METADATA | jq -r .artist)
    TITLE=$(echo $METADATA | jq -r .title)

    # Truncate for display
    TITLE=$(echo "$TITLE" | cut -c1-25)
    ARTIST=$(echo "$ARTIST" | cut -c1-20)

    if [ "$STATUS" = "Playing" ]; then
        echo "▶ $TITLE - $ARTIST"
    elif [ "$STATUS" = "Paused" ]; then
        echo " $TITLE - $ARTIST"
    else
        echo " Not playing"
    fi
}