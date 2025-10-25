source /usr/share/cachyos-fish-config/cachyos-config.fish

# overwrite greeting
# potentially disabling fastfetch
function fish_greeting
    # smth smth
end

# Source modularized config files
for file in ~/.config/fish/conf.d/*.fish
    source $file
end

# Force beam cursor across all modes
set -g fish_cursor_default bar
set -g fish_cursor_insert bar
set -g fish_cursor_visual bar
set -g fish_cursor_replace_one bar
set -g fish_cursor_replace bar

# Reset cursor to bar after commands (e.g., exiting nvim)
function __force_beam_cursor_on_prompt --on-event fish_prompt
    set -g fish_cursor_default bar
end
function config-git
    /usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME $argv
end

export LESSOPEN

export LC_ALL="en_US.utf-8"

#export PATH=$PATH:$HOME/.local/bin
