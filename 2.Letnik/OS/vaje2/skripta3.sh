#!/bin/bash
echo "Bash Version ${BASH_VERSION}"

echo -e 

echo "Vnesite podatke v obliki [vpisna_st a b c]"
while read -r vpisna_st a b c; do
  vsota=$((a + b + c))

  echo "$vpisna_st $vsota"
done