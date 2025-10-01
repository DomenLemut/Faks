#!/bin/bash

# Ustvari direktorij ~/bin, če ta še ne obstaja
mkdir -p ~/bin

# Skripta bar.sh
cat > ~/bin/bar.sh <<'END'
#!/bin/bash
# Izpiše skupine uporabnika
groups $(whoami)
END

# Skripta per.sh
cat > ~/bin/per.sh <<'END'
#!/bin/bash
# Privzeta vrednost za N
N=42

# Preveri, če je bil podan argument za N
if [[ $# -eq 1 ]]; then
  N=$1
fi

# Izpiše N naključnih števil
for (( i=1; i<=$N; i++ ))
do
  echo $RANDOM
done
END

# Dovoli izvajanje skript
chmod +x ~/bin/bar.sh
chmod +x ~/bin/per.sh

echo "Skripte bar.sh in per.sh sta ustvarjeni v direktoriju ~/bin"
