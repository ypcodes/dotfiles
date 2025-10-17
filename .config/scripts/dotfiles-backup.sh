#!/bin/bash
# Script to automatically back up dotfiles

# Git repository details
GIT_DIR="/home/peng/.dotfiles/"
WORK_TREE="/home/peng/"
GIT_CMD="/usr/bin/git --git-dir=$GIT_DIR --work-tree=$WORK_TREE"

# Navigate to a safe directory (optional, but good practice)
cd /home/peng

# Check for changes in the .config directory specifically
# We use `git status --porcelain .config` to limit the scope
if ! $GIT_CMD status --porcelain .config | grep -q .; then
    echo "No changes in .config to commit."
    exit 0
fi

# Add all changes in the .config directory
$GIT_CMD add .config

# Commit the changes
COMMIT_MSG="Automated backup of .config: $(date +'%Y-%m-%d %H:%M:%S')"
$GIT_CMD commit -m "$COMMIT_MSG"

# Push to the remote repository
# Assumes the remote is named 'origin' and branch is 'master' or 'main'
# The script will try 'main' first, then 'master'
if $GIT_CMD show-ref --verify --quiet refs/heads/main; then
    BRANCH=main
else
    BRANCH=master
fi
$GIT_CMD push origin $BRANCH

echo "Dotfiles backup successful."
