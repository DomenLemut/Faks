
			 ____  _  __   ____ _           _   
			|  _ \| |/ /  / ___| |__   __ _| |_ 
			| |_) | ' /  | |   | '_ \ / _` | __|
			|  _ <| . \  | |___| | | | (_| | |_ 
			|_| \_\_|\_\  \____|_| |_|\__,_|\__|
						                        
				    Domača naloga za RK

				  Avtor:        Domen Lemut
				  Vpisna št:    63210185
				  Verzija:      4.0
				  Datum oddaje: 8.5.2022





1)
	V "chatClient" in "chatServer" nastavite PORT in IP v chatClient pod 
	'sock.connect()' (line 198) tako, da bodo na vseh enaki, default so 
	nastavljeni PORT na 1234 in IP na "localhost"

2)
	v user.json pod ključ username napišite izbran username in druge parametre.
	Tej se bodo naknadno brali iz te datoteke. 
	
	!POZOR: če hočemo več clientov gnati z istega računalnika, a z razlicnim
	username - om, je nujno, da se programa in user.json datoteki ne nahajata v
	istem direktoriju, oz če se že, sta ustavrjeni dve .json datoteki z različnim
	imenom, izmed katerih vsako zase bere svoj chatClient.py program. 

3)
	Navodila lahko vidite tudi z ukazom !help, ki vam prikaže vse možne podukaze.
	
	!help --manual nam izpise osnovna navodila za uporabo.

4)
	V osnovi je program zasnovan tako, da ima dva "moda", to sta 'private' in 
	'public' mode. Med njimi preklapljamo s 
	
	!user {uporabnisko ime clienta, ki mu hočemo pošiljati}
	 in 
	!public 
	
	,ki nas spet preklopi v public nacin. 
	
	
5)   
	sporočila pošiljamo tako, da jih enostavno natipkamo in stisnemo Enter, kar
	jih pošlje na server.