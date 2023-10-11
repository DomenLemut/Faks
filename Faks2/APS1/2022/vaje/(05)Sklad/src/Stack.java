class StackElement
{
	Object element;
	StackElement next;

	StackElement()
	{
		element = null;
		next = null;
	}
}

class Stack
{
	//StackElement -> StackElement -> StackElement -> ... -> StackElement
	//     ^
	//     |
	//    top                                                   
	//
	// elemente vedno dodajamo in brisemo na zacetku seznama (kazalec top)
	
	
	private StackElement top;
	
	public Stack()
	{
		makenull();
	}
	
	public void makenull()
	{
		top = null;
	}
	
	public boolean empty()
	{
		return (top == null);
	}
	
	public Object top()
	{
		// Funkcija vrne vrhnji element sklada (nanj kaze kazalec top).
		// Elementa NE ODSTRANIMO z vrha sklada!
		
		return null;
	}
	
	public void push(Object obj)
	{
		// Funkcija vstavi nov element na vrh sklada (oznacuje ga kazalec top)
	}
	
	public void pop()
	{
		// Funkcija odstrani element z vrha sklada (oznacuje ga kazalec top)
	}
}
