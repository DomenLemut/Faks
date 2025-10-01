import javax.lang.model.util.ElementScanner6;

public class Sudoku {

	// Rekurzivna funkcija, ki poisce resitev uganke na naslednji nacin:
	// - ce smo prisli do konca tabele, vrni pozitiven rezultat
	// - ce je vsebina celice polje[i][j] ze podana, 
	//      rekurzivno poisci resitev za naslednjo celico 
	// - sicer
	//      za vse mozne vrednosti celice polje[i][j] preveri, ali je situacija dovoljena
	//         ce je, rekurzivno poisci resitev za naslednjo celico
	//
	//      ce nobena vrednost ni dovoljena, razveljavi vsebino celice polje[i][j] in vrni negativen rezultat
	//
	public static final int IndexOverflow = 9;

    static boolean resi(int i, int j, int [][] polje) {
    //row = i, col = j
        if (i == IndexOverflow - 1 && j == IndexOverflow)
            return true;
 

        if (j == IndexOverflow) {
            i++;
            j = 0;
        }
   
        if (polje[i][j] > 0)
            return resi(i, j + 1, polje);
    
        for (int num = 1; num <= IndexOverflow; num++) {

            if (veljavno(i, j, num, polje)) {

                polje[i][j] = num;
            
                if (resi(i, j + 1, polje))
                    return true;
            }
            polje[i][j] = 0;
        }
        return false;
    }

    

    // Funkcija preveri, ali je dovoljeno postaviti vrednost "val" v polje[i][j]
    static boolean veljavno(int i, int j, int val, int[][] polje) 
    {
    	// preveri j-ti stolpec
        //   ce se vrednost "val" ze nahaja v j-tem stolpcu, potem je situacija neveljavna
        for(int y = 0; y < IndexOverflow; y++) {
            if(polje[i][y] == val)
                return false;
        }
    	// preveri i-to vrstico
        //   ce se vrednost "val" ze nahaja v i-ti vrstici, potem je situacija neveljavna
        for(int x = 0; x < IndexOverflow; x++) {
            if(polje[x][j] == val)
                return false;
        }

    	// preveri ustrezni kvadrat
        //   ce se vrednost "val" ze nahaja v kvadratu, potem je situacija neveljavna
        int xStart = i - i % 3;
        int yStart = j - j % 3;
        for(int x = xStart; x < xStart + 3; x++){
            for(int y = yStart; y < yStart + 3; y++){
                if(polje[x][y] == val)
                    return false;
            }
        }
        
        // vse pogoje smo preverili, situacija je veljavna
        return true;
    }

    static void izpisiPolje(int[][] polje) {
        for (int i = 0; i < 9; i++) {
            if (i % 3 == 0)
                System.out.println(" -----------------------");
            for (int j = 0; j < 9; j++) {
                if (j % 3 == 0) System.out.print("| ");
                if (polje[i][j] == 0)
                	System.out.print(" ");
                else
                    System.out.print(polje[i][j]);

                System.out.print(' ');
            }
            System.out.println("|");
        }
        System.out.println(" -----------------------");
    }

    public static void main(String[] args) {
        int[][] polje = {
        		{0,8,0,0,0,7,0,4,6},
        		{9,0,0,0,3,0,1,0,0},
        		{0,0,0,1,4,0,0,8,5},
        		{0,3,0,0,0,0,0,0,0},
        		{5,0,0,0,7,0,0,0,3},
        		{0,0,0,0,0,0,0,7,0},
        		{7,9,0,0,1,2,0,0,0},
        		{0,0,1,0,6,0,0,0,2},
        		{2,6,0,9,0,0,0,1,0}
        };
        
        izpisiPolje(polje);
        if (resi(0, 0, polje))
            izpisiPolje(polje);
        else
            System.out.println("Ni resitve");
  
    }
}
