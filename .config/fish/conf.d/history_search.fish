#  history command search
function history-search
    history | sk --tac | read -l cmd
    if test -n "$cmd"
        commandline -r "$cmd"
    end
end
