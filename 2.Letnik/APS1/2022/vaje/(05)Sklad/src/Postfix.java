
public class Postfix 
{

	public static void main(String[] args) 
	{
		
		Stack stack = new Stack();
		
		String[] izraz = {"2","3","2","*","1","+","+","4","-"};
		
		try
		{
			for (int i = 0; i < izraz.length; i++)
			{
				String token = izraz[i];
				Double arg1;
				Double arg2;
				
				if (token.compareTo("+") == 0)
				{
					// trenutni znak je operator '+'
					
					// s sklada vzemi nazadnje dodana argumenta 
					// (POZOR! Upostevajte vrstni red dobljenih argumentov!)
					
					// na sklad dodaj rezultat operacije
				}
				else
				if (token.compareTo("-") == 0)	
				{
					// trenutni znak je operator '-'
					
					// s sklada vzemi nazadnje dodana argumenta 
					// (POZOR! Upostevajte vrstni red dobljenih argumentov!)
					
					// na sklad dodaj rezultat operacije
				}
				else
				if (token.compareTo("*") == 0)
				{
					// trenutni znak je operator '*'
					
					// s sklada vzemi nazadnje dodana argumenta 
					// (POZOR! Upostevajte vrstni red dobljenih argumentov!)
					
					// na sklad dodaj rezultat operacije
				}
				else
				if (token.compareTo("/") == 0)
				{
					// trenutni znak je operator '/'
					
					// s sklada vzemi nazadnje dodana argumenta 
					// (POZOR! Upostevajte vrstni red dobljenih argumentov!)
					
					// na sklad dodaj rezultat operacije
				}
				else
				{
					// opazovani element je argument
					// dodaj ga na sklad	
				}
			}
			
			System.out.print("Vrednost postfix izraza ");
			for (int i = 0; i < izraz.length; i++)
				System.out.print(izraz[i]+" ");
			System.out.println(" je ...");
			
			// Izracunana vrednost postfix izraza se nahaja na vrhu sklada.
			// Preberite jo in izpisite.
		}
		catch (Exception ex)
		{
			System.out.println("Izraz je v nepravilni obliki");
		}
	}
}
