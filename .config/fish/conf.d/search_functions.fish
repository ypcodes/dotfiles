# ===== 搜索工具别名和函数 =====

# 快速文件搜索
function ff
    fd --type f --hidden --exclude .git | fzf --preview "bat --color=always --style=numbers {}" | read -l file
    [ -n "$file" ] && echo $file
end

# 快速目录搜索
function fdd
    fd --type d --hidden --exclude .git | fzf --preview "exa --tree {}" | read -l dir
    [ -n "$dir" ] && echo $dir
end

# 内容搜索 + 预览
function rgf
    rg -H --color=always --line-number --no-heading --smart-case '' | fzf --ansi \
        --delimiter : \
        --preview "bat --color=always --highlight-line {2} {1}" \
        --preview-window ~3 | read -l result
    if [ -n "$result" ]
        set -l file (echo $result | cut -d: -f1)
        set -l line (echo $result | cut -d: -f2)
        echo "$file:$line"
    end
end

# 超级搜索 - 同时搜索文件名和内容
function supersearch
    set -l query "$argv"
    if test -z "$query"
        echo "Usage: supersearch <query>"
        return 1
    end

    echo "🔍 搜索: $query"
    echo "--- 文件名匹配 ---"
    fd --type f --hidden --ignore-case "$query" | head -20

    echo -e "\n--- 内容匹配 ---"
    rg --ignore-case --max-count=1 "$query" | cut -d: -f1 | head -20
end

# 最近文件搜索
function recent
    find ~ -type f -mtime -7 2>/null | fzf --preview "bat --color=always {}"
end
# 交互式文件导航
function bro
    set -l result (broot --only-folders --cmd "$argv" | string trim)
    if test -n "$result" -a -d "$result"
        cd "$result"
        echo "📁 进入: $result"
        exa --tree --level=2
    end
end

# Git 仓库搜索
function gitsearch
    set -l repo (find ~ -type d -name ".git" | sed 's/\/.git$//' | fzf --preview "exa --tree --level=2 {}")
    if test -n "$repo"
        cd "$repo"
        echo "📦 Git 仓库: $(basename $repo)"
    end
end

# 按文件类型搜索
function searchbytype
    set -l extensions (fd --type f --extension | cut -d. -f2 | sort -u | fzf --multi)
    if test -n "$extensions"
        for ext in $extensions
            echo "📄 .$ext 文件:"
            fd --extension $ext | head -10
            echo ""
        end
    end
end

# 系统文件搜索 (需要权限)
function syssearch
    sudo fd --type f --hidden "$argv" /etc /usr /opt | fzf --preview "sudo bat --color=always {}"
end
