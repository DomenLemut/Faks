public class Oklepaji {
	
	//funkcija ima na voljo "ukl" uklepajev in "zak" zaklepajev za 
	//nadaljevanje znakovnega zaporedja "izraz".
	//izraz nadaljujemo tako, da stevilo zaklepajev nikoli ne presega stevila oklepajev (gledano z leve proti desni)
	public static void nadaljujIzraz(int ukl, int zak, char[] izraz) {
		
		if(ukl == 0 || zak == 0)
			System.out.println(izraz);

		if(ukl <= zak){
			izraz[findNextFreePlace(izraz, 1)] = '(';
			nadaljujIzraz(ukl - 1, zak, izraz);
		}
		if(ukl > zak){
			
			for(int i = findNextFreePlace(izraz, 2); i < izraz.length; i += 2){
				izraz[i] = ')';
				nadaljujIzraz(ukl, zak - 1, izraz);
				izraz[i] = ' ';
			}
		}


		
		
		// gradnjo izraza nadaljujemo bodisi z '(' bodisi z ')', ce so se na voljo 
	}

	public static int findNextFreePlace(char[] izraz, int div){
		int i = 0;
		while(i < izraz.length){
			i += div;
			if(izraz[i] == '(' || izraz[i] == ')')
				return i;
		}
		return 0;
	}
		
	public static void sestaviIzraz(int N) {
		char[] izraz = new char[2 * N];
		nadaljujIzraz(N, N, izraz);
	}
		
	public static void main(String[] args) {
		sestaviIzraz(3);
		System.out.println();
	}

}
