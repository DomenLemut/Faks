#!/bin/bash

echo "Bash Version ${BASH_VERSION}"

echo "Iskanje $1 Fibbonaccijevega stevila:"

function fak_fail {
    if (( $1 <= 1 )); then
    echo 1
    else
    local tmp=$(fak_fail
    $(( $1 – 1 )) )
    echo $(( $1 * $tmp ))
    fi
    return 0
}