import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.IOException;


public class Naloga1 {
    private static char [][] tabela;
    private static boolean [][] check; 

    private static String [] besede;
    private static String [] resitve;

    private static byte [] xMoves = {0, 1, 1, 1, 0, -1, -1, -1};
    private static byte [] yMoves = {-1, -1, 0, 1, 1, 1, 0, -1};

    public static boolean Load(String in) {
        try (FileReader fr = new FileReader(in)) {
            BufferedReader br = new BufferedReader(fr);
            String [] curr = br.readLine().split(",");
            tabela = new char [Integer.parseInt(curr[0])][Integer.parseInt(curr[1])];

            check = new boolean[tabela.length][tabela[0].length];

            for(int i = 0; i < tabela.length; i++) {
                for(int j = 0; j < tabela[i].length; j++) {
                    tabela[j][i] = (char) br.read();
                    br.skip(1);
                }
                br.skip(1);
            }

            besede = new String[Integer.parseInt(br.readLine())];
            resitve = new String[besede.length];

            for(int i = 0; i < besede.length; i++) {
                besede[i] = br.readLine();
            }
            br.close();
            fr.close();

            return true;
        } catch (IOException e) {
            System.out.println("File not found!!");
            
            return false;
        }
    }

    public static void Store(String out, String output) {
        try{
            BufferedWriter buffer = new BufferedWriter(new FileWriter(out));
            buffer.write(output);
            buffer.close();
        } catch (IOException e) {
            System.out.println("Cannot write to file!");
        }
    }

    public static String checkTabelaString() {
        StringBuilder str = new StringBuilder();

        for(int i = 0; i < check.length; i++) {
            for(int j = 0; j < check[i].length; j++) {
                if(check[j][i])
                    str.append(tabela[j][i] + " ");
                else
                    str.append("- ");
            }
            str.append("\n");
        }

        return str.toString();
    }

    public static String resitveString() {
        StringBuilder str = new StringBuilder();

        for(int i = 0; i < besede.length; i++) {
            str.append(besede[i] + "," + resitve[i] + "\n");
        }

        return str.toString();
    }

    public static void quickSortBesede(int begin, int end) {
        if (begin < end) {
            int partitionIndex = partition(begin, end);

            quickSortBesede(begin, partitionIndex - 1);
            quickSortBesede(partitionIndex + 1, end);
        }
    }

    private static int partition(int begin, int end) {
        int pivot = besede[end].length();
        int i = (begin - 1);
    
        for (int j = begin; j < end; j++) {
            if (besede[j].length() > pivot) {
                i++;
    
                String swapTemp = besede[i];
                besede[i] = besede[j];
                besede[j] = swapTemp;
            }
        }
    
        String swapTemp = besede[i + 1];
        besede[i + 1] = besede[end];
        besede[end] = swapTemp;
    
        return i + 1;
    }

    public static boolean getBesedaNaprej(int beseda, int x, int y, byte smer) {
        int maxXMove = (besede[beseda].length() - 1) * xMoves[smer];
        int maxYMove = (besede[beseda].length() - 1) * yMoves[smer];

        //preglej, ce beseda sploh lahko gre v prostor
        if(x + maxXMove < tabela.length && x + maxXMove >= 0 && y + maxYMove < tabela[0].length && y + maxYMove >= 0) { 

            int index = 0;
            int currX = x;
            int currY = y;

            while(index < besede[beseda].length() && besede[beseda].charAt(index) == tabela[currX][currY] && !check[currX][currY]){
                check[currX][currY] = true;
                currX += xMoves[smer];
                currY += yMoves[smer];
                index++;
            }

            if(index == besede[beseda].length()){
                return true;
            } 
            deleteBeseda(beseda, x, y, smer, index);
        }
        return false;
    }

    public static boolean getBesedaNazaj(int beseda, int x, int y, byte smer) {
        int maxXMove = (besede[beseda].length() - 1) * xMoves[smer];
        int maxYMove = (besede[beseda].length() - 1) * yMoves[smer];

        //preglej, ce beseda sploh lahko gre v prostor
        if(x + maxXMove < tabela.length && x + maxXMove >= 0 && y + maxYMove < tabela.length && y + maxYMove >= 0) {
            int currX = x + maxXMove;
            int currY = y + maxYMove;
            
            int index = 0;

            while(index < besede[beseda].length() && besede[beseda].charAt(index) == tabela[currX][currY] && !check[currX][currY]){
                check[currX][currY] = true;
                currX -= xMoves[smer];
                currY -= yMoves[smer];
                index++;
            }

            if(index == besede[beseda].length()){
                return true;
            } 
            else deleteBeseda(beseda, x + maxXMove, y + maxYMove, (byte) ((smer + 4) % 8), index);
        }
        return false;
    }

    public static void deleteBeseda(int beseda, int x, int y, byte smer, int length) {
        int currX = x;
        int currY = y;

        for(int index = 0; index < length; index++) {
            check[currX][currY] = false;
            currX += xMoves[smer];
            currY += yMoves[smer];
        }
    }


    //rekurzivna solve funkcija
    //pri primeru 7 iz i = 114 prekoci na i = 99
    public static boolean solve(int i) {
        System.out.println(checkTabelaString());
        if(i < tabela.length * tabela[0].length) {
            int x = i % tabela.length;
            int y = i / tabela.length;

            if(check[x][y]) {
                return(solve(i + 1));
            }

            for(int beseda = 0; beseda < besede.length; beseda++) {
                if(resitve[beseda] == null) {
                    for(byte smer = 2; smer < 6; smer++) {
                        if(getBesedaNaprej(beseda, x, y, smer)) {
                            resitve[beseda] = String.format("%d,%d,%d,%d", y, x, 
                            y + yMoves[smer] * (besede[beseda].length() - 1),
                            x + xMoves[smer] * (besede[beseda].length() - 1));

                            if(solve(i + 1))
                                return true;

                            deleteBeseda(beseda, x, y, smer, besede[beseda].length());
                        }
                        if(getBesedaNazaj(beseda, x, y, smer)) {
                            resitve[beseda] = String.format("%d,%d,%d,%d",
                            y + yMoves[smer] * (besede[beseda].length() - 1),
                            x + xMoves[smer] * (besede[beseda].length() - 1), y, x);

                            if(solve(i + 1))
                                return true;
                            
                            deleteBeseda(beseda, x, y, smer, besede[beseda].length());
                        }
                    }
                    resitve[beseda] = null;
                }
            }
            return false;
        }
        return true;
    }

    public static void main(String[] args) {
        //*******************************************************************
        if(Load(args[0])) {
            quickSortBesede(0, besede.length - 1); //sortira besede od najkrajse do najdaljse
            if(solve(0)) {
                Store(args[1], resitveString());
            } else {
                System.out.println("No solution!!");
            }
        }

        //*******************************************************************
    }
}

/*
 * IDEJE:
 * - zacni z daljisimi besedami
 * - ni treba brisat vseh crk vedno, treba je le tiste, ki so v besedi, ki jo iscemo, a je nismo nasli 
 */

 /*DEJSTVA:
  * - vsaj ena beseda se mora zaceti ali koncati na vsakem zaporedno gledanem mestu, ki se ni bilo pregledano
  * - ce tako nimamo resitve moramo pregledati vse ostale resitve na tistem mestu
  */
