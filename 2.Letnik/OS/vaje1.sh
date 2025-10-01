#!/bin/bash

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 steviljka podnaloge"
    exit 1
fi

# Get the input parameter
number="$1"

case $number in
    1)
        head -n 5 /etc/fstab #Izpiši prvih 5 vrstic datoteke /etc/fstab.
        ;;
    2)
        tail -n 6 /etc/group #Izpiši zadnjih 6 vrstic datoteke /etc/group.
        ;;
    3)
        cut -d: -f7 /etc/passwd #Izpiši 7. stolpec datoteke /etc/passwd.
        ;;
    4)
    	cat /etc/protocols || less #Urejeno po vrsticah izpiši datoteko /etc/protocols.
    	;;
    5)
    	nl /etc/shells #Oštevilčeno izpiši vrstice datoteke /etc/shells.
    	;;
    6)
    	grep "udp" /etc/services #Iz datoteke /etc/services izpiši vrstice, ki vsebujejo niz udp.
    	;;
    7)
    	cat /etc/passwd | wc -l #Preštej št. uporabnikov oz. vrstic datoteke /etc/passwd.
    	;;
    *)
        echo "Invalid choice: $number"
        ;;
esac
