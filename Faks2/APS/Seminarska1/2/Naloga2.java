import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;

public class Naloga2 {

    private static int n;
    private static int dLength; //splosna dolzina stringa, ko ga ne stavimo v druge stacke in arraye
    private static int cyclesRepeat;

    private static byte [] coded;
    private static int [] permutations = {0, 3, 7, 4, 2, 5, 6};



    public static boolean Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            n = Integer.parseInt(br.readLine());

            String line = br.readLine();

            dLength = line.length();

            coded = new byte [dLength];
            
            for(int i = 0; i < coded.length; i++){
                coded[i] = (byte) (line.charAt(i) - '0');
            }

            return true;
        } catch (IOException e) {
            System.out.println("File not found!!");
            return false;
        }    
    }

    public static void calculatePermutations() {
        int [] v1 = new int[dLength];
        int [] v2 = new int[dLength];
        int [] v3 = new int[dLength];
        int v2len = 0;
        int v3len = 0;


        for(int i = 0; i < dLength; i++) {
            v1[i] = i;
        }

        //obrni sode
        //--------------------------------
        for(int i = 1; i < dLength; i += 2) {
            v3[v3len] = v1[i];
            v3len++;
        }
        v3len--;

        for(int i = 1; i < dLength; i += 2){
            v1[i] = v3[v3len];
            v3len--;
        }

        v3len = 0;
        v2len = 0;
        //--------------------------------------------


        //drugi del
        //--------------------------------------------
        for(int i = dLength - 1; i >= 0; i--) {
            if((i / 3) % 2 == 1) {
                //vrsta je v3
                v3[v3len] = v1[i];
                v3len++;
            } else if((i / 3) % 2 == 0) {
                //sklad je v2
                v2[v2len] = v1[i];
                v2len++;
            }
        }

        System.out.println(Arrays.toString(v1));
        System.out.println(Arrays.toString(v2));
        System.out.println(Arrays.toString(v3));

        v2len--;
        v3len = 0;
        for(int i = 0; i < dLength; i++) {
            //iz vrste jemnljemo vsakic drugic in ko v skladu ni nic vec
            if(i % 2 == 1 || v2len < 0) {
                v1[i] = v3[v3len];
                v3len++;
            } else {
                v1[i] = v2[v2len];
                v2len--;
            }
        }

        
        //--------------------------------------------
        System.out.println(Arrays.toString(v1));
        //--------------------------------------------
        permutations = v1;
    }


    public static byte [] preslikaj(byte [] t) {
        byte [] nova = new byte [dLength];

        for(int i = 0; i < dLength; i++) {
            nova[i] = coded[permutations[i]];
        }

        return nova;
    }

    public static void reversePermutations() {
        int [] nova = new int [dLength];
        for(int i = 0; i < dLength; i++) {
            nova[permutations[i]] = i;
        }
        nova = permutations;
    } 

    public static void findCycles() {
        boolean [] check = new boolean [permutations.length];

        int multipier = 1;
        int curr;
        int length;

        for(int start = 0; start < permutations.length - 1; start++) {
            if(!check[start]) {
                check[start] = true;
                curr = permutations[start];
                

                length = 1;
                while(curr != start) {
                    check[curr] = true;
                    length++;

                    curr = permutations[curr];
                }


                multipier = lcm(multipier, length);
            }
        }
        cyclesRepeat = multipier;
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

        if(Load(args[0])) {
            
            //calculatePermutations();
            //reversePermutations();
            findCycles();

            System.out.println(cyclesRepeat);

            // byte [] nova = preslikaj(coded);
            // for(int step = 1; step < n % cyclesRepeat; step++) {
            //     nova = preslikaj(nova);
            // }   

        }


        //preslikaj n-krat => naredi n permutacij
        
        //*********************************************************************
        program.Print();
    }
}
