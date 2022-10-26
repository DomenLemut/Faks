
public class Labirint {

	//
	// Oznake:
	//
	// '#' zid
	// ' ' hodnik
	// 'C' cilj
	// '.' oznaka, da smo trenutno lokacijo vkljucili v pot
	//
	
	// Rekurzivna funkcija, ki poi��e pot skozi labirint
	//
	// - labirint je podan z dvodimenzionalnim poljem "labirint"
	// - "x" in "y" sta trenutni koordinati potnika, ki se premika proti cilju
	//

	public static boolean najdiPot(char[][] labirint, int x, int y) {
		// preveri ali je y-koordinata veljavna
		if (!(x > 0 && x < labirint.length - 1))
			return false;
		
		// preveri ali je x-koordinata veljavna
		if (!(y > 0 && y < labirint[0].length - 1))
			return false;

		if(labirint[x][y] == '#')
			return false;
		
		if(labirint[x][y] == 'C')
			return true;

		int countWalls = 0;
		if(
			labirint[x + 1][y] == '#')
			countWalls++;
		else if(
			labirint[x - 1][y] == '#')
			countWalls++;
		else if(
			labirint[x][y + 1] == '#')
			countWalls++;
		else if(
			labirint[x][y - 1] == '#')
			countWalls++;
		if(countWalls >= 3)
			return false;

		if(labirint[x][y] == '.')
			return false;
				
		labirint[x][y] = '.';
						
		if(najdiPot(labirint, x + 1, y))
			return true;
				
		if(najdiPot(labirint, x - 1, y))
			return true;
				
		if(najdiPot(labirint, x, y + 1))
			return true;
				
		if(najdiPot(labirint, x, y - 1))
			return true;
				
		return false;
	}
	
	public static void izpis(char[][] labirint)
	{
		for (int i = 0; i < labirint.length; i++)
		{
			for (int j = 0;  j < labirint[i].length; j++)
				System.out.print(labirint[i][j]);
			System.out.println();
		}
	}

	public static void main(String[] args) {
		char[][] labirint = {
				{'#','#','#','#','#','#','#','#','#'},
				{'#',' ',' ',' ',' ',' ','#',' ','#'},
				{'#',' ','#','#','#',' ','#',' ','#'},
				{'#',' ','#','#','#',' ','#',' ','#'},
				{'#',' ',' ',' ','#','#','#',' ','#'},
				{'#',' ','#',' ','#',' ',' ',' ','#'},
				{'#',' ','#',' ',' ',' ','#',' ','#'},
				{'#',' ','#','#','#','#','#',' ','#'},
				{'#',' ',' ',' ','#',' ',' ','C','#'},
				{'#','#','#','#','#','#','#','#','#'}};
		
		System.out.println("Izgled labirinta:");
		izpis(labirint);

		
		// poi��imo izhod iz labirinta - izhodi��ni polo�aj je na koordinati (x=5,y=3)
		if (najdiPot(labirint, 1, 1)) {
			System.out.println("\nNajdena pot skozi labirint:");
			izpis(labirint);
		} else
			System.out.println("Ne najdem poti skozi labirint!");

	}
}
