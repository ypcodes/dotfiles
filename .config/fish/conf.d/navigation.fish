# 交互式文件管理器

# xplr 驱动的文件/目录导航器
function xp
    # 1. 依赖检查：确保 xplr 已安装
    if not command -v xplr >/dev/null
        echo "错误: 'xplr' 命令未找到。请先安装 xplr。" >&2
        return 1
    end

    # 2. 从 xplr 获取选择的路径
    # 使用 read 可以更安全地处理各种输出
    xplr | read -l result

    # 3. 卫语句 (Guard Clause)：如果用户未选择任何东西 (按 q 退出)，则直接返回
    if not set -q result; or test -z "$result"
        return 0
    end

    # 4. 检查路径是否存在
    if not test -e "$result"
        echo "⚠️ 路径不存在: $result" >&2
        return 1
    end

    # 5. 判断是目录还是文件，并执行相应操作
    if test -d "$result"
        cd "$result"
        echo "📁 进入: (pwd)"
        # 进入目录后，可以自动执行一个命令以提供上下文，例如 exa, ls, lsd, tree
        # 根据你的喜好和已安装的工具选择一个
        if command -v exa >/dev/null
            exa
        else
            ls
        end
    else
        # 对于文件，使用 xdg-open 在后台打开 (&)，这样不会阻塞终端
        xdg-open "$result" &
        echo "📄 使用默认应用打开: $result"
    end
end

# 设置书签目录（同上）
if not set -q QUICKCD_DIRS
    set -g QUICKCD_DIRS \
        ~/Documents \
        ~/Downloads \
        ~/projects \
        ~/.config
end

# 超级快速目录跳转 (结合书签和全盘搜索)
function quickcd
    # 依赖检查
    if not command -v fzf >/dev/null; echo "错误: fzf 未安装" >&2; return 1; end
    if not command -v fd >/dev/null; echo "错误: fd 未安装" >&2; return 1; end

    # 1. 将书签和 fd 搜索结果合并
    #    - 书签目录用 ⭐ 标记，使其在列表中更显眼
    #    - fd 搜索 $HOME 下的所有目录
    #    - 两者用 ulimit 限制数量防止过大，并用 fzf 合并
    set -l FZF_DEFAULT_OPTS "--preview 'exa --tree --level=2 --icons {}' --height 80% --layout=reverse --border"
    set -l selected (
        begin
            # 输出带标记的书签
            for dir in $QUICKCD_DIRS
                if test -d "$dir"
                    echo "⭐ $dir"
                end
            end
            # 输出 fd 搜索的目录
            fd . --type d --hidden --exclude .git --exclude node_modules ~
        end | fzf
    )

    # 2. 如果有选择，处理并跳转
    if test -n "$selected"
        # 去掉可能存在的 ⭐ 标记
        set -l target (echo "$selected" | sed 's/^⭐ //')
        cd "$target"
        echo "🚀 跳转到: (pwd)"
        if command -v exa >/dev/null; exa; else; ls; end
    end
end
