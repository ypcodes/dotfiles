#!/bin/bash
set -euo pipefail

# Define the lock command to avoid repetition
swaylock_cmd="swaylock --screenshots --key-hl-color FF8941 --indicator --indicator-radius 150 --clock --fade-in 0.2 --effect-vignette 0.7:0.7 --ring-color FFC041 --effect-blur 10x6 -f"

# Run swayidle
# This command will be managed by the swayidle.service systemd unit
exec swayidle -w \
  timeout 300 'niri msg action power-off-monitors' \
  timeout 330 "$swaylock_cmd" \
  timeout 600 'systemctl suspend' \
  resume 'niri msg action power-off-monitors' \
  before-sleep "$swaylock_cmd"
