#!/usr/bin/env sh
# focus-mode-toggle.sh
# Toggle a simple focus mode:
# - stop/hide waybar (or toggle visibility)
# - enable/disable mako "do not disturb" via simple mechanism
# - switch to workspace 3 (Write)
# - optionally lower brightness

WAYBAR_CMD="pkill -USR1 waybar" # 仅示例：根据你的 waybar 支持改用 systemctl --user stop/start 或脚本
MUTE_NOTIF_FILE="$HOME/.config/niri/focus_mode_enabled"

if [ -f "$MUTE_NOTIF_FILE" ]; then
    # disable focus mode
    rm "$MUTE_NOTIF_FILE"
    # restart waybar
    pkill -x waybar || true
    waybar &
    disown
    # TODO: re-enable notifications (mako doesn't have toggle by default)
    notify-send "Focus mode disabled"
else
    # enable focus mode
    touch "$MUTE_NOTIF_FILE"
    # stop waybar (or hide)
    pkill -x waybar || true
    # lower brightness a little
    brightnessctl set 85% || true
    # switch to workspace 3 (Write) - using niri/swaymsg compatible command if available
    # attempt to use niri IPC if you have it; fallback: nothing
    notify-send "Focus mode enabled — Good writing!"
fi
