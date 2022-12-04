import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Naloga2 {

    private static int n; //stevilo permutacij - koraki
    private static int dLength; //splosna dolzina stringa, ko ga ne stavimo v druge stacke in arraye

    private static byte [] coded;
    private static int [] permutations;



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
        Stack s1 = new Stack(dLength);
        Stack s2 = new Stack(dLength);
        Queue v1 = new Queue(dLength);
        Queue v2 = new Queue(dLength);

        for(int i = 0; i < dLength; i++) {
            v1.add(i);
        }

        for(int i = 0; i < dLength; i++) {
            if(i % 2 == 0) {
                v2.add(v1.remove());
            } else {
                s2.add(v1.remove());
            }
        }

        v1.clear();
        s1.clear();

        for(int i = 0; i < dLength; i++) {
            if(i % 2 == 0) {
                s1.add(v2.remove());
            } else {
                s1.add(s2.remove());
            }
        }

        s2.clear();
        v2.clear();

        for(int i = 0; i < dLength; i++) {
            if((i / 3) % 2 == 0) {
                //s2
                s2.add(s1.remove());
            } else {
                //v2
                v2.add(s1.remove());
            }
        }

        for(int i = 0; i < dLength; i++) {
            if(v2.size() != 0) {
                if(i % 2 == 0) {
                    v1.add(s2.remove());
                } else {
                    v1.add(v2.remove());
                }
            } else {
                v1.add(s2.remove());
            }
        }


        permutations = v1.returnArr();
    }


    public static byte [] preslikaj(byte [] t) {
        byte [] nova = new byte [dLength];

        for(int i = 0; i < dLength; i++) {
            nova[i] = t[permutations[i]];
        }

        return nova;
    }

    public static void reversePermutations() {
        int [] nova = new int [dLength];

        for(int i = 0; i < dLength; i++)
            nova[permutations[i]] = i;

        permutations = nova;
    }

    public static void Store(String outRoute, String output) {
        try{
            BufferedWriter buffer = new BufferedWriter(new FileWriter(outRoute));
            buffer.write(output);
            buffer.close();
        } catch (IOException e) {
            System.out.println("Cannot write to file!");
        }
    }

    public static void main(String[] args) {
        //*********************************************************************

        if(Load(args[0])) {
            calculatePermutations();
            reversePermutations();

            byte [] nova = preslikaj(coded);
            for(int step = 1; step < n; step++) {
                nova = preslikaj(nova);
            }

            StringBuilder str = new StringBuilder();

            for(int i = 0; i < dLength; i++) {
                str.append(nova[i]);
            }
            
            Store(args[1], str.toString());
        }

        //*********************************************************************
    }
}
