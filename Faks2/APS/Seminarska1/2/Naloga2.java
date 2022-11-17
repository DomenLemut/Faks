import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Naloga2 {

    private static int n;

    private static byte [] v1;
    private static byte [] v2;

    private static byte [] s1;
    private static int s1Len;

    private static byte [] s2;
    private static int s2Len;


    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            n = Integer.parseInt(br.readLine());

            String line = br.readLine();

            initArr(line.length());
            
            for(int i = 0; i < v1.length; i++) {
                v1[i] = (byte) (line.charAt(i) - '0');
            }

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
        s1 = new byte [length];
        s2 = new byte [length];
        s1Len = length;
        s2Len = length;
    }

    public static void main(String[] args) {
        Counter program = new Counter("Program");
        program.Start();

        Load(args[0]);

        

        program.Print();
    }
}
