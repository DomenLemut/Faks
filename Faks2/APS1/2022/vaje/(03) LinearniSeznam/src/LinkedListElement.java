
public class LinkedListElement {
	Object element;
	LinkedListElement next;
	

	//Konstruktor za prvi objekt
	LinkedListElement(Object obj) {
		element = obj; //Povezava na objekt, na katerega kaze linkedlist element
		next = null; //pointer na naslednji objekt
	}
	
	//Konstruktor za objekt z naslednjim elementom;
	LinkedListElement(Object obj, LinkedListElement nxt) {
		element = obj; 
		next = nxt;
	}
}
