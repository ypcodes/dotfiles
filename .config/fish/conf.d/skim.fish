# Skim 集成
function ski
    sk --ansi --preview "bat --color=always {}" --bind '?:toggle-preview'
end

function skr
    rg --color=always --line-number '' | sk --ansi \
        --delimiter : 
        --preview "bat --color=always --highlight-line {2} {1}" 
        --preview-window ~3
end
