
public class GlavniProgram 
{
	public static void main(String[] args)
	{
		LinkedList list = new LinkedList();
		
		list.addFirst(10);
		list.addLast(20);
		list.write();
		
		System.out.println("Obracam seznam (iterativno)");
		list.reverse();
		list.write();
		
		
		list.insertNth(100, 0);
		list.insertNth(200, 3);
		list.addLast(300);
		list.write();
		System.out.println("Dolzina seznama je (iterativno): " + list.length());
		System.out.println("Dolzina seznama je (rekurzivno): " + list.lengthRek());
		
		System.out.println("Obracam seznam (rekurzivno)");
		list.reverseRek();
		list.write();
		
		list.deleteNth(0);
		list.write();
		
		list.deleteNth(3);
		list.deleteNth(2);
		list.write();
		
		System.out.println("Dolzina seznama je: " + list.length());
		
		list.addLast(10);
		list.addLast(20);
		list.addLast(10);
		list.addLast(10);
		list.addLast(20);
		list.addLast(20);
		list.write();
		
		System.out.println("Brisem duplikate");
		list.removeDuplicates();
		list.write();
	}
}
