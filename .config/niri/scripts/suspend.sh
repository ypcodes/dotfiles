#!/bin/bash
set -euo pipefail

# This script can be called in two ways:
# - without arguments: toggles the swayidle auto-suspend service.
# - with "now": immediately locks the screen and suspends the system.

swaylock_cmd="swaylock --screenshots --key-hl-color FF8941 --indicator --indicator-radius 150 --clock --fade-in 0.2 --effect-vignette 0.7:0.7 --ring-color FFC041 --effect-blur 10x6 -f"
SERVICE_NAME="swayidle.service"

# Check the first argument passed to the script
if [ "$#" -gt 0 ] && [ "$1" = "now" ]; then
    # Called with "now", so lock and suspend immediately
    $swaylock_cmd && systemctl suspend
else
    # Called without arguments, so toggle the service
    if systemctl --user is-active --quiet "$SERVICE_NAME"; then
        systemctl --user stop "$SERVICE_NAME"
        notify-send "Auto Suspend" "Auto Suspend is now disabled"
    else
        systemctl --user start "$SERVICE_NAME"
        notify-send "Auto Suspend" "Auto Suspend is now enabled"
    fi
fi
