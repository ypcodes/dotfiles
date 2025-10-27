# 搜索快捷键
function fish_user_key_bindings
    # Ctrl+P - 文件搜索
    bind \cp 'ff; commandline -f repaint'

    # Ctrl+R - 历史搜索
    bind \cr 'history-search; commandline -f repaint'

    # Ctrl+G - 内容搜索
    bind \cg 'rgf; commandline -f repaint'

    bind \co 'yazi; commandline -f repaint'
end
