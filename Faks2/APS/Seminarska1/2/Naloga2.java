import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Naloga2 {

    private static int n;
    private static int defaultL; //splosna dolzina stringa, ko ga ne stavimo v druge stacke in arraye

    private static byte [] v1;
    private static int v1L;

    private static byte [] v2;
    private static int v2L;

    private static byte [] s1;
    private static int s1L;

    private static byte [] s2;
    private static int s2L;


    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            n = Integer.parseInt(br.readLine());

            String line = br.readLine();

            initArr(line.length());
            
            for(int i = 0; i < v1.length; i++)
                v1[i] = (byte) (line.charAt(i) - '0');

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
    }

    public static void izpisiVrsto() {
        for(int i = 0; i < v1.length; i++) {
            System.out.println(v1[i] + " ");
        }
    }

    public static void initArr(int length) {
        v1 = new byte [length];
        v2 = new byte [length];
        v1L = length;
        v2L = 0;

        s1 = new byte [length];
        s2 = new byte [length];
        s1L = 0;
        s2L = 0;

        defaultL = length;
    }

    public static void main(String[] args) {
        Counter program = new Counter("Program");
        program.Start();

        Load(args[0]);

        for(int i = 0; i < n; i++) {

        }


        

        program.Print();
    }
}
