#!/bin/bash

# # # # # Argumenti # # # # #

# $1 ... datoteka shadow iz katere dobimo zgoščeno geslo
# $2 ... uporabnik iz shadow datoteke
shadowfile=${1:-/etc/shadow}
user=${2:-$(whoami)}

# $3 ... abeceda (glej še genall.c)
# $4 ... dolžina generiranih gesel
alphabet=${3:-'-all'}
len=${4:-2}


# # # # # Glavni program # # # # #

# kodirano geslo (metoda, sol, zgoščena vrednost)
encpass="$(cat "$shadowfile" | egrep "^$user:" | cut -d: -f2)"

# izpis podatkov
echo "File: $shadowfile"
echo "User: $user"
echo "Encpass: $encpass"

function checkall {
	while read guess; do
		if ./check "$encpass" "$guess"; then
			echo "Password found $guess :)"
			exit 0
		fi
	done
	exit 1
}

# iskanje
if ! ./genall "$alphabet" $len | checkall; then
	# nismo našli gesla
	echo "Password not found :("
	exit 1
fi
