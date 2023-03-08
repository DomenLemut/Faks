#!/bin/bash

echo "Bash Version ${BASH_VERSION}"

echo -e

CHECK_MARK="\033[0;32m\xE2\x9C\x94\033[0m"
CROSS_MARK="\033[0;31m\u2718\033[0m"

if [ $# -lt 2 ]; then
  echo "Usage: $0 <argument1> <argument2> ..."
else
  first_arg=$1
  echo "First argument: $first_arg"
  shift
  for arg in "$@"; do
    if [ "$arg" = "$first_arg" ]; then
      echo -e "$arg ${CHECK_MARK}"
    else
      echo -e "$arg ${CROSS_MARK}"
    fi
  done
fi
