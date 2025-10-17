# My Fish Shell Configuration

This document outlines the structure and features of this personalized fish shell configuration. The setup is designed to be modular, powerful, and easy to maintain.

## Overview

This configuration enhances the standard fish shell with a variety of powerful command-line tools, custom search functions, convenient aliases, and keybindings. It is organized into a modular structure using the `conf.d` directory, making it easy to manage and extend.

## Features

- **Modular Structure:** Configuration is broken down into logical files within the `~/.config/fish/conf.d/` directory.
- **Powerful Aliases:** Common commands like `ls`, `cat`, `find`, and `grep` are aliased to modern, improved alternatives (`exa`, `bat`, `fd`, `rg`).
- **Advanced Search:** A suite of functions that leverage `fzf`, `ripgrep`, and `fd` for fast interactive searching of files, directories, and command history.
- **Efficient Navigation:** Tools like `broot`, `xplr`, and custom functions for quickly jumping to frequently used or git-managed directories.
- **Custom Keybindings:** Shortcuts for common search operations (file search, history search, etc.).
- **Plugin Management:** Uses the [Fisher](https://github.com/jorgebucaran/fisher) plugin manager.
- **Modern Prompt:** Styled with the [Tide](https://github.com/IlanCosman/tide) prompt.

## File Structure

```
~/.config/fish/
├── config.fish          # Main entry point, sources files from conf.d
├── fish_variables       # Stores universal variables (managed by fish)
├── conf.d/              # Directory for modular configuration files
│   ├── aliases.fish
│   ├── env_vars.fish
│   ├── history_search.fish
│   ├── key_bindings.fish
│   ├── navigation.fish
│   ├── search_functions.fish
│   ├── skim.fish
│   └── tide.fish
└── functions/           # For autoloaded fish functions (currently empty)
```

## Configuration Files (`conf.d`)

- `aliases.fish`: Contains simple command aliases (e.g., `cat` -> `bat`).
- `env_vars.fish`: Sets environment variables, including performance tuning for `fzf`.
- `history_search.fish`: Provides an interactive command history search function.
- `key_bindings.fish`: Defines custom keybindings, like `Ctrl+P` for file search.
- `navigation.fish`: Includes functions for interactive directory navigation and quick jumps.
- `search_functions.fish`: A collection of advanced search utilities.
- `skim.fish`: Integration functions for the `sk` (Skim) fuzzy finder.
- `tide.fish`: Loads and configures the Tide prompt.

## Dependencies

This configuration relies on several external tools to provide its advanced features. Please ensure they are installed on your system:

- `bat` (for `cat`)
- `exa` (for `ls` and `tree`)
- `fd` (for `find`)
- `ripgrep` (`rg`) (for `grep`)
- `fzf` (for fuzzy finding)
- `broot` (for directory navigation)
- `skim` (`sk`) (alternative fuzzy finder)
- `xplr` (TUI file explorer)

## Customization

To customize this configuration:

- **Add an alias:** Open `~/.config/fish/conf.d/aliases.fish` and add a new `alias` line.
- **Add a function:** Create a new `.fish` file in the `~/.config/fish/functions/` directory with the function definition. Fish will autoload it.
- **Add an environment variable:** Open `~/.config/fish/conf.d/env_vars.fish` and use the `set -gx` command.
- **Change keybindings:** Edit `~/.config/fish/conf.d/key_bindings.fish`.

After making changes, simply open a new terminal or run `source ~/.config/fish/config.fish` to apply them.
