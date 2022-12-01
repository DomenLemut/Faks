import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga2_1 {

    private static int n;
    private static int dLength; //splosna dolzina stringa, ko ga ne stavimo v druge stacke in arraye
    private static int cyclesRepeat;

    private static byte [] coded;
    private static int [] permutations;

    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            n = Integer.parseInt(br.readLine());

            String line = br.readLine();

            dLength = line.length();

            coded = new byte [dLength];
            
            for(int i = 0; i < coded.length; i++){
                coded[i] = (byte) (line.charAt(i) - '0');
            }

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
    }

    public static void calculatePermutations() {
        int vrsta1[] = new int[dLength];
        int sklad1[] = new int[dLength];
        int sklad2[] = new int[dLength];
        int vrsta2[] = new int[dLength];
        int v1 = 0;
        int v2 = 0;
        int s1 = 0;
        int s2 = 0;


        //korak 1 in 2
        //****************************************************************
        for (int i = 0; i < dLength; i++) {
            vrsta1[i] = i;
        }

        for(int i = 1; i < dLength; i += 2) {
            vrsta2[v2] = vrsta1[i];
            v2++;
        }
        v2--;

        for(int i = 1; i < dLength; i += 2){
            vrsta1[i] = vrsta2[v2];
            v2--;
        }

        v2 = 0;
        s2 = 0;
        s1 = 0;

        //**************************************************************** 
        
        // korak 3
        //**************************************************************** 
        int ctr = 0;
        boolean zamenjaj = false;
        for (int i = 0; i < vrsta1.length; i++) {
            if (!zamenjaj) {
                sklad2[s2] = sklad1[s1];
                s1++;
                s2++;
                ctr++;
            } else {
                vrsta2[v2] = sklad1[s1];
                s1++;
                v2++;
                ctr++;
            }
            
            if (ctr == 3) {
                ctr = 0;
                zamenjaj = !zamenjaj;
            }
        }

        s2 = 0;
        v2--;
        v1 = 0;

        //**************************************************************** 
        
        //korak 4
        //****************************************************************
        boolean drug = true;
        for (int i = 0; i < vrsta1.length; i++) {
            
            if (drug) {
                vrsta1[v1] = sklad2[s2];
                s2++;
                v1++;
                drug = false;
            } else if (v2 >= 0) {
                vrsta1[v1] = vrsta2[v2];
                v2--;
                v1++;
                drug = true;
            }

            if (v2 < 0)
                drug = true;
        }
        //****************************************************************
        permutations = vrsta1;
    }

    public static byte [] preslikaj(byte [] t) {
        byte [] nova = new byte [dLength];

        for(int i = 0; i < dLength; i++) {
            nova[i] = coded[permutations[i]];
        }

        return nova;
    }

    public static void reversePermutations() {

    } 

    public static void findCycles() {
        boolean [] check = new boolean [dLength];

        int veckratnik = 1;

        int currCycle = 0;
        int index = 0;

        for(int i = 0; i < dLength; i++) {
            if(!check[i]){
                index = i;
                while(!check[index]) {
                    currCycle++;
                    index = permutations[index] - 1;
                    check[index] = true;
                }
                veckratnik = lcm(veckratnik, currCycle);
                currCycle = 0;
            }
        }
    }

    public static void izpisi(String out, byte [] t) {
        try{
            BufferedWriter buffer = new BufferedWriter(new FileWriter(out));
            for(int i = 0; i < t.length; i++) {
                buffer.write((char) (t[i] + '0'));
            }
            buffer.close();
        } catch (IOException e) {
            System.out.println("Cannot write to file!");
        }
    }

    public static int lcm(int n1, int n2) {
        int gcd = 1;
        for(int i = 1; i <= n1 && i <= n2; ++i) {
            if(n1 % i == 0 && n2 % i == 0)
              gcd = i;
          }
      
          return (n1 * n2) / gcd;
    }

    public static void main(String[] args) {
        Counter program = new Counter("Program");
        program.Start();
        //*********************************************************************

        //Load(args[0]);

        dLength = 10;
        calculatePermutations();

        for(int i = 0; i < dLength; i++) {
            System.out.print(permutations[i] + " ");
        }


        // for(int i = 0; i < n; i++) {
        //     coded = preslikaj(coded);
        // }


        // for(int i = 0; i < permutations.length; i++) {
        //     System.out.print(coded[i]);
        // }

        //preslikaj n-krat => naredi n permutacij
        
        //*********************************************************************
        program.Print();
    }
}
