
public class LinkedList
{
	protected LinkedListElement first;
	protected LinkedListElement last;
	
	LinkedList() {
		makenull();
	}
	
	//Funkcija makenull inicializira seznam
	public void makenull() {
		//drzimo se implementacije iz knjige:
		//po dogovoru je na zacetku glava seznama (header)
		first = new LinkedListElement(null, null);
		last = null;
	}

	//Funkcija addFirst doda nov element na prvo mesto v seznamu (takoj za glavo seznama)
	void addFirst(Object obj) {
		//najprej naredimo nov element
		LinkedListElement element = new LinkedListElement(obj, null);
		
		//ustrezno ga povezemo z glavo seznama
		first = element;
		
		//po potrebi posodobimo kazalca "first" in "last"
	}
	
	//Funkcija addLast doda nov element na konec seznama
	public void addLast(Object obj) {
		//najprej naredimo nov element
		LinkedListElement element = new LinkedListElement(obj, null);
		
		//ce zadnji element obstaja
		if(last != null)
			last.next = element;

		//ce pa ne je ubistvu ta drugi element
		else
			first.next = element;
		
		last = element;
		
	}
	
	//Funkcija write izpise elemente seznama
	public void write() {
		//zacnemo pri elementu za glavo seznama
		//sprehodimo se po elementih do konca seznama
		//in izpisemo vrednost vsakega elementa

		LinkedListElement curr = first;

		while(curr != last || curr.next != null) {
			System.out.print(curr.element + " ");
			curr = curr.next;
		}

		System.out.println();
	}
	
	//Funkcija length() vrne dolzino seznama (pri tem ne uposteva glave seznama)
	int length() {
		LinkedListElement curr = first;
		int count = 1;

		while(curr.next != null){
			curr = curr.next;
			count++;
		}
		return count;
	}
	
	//Funkcija lengthRek() klice rekurzivno funkcijo za izracun dolzine seznama
	int lengthRek() {
		// pomagajte si z dodatno funkcijo int lengthRek(LinkedListElement el), ki izracuna
		// dolzino seznama za opazovanim elementom ter pristeje 1
		
		return lengthRekElement(first, 0);
	}

	int lengthRekElement(LinkedListElement obj, int length){
		if(obj.next != null)
			lengthRekElement(obj.next, length + 1);
		return length;
	}

	
	//Funkcija insertNth vstavi element na n-to mesto v seznamu
	//(prvi element seznama, ki se nahaja takoj za glavo seznama, je na indeksu 0)
	boolean insertNth(Object obj, int n) {

		int count = 1;
		LinkedListElement curr = first;
		
		while(count < n) {
			if(curr == null)
				return false;
			curr = curr.next;
		} 

		LinkedListElement element = new LinkedListElement(obj, curr.next);
		curr.next = element;
				
		return true;
	}
	
	//Funkcija deleteNth izbrise element na n-tem mestu v seznamu
	//(prvi element seznama, ki se nahaja takoj za glavo seznama, je na indeksu 0)
	boolean deleteNth(int n) {

		int count = 0;
		LinkedListElement curr = first;

		while(count < n) {
			if(curr == null)
				return false;
			curr = curr.next;
		}

		if(curr != last)
			curr.next = curr.next.next;
		return true;
	}
	
	//Funkcija reverse obrne vrstni red elementov v seznamu (pri tem ignorira glavo seznama)
	void reverse() {
		//ne pozabimo na posodobitev kazalca "last"!
		
	}
	
	//Funkcija reverseRek klice rekurzivno funkcijo, ki obrne vrstni red elementov v seznamu
	void reverseRek() {
		// pomagajte si z dodatno funkcijo void reverseRek(LinkedListElement el), ki
		// obrne del seznama za opazovanim elementom, nato ta element doda na konec (obrnjenega) seznama
		reverseRekSub(first);
	}

	void reverseRekSub(LinkedListElement node) {
		// pomagajte si z dodatno funkcijo void reverseRek(LinkedListElement el), ki
		// obrne del seznama za opazovanim elementom, nato ta element doda na konec (obrnjenega) seznama
		if(node != last || node.next != null) {
			reverseRekSub(node.next);
			addLast(node);
		} else
			addFirst(node);
	}
	
	//Funkcija removeDuplicates odstrani ponavljajoce se elemente v seznamu
	void removeDuplicates() {
		//ne pozabimo na posodobitev kazalca "last"!
	}
}
