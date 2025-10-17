#!/bin/bash
# file-sorter.sh: 自动将下载目录中的图片和书籍文件分类

# --- 配置 ---
# 源目录 (用空格分隔多个目录)
SOURCE_DIRS=("/home/peng/Downloads" "/home/peng/.local/share/Zen-Browser_Data/Downloads")
# 目标目录
PICS_DIR="/home/peng/Pictures"
DOCS_DIR="/home/peng/Documents"

# --- 脚本逻辑 ---
for DIR in "${SOURCE_DIRS[@]}"; do
    # 检查源目录是否存在
    if [ -d "$DIR" ]; then
        # 移动图片文件 (jpg, jpeg, png, gif)，不区分大小写
        find "$DIR" -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" \) -exec mv -t "$PICS_DIR" {} +

        # 移动书籍文件 (pdf, epub)，不区分大小写
        find "$DIR" -maxdepth 1 -type f \( -iname "*.pdf" -o -iname "*.epub" \) -exec mv -t "$DOCS_DIR" {} +
    fi
done
