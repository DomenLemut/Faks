class QueueElement
{
	Object element;
	QueueElement next;

	QueueElement()
	{
		element = null;
		next = null;
	}
}

class Queue
{
	//QueueElement -> QueueElement -> QueueElement -> ... -> QueueElement
	//     ^                                                       ^
	//     |                                                       |  
	//    front                                                   rear
	//
	// nove elemente dodajamo na konec vrste (kazalec rear)
	// elemente brisemo na zacetku vrste (kazalec front)
	
	private QueueElement front;
	private QueueElement rear;
	
	public Queue()
	{
		makenull();
	}
	
	public void makenull()
	{
		front = null;
		rear = null;
	}
	
	public boolean empty()
	{
		return (front == null);
	}
	
	public Object front()
	{
		// funkcija vrne zacetni element vrste (nanj kaze kazalec front).
		// Elementa NE ODSTRANIMO iz vrste!
		
		return null;
	}
	
	public void enqueue(Object obj)
	{
		// funkcija doda element na konec vrste (nanj kaze kazalec rear)
	}
	
	public void dequeue()
	{
		// funkcija odstrani zacetni element vrste (nanj kaze kazalec front)
	}
}
