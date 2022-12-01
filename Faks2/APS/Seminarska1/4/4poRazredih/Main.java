import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static int steps; //stevilo korakov
    public static int [][] parameters = new int [5][]; //vsi vhodni parametri
    public static Blagajna [] blagajne; //tabela blagajn, ker jih je koncno mnogo juhejjj :)
    public static Trgovina trgovina;

    public static void fillArray(int i, String [] integersInString) {
        parameters[i] = new int [integersInString.length];
        for(int j = 0; j < parameters[i].length; j++)
            parameters[i][j] = Integer.parseInt(integersInString[j]);
    }



    public static void Load(String input) {
        try (FileReader fr = new FileReader(input)) {
            BufferedReader br = new BufferedReader(fr);

            String integers = br.readLine();
            steps = Integer.parseInt(integers);

            String [] integersInString;

            for(int i = 0; i < 5; i++) {
                integersInString = br.readLine().split(",");

                fillArray(i, integersInString);
            }

            blagajne = new Blagajna [parameters[0].length];
            for(int i = 0; i < parameters[0].length; i++) {
                blagajne[i] = new Blagajna(parameters[0][i]);
            }

        } catch (IOException e) {
            System.out.println("File not found!!");
        }    
        
    }

    public static void main(String [] args) {
        //*********************************************************************
        Load(args[0]);

        for(int time = 0; time < steps; time++) {
            for(Blagajna b: blagajne) {
                b.checkTime();
            }

            trgovina.checkTime();


        }


        //*********************************************************************
    }
}
